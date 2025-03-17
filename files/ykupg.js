let ykupg = [
  false, false, false, false, 
  false, false, false, false, 
  false, false, false, false, 
  false, false, false, 
  0, 0
]
const upgcontent = [
  [
    `<mo style="font-family: 'YYReset';">解锁</mo><msup><mi>y</mi><msup><mn>2</mn><mi>n</mi></msup></msup>`,
    `<mo style="font-family: 'YYReset';">自动购买器</mo>`
  ],
  [
    `<msup><mi>y</mi><mrow><mi>k</mi><mo>×</mo><mn>2</mn></mrow></msup>
<mo style="font-family: 'YYReset';">生成器</mo>`,
    `<mo>×</mo><mn>8</mn>`
  ],
  [
    `<mo style="font-family: 'YYReset';">解锁矿产</mo>`,
    `<mo style="font-family: 'YYReset';">资源</mo>`
  ],
  [
    `<mi>z</mi><mo style="font-family: 'YYReset';">星系不重</mo>`,
    `<mo style="font-family: 'YYReset';">置任何东西</mo>`
  ],
  [
    `<mo style="font-family: 'YYReset';">解锁自动</mo>`,
    `<mo style="font-family: 'YYReset';">购买</mo>
<mi>z</mi><mo style="font-family: 'YYReset';">星系</mo>`
  ],
  [
    `<mi>z</mi><mo style="font-family: 'YYReset';">星系</mo>`,
    `<mo style="font-family: 'YYReset';">价格降低</mo>`
  ],
  [
    `<mo style="font-family: 'YYReset';">解锁</mo>`,
    `<msup><mi>z</mi><mn>2</mn></msup><mo style="font-family: 'YYReset';">星系</mo>`
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
]
const upgcost = [
  E(72), 
  E(144), E(576), 
  E(1152), E(1728), E(2880), E(5760), 
  E(Infinity), E(Infinity), E(Infinity), E(Infinity), E(Infinity), E(Infinity), E(Infinity), E(Infinity), 
  [E(Infinity), E(Infinity), E(Infinity), E(Infinity), E(Infinity), E(Infinity)],
  [E(Infinity), E(Infinity), E(Infinity), E(Infinity), E(Infinity), E(Infinity)],
]

function buy_ykupg(x, y) {
  if (yklng[0].y.gte(x == 4 ? upgcost[2 ** x - 1 + y][ykupg[2 ** x - 1 + y]] : 
      upgcost[2 ** x - 1 + y]) && !(x == 4 ? ykupg[2 ** x - 1 + y] == 5 : 
      ykupg[2 ** x - 1 + y])) {
    if (x == 4) {
      ykupg[2 ** x - 1 + y] += 1
    } else {
      ykupg[2 ** x - 1 + y] = true
    }
  }
}

function display_space() {
  return `<math>
  <mo> </mo>
</math>`
}

function display_a_ykupg(x, y) {
  return`<button class="ykupg" ${(x == 4 ? ykupg[2 ** x - 1 + y] == 5 : 
    ykupg[2 ** x - 1 + y]) ? `style="background: #ffc080"` : ""}
    onmousedown="buy_ykupg(${x}, ${y})">
  <math display="block" class="ykupg">
    <msubsup>
      <mi>U</mi>
      <mn>${y}</mn>
      ${x == 4 ? "<mi>" : "<mn>"}
      ${x == 4 ? "n" : x}
      ${x == 4 ? "</mi>" : "</mn>"}
    </msubsup>
    <mo style="font-family: 'YYReset';">升级</mo><mo>:</mo>
  </math>
  <math display="block" class="ykupg">
    ${upgcontent[2 ** x - 1 + y][0]}
  </math>
  <math display="block" class="ykupg">
    ${upgcontent[2 ** x - 1 + y][1]}
  </math>
  <math display="block" class="ykupg">
    <mo style="font-family: 'YYReset';">价格</mo><mo>:</mo>${format(x == 4 ?
      upgcost[2 ** x - 1 + y][ykupg[2 ** x - 1 + y]] : upgcost[2 ** x - 1 + y])}
  </math>
</button>
`
}

function display_ykupg() {
  return `${display_a_ykupg(0, 0)}
<br><br>
${display_a_ykupg(1, 0)}
${display_space()}
${display_a_ykupg(1, 1)}
<br><br>
${display_a_ykupg(2, 0)}
${display_space()}
${display_a_ykupg(2, 1)}
${display_space()}
${display_a_ykupg(2, 2)}
${display_space()}
${display_a_ykupg(2, 3)}
<br><br>
${display_a_ykupg(3, 0)}
${display_space()}
${display_a_ykupg(3, 1)}
${display_space()}
${display_a_ykupg(3, 2)}
${display_space()}
${display_a_ykupg(3, 3)}
${display_space()}
${display_a_ykupg(3, 4)}
${display_space()}
${display_a_ykupg(3, 5)}
${display_space()}
${display_a_ykupg(3, 6)}
${display_space()}
${display_a_ykupg(3, 7)}` +
    (yb.maxz.gte(6) ? `
<br><br>
${display_a_ykupg(4, 0)}
${display_space()}
${display_a_ykupg(4, 1)}
` : "")
}

function update_ykupg(a = true, b = true) {
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_ykupg()
}
