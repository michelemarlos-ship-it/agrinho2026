function comparar() {

  const aguaS = Number(document.getElementById("aguaS").value);
  const agroS = Number(document.getElementById("agroS").value);
  const co2S = Number(document.getElementById("co2S").value);

  const aguaT = Number(document.getElementById("aguaT").value);
  const agroT = Number(document.getElementById("agroT").value);
  const co2T = Number(document.getElementById("co2T").value);

  let resultado = `
    <h2>📊 Resultado da Comparação</h2>

    <p><strong>💧 Economia de Água:</strong> 
    ${aguaT - aguaS} L</p>

    <p><strong>☣️ Redução de Agrotóxicos:</strong> 
    ${agroT - agroS}%</p>

    <p><strong>🌍 Redução de CO₂:</strong> 
    ${co2T - co2S} kg</p>
  `;

  if (aguaS < aguaT && agroS < agroT && co2S < co2T) {
    resultado += `
      <h3 style="color: green;">
        ✅ A Fazenda Sustentável possui menor impacto ambiental.
      </h3>
    `;
  } else {
    resultado += `
      <h3 style="color: red;">
        ⚠️ A Fazenda Tradicional apresenta impactos maiores.
      </h3>
    `;
  }

  document.getElementById("resultado").innerHTML = resultado;
}