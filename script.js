// JavaScript函數，用於顯示第二個畫面
function showSecondScreen() {
  document.getElementById('firstScreen').style.display = 'none';
  document.getElementById('secondScreen').style.display = 'block';
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
    '梅花': 0,
    '方塊': 0,
    '紅心': 0,
    '黑桃': 0,
  };

  cardElements.forEach(card => {
    if (!card.classList.contains('transparent')) {
      const cardText = card.textContent.trim();
      const cardSuit = cardText.substr(-1); // 獲取卡片文字的最後一個字符，即花色
      cardCount[getSuitName(cardSuit)]++;
    }
  });

  const cardTitle = document.getElementById('cardTitle');
  cardTitle.innerHTML = `♠:${cardCount['黑桃']} <span class="red-text">♥:</span>${cardCount['紅心']} <span class="red-text">♦:</span>${cardCount['方塊']} ♣:${cardCount['梅花']} `;
}

// JavaScript函數，用於根據花色編碼獲取花色名稱
function getSuitName(suitCode) {
  switch (suitCode) {
    case '♣': return '梅花';
    case '♦': return '方塊';
    case '♥': return '紅心';
    case '♠': return '黑桃';
    default: return '未知';
  }
}