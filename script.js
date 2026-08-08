const workouts = {
  0: {
    day: "SUN",
    title: "🌿 リカバリーDAY",
    description: "今週頑張った体をゆっくり整えよう。",
    url: "https://www.youtube.com/watch?v=YpzDOS4_Ffs"
  },

  1: {
    day: "MON",
    title: "🔥 全身START",
    description: "週のスタート。無理せず全身を動かそう！",
    url: "https://www.youtube.com/results?search_query=竹脇まりな+全身+宅トレ"
  },

  2: {
    day: "TUE",
    title: "🦵 下半身DAY",
    description: "脚・お尻を中心にトレーニング！",
    url: "https://www.youtube.com/results?search_query=竹脇まりな+下半身+トレーニング"
  },

  3: {
    day: "WED",
    title: "💃 有酸素DAY",
    description: "音楽に合わせて楽しく体を動かそう！",
    url: "https://www.youtube.com/results?search_query=竹脇まりな+痩せるダンス+有酸素"
  },

  4: {
    day: "THU",
    title: "💪 上半身DAY",
    description: "二の腕・背中をしっかり動かそう！",
    url: "https://www.youtube.com/watch?v=jnhzbGtJvng"
  },

  5: {
    day: "FRI",
    title: "🧘 軽めDAY",
    description: "疲れを残さないように、軽く整えよう。",
    url: "https://www.youtube.com/watch?v=YpzDOS4_Ffs"
  },

  6: {
    day: "SAT",
    title: "🔥 全身チャレンジ",
    description: "今週の締め！自分のペースで頑張ろう。",
    url: "https://www.youtube.com/results?search_query=竹脇まりな+全身+脂肪燃焼"
  }
};

const today = new Date().getDay();
const workout = workouts[today];

document.getElementById("day").textContent = workout.day;
document.getElementById("training-title").textContent = workout.title;
document.getElementById("training-description").textContent =
  workout.description;
document.getElementById("training-link").href = workout.url;


/* 今日のミッション */

const missions = document.querySelectorAll(".mission input");
const missionMessage = document.getElementById("mission-message");

missions.forEach(function(mission) {
  mission.addEventListener("change", function() {

    const completed =
      document.querySelectorAll(".mission input:checked").length;

    if (completed === missions.length) {
      missionMessage.textContent =
        "🎉 MISSION COMPLETE！！今日も最高！🌻";
    } else if (completed === 0) {
      missionMessage.textContent =
        "今日も一歩ずつ🌻";
    } else {
      missionMessage.textContent =
        completed + " / " + missions.length +
        " ミッション達成🔥";
    }

  });
});
