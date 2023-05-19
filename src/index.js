//https://observablehq.com/@mourner/sourdough-calculator
window.hours_to_ferment= function(proof_temp, levain) {
  const f = proof_temp * 9 / 5 + 32;
  const result = Math.log(levain / 100 / 0.894) * (-0.0000336713 * f ** 4 + 0.0105207916 * f ** 3 - 1.2495985607 * f ** 2 + 67.0024722564 * f - 1374.6540546564);

  FileMaker.PerformScript("presentResult", JSON.stringify(result));
}
