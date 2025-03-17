let yb = {
  z: E(0),
  maxz: E(0),
  zauto: true
}
const ztabal = [
  `<mi>z</mi><mo style="font-family: 'YYReset';">星系，</mo><msup><mi>y</mi><mn>2</mn></msup>
<mo style="font-family: 'YYReset';">生成器</mo><mo>×</mo><mn>16</mn>`,
  `<mi>z</mi><mo style="font-family: 'YYReset';">星系，解锁一个购买项</mo>`,
  `<mi>z</mi><mo style="font-family: 'YYReset';">星系，解锁</mo>
<msubsup><mi>U</mi><mn>0</mn><mi>n</mi></msubsup><mo style="font-family: 'YYReset';">和</mo>
<msubsup><mi>U</mi><mn>1</mn><mi>n</mi></msubsup><mo style="font-family: 'YYReset';">升级</mo>`,
  `<mi>z</mi><mo style="font-family: 'YYReset';">星系，每个</mo><mi>z</mi>
<mo style="font-family: 'YYReset';">星系提升</mo><msup><mi>y</mi><msup><mn>2</mn><mi>n</mi></msup></msup>
<mo style="font-family: 'YYReset';">生成器</mo><mo>×</mo><msqrt><mn>2</mn></msqrt>`
]

function ybasic_1() {
  return y2ng.y.add(1).log().mul(E.LOG2E).add(
    y2ng.gen[0].add(1).log().mul(E.LOG2E)).add(
    y2ng.gen[1].add(1).log().mul(E.LOG2E)).add(
    y2ng.gen[2].add(1).log().mul(E.LOG2E)).add(
    y2ng.gen[3].add(1).log().mul(E.LOG2E)).add(
    y2ng.gen[4].add(1).log().mul(E.LOG2E)).add(
    y2ng.gen[5].add(1).log().mul(E.LOG2E)).add(
    y2ng.gen[6].add(1).log().mul(E.LOG2E)).add(
    y2ng.gen[7].add(1).log().mul(E.LOG2E))
}

function z_get() {
  return ybasic_1().gte(yb.z.add(1).mul(ykupg[5] ? 192 : 256)) ? E(1) : E(0)
}

function z_reset() {
  if (ybasic_1().gte(yb.z.add(1).mul(ykupg[5] ? 192 : 256))) {
    yb.z = yb.z.add(1)
    if (ykupg[3]) return
    y2ng = {
      y: E(2),
      ym: 24,
      maxy: y2ng.maxy,
      glevel: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)],
      gen: [E(0), E(0), E(0), E(0), E(0), E(0), E(0), E(0)],
      autobuy: y2ng.autobuy
    }
  }
}

function display_ybn(n) {
  return `<math display="block" class="yb${n}">
  <msub><mi>y</mi><mn>${n}</mn></msub>
  <mo style="font-family: 'YYReset';">基础值</mo>
  <mo>=</mo>
  <munderover>
    <mo>∑</mo>
    <mrow>
      <mi>i</mi><mo>=</mo><mn>0</mn>
    </mrow>
    <mn>8</mn>
  </munderover>
  <msub>
    <mo>log</mo>
    <mn>2</mn>
  </msub>
  <mo>(</mo><mn>1</mn><mo>+</mo>
  <msup>
    <mi>y</mi>
    <msup>
      <mn>2</mn>
      <mi>i</mi>
    </msup>
  </msup>
  <mo>)</mo>
  <mo>=</mo>
  ${format(ybasic_1())}
</math>`
}

function z() {
  let a = ""
  let i = 0
  for (; i < 4; i++) {
    let zz = [1, 2, 6, 12, Infinity][i]
    a += (yb.z.gte(zz) ? `
<math display="block" class="z">
  <mo style="font-family: 'YYReset';">在</mo>${format(zz)}
  ${ztabal[i]}
</math>` : "")
    if(yb.z.lt(zz)) break
  }
  a += `<math display="block" class="z"><mo style="font-family: 'YYReset';">下一个在</mo>
<mn>${format([E(1), E(2), E(6), E(12), E(Infinity)][i])}</mn>
<mi>z</mi><mo style="font-family: 'YYReset';">星系</mo></math>`
  return a
}

function display_autobuy_z() {
  return `<button name="buymax" type="button" 
  onmousedown="yb.zauto = !yb.zauto" class="z">
  <math>
    <mo style="font-family: 'YYReset';">自动购买</mo><mo>:</mo>
    <mo style="font-family: 'YYReset';">${yb.zauto ? "是" : "否"}</mo>
  </math>
</button>`
}

function display_z() {
  return `<math display="block" class="z">
  <mo style="font-family: 'YYReset';">你有</mo>
  ${format(yb.z)}
  <mo style="font-family: 'YYReset';">个</mo>
  <mi>z</mi>
  <mo style="font-family: 'YYReset';">星系</mo>
</math>
<button name="z" type="button" class="z" onmousedown="z_reset()">
  <math display="block" class="z">
    <mo style="font-family: 'YYReset';">重置</mo>
    <msup>
      <mi>y</mi>
      <msup>
        <mn>2</mn>
        <mi>n</mi>
      </msup>
    </msup>
    <mo style="font-family: 'YYReset';">生成器，获得</mo>
  </math>
  <math display="block" class="z">
    ${format(z_get())}
    <mo style="font-family: 'YYReset';">个</mo>
    <mi>z</mi>
    <mo style="font-family: 'YYReset';">星系</mo>
  </math>
  <math display="block" class="z">
    <mo style="font-family: 'YYReset';">要求</mo>
    <mo>:</mo>
    ${format(yb.z.add(1).mul(ykupg[5] ? 192 : 256))}
    <msub><mi>y</mi><mn>1</mn></msub>
    <mo style="font-family: 'YYReset';">基础值</mo>
  </math>
</button>
<br>
${ykupg[4] ? display_autobuy_z() : ""}
<math display="block" class="z">
  <mo style="font-family: 'YYReset';">在</mo>${format(E(0))}<mi>z</mi>
  <mo style="font-family: 'YYReset';">星系，购买生成器只需达到</mo>
</math>
${z()}`
}

function display_yb() {
  return `${display_ybn(1)}
${display_z()}`
}

function update_yb(a = true, b = true) {
  if (b) {
    if (yb.z.gt(yb.maxz)) {
      yb.maxz = yb.z
    }
    if (ykupg[4] && yb.zauto) {
      z_reset()
    }
  }
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_yb()
}
