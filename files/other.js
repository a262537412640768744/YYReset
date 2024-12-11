const Endgame = E(2 ** 512)
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
const ss = [
  `<mo style="font-family: 'YYReset';">购买</mo>`,
  `<mo style="font-family: 'YYReset';">生成器</mo>`,
  `<mo style="font-family: 'YYReset';">基础值达到</mo>`,
  `<mo style="font-family: 'YYReset';">达到</mo>`,
  `<mo style="font-family: 'YYReset';">奖励</mo><mo>:</mo><mo style="font-family: 'YYReset';">解锁</mo>`,
  `<mo style="font-family: 'YYReset';">商店</mo>`,
  `<mo style="font-family: 'YYReset';">游玩</mo>`,
  `<mo style="font-family: 'YYReset';">秒</mo>`,
  `<mo style="font-family: 'YYReset';">次购买项</mo>`,
  `<mo style="font-family: 'YYReset';">进行</mo>`,
  `<mo style="font-family: 'YYReset';">重置</mo>`,
  `<mo style="font-family: 'YYReset';">星系</mo>`,
  `<mo style="font-family: 'YYReset';">升级</mo>`,
  `<mo style="font-family: 'YYReset';">，并打破硬上限</mo>`,
]
const table = [
  [
    `${ss[0]}${display_2n(1)}${ss[1]}`,
    `${ss[0]}${display_2n(2)}${ss[1]}`,
    `${ss[0]}${display_2n(3)}${ss[1]}`,
    `${ss[0]}${display_2n(4)}${ss[1]}`,
    `<msub><mi>y</mi><mn>1</mn></msub>${ss[2]}<mn>24</mn>`,
    `${ss[0]}${display_2n(5)}${ss[1]}`,
    `${ss[0]}${display_2n(6)}${ss[1]}`,
    `<msub><mi>y</mi><mn>1</mn></msub>${ss[2]}<mn>256</mn>`,
    `${ss[0]}${display_2n(8)}${ss[1]}<mo>    </mo>${ss[4]}<mi>y</mi>${ss[5]}`,
    `${ss[3]}<msup><mn>10</mn><mn>50</mn></msup><mi>y</mi>`,
    `${ss[6]}<mn>2000</mn>${ss[7]}`,
    `${ss[0]}<mn>3</mn>${ss[8]}<mn>0</mn>`
  ],
  [
    `${ss[9]}${display_l2n(1, 0)}${ss[10]}`,
    `${ss[3]}<mn>3</mn><mi>z</mi>${ss[11]}<mo>    </mo>${ss[4]}${display_l2n(1, 0)}${ss[12]}${ss[13]}`,
    `${ss[0]}<msubsup><mi>U</mi><mn>0</mn><mn>0</mn></msubsup>${ss[12]}`,
    `${ss[0]}${display_l2n(1, 4)}${ss[1]}`
  ]
]
const colors = ["#ff0000", "#ff8000"]
const contents = [
  `<math display="block"><mo style="font-family: 'YYReset';">不花钱</mo><mi>y</mi></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">又来一个</mo></math>
<math display="block"><mo style="font-family: 'YYReset';">维度</mo></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">三个维度</mo></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">我们不需要</mo></math>
<math display="block"><mo style="font-family: 'YYReset';">维度提升</mo></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">基础很牢</mo></math>`,
  `<math display="block"><msqrt><mn>25</mn></msqrt></math>
<math display="block"><mo style="font-family: 'YYReset';">小时后更新</mo></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">第六个是</mo></math>
<math display="block"><mo style="font-family: 'YYReset';">主要的</mo></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">基础达到了</mo></math>
<math display="block"><msup><mn>2</mn><mn>8</mn></msup></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">八个全有了</mo></math>`,
  `<math display="block"><msqrt><mo style="font-family: 'YYReset';">古戈尔</mo></msqrt></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">时间都去</mo></math>
<math display="block"><mo style="font-family: 'YYReset';">哪了</mo></math>`,
  `<math display="block" style="font-size: 20px;">
  <msup>
    <mn>2</mn>
    <mrow><mfrac><msup><mn>3</mn><mn>3</mn></msup><msup><mn>2</mn><mn>5</mn></msup></mfrac></mrow>
  </msup>
</math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">真正的重置</mo></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">打破硬上限</mo></math>`,
  `<math display="block"><mo style="font-family: 'YYReset';">全自动化</mo></math>
  <math display="block"><mo style="font-family: 'YYReset';">生产</mo></math>`,
  `<math display="block"><msup><mi>y</mi><mi>k</mi></msup><mo style="font-family: 'YYReset';">达到了</mo></math>
<math display="block"><msup><mn>2</mn><mn>8</mn></msup></math>`
]

const choose2contents = 

function display_a_achievement(x, y) {
  return `<td onmouseover="m = [${x}, ${y}]" ${achievement[x * 12 + y] ? 
    `style="background: ` + colors[x] + `"` : ""}>
  ${contents[x * 12 + y]}
</td>`
}

let time = E(0)
let _stop = true

function choose1_(name, color, text, num) {
  return `
<button name="${name}" type="button" class="choose" onmousedown="choose = [${num}, 0]"
  ${choose[0] == num ? `style="background: ` + color + `"` : ""}>
  <math display="block">
    ${text}
  </math>
</button>`
}

function choose2_(name, color, text, num) {
  return `
<button name="${name}" type="button" class="choose" onmousedown="choose[1] = ${num}"
  ${choose[1] == num ? `style="background: ` + color + `"` : ""}>
  <math display="block">
    ${text}
  </math>
</button>`
}

function display_choose1() {
  return `
${choose1_("y2n", "#800000", `<msup><mi>y</mi><msup><mn>2</mn><mi>n</mi></msup></msup>`, 0)}
${ys.ba2 >= 1 ? choose1_("ykln", "#804000", `<msup><mi>y</mi><mrow>
<msup><mi>k</mi><mi>l</mi></msup><msup><mn>2</mn><mi>n</mi></msup></mrow></msup>`, 1) : ""}
${choose1_("option", "#404040", `<mo style="font-family: 'YYReset';">选项</mo>`, 8)}`
}

function update_choose1() {
  document.querySelector("p.choose1").innerHTML = display_choose1()
}

function display_choose2() {
  return [`
${choose2_("y2ng", "#800000", `<msup><mi>y</mi><msup><mn>2</mn><mi>n</mi></msup></msup>
<mo style="font-family: 'YYReset';">生成器</mo>`, 0)}
${choose2_("yb", "#800000", `<mi>y</mi><mo style="font-family: 'YYReset';">基础</mo>`, 1)}
${y2ng.maxy.gte(2 ** 128) ? 
  choose2_("ys", "#800000", `<mi>y</mi><mo style="font-family: 'YYReset';">商店</mo>`, 2) : ""}`,
    `
${choose2_("yklng", "#804000", `<msup><mi>y</mi><mrow>
<msup><mi>k</mi><mi>l</mi></msup><msup><mn>2</mn><mi>n</mi></msup></mrow></msup>
<mo style="font-family: 'YYReset';">生成器</mo>`, 0)}
${achievement[13] ? choose2_("yklng", "#804000", `<msup><mi>y</mi><mi>k</mi></msup>
<mo style="font-family: 'YYReset';">升级</mo>`, 1) : ""}`,
      ``,
      ``,
      ``,
      ``,
      ``,
      ``,
      `
${choose2_("save", "#404040", `<mo style="font-family: 'YYReset';">保存</mo>`, 0)}
${choose2_("about", "#404040", `<mo style="font-family: 'YYReset';">关于</mo>`, 1)}
${choose2_("achievement", "#404040", `<mo style="font-family: 'YYReset';">成就</mo>`, 2)}
${choose2_("recommendation", "#404040", `<mo style="font-family: 'YYReset';">推荐</mo>`, 3)}`,
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
    y: E(2.000000000000001),
    ym: 24,
    glevel: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)],
    gen: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)],
    maxy: E(2.000000000000001)
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

function display_save() {
  return `
<button name="hard_reset" type="button" class="hard_reset" onmousedown="hard_reset()" style="color:#c0c0c0">
  <math display="block" class="endgame"><mo style="font-family: 'YYReset';">硬重置</mo></math>
</button>
<button name="hard_reset" type="button" class="hard_reset" style="color:#c0c0c0">
  <math display="block" class="endgame"><mo style="font-family: 'YYReset';">导入存档</mo></math>
</button>
<button name="hard_reset" type="button" class="hard_reset" style="color:#c0c0c0">
  <math display="block" class="endgame"><mo style="font-family: 'YYReset';">导出存档</mo></math>
</button>
<br>
<textarea></textarea>`
}

function update_save(a = true, b = true) {
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_save()
}

function ac() {
  let a = ""
  for (let i = 0; i < 16; i++) {
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
  return `<math display="block" class="endgame" ${getcolor()}>
  <mo>Endgame:</mo>${format(Endgame)}
</math>
<math display="block" class="changelog">
  <mo style="font-family: 'YYReset';">更新日志</mo><mo>:</mo>
</math>
<math display="block" class="changelog">
  <mn>2024</mn><mo>/</mo><mn>9</mn><mo>/</mo><mn>27</mn>
</math>
<math display="block" class="changelog">
  <mi>v</mi><mn>0</mn><mo>:</mo>
  <mo style="font-family: 'YYReset';">添加了</mo>
  <msup><mi>y</mi><msup><mn>2</mn><mi>n</mi></msup></msup>
  <mo style="font-family: 'YYReset';">生成器、</mo>
  <msub><mi>y</mi><mn>1</mn></msub>
  <mo style="font-family: 'YYReset';">基础值</mo>
</math>
<math display="block" class="changelog">
  <mn>2024</mn><mo>/</mo><mn>9</mn><mo>/</mo><mn>30</mn>
</math>
<math display="block" class="changelog">
  <mi>v</mi><mn>1</mn><mo>:</mo>
  <mo style="font-family: 'YYReset';">添加了</mo>
  <mi>z</mi>
  <mo style="font-family: 'YYReset';">星系、</mo>
  <mi>y</mi>
  <mo style="font-family: 'YYReset';">商店</mo>
</math>
<math display="block" class="changelog">
  <mn>2024</mn><mo>/</mo><mn>10</mn><mo>/</mo><mn>3</mn>
</math>
<math display="block" class="changelog">
  <mi>v</mi><mn>2</mn><mo>:</mo>
  <mo style="font-family: 'YYReset';">添加了购买项</mo>
  <mn>1</mn>
</math>
<math display="block" class="changelog">
  <mn>2024</mn><mo>/</mo><mn>10</mn><mo>/</mo><mn>9</mn>
</math>
<math display="block" class="changelog">
  <mi>v</mi><mn>3</mn><mo>:</mo>
  <mo style="font-family: 'YYReset';">添加了假的</mo>
  ${display_l2n(1, 0)}
</math>
<math display="block" class="changelog">
  <mn>2024</mn><mo>/</mo><mn>11</mn><mo>/</mo><mn>29</mn>
</math>
<math display="block" class="changelog">
  <mi>v</mi><mi>ω</mi><mo>:</mo>
  <mo style="font-family: 'YYReset';">添加了真的</mo>
  ${display_l2n(1, 0)}
</math>
<math display="block" class="changelog">
  <mn>2024</mn><mo>/</mo><mn>12</mn><mo>/</mo><mn>11</mn>
</math>
<math display="block" class="changelog">
  <mi>v</mi><mi>ω</mi><mo>+</mo><mn>1</mn><mo>:</mo>
  <mo style="font-family: 'YYReset';">添加了</mo>
  ${display_l2n(1, 0)}
  <mo style="font-family: 'YYReset';">升级</mo>
</math>
${ac()}`
}

function update_about(a = true, b = true) {
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_about()
}

function display_a_achievement(x, y) {
  return `<td onmouseover="m = [${x}, ${y}]" 
  ${achievement[x * 12 + y] ? `style="background: ` + colors[x] + `"` : ""}>
  ${contents[x * 12 + y]}
</td>`
}

function display_achievement() {
  return `<math display="block" class="msg">
  <mo style="font-family: 'YYReset';">信息</mo><mo>:</mo>${m[0] == -1 ? "" : table[m[0]][m[1]]}
</math>
<table>
  <tbody>
    <tr>
      ${display_a_achievement(0, 0)}
      ${display_a_achievement(0, 1)}
      ${display_a_achievement(0, 2)}
      ${display_a_achievement(0, 3)}
      ${display_a_achievement(0, 4)}
      ${display_a_achievement(0, 5)}
      ${display_a_achievement(0, 6)}
      ${display_a_achievement(0, 7)}
      ${display_a_achievement(0, 8)}
      ${display_a_achievement(0, 9)}
      ${display_a_achievement(0, 10)}
      ${display_a_achievement(0, 11)}
    </tr>
    <tr>
      ${display_a_achievement(1, 0)}
      ${display_a_achievement(1, 1)}
      ${display_a_achievement(1, 2)}
      ${display_a_achievement(1, 3)}
    </tr>
  </tbody>
</table>`
}

function update_achievement(a = true, b = true) {
  if (b) {
    if (y2ng.gen[0].gte(1) && (achievement[0] == false)) achievement[0] = time;
    if (y2ng.gen[1].gte(1) && (achievement[1] == false)) achievement[1] = time;
    if (y2ng.gen[2].gte(1) && (achievement[2] == false)) achievement[2] = time;
    if (y2ng.gen[3].gte(1) && (achievement[3] == false)) achievement[3] = time;
    if (ybasic_1().gte(24) && (achievement[4] == false)) achievement[4] = time;
    if (y2ng.gen[4].gte(1) && (achievement[5] == false)) achievement[5] = time;
    if (y2ng.gen[5].gte(1) && (achievement[6] == false)) achievement[6] = time;
    if (ybasic_1().gte(256) && (achievement[7] == false)) achievement[7] = time;
    if (y2ng.gen[7].gte(1) && (achievement[8] == false)) achievement[8] = time;
    if (y2ng.y.gte(10 ** 50) && (achievement[9] == false)) achievement[9] = time;
    if (time.gte(2000) && (achievement[10] == false)) achievement[10] = time;
    if (ys.ba0 >= 3 && (achievement[11] == false)) achievement[11] = time;
    if (yklng[0].y.gte(2) && (achievement[12] == false)) achievement[12] = time;
    if (yb.z.gte(3) && (achievement[13] == false)) achievement[13] = time;
    if (ykupg[0] && (achievement[14] == false)) achievement[14] = time;
    if (yklng[0].gen[3].gte(1) && (achievement[15] == false)) achievement[15] = time;
  }
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_achievement()
}

function rd(a, b) {
  return `<a href='${a}' class="recommendation">
  <math display="block">
    <mo style="font-family: 'YYReset';">${b}</mo>
  </math>
</a>`
}

function display_recommendation() {
  return `${rd("https://0i00000000a7.github.io/points-incremental-rewritten/", "点数增量")}
${rd("https://dlsdl.github.io/wind_spirit_creation/", "风灵作成")}
${rd("https://seanxlx2011.github.io/", "数据增量")}
${rd("https://veryrrdefine.github.io/MdVI-rewritten/", "多维体积增量")}
${rd("https://qqqe308.github.io/The-Rhythm-Game-Tree/", "音乐游戏树")}
${rd("https://aster131072.github.io/incremental_evolution/", "增量进化")}
${rd("https://goldenapple125.github.io/RBN/", "大数之路")}
${rd("https://hydrogenated233.github.io/TI/", "植树增量")}
${rd("https://hypcos.github.io/too-many-layers/", "太多层级")}
${rd("https://rg3072.github.io/anti-softcap-tree/111/", "反软上限树")}`
}

function update_recommendation(a = true, b = true) {
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_recommendation()
}
