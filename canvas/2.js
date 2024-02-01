// clearRect
// stroeRecrt
// fillRect

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.fontSize = 40;
context.fillText("点击任意位置清除", 200, 60);

context.lineJoin = "round";
context.lineWidth = 30;

context.strokeStyle = '#0f0'
context.strokeRect(140, 100, 100, 100);

context.fillStyle = 'rgba(0,0,255)'
context.fillRect(280, 100, 100, 100);

context.canvas.onmousedown = function (e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
};
