let y2ng = {
  y: E(2),
  ym: 24,
  glevel: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)],
  gen: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)]
}

function Speed(n) {
  return y2ng.gen[n - 1].mul(E(2).pow(y2ng.glevel[n - 1].mul(y2ng.ym / 32).sub(2)))
}

function Price(n) {
  return E(2).pow(E(2).pow(n).mul(y2ng.glevel[n - 1].add(0.5)))
}

function buy_y2ng(n) {
  if (y2ng.y.gte(Price(n))) {
    y2ng.glevel[n - 1] = y2ng.glevel[n - 1].add(1)
    y2ng.gen[n - 1] = y2ng.gen[n - 1].add(1)
  }
}

function buy_y2ng_max(n) {
  if (y2ng.y.gte(Price(n))) {
    y2ng.gen[n - 1] = y2ng.gen[n - 1].sub(y2ng.glevel[n - 1])
    y2ng.glevel[n - 1] = y2ng.y.log().mul(E.LOG2E).div(E(2).pow(n)).sub(0.5).ceil()
    y2ng.gen[n - 1] = y2ng.gen[n - 1].add(y2ng.glevel[n - 1])
  }
}

function buy_y2ng_max_all() {
  buy_y2ng_max(1)
  buy_y2ng_max(2)
  buy_y2ng_max(3)
  buy_y2ng_max(4)
  buy_y2ng_max(5)
  buy_y2ng_max(6)
  buy_y2ng_max(7)
  buy_y2ng_max(8)
}

function display_ym() {
  return `<math display="block" class="ym">
  <mo style="font-family: 'YYReset';">每次购买乘数</mo><mo>:</mo>
  <msup>
    <mn>2</mn>
    <mrow>${y2ng.ym == 0 || y2ng.ym == 32 ? `<mn>${y2ng.ym / 32}<mn>` : 
    `<mfrac><mn>${y2ng.ym / gcd(y2ng.ym, 32)}</mn><mn>${32 / gcd(y2ng.ym, 32)}</mn></mfrac>`}</mrow>
  </msup>
  <mo>=</mo>
  <mrow>${format(E(2).pow(y2ng.ym / 32))}</mrow>
</math>`
}

function display_buy_max_all() {
  return `<button name="buymax" type="button" class="y" onmousedown="buy_y2ng_max_all()">
  <math>
    <mo style="font-family: 'YYReset';">全部购买最大</mo>
    <mo>(</mo><mo style="font-family: 'YYReset';">快捷键</mo><mo>:</mo>
    <mo>M</mo><mo>)</mo>
  </math>
</button>`
}

function display_y2n(n) {
  return `<math display="block" class="y${2 ** n}">
  <mo style="font-family: 'YYReset';">你有</mo>
  <mrow>${format(y2ng.gen[n - 1])}</mrow>
  <msup>
    <mi>y</mi>
    <mn>${2 ** n}</mn>
  </msup>
  <mo style="font-family: 'YYReset';">生成器，等级为</mo>
  <mrow>${format(y2ng.glevel[n - 1], 0)}</mrow>
  <mo style="font-family: 'YYReset';">，每秒生成</mo>
  <mrow>${format(y2ng.gen[n - 1])}</mrow>
  <mo>×</mo>
  <mrow>${format(E(2).pow(y2ng.glevel[n - 1].mul(y2ng.ym / 32).sub(2)))}</mrow>
  <mi>y</mi>
  <mo>=</mo>
  <mrow>${format(Speed(n))}</mrow>
  <mi>y</mi>
</math>
<button name="buy" type="button" class="y${2 ** n}" onmousedown="buy_y2ng(${n})">
  <math>
    <mo style="font-family: 'YYReset';">购买一个</mo>
    <msup>
      <mi>y</mi>
      <mn>${2 ** n}</mn>
    </msup>
    <mo style="font-family: 'YYReset';">生成器，花费</mo>
    <mrow>${format(Price(n))}</mrow>
    <mi>y</mi>
  </math>
</button>
<button name="buymax" type="button" class="y${2 ** n}" onmousedown="buy_y2ng_max(${n})">
  <math>
    <mo style="font-family: 'YYReset';">购买最大</mo>
  </math>
</button>`
}

function display_y2ng() {
  return `${display_ym()}
<br>
${display_buy_max_all()}
${display_y2n(1)}
${display_y2n(2)}
${display_y2n(3)}
${display_y2n(4)}
${display_y2n(5)}
${display_y2n(6)}
${display_y2n(7)}
${display_y2n(8)}
<br>
<button name="stop" type="button" class="stop" onmousedown="_stop = !_stop;
  update_y();update_y2n()">
  <mo style="font-family: 'YYReset';">${_stop ? "继续" : "暂停"}游戏</mo>
</button>`
}

function update_y2n(a = true, b = true) {
  if (b) {
    y2ng.y = y2ng.y.add(Speed(1).mul(0.02))
    for (let n = 1; n < 8; n++) {
      y2ng.gen[n - 1] = y2ng.gen[n - 1].add(Speed(n + 1).mul(0.02))
    }
  }
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_y2ng()
}

document.addEventListener("keydown", key => {
  if (key.key == "m") {
    buy_y2ng_max_all()
  }
})
