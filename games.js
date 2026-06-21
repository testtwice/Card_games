const gamesData = [
  {
    id: 'kingscorners',
    name: 'Kings Corner',
    minPlayers: 2,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Be the first player to get rid of all the cards in your hand to win the game.</p>
      <h3>Setup</h3>
      <p>Use a standard 52-card deck. Deal 7 cards to each player. Place the remaining deck in the center. Flip 4 cards face up, one on each side of the deck (North, South, East, West) to form the foundation piles.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Start Turn:</strong> You MUST draw one card from the center pile at the start of your turn.</p>
      <p>2. <strong>Make Plays:</strong> You may make as many valid plays as you want/can:</p>
      <ul>
        <li>Play a card from your hand onto a foundation pile. Cards must be played in <strong>descending order</strong> and <strong>alternating colors</strong> (e.g., Red 8 on Black 9).</li>
        <li>Place a King in one of the four empty corners. This starts a new foundation pile.</li>
        <li>Move an entire foundation pile onto another if the bottom card of the moving pile connects perfectly to the top card of the destination pile.</li>
        <li>If any of the original 4 foundation spaces becomes empty, play any card from your hand into it.</li>
      </ul>
      <p>3. <strong>End Turn:</strong> When you have no more plays, announce your turn is over. Play passes clockwise.</p>
    `
  },
  {
    id: 'golf4',
    name: 'Golf (4-Card)',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Earn the lowest amount of points over 9 rounds. The player with the lowest total score after 9 rounds wins.</p>
      <h3>Setup</h3>
      <p>Use a 52-card deck. Deal 4 cards face-down to each player in a 2x2 grid. Every player flips exactly 2 of their cards face-up to begin. The rest forms a draw pile, with one card turned up to start the discard pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. On your turn, you must draw the top card from either the <strong>face-down draw pile</strong> or the <strong>face-up discard pile</strong>.</p>
      <p>2. If you drew from the <strong>discard pile</strong>: You MUST swap it with one of your 4 cards (face-up or face-down). The replaced card goes face-up on the discard pile.</p>
      <p>3. If you drew from the <strong>draw pile</strong>: You may look at it and swap it with one of your cards, OR you may discard it immediately without swapping.</p>
      <p>4. Play passes clockwise. The round ends when one player has all 4 of their cards face-up. Every other player gets exactly one final turn.</p>
      <h3>Scoring</h3>
      <p>At the end of the round, flip all remaining face-down cards. Calculate points: Kings=0, Jacks/Queens=10, Aces=1, Numbers=face value. <strong>Bonus:</strong> A column of 2 equal cards (e.g., two 8s) cancels out and scores <strong>Zero</strong> points for that column.</p>
    `
  },
  {
    id: 'golf6',
    name: 'Golf (6-Card)',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Earn the lowest amount of points over 9 rounds. The player with the lowest total score after 9 rounds wins.</p>
      <h3>Setup</h3>
      <p>Use a 52-card deck. Deal 6 cards face-down to each player in a 2x3 grid (3 columns, 2 rows). Every player flips exactly 2 of their cards face-up to begin. Start a draw and discard pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. On your turn, you must draw the top card from either the <strong>draw pile</strong> or the <strong>discard pile</strong>.</p>
      <p>2. If you drew from the <strong>discard pile</strong>: You MUST swap it with one of your 6 cards (face-up or face-down). The replaced card goes face-up on the discard pile.</p>
      <p>3. If you drew from the <strong>draw pile</strong>: You may swap it with one of your cards, OR discard it immediately.</p>
      <p>4. The round ends when one player has all 6 of their cards face-up. Every other player gets exactly one final turn.</p>
      <h3>Scoring</h3>
      <p>Flip all face-down cards. Kings=0, Jacks/Queens=10, Aces=1, Numbers=face value. <strong>Bonus:</strong> A column of 2 equal cards (top and bottom) cancels out and scores <strong>Zero</strong> points for that column. Tally points across 9 rounds.</p>
    `
  },
  {
    id: 'screwyourneighbor',
    name: 'Screw Your Neighbor',
    minPlayers: 3,
    maxPlayers: 8,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Avoid having the lowest card at the table so you don't lose your tokens. The last player remaining with at least one token wins.</p>
      <h3>Setup</h3>
      <p>Give everyone 3 tokens. Use a 52-card deck. Deal exactly 1 card to each player face-down. (Aces are low, Kings are high).</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. Starting to the left of the dealer, each player looks at their card and takes one turn.</p>
      <p>2. On your turn, you must choose to either:</p>
      <ul>
        <li><strong>Stand:</strong> Keep your card and do nothing.</li>
        <li><strong>Swap:</strong> Force a swap with the player to your left. They CANNOT refuse the swap, UNLESS they hold a King. If they have a King, they immediately flip it face-up, the swap is blocked, and you are stuck with your card.</li>
      </ul>
      <p>3. The dealer goes last. The dealer cannot swap with another player, but they may swap their card with the random top card of the remaining deck.</p>
      <h3>Scoring & Elimination</h3>
      <p>Once the dealer finishes, everyone reveals their card. The player with the lowest card loses 1 token. If there is a tie for the lowest, all tied players lose 1 token. If you lose your last token, you are eliminated.</p>
    `
  },
  {
    id: 'thirtyone',
    name: 'Thirty-One (Blitz / Scat)',
    minPlayers: 2,
    maxPlayers: 9,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Get a hand totaling 31 points in a single suit, or avoid having the lowest score at the table. The last player remaining with tokens wins.</p>
      <h3>Setup</h3>
      <p>Give everyone 3 tokens. Deal 3 cards to each player. Turn the top card of the deck face-up to start a discard pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. On your turn, you may either <strong>Draw</strong> or <strong>Knock</strong>.</p>
      <p>2. <strong>Draw:</strong> Take the top card from the deck OR the discard pile. Then, you must discard one card. Your goal is to collect cards of the SAME SUIT (Aces=11, Faces=10, Numbers=face value) to get as close to 31 as possible. (Exception: 3-of-a-kind of any suit is worth exactly 30 points).</p>
      <p>3. <strong>Knock:</strong> If you think your score is high enough to not be the lowest at the table, you can "Knock" on the table instead of drawing. This ends your turn. Every other player gets exactly ONE final turn, and then the round ends.</p>
      <p>4. <strong>Blitz:</strong> If anyone hits exactly 31 points, they reveal it immediately. The round ends instantly.</p>
      <h3>Scoring & Elimination</h3>
      <p>Everyone reveals their hands and sums the cards of their dominant suit. The player with the lowest score loses a token. In a tie, all tied players lose a token (unless the Knocker tied, in which case the Knocker loses). Lose all 3 tokens, and you are eliminated.</p>
    `
  },
  {
    id: 'trash',
    name: 'Trash (Garbage)',
    minPlayers: 2,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Be the first player to complete your sequence of cards. The first player to successfully complete a sequence of just 1 card (in the final round) wins the entire game.</p>
      <h3>Setup</h3>
      <p>Deal 10 cards face-down to each player in two rows of five. This forms a grid representing positions 1 (Ace) through 10. The rest of the deck forms a draw pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. On your turn, draw the top card from the deck or discard pile.</p>
      <p>2. If the card is an Ace through 10, place it face-up in its corresponding spot in your grid (e.g., Ace goes in the top-left, 10 goes in the bottom-right). Pick up the face-down card that was occupying that spot.</p>
      <p>3. Look at the card you just picked up. If it is ALSO playable in an empty spot, play it! Chain this as long as possible.</p>
      <p>4. <strong>Wilds & Blockers:</strong> Kings are wild and can go in any spot. Jacks and Queens are useless "trash".</p>
      <p>5. Your turn ends when you reveal a Jack, Queen, or a number you already have face-up. Discard it.</p>
      <h3>Scoring & Progression</h3>
      <p>The first player to reveal all 10 cards wins the round. In the next round, that player is dealt only 9 cards (needing Ace-9). Continue playing rounds; the first person to win the 1-card round wins the game.</p>
    `
  },
  {
    id: 'palace',
    name: 'Palace (Karma / Shithead)',
    minPlayers: 2,
    maxPlayers: 5,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Be the first player to get rid of all your cards to win.</p>
      <h3>Setup</h3>
      <p>Deal 3 face-down cards to each player in a row. Deal 3 face-up cards directly on top of them. Deal 3 cards to each player's hand. Players may swap cards between their hand and their face-up cards before the game begins. The remaining deck is the draw pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. On your turn, you must play a card (or multiple of the same rank) that is <strong>equal to or higher</strong> than the top card of the discard pile.</p>
      <p>2. If you successfully play, draw from the deck until you have at least 3 cards in your hand. If the deck is empty, just play.</p>
      <p>3. If you CANNOT play a valid card, you must pick up the entire discard pile and add it to your hand. This ends your turn.</p>
      <p>4. <strong>Power Cards:</strong> 2 resets the pile (can be played on anything, and you get another turn). 10 clears the pile from the game completely (you get another turn). 4 of a kind clears the pile.</p>
      <h3>Endgame</h3>
      <p>When the draw deck is empty and your hand is empty, you must play from your 3 face-up cards. Once those are gone, you must blindly play your face-down cards one at a time. First player to play all cards wins.</p>
    `
  },
  {
    id: 'tonk',
    name: 'Tonk (Tunk)',
    minPlayers: 2,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Be the first to get rid of your cards by melding, or have the lowest points when someone "Drops". First player to reach a set score target (e.g., 100 points) across multiple hands wins the game.</p>
      <h3>Setup</h3>
      <p>Deal 5 cards to each player. Start a discard pile. (Aces=1, Faces=10, Numbers=value).</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Immediate Win (Tonk):</strong> If your initial 5 cards total exactly 49 or 50 points, declare "Tonk" immediately and win the hand.</p>
      <p>2. On your turn, you may either <strong>Drop</strong> or <strong>Play</strong>.</p>
      <p>3. <strong>Drop:</strong> Place your cards face up. You claim your hand's total points is the lowest at the table. Everyone reveals. (See Scoring).</p>
      <p>4. <strong>Play:</strong> Draw 1 card from deck or discard. You may place down "melds" (3-4 of a kind, or 3+ consecutive cards of the same suit). You may also "hit" (add a card to) anyone else's existing melds on the table. To end your turn, you MUST discard 1 card.</p>
      <h3>Scoring</h3>
      <p>If you drop and are the lowest, you score 0 and everyone else scores their hand's points. If you drop and someone else ties or beats you, you are "Caught" and take a heavy penalty (usually double points). If a player runs out of cards by melding/discarding, they win the hand (score 0), others score their remaining points.</p>
    `
  },
  {
    id: 'rummy',
    name: 'Basic Rummy',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Be the first player to meld all of your cards. The game is played over multiple rounds. The first player to reach a target penalty score (e.g., 100 points) loses, and the player with the lowest score wins.</p>
      <h3>Setup</h3>
      <p>Deal 7 cards (or 10 for 2 players). Start a draw and discard pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Draw:</strong> Start your turn by drawing 1 card from either the deck or the top of the discard pile.</p>
      <p>2. <strong>Meld (Optional):</strong> Play any valid melds face-up on the table. A meld is 3 or 4 cards of the same rank (e.g., three 8s), or a run of 3+ consecutive cards of the same suit.</p>
      <p>3. <strong>Lay Off (Optional):</strong> You may add cards to any existing melds on the table (yours or opponents').</p>
      <p>4. <strong>Discard:</strong> End your turn by placing 1 card face-up on the discard pile.</p>
      <h3>Scoring</h3>
      <p>The round ends the moment a player empties their hand ("goes out"). All other players count the penalty points left in their hands: Faces=10, Aces=1, Numbers=face value. These penalty points are added to their running total.</p>
    `
  },
  {
    id: 'ninetynine',
    name: '99 (Ninety-Nine)',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Don't be the player to push the running point total over 99. The last player remaining with tokens wins.</p>
      <h3>Setup</h3>
      <p>Give everyone 3 tokens. Deal 3 cards to each player. Place the deck in the center. The running total starts at exactly 0.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. On your turn, you must play exactly 1 card to the center pile.</p>
      <p>2. Announce the new running total based on the card you played.</p>
      <p>3. Draw 1 card to end your turn (always hold 3 cards).</p>
      <p><strong>Card Values:</strong> Regular cards add their face value. Special cards:</p>
      <ul>
        <li><strong>4:</strong> Reverses turn direction (adds 0 to total)</li>
        <li><strong>9:</strong> Pass turn to next player (adds 0)</li>
        <li><strong>10:</strong> Subtracts 10 from the total</li>
        <li><strong>King:</strong> Puts the total at exactly 99 (regardless of what it was before)</li>
      </ul>
      <h3>Scoring & Elimination</h3>
      <p>If you cannot play a card without pushing the total above 99, you lose the round and lose 1 token. Lose all tokens and you are eliminated. The last player standing wins.</p>
    `
  },
  {
    id: 'yaniv',
    name: 'Yaniv',
    minPlayers: 2,
    maxPlayers: 5,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Keep your hand value as low as possible and call "Yaniv" to win the round. The game ends when someone hits 200 points; the player with the lowest score at that time wins the overall game.</p>
      <h3>Setup</h3>
      <p>Deal 5 cards to everyone. One card face up for the discard pile. (Jokers=0, Aces=1, Faces=10, Numbers=face value).</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. At the <strong>start</strong> of your turn, if your hand totals 5 points or less, you may call "Yaniv". This immediately ends the round.</p>
      <p>2. If you don't call Yaniv, you must play cards to the discard pile. You can play: a single card, a pair/set of the same rank, or a run of 3+ same-suit cards.</p>
      <p>3. After discarding, you MUST draw 1 card. You can draw from the deck, OR you can take the first or last card of the set the previous player just discarded.</p>
      <h3>Scoring</h3>
      <p>When someone calls Yaniv, everyone reveals. If the caller has the lowest total, they score 0, and others score their hand's total. If anyone ties or beats the caller, it's an "Asaf" – the caller takes a 30-point penalty PLUS their hand value. <br><strong>Bonus:</strong> If your running total hits exactly 100 or 200, it is halved!</p>
    `
  },
  {
    id: 'sevens',
    name: 'Sevens (Fan Tan)',
    minPlayers: 3,
    maxPlayers: 8,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Be the first player to play all your cards to the table to win the game.</p>
      <h3>Setup</h3>
      <p>Deal out the entire 52-card deck evenly to all players. (It is fine if some players have one extra card).</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. The player holding the <strong>7 of Hearts</strong> goes first and MUST place it face-up in the center of the table. The turn passes clockwise.</p>
      <p>2. On your turn, you MUST play one card if you legally can. Valid plays are:</p>
      <ul>
        <li>Play any other 7 to start a new suit row.</li>
        <li>Play a card that perfectly continues a sequence in a suit already on the table (e.g., play a 6 or 8 next to a 7, then a 5 next to the 6, etc.). Cards build outwards from the 7s down to Aces and up to Kings.</li>
      </ul>
      <p>3. If you have absolutely no valid cards to play, you must "pass" (or put a penalty chip in a pot, if playing for stakes).</p>
      <h3>Winning</h3>
      <p>Play continues until one person runs out of cards. They are the winner!</p>
    `
  },
  {
    id: 'hearts',
    name: 'Hearts',
    minPlayers: 3,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Have the lowest score by avoiding taking tricks containing penalty cards (Hearts and the Queen of Spades). The game ends when someone reaches 100 points; the player with the lowest score wins.</p>
      <h3>Setup</h3>
      <p>Deal the entire 52-card deck evenly. Before the first trick, every player selects 3 cards from their hand and passes them to an opponent (the pass direction rotates: Left, Right, Across, Keep).</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. The player with the 2 of Clubs leads the first trick with that card.</p>
      <p>2. Every other player must play a card of the <strong>led suit</strong> if they have one. If they are void in that suit, they may play any card (including penalty cards, though penalty cards cannot be played on the very first trick of the round).</p>
      <p>3. The highest card of the <strong>led suit</strong> wins the trick. The winner leads the next trick.</p>
      <p>4. You cannot lead a Heart until Hearts have been "broken" (i.e., someone discarded a Heart on a previous trick because they couldn't follow suit).</p>
      <h3>Scoring</h3>
      <p>Every Heart won in a trick is 1 penalty point. The Queen of Spades is 13 penalty points. <strong>Shooting the Moon:</strong> If a player manages to win ALL 13 Hearts AND the Queen of Spades, they score 0, and every other player takes 26 penalty points.</p>
    `
  },
  {
    id: 'spades',
    name: 'Spades',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>A 2v2 partnership game where teams try to win exactly the number of tricks they bid. The first team to reach 500 points wins.</p>
      <h3>Setup</h3>
      <p>Partners sit across from each other. Deal 13 cards to each player. Spades are ALWAYS the trump suit.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Bidding:</strong> Each player looks at their hand and bids how many tricks they think they will win (0-13). Partners' bids are added together to form the team bid.</p>
      <p>2. <strong>Trick-Taking:</strong> The player left of the dealer leads. You MUST follow suit if possible. If you are void in the led suit, you may play a Spade (trump) or any off-suit card. The highest Spade wins; otherwise, the highest card of the led suit wins.</p>
      <p>3. You cannot lead a Spade until they have been "broken" (played on an earlier trick).</p>
      <h3>Scoring</h3>
      <p>If a team wins at least as many tricks as their combined bid, they score 10 times their bid. Every extra trick won is a "bag" worth 1 point. If a team accumulates 10 bags over the game, they take a 100-point penalty. If a team fails to reach their bid, they lose 10 times their bid.</p>
    `
  },
  {
    id: 'euchre',
    name: 'Euchre',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>A 2v2 partnership trick-taking game. Win at least 3 of the 5 tricks to score points. The first team to 10 points wins the game.</p>
      <h3>Setup</h3>
      <p>Use a 24-card deck (9, 10, J, Q, K, A only). Partners sit across from each other. Deal 5 cards to each player. Place the remaining 4 cards in the center and flip the top card face up.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Calling Trump:</strong> Players go around and can order the dealer to pick up the face-up card, making its suit Trump. If all pass, it is turned down, and players go around again to call any <em>other</em> suit as Trump. The team that calls trump are the "Makers", the other team are the "Defenders".</p>
      <p>2. <strong>Card Ranking:</strong> The highest trump is the Jack of the trump suit ("Right Bower"), followed by the Jack of the SAME COLOR ("Left Bower"). Then A, K, Q, 10, 9 of trump.</p>
      <p>3. <strong>Trick-Taking:</strong> Play 5 tricks. Must follow suit if possible. Highest trump wins, otherwise highest of led suit.</p>
      <h3>Scoring</h3>
      <p>If the Makers win 3 or 4 tricks, they get 1 point. If they win all 5, they get 2 points. If they fail to win 3 tricks, they are "Euchred" and the Defenders score 2 points.</p>
    `
  },
  {
    id: 'ohhell',
    name: 'Oh Hell (Oh Pshaw)',
    minPlayers: 3,
    maxPlayers: 7,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Accurately predict exactly how many tricks you will win in a hand. The player with the highest score at the end of all rounds wins.</p>
      <h3>Setup</h3>
      <p>The number of cards dealt changes every round. Round 1 starts with 10 cards per player. Round 2 is 9 cards, down to 1 card, then back up to 10. Turn the top card of the remaining deck face up to determine the Trump suit.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Bidding:</strong> Players look at their cards and bid exactly how many tricks they will take. To prevent everyone from winning, the Dealer is forced to make a bid such that the total sum of all bids does NOT equal the total tricks available in the round.</p>
      <p>2. <strong>Trick-Taking:</strong> Player left of dealer leads. Must follow suit if possible. Highest trump wins, otherwise highest of led suit. Winner of the trick leads the next.</p>
      <h3>Scoring</h3>
      <p>If you take EXACTLY the number of tricks you bid, you score 10 points PLUS 1 point per trick taken. If you take too many or too few tricks, you failed your bid and score 0 points for the entire round.</p>
    `
  },
  {
    id: 'barbu',
    name: 'Barbu (Le Barbu)',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>A 28-hand game where players take turns picking the rules. Five rounds have penalties (avoid taking cards), and two rounds reward points. The player with the highest total score (closest to or above 0) at the end of the 28 hands wins.</p>
      <h3>Setup & Gameplay</h3>
      <p>Deal 13 cards to each of the 4 players. For most hands, the "Declarer" leads the first card. Every other player <strong>must follow suit</strong> if they can. The highest card of the led suit wins the trick.</p>
      <h3>The 7 Contracts</h3>
      <p>When it's your turn to be Declarer, you choose one of these 7 games to play. You must play each one exactly once during the 28-hand game:</p>
      <ul>
        <li><strong>No Tricks:</strong> Try not to win any tricks. (-2 pts per trick won).</li>
        <li><strong>No Hearts:</strong> Try not to win tricks containing Heart cards. (-2 pts per Heart, -6 for the Ace).</li>
        <li><strong>No Queens:</strong> Try not to win tricks containing Queens. (-6 pts per Queen).</li>
        <li><strong>No Barbu (King of Hearts):</strong> Avoid winning the trick containing the King of Hearts. (-20 pts).</li>
        <li><strong>No Last Trick:</strong> Avoid winning the very last (13th) trick of the hand. (-15 pts).</li>
        <li><strong>Trumps (Positive):</strong> Declarer names a trump suit. Try to win as many tricks as possible! (+5 pts per trick).</li>
        <li><strong>Dominoes (Positive):</strong> No tricks. Play cards to the center in sequence (building up and down from 7s). First player to empty their hand wins. (1st: +45, 2nd: +20, 3rd: +5, 4th: -5).</li>
      </ul>
      <h3>Scoring</h3>
      <p>At the end of 28 hands, the scores are tallied. All players' points perfectly sum to 0.</p>
    `
  },
  {
    id: 'regicide',
    name: 'Regicide',
    minPlayers: 1,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>A cooperative game where you use a standard deck to defeat 12 Royal cards (Jacks, Queens, Kings). You win by defeating the final King without any player dying.</p>
      <h3>Setup</h3>
      <p>Remove the 12 Royals. Shuffle them into a Castle deck (4 Kings on bottom, then 4 Queens, then 4 Jacks on top). Shuffle the remaining cards (Aces = 1) to form the Tavern draw deck. Deal a starting hand to each player (Hand size depends on player count).</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. Flip the top Royal from the Castle deck to face it. Royals have Health AND Attack values: <strong>Jacks = 10, Queens = 15, Kings = 20</strong>.</p>
      <p>2. <strong>Play a Card:</strong> On your turn, play a card from your hand to the table to deal damage to the Royal equal to your card's number. The suit triggers a power:</p>
      <ul>
        <li><strong>Hearts:</strong> Heal (shuffle discarded cards back into the Tavern deck).</li>
        <li><strong>Diamonds:</strong> Players draw cards from the Tavern deck.</li>
        <li><strong>Spades:</strong> Shield (permanently reduces the Royal's Attack value).</li>
        <li><strong>Clubs:</strong> Deal double damage.</li>
      </ul>
      <p>3. <strong>Defeating the Royal:</strong> If the cumulative damage played by all players equals or exceeds the Royal's Health, the Royal is defeated and discarded. The next player flips a new Royal and starts their turn.</p>
      <p>4. <strong>Taking Damage:</strong> If the Royal is NOT defeated by your play, it strikes back! You must discard cards from your hand whose total numerical value equals or exceeds the Royal's current Attack value. If you don't have enough cards to absorb the damage, you die and everyone loses.</p>
    `
  },
  {
    id: 'whist',
    name: 'Whist',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>A classic 2v2 partnership trick-taking game. The team to win the most tricks scores points. The first team to reach 5 points wins the game.</p>
      <h3>Setup</h3>
      <p>Partners sit across from each other. Deal 13 cards to everyone. The dealer turns the very last card dealt face-up; the suit of that card becomes the Trump suit for the hand. The dealer adds it to their hand.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. The player to the dealer's left leads the first trick.</p>
      <p>2. You MUST follow suit if possible. If you cannot follow suit, you may play a Trump card or discard an off-suit card.</p>
      <p>3. The highest Trump card wins the trick. If no Trump is played, the highest card of the led suit wins. The winner of the trick leads the next one.</p>
      <h3>Scoring</h3>
      <p>There is no bidding. At the end of 13 tricks, the team that won the majority of the tricks scores 1 point for every trick they won BEYOND 6. (e.g., If a team wins 8 tricks, they score 2 points).</p>
    `
  },
  {
    id: 'ginrummy',
    name: 'Gin Rummy',
    minPlayers: 2,
    maxPlayers: 2,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Form sets and runs to reduce the "deadwood" (unmatched cards) in your hand. The first player to accumulate 100 total points over multiple hands wins the game.</p>
      <h3>Setup</h3>
      <p>Deal 10 cards to each player. Place the deck in the center and flip the top card to start the discard pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. On your turn, you must draw the top card from either the face-down deck OR the face-up discard pile.</p>
      <p>2. You try to form melds in your hand (3-4 of a kind, or 3+ consecutive cards of the same suit). You do NOT lay them down on the table during play.</p>
      <p>3. End your turn by discarding one card. </p>
      <p>4. <strong>Knocking:</strong> If the total value of your unmatched "deadwood" cards is 10 points or less (Faces=10, Aces=1), you may "Knock" when discarding to end the round. If you have 0 deadwood, you go "Gin".</p>
      <h3>Scoring</h3>
      <p>When a player knocks, both players reveal. The non-knocker can "lay off" their deadwood onto the knocker's melds. The knocker scores the difference between their deadwood and the non-knocker's deadwood. If the non-knocker ends up with equal or less deadwood, they "Undercut" the knocker and score a 25-point bonus plus the difference.</p>
    `
  },
  {
    id: 'president',
    name: 'President (Scum / Capitalism)',
    minPlayers: 4,
    maxPlayers: 7,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Be the first player to get rid of all your cards to become the President for the next round. The game is played continuously for bragging rights and better starting hands.</p>
      <h3>Setup</h3>
      <p>Deal all cards out evenly. (3 is the lowest card, 2 is the highest card).</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. The player holding the 3 of Clubs starts the very first game. They can lead a single card, a pair, a triple, or a four-of-a-kind.</p>
      <p>2. The next player must play the EXACT SAME NUMBER of cards, but of a <strong>higher rank</strong> (e.g., if a pair of 5s is played, the next player must play a pair of 6s or higher).</p>
      <p>3. If you cannot or do not want to play, you pass. If everyone passes in a row, the pile is cleared, and the last person to play leads any new combination.</p>
      <p>4. <strong>Power Card:</strong> 2s are the highest card. Playing a 2 clears the pile immediately and grants you a new turn.</p>
      <h3>Scoring & Roles</h3>
      <p>The first person to empty their hand is the President, next is Vice President, down to the last person who is the Scum. Before the next round begins, the Scum must give their highest card to the President, and the President gives back any trash card of their choice.</p>
    `
  },
  {
    id: 'spoons',
    name: 'Spoons',
    minPlayers: 3,
    maxPlayers: 13,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Collect 4 of a kind, and don't be the one left without a spoon! The last player remaining in the game wins.</p>
      <h3>Setup</h3>
      <p>Place spoons in the center of the table (there must be exactly one fewer spoon than the number of players). Deal 4 cards to everyone.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. There are no turns; the game happens rapidly in real-time.</p>
      <p>2. The dealer continuously draws a card from the deck, decides whether to swap it with a card in their hand, and passes one card face-down to the player to their left.</p>
      <p>3. Every player picks up the card passed to them, decides to keep it or not, and passes a card to their left. The last player discards into a trash pile.</p>
      <p>4. As soon as you collect 4 of a kind in your hand, quietly grab a spoon from the center. </p>
      <h3>Elimination</h3>
      <p>Once one spoon is grabbed by any player, everyone else must immediately dive to grab one of the remaining spoons. The one person left without a spoon gets a letter (S-P-O-O-N). Spell the word "Spoon" fully over multiple rounds and you are eliminated.</p>
    `
  },
  {
    id: 'crazyeights',
    name: 'Crazy Eights',
    minPlayers: 2,
    maxPlayers: 5,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Be the first player to play all the cards in your hand to win the game.</p>
      <h3>Setup</h3>
      <p>Deal 5 cards (or 7 for two players). Turn over the top card of the deck to start the discard pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. On your turn, you must play a card that matches the <strong>suit</strong> OR the <strong>rank</strong> of the top card on the discard pile.</p>
      <p>2. If you cannot play a matching card, you must draw from the deck until you get a playable card, then play it.</p>
      <p>3. <strong>Eights are Wild:</strong> An 8 can be played at any time, on any card. When you play an 8, you declare a new suit. The next player must play a card of that newly declared suit, or another 8.</p>
      <h3>Winning</h3>
      <p>The first player to empty their hand is the winner.</p>
    `
  },
  {
    id: '500',
    name: '500',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>A trick-taking and bidding game where partnerships race to score points. The first team to reach 500 points wins.</p>
      <h3>Setup</h3>
      <p>Use a 43-card deck (remove 2s, 3s, and black 4s, add a Joker). Deal 10 cards to each player, and 3 cards to a face-down "kitty" in the center.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Bidding:</strong> Players bid on how many tricks they think their team can take (minimum 6) and declare the trump suit (e.g., "7 Spades"). The highest bidder wins the contract.</p>
      <p>2. <strong>The Kitty:</strong> The highest bidder picks up the 3 cards in the kitty, adds them to their hand, and discards 3 cards face-down.</p>
      <p>3. <strong>Trick-Taking:</strong> The winning bidder leads the first trick. You must follow suit if possible. "Right Bower" (Jack of trump) is the highest card, "Left Bower" (Jack of same color) is the second highest. Joker is always the highest trump.</p>
      <h3>Scoring</h3>
      <p>If the bidding team makes their bid, they score the points for that contract (e.g., 6 Spades = 40 pts, 10 Hearts = 500 pts). If they fail, they are "set back" and lose that amount. The opposing team scores 10 points for every trick they capture.</p>
      <table class="rules-table">
        <tr><th>Tricks</th><th>♠ Spades</th><th>♣ Clubs</th><th>♦ Diamonds</th><th>♥ Hearts</th><th>No Trump</th></tr>
        <tr><td><strong>6</strong></td><td>40</td><td>60</td><td>80</td><td>100</td><td>120</td></tr>
        <tr><td><strong>7</strong></td><td>140</td><td>160</td><td>180</td><td>200</td><td>220</td></tr>
        <tr><td><strong>8</strong></td><td>240</td><td>260</td><td>280</td><td>300</td><td>320</td></tr>
        <tr><td><strong>9</strong></td><td>340</td><td>360</td><td>380</td><td>400</td><td>420</td></tr>
        <tr><td><strong>10</strong></td><td>440</td><td>460</td><td>480</td><td>500</td><td>520</td></tr>
      </table>
    `
  },
  {
    id: 'pitch',
    name: 'Pitch (Setback)',
    minPlayers: 4,
    maxPlayers: 4,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Bid for the right to name trump, then win tricks to capture the 4 available points in the deck: High, Low, Jack, and Game. The first team to reach 21 (or 52 depending on house rules) wins.</p>
      <h3>Setup</h3>
      <p>Deal 6 cards to each player. (Played as a 2v2 partnership game).</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Bidding:</strong> Players bid from 2 to 4 on how many of the 4 points they think they can capture. The winning bidder names trump ("Pitches").</p>
      <p>2. <strong>Trick-Taking:</strong> The Pitcher leads the first trick. You must follow suit if you can, BUT you can ALWAYS choose to play a trump card instead even if you could follow suit.</p>
      <h3>Scoring</h3>
      <p>After all 6 tricks, teams examine the cards they captured in their tricks to award 4 total points:</p>
      <ul>
        <li><strong>High:</strong> 1 pt to the team dealt the highest trump in play.</li>
        <li><strong>Low:</strong> 1 pt to the team dealt the lowest trump in play.</li>
        <li><strong>Jack:</strong> 1 pt to the team who captures the Jack of trump in a trick.</li>
        <li><strong>Game:</strong> 1 pt to the team with the highest total face value of cards captured (10s=10, Jacks=1, Queens=2, Kings=3, Aces=4).</li>
      </ul>
      <p>If the bidding team captures at least their bid, they score their points. If they fail, they are set back (lose) the bid amount.</p>
    `
  },
  {
    id: 'cribbage',
    name: 'Cribbage',
    minPlayers: 2,
    maxPlayers: 2,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Score points by forming 15s, pairs, and runs during play and in your hand. The first player to reach exactly 121 points wins the game.</p>
      <h3>Setup</h3>
      <p>Deal 6 cards to each player. Both players choose 2 cards to discard face-down to the dealer's "Crib" (giving the dealer an extra hand). The non-dealer cuts the deck to reveal the "Starter" card.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>The Play (Pegging):</strong> Players take turns playing one card face-up on the table in front of them, keeping a running total of the values (Faces=10, Aces=1). You cannot exceed 31. You score points immediately for making the total 15 (2pts), 31 (2pts), or playing pairs/runs with the previous cards.</p>
      <p>2. <strong>The Show (Counting):</strong> After all cards are played, players pick up their 4 cards. Using their 4 cards PLUS the Starter card, they count all possible point combinations. (15s=2pts, Pairs=2pts, Runs=1pt per card, Flushes).</p>
      <p>3. <strong>The Crib:</strong> Finally, the dealer flips over the 4-card Crib and counts it just like a regular hand (using the Starter card).</p>
    `
  },
  {
    id: 'slapjack',
    name: 'Slapjack',
    minPlayers: 2,
    maxPlayers: 8,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Win all the cards in the deck by rapidly slapping Jacks. The player who collects all 52 cards wins the game.</p>
      <h3>Setup</h3>
      <p>Deal the entire deck face down evenly to all players. Players keep their cards in a tight stack and do not look at them.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. Players take turns rapidly flipping the top card of their personal deck into a single center pile.</p>
      <p>2. You MUST flip the card outward (away from you) so you don't get to see it before the other players do.</p>
      <p>3. <strong>Slapping:</strong> Whenever a Jack is played, the first person to slap the center pile wins all the cards in it! They add the pile to the bottom of their personal deck.</p>
      <p>4. <strong>Penalties:</strong> If you slap a card that isn't a Jack, you must give one card from your deck to the player who played the false card.</p>
      <h3>Winning</h3>
      <p>If you run out of cards, you have one more chance to slap a Jack to get back in. Otherwise, you are eliminated. Last player standing wins.</p>
    `
  },
  {
    id: 'egyptianratscrew',
    name: 'Egyptian Rat Screw (Slap)',
    minPlayers: 2,
    maxPlayers: 6,
    isFavorite: false,
    rules: `
      <h3>Objective & Winning</h3>
      <p>Win all the cards in the deck by slapping valid patterns and winning face-card battles. The player who collects all 52 cards wins the game.</p>
      <h3>Setup</h3>
      <p>Deal out the entire deck face down evenly. Do not look at your cards.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. Players take turns quickly flipping the top card of their deck into a single center pile.</p>
      <p>2. <strong>Face-Card Battles:</strong> If a Face Card or Ace is played, the next player must play another Face/Ace within a limited number of chances (J=1 chance, Q=2, K=3, A=4). If they fail to reveal a Face/Ace, the person who played the original Face/Ace wins the entire pile.</p>
      <p>3. <strong>Slapping:</strong> ANYONE can slap the pile at any time to win it if the top cards form a pattern:</p>
      <ul>
        <li><strong>Doubles:</strong> Two cards of the same rank in a row (e.g., 5 then 5).</li>
        <li><strong>Sandwiches:</strong> Two cards of the same rank separated by one card (e.g., 5, then a King, then another 5).</li>
      </ul>
      <p>4. Slap incorrectly, and you must burn a card to the bottom of the center pile as a penalty.</p>
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
      <h3>Objective & Winning</h3>
      <p>A partnership rummy game where you try to form "Canastas" (melds of 7 or more cards). The first team to reach 5000 points wins the game.</p>
      <h3>Setup</h3>
      <p>Use two 52-card decks with 4 Jokers mixed in. Deal 11 cards to each player. 2s and Jokers are Wild. Start a draw and discard pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Draw:</strong> On your turn, draw the top card from the deck. Alternatively, you can pick up the ENTIRE discard pile, but ONLY if you can immediately use the top card of the pile in a meld.</p>
      <p>2. <strong>Meld:</strong> Lay down melds (3+ cards of the same rank, no runs). Partners share melds on the table.</p>
      <p>3. <strong>Discard:</strong> Discard one card to end your turn. Black 3s block the next player from picking up the pile.</p>
      <h3>Scoring & Going Out</h3>
      <p>A team cannot "go out" (empty their hands) until they have formed at least one Canasta (a meld of 7+ cards). A Natural Canasta (no wilds) is worth 500 bonus points, Mixed is 300. Tally the value of all melded cards and subtract the value of cards left in hands.</p>
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
      <h3>Objective & Winning</h3>
      <p>Be the first player to move all the cards from your personal "pay-off" pile into the center foundation piles to win the game.</p>
      <h3>Setup</h3>
      <p>Use 2 decks. Kings are wild. Deal a 20-card "pay-off" pile face-down to each player, flipping the top card face-up. Deal 5 cards to each player's hand. The rest is the central draw pile.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. On your turn, draw from the central draw pile until you have 5 cards in your hand.</p>
      <p>2. You play cards to the center foundation piles. These piles must start with an Ace and build sequentially up to a Queen (A, 2, 3... Q). Once a Queen is played, the pile is cleared.</p>
      <p>3. You can play cards from three places: your hand, the top of any of your 4 personal discard piles, or the top card of your pay-off pile. (Playing from the pay-off pile is your main goal!)</p>
      <p>4. To end your turn, you MUST discard one card from your hand into one of your 4 personal discard piles.</p>
      <h3>Winning</h3>
      <p>The moment you play the final card of your pay-off pile to the center, you win!</p>
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
      <h3>Objective & Winning</h3>
      <p>A partnership trick-taking game. Score points by forming specific melds in your hand and winning tricks containing "counters". The first team to reach 1500 points wins.</p>
      <h3>Setup</h3>
      <p>Requires a 48-card Pinochle deck (two of every 9, 10, J, Q, K, A in all suits). Deal 12 cards to each player.</p>
      <h3>Gameplay (Order of Operations)</h3>
      <p>1. <strong>Bidding:</strong> Players bid based on the points they think they can score. The winning bidder names the Trump suit, and their partner passes them 3 cards.</p>
      <p>2. <strong>Melding:</strong> All players reveal specific combinations of cards for immediate points (e.g., Run in trump, Pinochle = Jack of Diamonds + Queen of Spades, Marriages).</p>
      <p>3. <strong>Trick-Taking:</strong> Play out the hand. You MUST follow suit AND you MUST play a higher card to win the trick if possible. If you can't follow suit, you MUST play a Trump card if you have one.</p>
      <h3>Scoring</h3>
      <p>During trick-taking, Aces, 10s, and Kings are "counters" worth 1 point each. Add your Meld points and your Counter points together. If the bidding team fails to reach their bid, they lose the bid amount.</p>
    `
  }
];

export default gamesData;
