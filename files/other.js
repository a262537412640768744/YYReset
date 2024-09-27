let achievement = [
  false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false,
  false, false, false, false, false, false, false, false, false, false, false, false
]
let m = [-1, 0]
let ss = [
  `<mo style="font-family: 'YYReset';">购买</mo>`,
  `<mo style="font-family: 'YYReset';">生成器</mo>`,
  `<mo style="font-family: 'YYReset';">基础值达到</mo>`,
]
let table = [
  [
    `${ss[0]}<msup><mi>y</mi><mn>2</mn></msup>${ss[1]}`,
    `${ss[0]}<msup><mi>y</mi><mn>4</mn></msup>${ss[1]}`,
    `${ss[0]}<msup><mi>y</mi><mn>8</mn></msup>${ss[1]}`,
    `${ss[0]}<msup><mi>y</mi><mn>16</mn></msup>${ss[1]}`,
    `<msub><mi>y</mi><mn>1</mn></msub>${ss[2]}<mn>24</mn>`,
    `${ss[0]}<msup><mi>y</mi><mn>32</mn></msup>${ss[1]}`,
    `${ss[0]}<msup><mi>y</mi><mn>64</mn></msup>${ss[1]}`,
    `<msub><mi>y</mi><mn>1</mn></msub>${ss[2]}<mn>256</mn>`,
  ]
]
let time = E(0)
let _stop = true

function display_choose2() {
  return [
    `<button name="y2ng" type="button" class="choose" onmousedown="choose[1] = 0">
  <math display="block">
    <msup>
      <mi>y</mi>
      <msup>
        <mn>2</mn>
        <mi>n</mi>
      </msup>
    </msup>
    <mo style="font-family: 'YYReset';">生成器</mo>
  </math>
</button>
<button name="yb" type="button" class="choose" onmousedown="choose[1] = 1">
  <math display="block">
    <mi>y</mi>
    <mo style="font-family: 'YYReset';">基础</mo>
  </math>
</button>`,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    `<button name="about" type="button" class="choose" onmousedown="choose[1] = 0">
  <math display="block">
    <mo style="font-family: 'YYReset';">关于</mo>
  </math>
</button>
<button name="achievement" type="button" class="choose" onmousedown="choose[1] = 1">
  <math display="block">
    <mo style="font-family: 'YYReset';">成就</mo>
  </math>
</button>`,
  ][choose[0]]
}

function update_choose2() {
  document.querySelector("p.choose2").innerHTML = display_choose2()
}

function hard_reset() {
  for (let i = 0; i < 8; i++) {
    if (!confirm("确定吗")) return;
  }
  y2ng = {
    y: E(2),
    ym: 24,
    glevel: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)],
    gen: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)]
  }
  achievement = [
    false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false,
    false, false, false, false, false, false, false, false, false, false, false, false
  ]
  time = E(0)
  _stop = true
}

function ac() {
  let a = ""
  for (let i = 0; i < 8; i++) {
    a += (achievement[i] ? `
<math display="block" class="achievement">
  <mo style="font-family: 'YYReset';">成就</mo><mn>${i}</mn>
  <mo style="font-family: 'YYReset';">用时</mo>${format(achievement[i])}
  <mo style="font-family: 'YYReset';">秒</mo>
</math>
` : "")
  }
  return a
}

function display_about() {
  return `<math display="block" class="endgame" style="color: hsl(
    ${(new Date().getSeconds() % 12 + new Date().getMilliseconds() / 1000) * 30}, 
    100%, 50%)">
  <mo>Endgame:</mo>${format(E(2 ** 96))}
</math>
<button name="hard_reset" type="button" class="hard_reset" onmousedown="hard_reset()">
  <math display="block" class="endgame"><mo style="font-family: 'YYReset';">硬重置</mo></math>
</button>
<math display="block" class="changelog">
  <mo style="font-family: 'YYReset';">更新日志</mo><mo>:</mo>
</math>
<math display="block" class="changelog">
  <mn>2024</mn><mo>/</mo><mn>9</mn><mo>/</mo><mn>27</mn>
</math>
<math display="block" class="changelog">
  <mi>v</mi><mn>0</mn><mo>:</mo>
  <mo style="font-family: 'YYReset';">添加了</mo>
    <msup>
    <mi>y</mi>
    <msup>
      <mn>2</mn>
      <mi>n</mi>
    </msup>
  </msup>
  <mo style="font-family: 'YYReset';">生成器、</mo>
  <msub><mi>y</mi><mn>1</mn></msub>
  <mo style="font-family: 'YYReset';">基础值</mo>
</math>
${ac()}`
}

function update_about(a = true, b = true) {
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_about()
}

function display_achievement() {
  return `<math display="block" class="msg">
  <mo style="font-family: 'YYReset';">信息</mo><mo>:</mo>${m[0] == -1 ? "" : table[m[0]][m[1]]}
</math>
<table>
  <tbody>
    <tr>
      <td onmouseover="m = [0, 0]" ${achievement[0] ? `style="background: #0000ff"` : ""}>
        <math display="block"><mo style="font-family: 'YYReset';">不花钱</mo><mi>y</mi></math>
      </td>
      <td onmouseover="m = [0, 1]" ${achievement[1] ? `style="background: #0000ff"` : ""}>
        <math display="block"><mo style="font-family: 'YYReset';">又来一个维度</mo></math>
      </td>
      <td onmouseover="m = [0, 2]" ${achievement[2] ? `style="background: #0000ff"` : ""}>
        <math display="block"><mo style="font-family: 'YYReset';">三个维度</mo></math>
      </td>
      <td onmouseover="m = [0, 3]" ${achievement[3] ? `style="background: #0000ff"` : ""}>
        <math display="block"><mo style="font-family: 'YYReset';">我们不需要</mo></math>
        <math display="block"><mo style="font-family: 'YYReset';">维度提升</mo></math>
      </td>
      <td onmouseover="m = [0, 4]" ${achievement[4] ? `style="background: #0000ff"` : ""}>
        <math display="block"><mo style="font-family: 'YYReset';">基础很牢</mo></math>
      </td>
      <td onmouseover="m = [0, 5]" ${achievement[5] ? `style="background: #0000ff"` : ""}>
        <math display="block"><msqrt><mn>25</mn></msqrt>
        <mo style="font-family: 'YYReset';">小时后更新</mo></math>
      </td>
      <td onmouseover="m = [0, 6]" ${achievement[6] ? `style="background: #0000ff"` : ""}>
        <math display="block"><mo style="font-family: 'YYReset';">第六个是主要的</mo></math>
      </td>
      <td onmouseover="m = [0, 7]" ${achievement[7] ? `style="background: #0000ff"` : ""}>
        <math display="block"><mo style="font-family: 'YYReset';">基础达到了</mo><msup>
        <mn>2</mn><mn>8</mn></msup></math>
      </td>
      <td onmouseover="m = [-1, 0]">
        <math display="block"></math>
      </td>
      <td onmouseover="m = [-1, 0]">
        <math display="block"></math>
      </td>
      <td onmouseover="m = [-1, 0]">
        <math display="block"></math>
      </td>
      <td onmouseover="m = [-1, 0]">
        <math display="block"></math>
      </td>
    </tr>
  </tbody>
</table>`
}

function update_achievement(a = true, b = true) {
  if (b) {
    if (y2ng.gen[0].gte(0.5) && (achievement[0] == false)) achievement[0] = time;
    if (y2ng.gen[1].gte(0.5) && (achievement[1] == false)) achievement[1] = time;
    if (y2ng.gen[2].gte(0.5) && (achievement[2] == false)) achievement[2] = time;
    if (y2ng.gen[3].gte(0.5) && (achievement[3] == false)) achievement[3] = time;
    if (ybasic().gte(24) && (achievement[4] == false)) achievement[4] = time;
    if (y2ng.gen[4].gte(0.5) && (achievement[5] == false)) achievement[5] = time;
    if (y2ng.gen[5].gte(0.5) && (achievement[6] == false)) achievement[6] = time;
    if (ybasic().gte(256) && (achievement[7] == false)) achievement[7] = time;
  }
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_achievement()
}
