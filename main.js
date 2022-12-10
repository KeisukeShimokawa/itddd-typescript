window.onload = function () {
  // Canvas要素を取得する
  const canvas = document.getElementById("html-canvas");
  const context = canvas.getContext("2d");

  // 線を引いていく
  context.beginPath();
  context.moveTo(30, 70);
  context.lineTo(130, 70);
  context.stroke();
};
