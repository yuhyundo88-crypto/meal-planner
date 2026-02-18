const menuList = [
  "김치찌개", "된장찌개", "비빔밥",
  "돈까스", "초밥", "제육볶음",
  "칼국수", "떡볶이", "햄버거",
  "샐러드"
];

function generateMealPlan() {
  const location = document.getElementById("locationInput").value;
  const budget = document.getElementById("budgetInput").value;

  if (!location || !budget) {
    alert("모든 값을 입력하세요.");
    return;
  }

  searchAddress(location, function(address) {
    document.getElementById("addressResult").innerText =
      "검색된 주소: " + address;
  });

  createCalendar();
}

function createCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  let lastThree = [];

  for (let i = 1; i <= 30; i++) {
    let menu;

    do {
      menu = menuList[Math.floor(Math.random() * menuList.length)];
    } while (lastThree.includes(menu));

    lastThree.push(menu);
    if (lastThree.length > 3) lastThree.shift();

    const dayBox = document.createElement("div");
    dayBox.className = "day";
    dayBox.innerText = i + "일\n" + menu;

    calendar.appendChild(dayBox);
  }
}