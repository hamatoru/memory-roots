
  function moveToNextField(currentField, nextField) {
    if (currentField.value.length === currentField.maxLength) {
      nextField.focus();
          }
      }
        
    // 年、月、日のテキストフィールド
    let birthYearInput = document.getElementById("birthYear");
    let birthMonthInput = document.getElementById("birthMonth");
    let birthDayInput = document.getElementById("birthDay");

    // 行事の情報（複数の行事を配列で格納）
    let events = [
      { name: "お七夜", daysAfterBirth: 6 },
      { name: "お宮参り", daysAfterBirth: 30 },
      { name: "お食い初め", daysAfterBirth: 99 },
      { name: "ハーフバースディ", daysAfterBirth: 182 },
      { name: "初節句", daysAfterBirth: 186 },
      { name: "初誕生日", daysAfterBirth: 366 },
      { name: "七五三(５歳)", daysAfterBirth: 1841 },
      { name: "小学校 入学", daysAfterBirth: 2343 },
      { name: "十三参り", daysAfterBirth: 4181 }
      // 他の行事を追加できます
    ];

    // 年齢と行事の日付を計算し、表示を更新する関数
    function calculateAgeAndEvents() {
    // 生年、生月、生日の入力値を取得
    let birthYear = parseInt(birthYearInput.value, 10);
    let birthMonth = parseInt(birthMonthInput.value, 10);
    let birthDay = parseInt(birthDayInput.value, 10);

    // 正しい日付かどうかを確認
    if (!isValidDate(birthYear, birthMonth, birthDay)) {
      let resultElement = document.getElementById("ageResult");
      resultElement.innerHTML = "正しい生年月日を入力してください。";
      clearEvents();
      return;
    }

    // 現在の日付を取得
    let currentDate = new Date();

    // 生年月日を設定
    let birthDate = new Date(birthYear, birthMonth - 1, birthDay);

    // 年齢を計算
    let age = currentDate.getFullYear() - birthYear;
      if (currentDate.getMonth() < birthMonth - 1 || (currentDate.getMonth() === birthMonth - 1 && currentDate.getDate() < birthDay)) {
      age--;
    }

    // 行事の日付を計算して表示
    let eventsResultElement = document.getElementById("eventsResult");
    eventsResultElement.innerHTML = "<h2>☆行事の日程☆</h2>";

    for (let i = 0; i < events.length; i++) {
      let event = events[i];
      let eventDate = new Date(birthYear, birthMonth - 1, birthDay + event.daysAfterBirth);

    // 和暦の計算
    let japaneseYear = convertToJapaneseYear(eventDate.getFullYear());
    let westernYear = "（西暦" + eventDate.getFullYear() + "年）";

    // 行事名と和暦、西暦、月、日を結合して表示（空白を挿入）
    let eventText = event.name + ": " + japaneseYear + " " + westernYear + " " + (eventDate.getMonth() + 1) + " 月 " + eventDate.getDate() + " 日<br>";

    // 表示
    eventsResultElement.innerHTML += eventText;
}

    // 年齢を表示
    let resultElement = document.getElementById("ageResult");
    resultElement.innerHTML = "年齢は " + age + " 歳です。";
    }

    // 正しい日付かどうかを確認する関数
    function isValidDate(year, month, day) {
      if (year < 1900 || year > new Date().getFullYear()) return false;
      if (month < 1 || month > 12) return false;
      if (day < 1 || day > 31) return false;

    // 2月の日数をチェック
    if (month === 2) {
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        if (day > 29) return false;
        } else {
          if (day > 28) return false;
        }
    }

    // 4, 6, 9, 11月の日数をチェック
    if ([4, 6, 9, 11].includes(month) && day > 30) return false;

      return true;
    }

    // 行事の表示をクリア
    function clearEvents() {
      let eventsResultElement = document.getElementById("eventsResult");
      eventsResultElement.innerHTML = "<h2>☆行事の日程☆</h2>";
    }

    // 西暦を和暦に変換する関数
    function convertToJapaneseYear(year) {
      if (year >= 2019) {
        return "令和" + (year - 2018) + "年";
      } else if (year >= 1989) {
          return "平成" + (year - 1988) + "年";
      } else if (year >= 1926) {
          return "昭和" + (year - 1925) + "年";
      } else if (year >= 1912) {
          return "大正" + (year - 1911) + "年";
      } else if (year >= 1868) {
          return "明治" + (year - 1867) + "年";
      } else {
          return "不明";
      }
    }