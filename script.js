const workouts = {
  0: {
    day: "SUN",
    title: "🌿 リカバリーDAY",
    description: "今週頑張った体をゆっくり整えよう。",
    url: "https://www.youtube.com/"
  },

  1: {
    day: "MON",
    title: "🔥 全身トレーニング",
    description: "週のスタート！全身をしっかり動かそう。",
    url: "https://www.youtube.com/"
  },

  2: {
    day: "TUE",
    title: "🦵 下半身DAY",
    description: "脚とお尻を中心にトレーニング！",
    url: "https://www.youtube.com/"
  },

  3: {
    day: "WED",
    title: "💃 有酸素DAY",
    description: "音楽に合わせて楽しく動こう！",
    url: "https://www.youtube.com/"
  },

  4: {
    day: "THU",
    title: "💪 上半身＆体幹",
    description: "腕・背中・お腹を鍛えよう！",
    url: "https://www.youtube.com/"
  },

  5: {
    day: "FRI",
    title: "🧘 軽めDAY",
    description: "一週間の疲れを残さない軽めの運動。",
    url: "https://www.youtube.com/"
  },

  6: {
    day: "SAT",
    title: "🔥 全身チャレンジ",
    description: "今週の締め！自分のペースで頑張ろう。",
    url: "https://www.youtube.com/"
  }
};


/* 今日の曜日を取得 */

const today = new Date().getDay();

const workout = workouts[today];


/* トレーニング表示 */

document.getElementById("day").textContent =
  workout.day;

document.getElementById("training-title").textContent =
  workout.title;

document.getElementById("training-description").textContent =
  workout.description;

document.getElementById("training-link").href =
  workout.url;


/* ミッション */

const missions =
  document.querySelectorAll(".mission input");

const missionMessage =
  document.getElementById("mission-message");


missions.forEach(function(mission) {

  mission.addEventListener("change", function() {

    const completed =
      document.querySelectorAll(
        ".mission input:checked"
      ).length;

    if (completed === missions.length) {

      missionMessage.textContent =
        "🎉 MISSION COMPLETE！！今日も最高！🌻";

    } else if (completed === 0) {

      missionMessage.textContent =
        "今日も一歩ずつ🌻";

    } else {

      missionMessage.textContent =
        completed +
        " / " +
        missions.length +
        " ミッション達成🔥";

    }

  });

});
