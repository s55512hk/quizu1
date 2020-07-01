let que = document.getElementById("que");
let res = document.getElementById("res");
let iras = document.getElementById("iras");
let maru = document.getElementById("maru");
let batu = document.getElementById("batu");
let cnt = 25;
let sco = 0;
let flag = true;
//タイマー処理
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア:" + sco + "｜時間：" + cnt + "秒";
  } else {
    res.style.color = "res";
    res.textContent = "スコア：" + sco + "終了";
    que.textContent = "時間切れ";
    flag = false;
  }
}, 1000);
let num = 0;
let max = 10;
let name = new Array(max);
name = [
  "いっぬ",
  "トカゲ",
  "ウサギ",
  "オウム",
  "インコ",
  "馬",
  "亀",
  "ゴールディーリバーレインボーフィッシュ",
  "カプロスクス",
  "バーコードヘア",
];
let seikai = new Array(max);
seikai = ["〇", "×", "〇", "×", "×", "〇", "〇", "×", "〇", "〇"];
maru.addEventListener("click", () => {
  if (flag) {
    console.log(maru);
    if (seikai[num] == "〇") {
      que.textContent = "問題" + (num + 1) + "正解";
      sco = sco + 1;
      res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
    } else {
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num = num + 1;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + "" + name[num];
        iras.src = "img/irasuto" + num + ".png";
      }, 500);
    } else {
      que.textContent = "問題の解答終了";
      clearInterval(time);
      if (sco == 10) {
        que.textContent = "全問正解おめでとう";
        iras.src = "img/clear.png";
      }
    }
  }
});
batu.addEventListener("click", () => {
  if (flag) {
    console.log("batu");
    if (seikai[num] == "×") {
      que.textContent = "問題" + (num + 1) + "正解";
      sco = sco + 1;
      res.textContent = "スコア：" + sco + "｜時間：" + cnt + "秒";
    } else {
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num = num + 1;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + "" + name[num];
        iras.src = "img/irasuto" + num + ".png";
      }, 500);
    } else {
      que.textContent = "問題の解答終了";
      clearInterval(time);
      if (sco == 10) {
        que.textContent = "全問正解おめでとう";
        iras.src = "img/clear.png";
      }
    }
  }
});
