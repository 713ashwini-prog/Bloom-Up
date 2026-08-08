const checkboxes = document.querySelectorAll(
  'input[type="checkbox"]'
);

const message = document.getElementById("quote");

const messages = [
  "できる日じゃない。やる日にする。",
  "あと少し。ここで止まらない。",
  "昨日の自分を、今日の自分が超える。",
  "小さな積み重ねが、一番強い。",
  "自分に負けない。自分を育てる。",
  "今日も一歩前へ。🌻"
];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {

    const completed = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;

    if (completed === checkboxes.length) {
      message.textContent =
        "MISSION COMPLETE！！🔥🌻";

      document.body.classList.add("complete");

    } else {
      message.textContent =
        messages[completed % messages.length];

      document.body.classList.remove("complete");
    }
  });
});
