const gamesData = [
  {
    id: 'kingscorners',
    name: 'Kings Corner',
    minPlayers: 2,
    maxPlayers: 4,
    isFavorite: true,
    rules: `
      <h3>Objective</h3>
      <p>Be the first player to get rid of all your cards.</p>
      <h3>Setup</h3>
      <p>Standard 52-card deck. Deal 7 cards to each player. Place the remaining deck in the center. Flip 4 cards face up, one on each side of the deck (North, South, East, West) to form the foundation piles.</p>
      <h3>Gameplay</h3>
      <p>On your turn, you must draw one card from the center pile. Then you can make as many valid plays as you want:</p>
      <ul>
        <li>Play a card from your hand onto a foundation pile. Cards must be played in <strong>descending order</strong> and <strong>alternating colors</strong>.</li>
        <li>Place a King in one of the four empty corners. This starts a new pile.</li>
        <li>Move an entire foundation pile onto another if the bottom card connects perfectly.</li>
        <li>If a foundation space becomes empty, play any card from your hand into it.</li>
      </ul>
      <p>When you have no more plays, your turn ends.</p>
    `
  },
  {
    id: 'golf4',
    name: 'Golf (4-Card)',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: true,
    rules: `
      <h3>Objective</h3>
      <p>Earn the lowest amount of points over 9 rounds.</p>
      <h3>Setup</h3>
      <p>Deal 4 cards face-down to each player in a 2x2 grid. Every player flips exactly 2 of their cards face-up to begin. The rest forms a draw and discard pile.</p>
      <h3>Gameplay</h3>
      <p>On your turn, draw from the draw pile or discard pile.</p>
      <ul>
        <li><strong>Discard pile:</strong> Must swap it with one of your 4 cards (face-up or down). The replaced card goes on the discard pile.</li>
        <li><strong>Draw pile:</strong> Swap it with one of your cards, or discard it immediately.</li>
      </ul>
      <p>The round ends when one player has all 4 of their cards face-up. Every other player gets one final turn.</p>
      <h3>Scoring</h3>
      <p>Columns of 2 equal cards score <strong>Zero</strong>. Kings=0, Jacks/Queens=10, Aces=1, Numbers=face value.</p>
    `
  },
  {
    id: 'golf6',
    name: 'Golf (6-Card)',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: true,
    rules: `
      <h3>Objective</h3>
      <p>Earn the lowest amount of points over 9 rounds.</p>
      <h3>Setup</h3>
      <p>Deal 6 cards face-down to each player in a 2x3 grid. Every player flips exactly 2 of their cards face-up to begin. The rest forms a draw and discard pile.</p>
      <h3>Gameplay</h3>
      <p>On your turn, draw from the draw pile or discard pile.</p>
      <ul>
        <li><strong>Discard pile:</strong> Must swap it with one of your 6 cards (face-up or down). The replaced card goes on the discard pile.</li>
        <li><strong>Draw pile:</strong> Swap it with one of your cards, or discard it immediately.</li>
      </ul>
      <p>The round ends when one player has all 6 of their cards face-up. Every other player gets one final turn.</p>
      <h3>Scoring</h3>
      <p>Columns of 2 equal cards score <strong>Zero</strong>. Kings=0, Jacks/Queens=10, Aces=1, Numbers=face value.</p>
    `
  },
  {
    id: 'screwyourneighbor',
    name: 'Screw Your Neighbor',
    minPlayers: 3,
    maxPlayers: 8,
    isFavorite: true,
    rules: `
      <h3>Objective</h3>
      <p>Avoid having the lowest card so you don't lose your tokens.</p>
      <h3>Setup</h3>
      <p>Give everyone 3 tokens. Deal exactly 1 card to each player face-down.</p>
      <h3>Gameplay</h3>
      <p>Aces are low, Kings are high. Starting left of the dealer, look at your card:</p>
      <ul>
        <li><strong>Stand:</strong> Keep your card.</li>
        <li><strong>Swap:</strong> Force a swap with the player to your left. They cannot refuse unless they have a King (which they flip face up immediately to block you).</li>
      </ul>
      <p>The dealer goes last and can swap their card with the top card of the deck.</p>
      <h3>Scoring</h3>
      <p>Everyone reveals their card. The lowest card loses a token. Lose all tokens, you're out.</p>
    `
  },
  {
    id: 'thirtyone',
    name: 'Thirty-One (Blitz / Scat)',
    minPlayers: 2,
    maxPlayers: 9,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Get a hand totaling 31 points in a single suit, or at least avoid having the lowest score.</p>
      <h3>Setup</h3>
      <p>Give everyone 3 tokens (like Screw Your Neighbor). Deal 3 cards to each player. Start a discard pile.</p>
      <h3>Gameplay</h3>
      <p>On your turn, draw the top card from the deck or the discard pile, then discard one card. You want cards of the same suit. Aces=11, Faces=10, Numbers=face value. 3-of-a-kind of any rank equals 30 points.</p>
      <p>If you think your score is high enough to not be the lowest, you can "Knock" instead of drawing. Everyone else gets one final turn.</p>
      <h3>Scoring</h3>
      <p>Lowest hand loses a token. Lose all 3, you are eliminated.</p>
    `
  },
  {
    id: 'trash',
    name: 'Trash (Garbage)',
    minPlayers: 2,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Be the first to sequence cards Ace through 10.</p>
      <h3>Setup</h3>
      <p>Deal 10 cards face-down to each player in two rows of five (like Golf!).</p>
      <h3>Gameplay</h3>
      <p>Draw a card. If it's an Ace through 10, place it in its corresponding spot in your grid (Ace = top left, 10 = bottom right) and reveal the card that was there. If that revealed card is also playable, play it. Kings are wild. Jacks/Queens end your turn.</p>
      <p>When someone completes their 10-card sequence, the next round they only get 9 cards (Ace-9), and so on, until someone wins with just 1 card.</p>
    `
  },
  {
    id: 'palace',
    name: 'Palace (Karma)',
    minPlayers: 2,
    maxPlayers: 5,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Get rid of all your cards (similar to Kings in the Corner).</p>
      <h3>Setup</h3>
      <p>Each player gets 3 face-down cards, 3 face-up cards on top of them, and 3 cards in their hand. Remaining cards form a draw pile.</p>
      <h3>Gameplay</h3>
      <p>Play a card equal to or higher than the top card of the discard pile. If you can't, you must pick up the entire discard pile! Always draw back up to 3 cards in your hand.</p>
      <p><strong>Power cards:</strong> 2 resets the pile (can be played on anything). 10 clears the pile from the game and gives you another turn.</p>
      <p>Once the deck is empty and your hand is empty, you play your face-up cards, then blindly play your face-down cards.</p>
    `
  },
  {
    id: 'tonk',
    name: 'Tonk (Tunk)',
    minPlayers: 2,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Be the first to get rid of your cards by melding sets/runs, or have the lowest points when you "Drop".</p>
      <h3>Setup</h3>
      <p>Deal 5 cards to each player. Start a discard pile.</p>
      <h3>Gameplay</h3>
      <p>On your turn, you can either:</p>
      <ul>
        <li><strong>Drop:</strong> If you think your hand's point value is the lowest at the table, place your cards face up. Others reveal. If you are lowest, you win the stakes. If someone else is lower, you pay them double.</li>
        <li><strong>Draw & Meld:</strong> Draw from the deck or discard. Place down any 3-4 of a kind, or 3-4 consecutive cards of the same suit. You can also "hit" (add to) other players' melds. Discard one card to end turn.</li>
      </ul>
      <p>If dealt 49 or 50 points (Faces=10, Aces=1) initially, you declare "Tonk" and win immediately.</p>
    `
  },
  {
    id: 'rummy',
    name: 'Basic Rummy',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Be the first player to meld all of your cards into sets or runs.</p>
      <h3>Setup</h3>
      <p>Deal 7 cards (or 10 for 2 players). Start a discard pile.</p>
      <h3>Gameplay</h3>
      <p>On your turn: Draw 1 card from the deck or discard pile. Play any melds (3-4 of a kind, or 3+ cards in a row of the same suit) face up on the table. You may also "lay off" cards onto existing melds. Discard 1 card to end your turn.</p>
      <h3>Scoring</h3>
      <p>When someone goes out, others count the penalty points left in their hands (Faces=10, Aces=1). First to a set score (e.g. 100) loses.</p>
    `
  },
  {
    id: 'ninetynine',
    name: '99 (Ninety-Nine)',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Don't be the player to push the running total over 99. Starts with 3 tokens each.</p>
      <h3>Setup</h3>
      <p>Deal 3 cards to each player. The running total starts at 0.</p>
      <h3>Gameplay</h3>
      <p>Play 1 card, announce the new total, and draw 1 card. Regular cards add their face value. Special cards:</p>
      <ul>
        <li><strong>4:</strong> Reverses turn direction (value = 0)</li>
        <li><strong>9:</strong> Pass turn (value = 0)</li>
        <li><strong>10:</strong> Subtracts 10</li>
        <li><strong>King:</strong> Puts the total exactly at 99</li>
      </ul>
      <p>If you cannot play a card without going over 99, you lose a token. Last player with tokens wins.</p>
    `
  },
  {
    id: 'yaniv',
    name: 'Yaniv',
    minPlayers: 2,
    maxPlayers: 5,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Call "Yaniv" when your hand has the lowest value, keeping your score low across rounds.</p>
      <h3>Setup</h3>
      <p>Deal 5 cards to everyone. One card face up for the discard pile.</p>
      <h3>Gameplay</h3>
      <p>On your turn, you can play a single card, a pair/set, or a run of 3+ same-suit cards. You then draw 1 card (either from the deck, or the first/last card of the set the previous player just discarded).</p>
      <p>If your hand value is <strong>5 or less</strong> at the start of your turn, you can call "Yaniv" instead of playing. Everyone reveals.</p>
      <h3>Scoring</h3>
      <p>Faces=10, Aces=1, Jokers=0. If you call Yaniv and are lowest, you score 0. If someone else is lower, it's an "Asaf" – you take 30 penalty points plus your hand value. If you hit exactly 200 (or 100) total points, your score halves.</p>
    `
  },
  {
    id: 'sevens',
    name: 'Sevens (Fan Tan)',
    minPlayers: 3,
    maxPlayers: 8,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Be the first to get rid of all your cards.</p>
      <h3>Setup</h3>
      <p>Deal out the entire deck evenly. (Some may have one extra card).</p>
      <h3>Gameplay</h3>
      <p>The player with the 7 of Hearts goes first and places it in the center. The turn passes left.</p>
      <p>On your turn, you must play a card if you can. Valid plays:</p>
      <ul>
        <li>Play any 7 to start a new suit row.</li>
        <li>Play a 6 or 8 of a suit that already has a 7 on the table.</li>
        <li>Play a card that continues the sequence (e.g., a 5 on a 6, or a 9 on an 8).</li>
      </ul>
      <p>If you cannot play, you pass (or put a chip in a pot, if playing for stakes). First to run out of cards wins.</p>
    `
  },
  {
    id: 'hearts',
    name: 'Hearts',
    minPlayers: 3,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Have the lowest score at the end of the game by avoiding point cards (Hearts and the Queen of Spades).</p>
      <h3>Setup</h3>
      <p>Deal out the entire 52-card deck. At the start of the round, pass 3 cards to an opponent (direction rotates each round).</p>
      <h3>Gameplay</h3>
      <p>The player with the 2 of Clubs leads first. You must follow suit if possible; otherwise, play any card. The highest card of the led suit wins the trick. You cannot lead a Heart until Hearts have been "broken" (played on a previous trick when someone couldn't follow suit).</p>
      <h3>Scoring</h3>
      <p>Each Heart is 1 point. The Queen of Spades is 13 points. "Shooting the Moon" (taking ALL point cards) gives you 0 points and everyone else 26 points.</p>
    `
  },
  {
    id: 'spades',
    name: 'Spades',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>A partnership game where you try to take exactly the number of tricks you and your partner bid.</p>
      <h3>Setup</h3>
      <p>Deal 13 cards to each player. Partners sit across from each other.</p>
      <h3>Gameplay</h3>
      <p>Players look at their hands and bid how many tricks they think they can take. Spades are always the trump suit. You must follow the led suit if possible. If you can't, you may play a Spade (trump) or any other card. Highest trump wins, otherwise highest of led suit.</p>
      <h3>Scoring</h3>
      <p>Making your combined partnership bid exactly earns 10x the bid. Extra tricks ("bags") are 1 point each. Accumulating 10 bags costs a 100-point penalty. Missing your bid loses 10x the bid.</p>
    `
  },
  {
    id: 'euchre',
    name: 'Euchre',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>A partnership trick-taking game where you try to win at least 3 of the 5 tricks.</p>
      <h3>Setup</h3>
      <p>Use a 24-card deck (9, 10, J, Q, K, A). Deal 5 cards to each player. Turn the top card of the remaining 4 cards face up.</p>
      <h3>Gameplay</h3>
      <p>Players bid to make the face-up suit Trump, or pass. If all pass, the card is turned down and players can name any other suit as Trump. The highest trump is the Jack of the trump suit ("Right Bower"), followed by the Jack of the same color ("Left Bower").</p>
      <p>The team that called trump MUST win at least 3 tricks. If they do, they get 1 point (or 2 points for all 5). If they fail, they are "Euchred" and the defenders get 2 points. Play to 10.</p>
    `
  },
  {
    id: 'ohhell',
    name: 'Oh Hell (Oh Pshaw)',
    minPlayers: 3,
    maxPlayers: 7,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Bid exactly the number of tricks you will take. Not one more, not one less.</p>
      <h3>Setup</h3>
      <p>The number of cards dealt changes each round. Usually starts at 10 cards each, goes down to 1 card each, then back up to 10. Turn the top card of the remaining deck face up to determine the Trump suit.</p>
      <h3>Gameplay</h3>
      <p>Players bid how many tricks they will take. The total number of bids CANNOT equal the total number of tricks available (the dealer is restricted to ensure this). Must follow suit if possible. Highest trump or highest of led suit wins.</p>
      <h3>Scoring</h3>
      <p>If you make your bid exactly, you score 10 points plus 1 point per trick. If you miss your bid by taking too many or too few, you score 0 points (or just 1 point per trick taken depending on house rules).</p>
    `
  },
  {
    id: 'barbu',
    name: 'Barbu (Le Barbu)',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>A compendium game where each player takes turns being the "Declarer" and choosing the rules for the hand to avoid negative points and gain positive ones.</p>
      <h3>Setup</h3>
      <p>Standard 52-card deck. Deal 13 cards to each player. Over the course of 28 hands, every player will declare each of the 7 contracts exactly once.</p>
      <h3>The Contracts</h3>
      <p>The Declarer chooses one of the following to be played:</p>
      <ul>
        <li><strong>No Tricks:</strong> -2 pts per trick taken.</li>
        <li><strong>No Hearts:</strong> -2 pts per Heart taken, -6 for the Ace.</li>
        <li><strong>No Queens:</strong> -6 pts per Queen taken.</li>
        <li><strong>No King of Hearts (Barbu):</strong> -20 pts for taking the King of Hearts.</li>
        <li><strong>No Last Trick:</strong> -15 pts for taking the 13th trick.</li>
        <li><strong>Trumps:</strong> Declarer names trump. +5 pts per trick taken.</li>
        <li><strong>Dominoes:</strong> Play layout like Sevens. First out gets +45, others positive points based on order.</li>
      </ul>
      <p>Scores are tallied at the end; all points sum to exactly 0.</p>
    `
  },
  {
    id: 'regicide',
    name: 'Regicide',
    minPlayers: 1,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>A cooperative game where you use a standard deck to defeat 12 Royal cards (Jacks, Queens, Kings) before players run out of health/cards.</p>
      <h3>Setup</h3>
      <p>Remove the 12 Royals and shuffle them into 3 piles (Kings on bottom, then Queens, then Jacks on top). Shuffle the remaining numbered cards and Aces (value 1) to form the Tavern deck. Deal cards to players.</p>
      <h3>Gameplay</h3>
      <p>Turn over the top Royal. Players take turns playing a card (or valid combo) to deal damage to the Royal. The suit of the card played triggers a special power (Hearts heal, Diamonds draw, Spades shield against incoming damage, Clubs deal double damage). If the Royal isn't defeated, it attacks the active player, who must discard cards from their hand equaling the attack value. If a player cannot discard enough, everyone loses.</p>
    `
  },
  {
    id: 'whist',
    name: 'Whist',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>A classic partnership trick-taking game. Try to win as many tricks as possible.</p>
      <h3>Setup</h3>
      <p>Deal 13 cards to everyone. The dealer turns the very last card dealt face-up; that suit becomes Trump.</p>
      <h3>Gameplay</h3>
      <p>The player to the dealer's left leads. You must follow suit if possible. Highest trump wins; otherwise, highest of the led suit. There is no bidding.</p>
      <h3>Scoring</h3>
      <p>The partnership that wins the most tricks scores 1 point for each trick won beyond 6. First team to 5 points wins the game.</p>
    `
  },
  {
    id: 'ginrummy',
    name: 'Gin Rummy',
    minPlayers: 2,
    maxPlayers: 2,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Form sets and runs to reduce the "deadwood" (unmatched cards) in your hand.</p>
      <h3>Setup</h3>
      <p>Deal 10 cards to each player. Start a draw and discard pile.</p>
      <h3>Gameplay</h3>
      <p>On your turn, draw the top card of the deck or discard pile. Then, discard one card. You do NOT lay melds down on the table during play.</p>
      <p>If your unmatched cards total 10 points or less (Faces=10, Aces=1), you may "Knock" and end the round. If you have 0 deadwood, you go "Gin" for bonus points.</p>
      <h3>Scoring</h3>
      <p>When a player knocks, both reveal. The non-knocker can lay off their deadwood onto the knocker's melds. The knocker scores the difference in deadwood. If the non-knocker ends up with equal or less deadwood, they "Undercut" and get a bonus.</p>
    `
  },
  {
    id: 'president',
    name: 'President (Scum / Capitalism)',
    minPlayers: 4,
    maxPlayers: 7,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Be the first to get rid of all your cards to become the President.</p>
      <h3>Setup</h3>
      <p>Deal all cards out evenly.</p>
      <h3>Gameplay</h3>
      <p>The person who leads can play a single card, a pair, or a triple. The next player must play the same number of cards, but of a <strong>higher rank</strong>. 2s are the highest card and clear the pile, granting a new turn. If everyone passes, the pile clears and the last person to play leads the next hand.</p>
      <h3>Roles</h3>
      <p>The first person out is the President, next is VP, and the last is Scum. Before the next round, Scum must give their highest card to the President, who gives back any card of their choice.</p>
    `
  },
  {
    id: 'spoons',
    name: 'Spoons',
    minPlayers: 3,
    maxPlayers: 13,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Collect 4 of a kind, and don't be the one left without a spoon!</p>
      <h3>Setup</h3>
      <p>Place spoons in the center of the table (one fewer spoon than players). Deal 4 cards to everyone.</p>
      <h3>Gameplay</h3>
      <p>The dealer draws a card from the deck, decides whether to keep it, and passes one card to the left. The next player does the same, passing left. This happens rapidly in real-time. The last player discards into a trash pile.</p>
      <p>As soon as you get 4 of a kind, quietly grab a spoon. Once one spoon is grabbed, everyone else must immediately grab a spoon. The person left without a spoon gets a letter (S-P-O-O-N). Spell "Spoon" and you are out.</p>
    `
  },
  {
    id: 'crazyeights',
    name: 'Crazy Eights',
    minPlayers: 2,
    maxPlayers: 5,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Be the first player to get rid of all your cards.</p>
      <h3>Setup</h3>
      <p>Deal 5 cards (or 7 for two players). Turn over the top card to start the discard pile.</p>
      <h3>Gameplay</h3>
      <p>Play a card that matches the suit or rank of the top card on the discard pile. Eights are wild and can be played at any time, allowing the player to declare a new suit. If you can't play, you must draw from the deck until you can.</p>
    `
  },
  {
    id: '500',
    name: '500',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>A trick-taking and bidding game where partnerships race to score 500 points.</p>
      <h3>Setup</h3>
      <p>Use a 43-card deck (remove 2s, 3s, and black 4s, add a Joker). Deal 10 cards to each player, and 3 cards to a "kitty" in the center.</p>
      <h3>Gameplay</h3>
      <p>Players bid on how many tricks they will take (min 6) and name the trump suit. "Right Bower" is Jack of trump, "Left Bower" is Jack of same color. Highest bidder takes the kitty, discards 3 cards, and leads the first trick. Must follow suit.</p>
      <h3>Scoring</h3>
      <p>If the bidding team makes their bid, they get the points below. If they fail, they are "set back" (lose) that amount. Opponents score 10 pts per trick they capture.</p>
      <table class="rules-table">
        <tr><th>Tricks</th><th>♠ Spades</th><th>♣ Clubs</th><th>♦ Diamonds</th><th>♥ Hearts</th><th>No Trump</th></tr>
        <tr><td><strong>6</strong></td><td>40</td><td>60</td><td>80</td><td>100</td><td>120</td></tr>
        <tr><td><strong>7</strong></td><td>140</td><td>160</td><td>180</td><td>200</td><td>220</td></tr>
        <tr><td><strong>8</strong></td><td>240</td><td>260</td><td>280</td><td>300</td><td>320</td></tr>
        <tr><td><strong>9</strong></td><td>340</td><td>360</td><td>380</td><td>400</td><td>420</td></tr>
        <tr><td><strong>10</strong></td><td>440</td><td>460</td><td>480</td><td>500</td><td>520</td></tr>
      </table>
      <p style="text-align: center; font-size: 0.9em; margin-top: 0.5rem; color: var(--text-secondary);"><em>Misère (Bid to lose all tricks): 250 pts | Open Misère: 500 pts</em></p>
    `
  },
  {
    id: 'pitch',
    name: 'Pitch (Setback)',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Bid for the right to name trump, then win tricks to capture the 4 available points: High, Low, Jack, and Game.</p>
      <h3>Setup</h3>
      <p>Deal 6 cards to each player. (Partnership game).</p>
      <h3>Gameplay</h3>
      <p>Players bid from 2 to 4 on how many points they will take. The winning bidder names trump ("Pitches"). You must follow suit if you can, but you can ALWAYS play a trump card instead even if you could follow suit.</p>
      <h3>Scoring</h3>
      <p>1 pt for having the Highest trump. 1 pt for capturing the Lowest trump. 1 pt for capturing the Jack of trump. 1 pt for "Game" (highest total face value of cards captured in tricks). Missing your bid sets you back by the bid amount.</p>
    `
  },
  {
    id: 'cribbage',
    name: 'Cribbage',
    minPlayers: 2,
    maxPlayers: 2,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Score 121 points by forming 15s, pairs, and runs. (Traditionally uses a Cribbage board, but pen and paper work fine).</p>
      <h3>Setup</h3>
      <p>Deal 6 cards to each. Both discard 2 to the dealer's hidden "Crib". Cut the deck for a starter card.</p>
      <h3>Gameplay</h3>
      <p><strong>The Play:</strong> Players take turns playing a card, keeping a running total up to 31. Score points during play for hitting 15, 31, pairs, or runs.<br>
      <strong>The Show:</strong> After all cards are played, players count points in their hands (plus the starter card). 15s=2 pts, Pairs=2 pts, Runs=1 pt per card. Dealer then counts the Crib.</p>
    `
  },
  {
    id: 'slapjack',
    name: 'Slapjack',
    minPlayers: 2,
    maxPlayers: 8,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Win all the cards by rapidly slapping Jacks.</p>
      <h3>Setup</h3>
      <p>Deal the entire deck face down to players.</p>
      <h3>Gameplay</h3>
      <p>Players take turns rapidly flipping the top card of their deck into the center pile. You must flip the card away from you so you don't see it first.</p>
      <p>Whenever a Jack is played, the first person to slap the pile wins all the cards in it! If you slap a card that isn't a Jack, you must give one of your cards to the player who played the false card.</p>
    `
  },
  {
    id: 'egyptianratscrew',
    name: 'Egyptian Rat Screw (Slap)',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective</h3>
      <p>Win all the cards by slapping valid patterns and winning face-card battles.</p>
      <h3>Setup</h3>
      <p>Deal out the entire deck face down.</p>
      <h3>Gameplay</h3>
      <p>Take turns flipping cards into the center. If a Face Card or Ace is played, the next player has a limited number of chances to play another Face/Ace (J=1, Q=2, K=3, A=4 chances). If they fail, the first player wins the pile.</p>
      <p><strong>Slapping:</strong> ANYONE can slap the pile at any time to win it if the top cards form a valid pattern: Doubles (two 5s in a row) or Sandwiches (5, then a King, then another 5). Slap incorrectly and you must burn a card to the bottom of the pile.</p>
    `
  },
  {
    id: 'canasta',
    name: 'Canasta',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    decks: 2,
    rules: `
      <h3>Objective</h3>
      <p>A partnership rummy game where you try to form "Canastas" (melds of 7 or more cards).</p>
      <h3>Setup</h3>
      <p>Use two 52-card decks with 4 Jokers. Deal 11 cards to each player. 2s and Jokers are wild.</p>
      <h3>Gameplay</h3>
      <p>Draw from the deck or pick up the entire discard pile (if you can immediately meld its top card). Lay down melds (3+ cards of the same rank, no runs). Discard one card.</p>
      <p>You cannot go out until your team has at least one Canasta. Red 3s are bonus cards played immediately. Black 3s block the discard pile from being picked up.</p>
    `
  },
  {
    id: 'spiteandmalice',
    name: 'Spite and Malice',
    minPlayers: 2,
    maxPlayers: 2,
    isFavorite: false,
    decks: 2,
    rules: `
      <h3>Objective</h3>
      <p>Be the first to empty your "pay-off" pile.</p>
      <h3>Setup</h3>
      <p>Use 2 decks. Kings are wild. Deal a 20-card "pay-off" pile to each player, top card face up. Deal 5 cards to each hand. The rest is the draw pile.</p>
      <h3>Gameplay</h3>
      <p>On your turn, draw up to 5 cards. You play to center foundation piles which start with Aces and build up to Queens. You can play from your hand, your 4 personal discard piles, or your pay-off pile.</p>
      <p>When you end your turn, discard one card into one of your 4 personal discard piles. The goal is to maneuver cards so you can play the top card of your pay-off pile to the center.</p>
    `
  },
  {
    id: 'pinochle',
    name: 'Pinochle',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    decks: 2,
    rules: `
      <h3>Objective</h3>
      <p>Score points by forming specific melds and winning tricks containing "counters".</p>
      <h3>Setup</h3>
      <p>Requires a 48-card Pinochle deck (two of every 9, 10, J, Q, K, A in all suits) which you can build by combining two standard decks. Deal 12 cards to each.</p>
      <h3>Gameplay</h3>
      <p><strong>1. Bidding:</strong> Players bid for the right to name trump. The winner names trump and partners pass cards.<br>
      <strong>2. Melding:</strong> Show specific combinations (e.g., Run in trump, Pinochle=Jack of Diamonds + Queen of Spades, Marriages) for points.<br>
      <strong>3. Trick-Taking:</strong> Play out the hand. Must follow suit AND must play a higher card to win the trick if possible. Aces, 10s, and Kings are "counters" worth 1 point each.</p>
    `
  }
];
