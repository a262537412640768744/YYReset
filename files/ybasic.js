let yb = {
  z: E(0)
}

function ybasic() {
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

function display_yb1() {
  return `<math display="block" class="yb1">
  <msub><mi>y</mi><mn>1</mn></msub>
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
  ${format(ybasic())}
</math>`
}

function display_z() {
  return `<math display="block" class="z">
  <mo style="font-family: 'YYReset';">你有</mo>
  ${format(yb.z)}
  <mo style="font-family: 'YYReset';">个</mo>
  <mi>z</mi>
  <mo style="font-family: 'YYReset';">星系</mo>
</math>`
}

function display_yb() {
  return `${display_yb1()}
${display_z()}`
}

function update_yb(a = true, b = true) {
  if (!a) return;
  document.querySelector("p.main").innerHTML = display_yb()
}
