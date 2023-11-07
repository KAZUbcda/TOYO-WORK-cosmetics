// 紹介ページに進むをクリックしたら個人の紹介ページに切り替える機能
// カテゴリをクリックしたらランキングページに切り替える機能
document.addEventListener("DOMContentLoaded", function() {
  //ランキングページのみ処理を行う
  if (window.location.href.includes("engineer_member.html")){
    // 切り替えるURLを含む<a>要素を取得
    const myFrame = document.getElementById("myframe")
    function matsumoto_move() {
      myFrame.src = "member_list/matsumoto.html"
    }

    function gosima_move() {
      myFrame.src = "member_list/gosima.html"
    }

    function maeda_move() {
      myFrame.src = "member_list/maeda.html"
    }

    function someno_move() {
      myFrame.src = "member_list/someno.html"
    }

    function minami_move() {
      myFrame.src = "member_list/minami.html"
    }

    function tomaru_move() {
      myFrame.src = "member_list/tomaru.html"
    }
    function morisaki_move() {
      myFrame.src = "member_list/morisaki.html"
    }

    // クリックする要素を取得する
    document.getElementById("sentence_matsumoto").addEventListener("click", matsumoto_move);
    document.getElementById("sentence_gosima").addEventListener("click", gosima_move);
    document.getElementById("sentence_maeda").addEventListener("click", maeda_move);
    document.getElementById("sentence_someno").addEventListener("click", someno_move);
    document.getElementById("sentence_minami").addEventListener("click", minami_move);
    document.getElementById("sentence_tomaru").addEventListener("click", tomaru_move);
    document.getElementById("sentence_morisaki").addEventListener("click", morisaki_move);

  }
});