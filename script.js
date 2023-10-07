function initstatus() {
  pockerDeck = "52";
  appear = "utf8";
}

function showSecondScreen() {
  document.getElementById('firstScreen').style.display = 'none';
  document.getElementById('secondScreen').style.display = 'block';

  var secondScreen = document.getElementById("secondScreen");
  var cardContainers = secondScreen.getElementsByClassName("card-container");
  for (var i = cardContainers.length - 1; i >= 0; i--) {
    var cardContainer = cardContainers[i];
    secondScreen.removeChild(cardContainer);
  }

  // add <div class="card" onclick="makeTransparent(this)">A <br> ♠</div>
  const cardnums = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

  var container;
  if (pockerDeck=="54") {
    container = document.createElement("div");
    container.className = "card-container";
    document.getElementById("secondScreen").appendChild(container);
    for (let i of ["🃏","🂿"]){
      const card = document.createElement("div");
      card.className = "card";
      card.onclick = function(){makeTransparent(this);};
      card.innerHTML = i;
      container.appendChild(card);
    }
  }

  container = document.createElement("div");
  container.className = "card-container";
  document.getElementById("secondScreen").appendChild(container);
  for (let i of cardnums){
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = function(){makeTransparent(this);};
    card.innerHTML = i + `<br>♠`;
    container.appendChild(card);
  }

  container = document.createElement("div");
  container.className = "card-container";
  document.getElementById("secondScreen").appendChild(container);
  for (let i of cardnums){
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = function(){makeTransparent(this);};
    card.innerHTML = `<span class="red-text">${i}<br>♥</span>`;
    container.appendChild(card);
  }

  container = document.createElement("div");
  container.className = "card-container";
  document.getElementById("secondScreen").appendChild(container);
  for (let i of cardnums){
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = function(){makeTransparent(this);};
    card.innerHTML = `<span class="red-text">${i}<br>♦</span>`;
    container.appendChild(card);
  }

  container = document.createElement("div");
  container.className = "card-container";
  document.getElementById("secondScreen").appendChild(container);
  for (let i of cardnums){
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = function(){makeTransparent(this);};
    card.innerHTML = `${i}<br>♣`;
    container.appendChild(card);
  }

}

function changeDeck() {
  pockerDeck = document.getElementById("pokerDeck").value;
  showSecondScreen();
}

function changeAppear() {
  appear = document.getElementById("pokerAppearance").value;
  Telegram.WebApp.showAlert("Sorry, another appearance is under developing.")
}

// JavaScript函數，用於使卡片變為半透明
function makeTransparent(card) {
  card.classList.toggle('transparent');
  updateCardCount();
}

// JavaScript函數，用於更新每個花色的卡片數統計
function updateCardCount() {
  const cardElements = document.querySelectorAll('.card');
  const cardCount = {
    'Club': 0,
    'Diamond': 0,
    'Heart': 0,
    'Spade': 0,
  };

  cardElements.forEach(card => {
    if (!card.classList.contains('transparent')) {
      const cardText = card.textContent.trim();
      const cardSuit = cardText.substr(-1);
      cardCount[getSuitName(cardSuit)]++;
    }
  });

  const cardTitle = document.getElementById('cardTitle');
  cardTitle.innerHTML = `${cardCount['Spade']}♠, <span class="red-text">${cardCount['Heart']}♥, ${cardCount['Diamond']}♦,</span> ${cardCount['Club']}♣`;
}

// JavaScript函數，用於根據花色編碼獲取花色名稱
function getSuitName(suitCode) {
  switch (suitCode) {
    case '♣': return 'Club';
    case '♦': return 'Diamond';
    case '♥': return 'Heart';
    case '♠': return 'Spade';
    default: return 'Unknown';
  }
}