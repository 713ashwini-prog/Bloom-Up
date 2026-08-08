const workouts = {

  0: {
    day: "SUNDAY 🌿",
    description: "今週頑張った体を整える日。",
    videos: [
      {
        category: "STRETCH",
        title: "寝る前の7分・痩せる体を作る夜ストレッチ",
        time: "約7分",
        description: "ゆっくり体を整えるリカバリー向け。",
        id: "u01cwCJ-ltU"
      },
      {
        category: "STRETCH",
        title: "初心者向け・体がらくになる10分ストレッチ",
        time: "約10分",
        description: "一日の疲れをゆっくりリセット。",
        id: "YpzDOS4_Ffs"
      }
    ]
  },

  1: {
    day: "MONDAY 🔥",
    description: "週のスタート。全身をしっかり動かそう。",
    videos: [
      {
        category: "CARDIO",
        title: "飛ばない最強有酸素・鬼の全身痩せ",
        time: "約10分",
        description: "ジャンプなしで全身を動かす有酸素。",
        id: "kmMl5ENhaks"
      },
      {
        category: "ABS",
        title: "2025年・最強お腹痩せ",
        time: "約9分",
        description: "お腹まわりを中心にトレーニング。",
        id: "HXKl01Ma0mY"
      }
    ]
  },

  2: {
    day: "TUESDAY 🦵",
    description: "脚を中心にしっかり動かす日。",
    videos: [
      {
        category: "LEGS",
        title: "2025年・最強脚やせ",
        time: "約11分",
        description: "脚を中心に動かすトレーニング。",
        id: "4OSl_Bj4ZAU"
      },
      {
        category: "CARDIO",
        title: "飛ばない最強有酸素・鬼の全身痩せ",
        time: "約10分",
        description: "脚も使いながら全身を動かす。",
        id: "kmMl5ENhaks"
      },
      {
        category: "STRETCH",
        title: "寝る前の7分ストレッチ",
        time: "約7分",
        description: "最後はゆっくり体を整えよう。",
        id: "u01cwCJ-ltU"
      }
    ]
  },

  3: {
    day: "WEDNESDAY 💃",
    description: "楽しく動いて汗をかこう。",
    videos: [
      {
        category: "CARDIO",
        title: "飛ばない最強有酸素・鬼の全身痩せ",
        time: "約10分",
        description: "音楽感覚で楽しく全身運動。",
        id: "kmMl5ENhaks"
      },
      {
        category: "ABS",
        title: "2025年・最強お腹痩せ",
        time: "約9分",
        description: "有酸素のあとにお腹をトレーニング。",
        id: "HXKl01Ma0mY"
      },
      {
        category: "STRETCH",
        title: "10分ストレッチ",
        time: "約10分",
        description: "運動後のクールダウンに。",
        id: "YpzDOS4_Ffs"
      }
    ]
  },

  4: {
    day: "THURSDAY 💪",
    description: "上半身と体幹を中心に。",
    videos: [
      {
        category: "UPPER BODY",
        title: "2025年・最強二の腕＆背中やせ",
        time: "約10分",
        description: "二の腕・背中を中心に動かす。",
        id: "2eiyW9rQ6Wg"
      },
      {
        category: "ABS",
        title: "2025年・最強お腹痩せ",
        time: "約9分",
        description: "体幹も一緒に鍛えよう。",
        id: "HXKl01Ma0mY"
      },
      {
        category: "STRETCH",
        title: "10分ストレッチ",
        time: "約10分",
        description: "最後に体を整えよう。",
        id: "YpzDOS4_Ffs"
      }
    ]
  },

  5: {
    day: "FRIDAY 🧘",
    description: "一週間の疲れを残さない軽めの日。",
    videos: [
      {
        category: "STRETCH",
        title: "寝る前の7分・夜ストレッチ",
        time: "約7分",
        description: "ゆっくり体を整えよう。",
        id: "u01cwCJ-ltU"
      },
      {
        category: "UPPER BODY",
        title: "二の腕＆背中やせ",
        time: "約10分",
        description: "無理のない範囲で上半身を動かす。",
        id: "2eiyW9rQ6Wg"
      }
    ]
  },

  6: {
    day: "SATURDAY 🔥",
    description: "今週の締め。好きなものを選んで頑張ろう。",
    videos: [
      {
        category: "CARDIO",
        title: "飛ばない最強有酸素・鬼の全身痩せ",
        time: "約10分",
        description: "しっかり動きたい日に。",
        id: "kmMl5ENhaks"
      },
      {
        category: "LEGS",
        title: "2025年・最強脚やせ",
        time: "約11分",
        description: "脚を中心にトレーニング。",
        id: "4OSl_Bj4ZAU"
      },
      {
        category: "UPPER BODY",
        title: "2025年・最強二の腕＆背中やせ",
        time: "約10分",
        description: "上半身もしっかり動かそう。",
        id: "2eiyW9rQ6Wg"
      },
      {
        category: "STRETCH",
        title: "10分ストレッチ",
        time: "約10分",
        description: "最後はしっかりストレッチ。",
        id: "YpzDOS4_Ffs"
      }
    ]
  }

};


const today = new Date().getDay();
const todayWorkout = workouts[today];


// HOMEに今日の説明を表示
document.getElementById("home-training-description").textContent =
  todayWorkout.description;


// TRAINING画面を開く
function openTraining() {

  document.getElementById("home-page").classList.add("hidden");

  document.getElementById("training-page").classList.remove("hidden");

  document.getElementById("training-day").textContent =
    todayWorkout.day;

  document.getElementById("training-description").textContent =
    todayWorkout.description;

  const videoList =
    document.getElementById("video-list");

  videoList.innerHTML = "";


  todayWorkout.videos.forEach(function(video) {

    const card = document.createElement("article");

    card.className = "video-card";

    const thumbnail =
      "https://img.youtube.com/vi/" +
      video.id +
      "/hqdefault.jpg";

    const youtubeURL =
      "https://www.youtube.com/watch?v=" +
      video.id;


    card.innerHTML = `
      <img
        class="video-thumbnail"
        src="${thumbnail}"
        alt="${video.title}"
      >

      <div class="video-content">

        <span class="video-category">
          ${video.category}
        </span>

        <h2>${video.title}</h2>

        <p>
          ${video.time}<br>
          ${video.description}
        </p>

        <a
          class="video-button"
          href="${youtubeURL}"
          target="_blank"
          rel="noopener"
        >
          ▶ YouTubeで見る
        </a>

      </div>
    `;

    videoList.appendChild(card);

  });

}


// HOMEに戻る
function closeTraining() {

  document.getElementById("training-page").classList.add("hidden");

  document.getElementById("home-page").classList.remove("hidden");

}


// ミッション
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

    } else {

      missionMessage.textContent =
        completed +
        " / " +
        missions.length +
        " ミッション達成🔥";

    }

  });

});
