document.addEventListener('DOMContentLoaded', () => {
    const gamesContainer = document.getElementById('games-container');
    const searchInput = document.getElementById('search-input');
    const playerCountInput = document.getElementById('player-count');
    const favoritesCheckbox = document.getElementById('favorites-only');
    const oneDeckCheckbox = document.getElementById('one-deck-only');
    const modalOverlay = document.getElementById('rules-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('close-modal');

    // Setup Local Storage for Favorites
    const LOCAL_STORAGE_KEY = 'card_games_favorites';
    let userFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

    // Sync initial state
    gamesData.forEach(game => {
        if (userFavorites.hasOwnProperty(game.id)) {
            game.isFavorite = userFavorites[game.id];
        } else {
            userFavorites[game.id] = game.isFavorite;
        }
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userFavorites));

    // Register Service Worker for PWA / Offline capability
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    function toggleFavorite(id) {
        const game = gamesData.find(g => g.id === id);
        if (game) {
            game.isFavorite = !game.isFavorite;
            userFavorites[id] = game.isFavorite;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userFavorites));
            renderGames();
        }
    }

    // Render games based on filters
    function renderGames() {
        gamesContainer.innerHTML = '';
        
        const players = parseInt(playerCountInput.value);
        const searchQuery = searchInput.value.toLowerCase().trim();
        const showFavoritesOnly = favoritesCheckbox.checked;
        const showOneDeckOnly = oneDeckCheckbox.checked;

        const filteredGames = gamesData.filter(game => {
            // Filter by search query
            if (searchQuery && !game.name.toLowerCase().includes(searchQuery)) {
                return false;
            }
            // Filter by player count
            if (!isNaN(players) && players > 0) {
                if (players < game.minPlayers || players > game.maxPlayers) {
                    return false;
                }
            }
            // Filter by favorites
            if (showFavoritesOnly && !game.isFavorite) {
                return false;
            }
            // Filter by 1 deck only
            if (showOneDeckOnly && (game.decks && game.decks > 1)) {
                return false;
            }
            return true;
        });

        // Sort alphabetically by name
        filteredGames.sort((a, b) => a.name.localeCompare(b.name));

        if (filteredGames.length === 0) {
            gamesContainer.innerHTML = `
                <div class="no-results">
                    <p>No games found matching your criteria. Try adjusting the filters!</p>
                </div>
            `;
            return;
        }

        filteredGames.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <div class="game-header">
                    <div class="game-title">${game.name}</div>
                    <div class="favorite-icon ${game.isFavorite ? 'active' : ''}" title="Toggle Favorite">
                        ${game.isFavorite ? '⭐' : '☆'}
                    </div>
                </div>
                <div class="game-meta">
                    <div class="meta-tag">
                        👥 ${game.minPlayers === game.maxPlayers ? game.minPlayers : `${game.minPlayers}-${game.maxPlayers}`} players
                    </div>
                    ${game.decks > 1 ? `<div class="meta-tag" title="Requires ${game.decks} decks"><img src="card-back.jpg" class="card-back-icon" alt="Decks">x${game.decks}</div>` : ''}
                </div>
                <button class="btn-rules">View Rules</button>
            `;

            // Handle favorite click
            const favIcon = card.querySelector('.favorite-icon');
            favIcon.addEventListener('click', (e) => {
                e.stopPropagation(); // prevent modal from opening
                toggleFavorite(game.id);
            });

            // Open rules modal on card click
            card.addEventListener('click', () => openModal(game));
            
            gamesContainer.appendChild(card);
        });
    }

    function openModal(game) {
        modalBody.innerHTML = `
            <h2>${game.name}</h2>
            <div class="meta-tag" style="display:inline-block; margin-bottom: 1rem;">
                👥 ${game.minPlayers === game.maxPlayers ? game.minPlayers : `${game.minPlayers}-${game.maxPlayers}`} players
            </div>
            ${game.decks > 1 ? `<div class="meta-tag" style="display:inline-block; margin-bottom: 1rem; margin-left: 0.5rem;" title="Requires ${game.decks} decks"><img src="card-back.jpg" class="card-back-icon" alt="Decks">x${game.decks}</div>` : ''}
            <div class="rules-content">
                ${game.rules}
            </div>
        `;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event Listeners
    searchInput.addEventListener('input', renderGames);
    playerCountInput.addEventListener('input', renderGames);
    favoritesCheckbox.addEventListener('change', renderGames);
    oneDeckCheckbox.addEventListener('change', renderGames);
    
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });

    // Initial render
    renderGames();
});
