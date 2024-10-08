let yklng = [
  {
    y: E(0),
    p: E(0),
    glevel: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)],
    gen: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)],
    maxy: E(0)
  }
]
let currentl = 1

function multiplyerl(l, n) {
  return E(2).pow(yklng[l - 1].glevel[n - 1].mul(ym() / 32).sub(2))
}

function speedl(l, n) {
  return yklng[l - 1].gen[n - 1].mul(multiplyer(n))
}

function costl(l, n) {
  return E(2).pow(E(2).pow(n).mul(yklng[l - 1].glevel[n - 1].add(0.5)))
}

function buy_ykln(l, n) {
  if (yklng[l - 1].y.gte(cost(n))) {
    yklng[l - 1].glevel[n - 1] = yklng[l - 1].glevel[n - 1].add(1)
    yklng[l - 1].gen[n - 1] = yklng[l - 1].gen[n - 1].add(1)
  }
}

function buy_ykln_max(l, n) {
  if (yklng[l - 1].y.gte(cost(n))) {
    yklng[l - 1].gen[n - 1] = yklng[l - 1].gen[n - 1].sub(yklng[l - 1].glevel[n - 1])
    yklng[l - 1].glevel[n - 1] = yklng[l - 1].y.log().mul(E.LOG2E).div(E(2).pow(n)).sub(0.5).ceil()
    yklng[l - 1].gen[n - 1] = yklng[l - 1].gen[n - 1].add(yklng[l - 1].glevel[n - 1])
  }
}

function buy_ykln_max_all(l) {
  buy_ykln_max(l, 1)
  buy_ykln_max(l, 2)
  buy_ykln_max(l, 3)
  buy_ykln_max(l, 4)
  buy_ykln_max(l, 5)
  buy_ykln_max(l, 6)
  buy_ykln_max(l, 7)
  buy_ykln_max(l, 8)
}

function display_l2n(l, n) {
  return [
    [ 
      `<msup><mi>y</mi><mrow><msup><mi>k</mi><mn>${l}</mn></msup>
<mo>×</mo><mn>${2 ** n}</mn></mrow></msup>`,
      `<msup><mi>y</mi><mrow><msup><mi>k</mi><mn>${l}</mn></msup></mrow></msup>`
    ],
    [
      `<msup><mi>y</mi><mrow><mi>k</mi><mo>×</mo><mn>${2 ** n}</mn></mrow></msup>`,
      `<msup><mi>y</mi><mi>k</mi></msup>`
    ]
  ][+(l == 1)][+(n == 0)]
}

function display_pl(l) {
  return l == 1 ? `<mi>p</mi>` : `<msup><mi>p</mi><mn>${l}</mn></msup>`
}

function display_ykl(l) {
  return `<math display="block" class="y">
  <mo style="font-family: 'YYReset';">你有</mo>
  <mrow>${format(yklng[l - 1].y)}</mrow>
  ${display_l2n(l, 0)}
  <mo style="font-family: 'YYReset';">和</mo>
  <mrow>${format(yklng[l - 1].p)}</mrow>
  ${display_pl(l)}
</math>`
}

function display_buy_max_alll(l) {
  return `<button name="max" type="button" class="max" onmousedown="buy_ykln_max_all(${l})">
  <math>
    <mo style="font-family: 'YYReset';">全部购买最大</mo>
    <mo>(</mo><mo style="font-family: 'YYReset';">快捷键</mo><mo>:</mo>
    <mo>${["N", "B", "V", "C", "X", "Z", "A", "S"][l - 1]}</mo><mo>)</mo>
  </math>
</button>`
}

function display_ykln(l, n) {
  return `<math display="block" class="y${2 ** n}">
  <mo style="font-family: 'YYReset';">你有</mo>
  ${format(yklng[l - 1].gen[n - 1])}
  ${display_l2n(l, n)}
  <mo style="font-family: 'YYReset';">生成器，等级为</mo>
  ${format(yklng[l - 1].glevel[n - 1], 0)}
  <mo style="font-family: 'YYReset';">，每秒生成</mo>
  ${format(yklng[l - 1].gen[n - 1])}
  <mo>×</mo>
  ${format(multiplyerl(l, n))}
  ${n == 1 ? display_pl(l) : display_l2n(l, n - 1)}
  <mo>=</mo>
  ${format(speedl(l, n))}
  ${n == 1 ? display_pl(l) : display_l2n(l, n - 1)}
</math>
<button name="buy" type="button" class="y${2 ** n}" onmousedown="buy_y2ng(${n})">
  <math>
    <mo style="font-family: 'YYReset';">购买一个</mo>
    ${display_l2n(l, n)}
    <mo style="font-family: 'YYReset';">生成器，花费</mo>
    ${format(costl(l, n))}
    ${display_l2n(l, 0)}
  </math>
</button>
<button name="buymax" type="button" class="y${2 ** n}" onmousedown="buy_y2ng_max(${n})">
  <math>
    <mo style="font-family: 'YYReset';">购买最大</mo>
  </math>
</button>`
}

function display_yklng(l) {
  return `${display_ykl(l)}
<br>
${display_buy_max_alll(l)}
${display_ykln(l, 1)}
${display_ykln(l, 2)}
${display_ykln(l, 3)}
${display_ykln(l, 4)}
${display_ykln(l, 5)}
${display_ykln(l, 6)}
${display_ykln(l, 7)}
${display_ykln(l, 8)}`
}

function update_yklng(l, a = true, b = true) {
  if (b) {
    yklng[l - 1].p = yklng[l - 1].p.add(speedl(l, 1).mul(0.02))
    for (let n = 1; n < 8; n++) {
      yklng[l - 1].gen[n - 1] = yklng[l - 1].gen[n - 1].add(speedl(l, n + 1).mul(0.02))
    }
    if (yklng[l - 1].y.gt(yklng[l - 1].maxy)) {
      yklng[l - 1].maxy = yklng[l - 1].y
    }
  }
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_yklng(l)
}

function buy_ykln_max_all_alll() {
  buy_y2ng_max_all()
  buy_ykln_max_all(1)
  if (yklng.length >= 2) buy_ykln_max_all(2)
  if (yklng.length >= 3) buy_ykln_max_all(3)
  if (yklng.length >= 4) buy_ykln_max_all(4)
  if (yklng.length >= 5) buy_ykln_max_all(5)
  if (yklng.length >= 6) buy_ykln_max_all(6)
  if (yklng.length >= 7) buy_ykln_max_all(7)
  if (yklng.length >= 8) buy_ykln_max_all(8)
}

document.addEventListener("keydown", key => {
  if (key.key == "n") {
    buy_ykln_max_all(1)
  }
  if (key.key == "b" && yklng.length >= 2) {
    buy_ykln_max_all(2)
  }
  if (key.key == "v" && yklng.length >= 3) {
    buy_ykln_max_all(3)
  }
  if (key.key == "c" && yklng.length >= 4) {
    buy_ykln_max_all(4)
  }
  if (key.key == "x" && yklng.length >= 5) {
    buy_ykln_max_all(5)
  }
  if (key.key == "z" && yklng.length >= 6) {
    buy_ykln_max_all(6)
  }
  if (key.key == "a" && yklng.length >= 7) {
    buy_ykln_max_all(7)
  }
  if (key.key == "s" && yklng.length >= 8) {
    buy_ykln_max_all(8)
  }
  if (key.key == "q") {
    buy_ykln_max_all_alll()
  }
})
