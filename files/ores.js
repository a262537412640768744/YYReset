let ores = {
  iron: E(0),
  copper: E(0),
  silver: E(0),
  gold: E(0),
  is: {
    iron: true,
    copper: true,
    silver: true,
    gold: true
  },
  upg: {
    iron: [false, false],
    copper: [false, false],
    silver: [false, false],
    gold: [false, false]
  }
}
const ore_upg_cost = {
  iron: [E(100), E(1600)]
}

function buy_ore_upg(name1, n) {
  let upg_cost_ = ore_upg_cost[name1][n]
  if (ores[name1].gte(upg_cost_) && !ores.upg[name1][n]) {
    ores.upg[name1][n] = true
    ores[name1] = ores[name1].sub(upg_cost_)
  }
}

function display_ore_gen(name1, name2, c, p) {
  return yklng[0].y.gte(c) ? `<button>
  <math display="block" class="${name1}"
    onmousedown="ores.is['${name1}'] = !ores.is['${name1}']">
    <mo style="font-family: 'YYReset';">${ores.is[name1] ? 
      "目前正在生产，速度：" : "已停止生产，如果继续生产，速度："}</mo>
    ${format(yklng[0].y.div(c).pow(p))}
    <mo style="font-family: 'YYReset';">${name2}矿每秒</mo>
  </math>
</button>` :
`<button>
  <math display="block" class="${name1}">
    <mo style="font-family: 'YYReset';">达到</mo>${format(c)}
    ${display_l2n(1, 0)}<mo style="font-family: 'YYReset';">开始生产${name2}矿</mo>
  </math>
</button>`
}

function display_an_ore(name1, name2, c, p) {
  return `<math display="block" class="${name1}">
  <mo style="font-family: 'YYReset';">你有</mo>
  ${format(ores[name1])}<mo style="font-family: 'YYReset';">${name2}矿</mo>
</math>
${display_ore_gen(name1, name2, c, p)}`
}

function display_ore_upgrade(name1, name2, c, content) {
  return `<button onmousedown="buy_ore_upg('${name1}', ${content[0]})" 
  ${ores.upg[name1][content[0]] ? `style="background:#ffffff"` : ""}>
  <math display="block" class="${name1}">
    <mo style="font-family: 'YYReset';">${name2}矿升级</mo>
    <mn>${content[0]}</mn>
  </math>
  <math display="block" class="${name1}">
    ${content[1]}
  </math>
  <math display="block" class="${name1}">
    <mo style="font-family: 'YYReset';">价格：</mo>${format(c)}
    <mo style="font-family: 'YYReset';">${name2}矿</mo>
  </math>
</button>`
}

function display_ores() {
  return `${display_an_ore("iron", "铁", E(600), 3 / 4)}
${display_an_ore("copper", "铜", E(57600), 1 / 2)}
${display_an_ore("silver", "银", E(114514000), 1 / 4)}
${display_an_ore("gold", "金", E(998244353), 1 / 8)}
<br>
${yklng[0].y.gte(600) ? display_ore_upgrade("iron", "铁", E(100), [0, 
    display_l2n(1, 1) + `<mo style="font-family: 'YYReset';">生成器</mo><mo>×</mo><mn>256</mn>`]) + 
  display_ore_upgrade("iron", "铁", E(1600), [1, 
    `<mo style="font-family: 'YYReset';">铜矿要求</mo><mo>÷</mo><mn>16</mn>`]): ""}`
}

function update_ores(a = true, b = true) {
  if (b) {
    if (yklng[0].y.gte(600) && ores.is.iron) ores.iron = ores.iron.add(
      yklng[0].y.div(600).pow(3 / 4).mul(0.02))
    if (yklng[0].y.gte(57600) && ores.is.copper) ores.copper = ores.copper.add(
      yklng[0].y.div(57600).pow(1 / 2).mul(0.02))
  }
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_ores()
}
