import { test, expect } from '@playwright/test';

test.describe('Card Game Picker PWA', () => {
  test.beforeEach(async ({ page }) => {
    // Fail the test immediately if there is a JS error (like a SyntaxError)
    page.on('pageerror', exception => {
      expect(exception).toBeNull();
    });
    
    // Go to the locally hosted app
    await page.goto('/');
    // Clear localStorage to ensure fresh state for favorites
    await page.evaluate(() => localStorage.clear());
    await page.reload();
  });

  test('should load the app and display games alphabetically', async ({ page }) => {
    await expect(page).toHaveTitle(/CardGame Picker/);
    const cards = page.locator('.game-card');
    // Ensure at least 10 games are loaded
    expect(await cards.count()).toBeGreaterThan(10);
    
    // First game should be "500" because we sort alphabetically!
    await expect(cards.first().locator('.game-title')).toHaveText('500');
  });

  test('should filter games by search query', async ({ page }) => {
    const searchInput = page.locator('#search-input');
    await searchInput.fill('spades');
    
    // Should only see games with spades in the name
    const cards = page.locator('.game-card');
    await expect(cards).toHaveCount(1);
    await expect(cards.first()).toContainText('Spades');
  });

  test('should filter games by player count', async ({ page }) => {
    const playerInput = page.locator('#player-count');
    await playerInput.fill('6'); // Look for games that support 6 players
    
    // Spades (4 max) should be hidden
    const cards = page.locator('.game-card');
    const allText = await cards.allInnerTexts();
    const hasSpades = allText.some(text => text.includes('Spades'));
    expect(hasSpades).toBeFalsy();
    
    // Golf (6-Card) supports 6 players, should be visible
    const hasGolf = allText.some(text => text.includes('Golf (6-Card)'));
    expect(hasGolf).toBeTruthy();
  });

  test('should filter 1 deck only games', async ({ page }) => {
    // Canasta requires 2 decks, should be visible initially
    const canasta = page.locator('.game-card', { hasText: 'Canasta' });
    await expect(canasta).toBeVisible();

    // Check '1 Deck Only'
    await page.locator('#one-deck-only').check();

    // Canasta should be hidden
    await expect(canasta).toBeHidden();
  });

  test('should toggle favorite and filter by favorites', async ({ page }) => {
    // Star the first game (500)
    const firstCard = page.locator('.game-card').first();
    const gameName = await firstCard.locator('.game-title').innerText();
    const starBtn = firstCard.locator('.favorite-icon');
    
    await starBtn.click();
    
    // Check 'Favorites Only'
    await page.locator('#favorites-only').check();
    
    // Should see the favorited game among the results
    const visibleCards = page.locator('.game-card');
    await expect(visibleCards.first()).toBeVisible();
    
    const allText = await visibleCards.allInnerTexts();
    const hasFavoritedGame = allText.some(text => text.includes(gameName));
    expect(hasFavoritedGame).toBeTruthy();
  });

  test('should open and close rules modal', async ({ page }) => {
    const firstCard = page.locator('.game-card').first();
    await firstCard.locator('.btn-rules').click();
    
    const modal = page.locator('#rules-modal');
    await expect(modal).toHaveClass(/active/);
    await expect(modal.locator('h2')).not.toBeEmpty();
    
    // Close modal
    await page.locator('#close-modal').click();
    await expect(modal).not.toHaveClass(/active/);
  });
});
