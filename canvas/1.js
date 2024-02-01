const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const MARGIN = 35,
  RADIUS = canvas.width / 2 - MARGIN,
  HAND_TRUNCATION = canvas.width / 25,
  HOUR_HAND_TRUNCATION = canvas.width / 10,
  NUMERAL_SPACING = 20,
  HAND_RADIUS = RADIUS + NUMERAL_SPACING,
  FONT_HEIGHT = 15

function drawCircle() {
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2);
  context.stroke();
}

function drawCenter() {
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, true);
  context.fill();
}

function drawHand(loc, isHour) {
  const angle = Math.PI * 2 * (loc / 60) - Math.PI / 2,
    handRadius = isHour
      ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION
      : RADIUS - HAND_TRUNCATION;
  context.moveTo(canvas.width / 2, canvas.height / 2);
  context.lineTo(
    canvas.width / 2 + Math.cos(angle) * handRadius,
    canvas.height / 2 + Math.sin(angle) * handRadius
  );
  context.stroke();
}
function drawHands() {
  const date = new Date()
  let hour = date.getHours()

  hour = hour > 12 ? hour - 12 : hour

  drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true)
  drawHand(date.getMinutes(), false)
  drawHand(date.getSeconds(), false)
}

function drawNumerals() {
  const numerals = [1,2,3,4,5,6,7,8,9,10,11,12]
  let angle = 0
  let numeralWidth = 0

  numerals.forEach(numeral=> {
    angle = Math.PI / 6 * (numeral - 3)
    numeralWidth = context.measureText(numeral).width
    context.fillText(numeral, canvas.width / 2 + Math.cos(angle) * (HAND_RADIUS) - numeralWidth / 2, canvas.height / 2 + Math.sin(angle) * (HAND_RADIUS) + FONT_HEIGHT / 3)
  })
}

function drawClock() {
  drawCircle();
  drawCenter();
  drawHands();
  drawNumerals()
}

drawClock();
// loop = setInterval(drawClock, 1000);

/**
 * 180度 等于 PI弧度
 * 1弧度 = 180度 / PI
 * 1度 = PI弧度 / 180 
 * 
 * 正弦 sin 余弦 cos 正切 tan
 * */ 
