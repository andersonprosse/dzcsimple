async function atualizarQuadrados() {
  const url = "https://opensheet.elk.sh/1aqJzzB8fYB1RZGJjx-lLhWVKt0Y5d2Iwok_fvpRDvDg/1"; 
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log("Dados recebidos da planilha:", dados);

    // Agora cada linha da planilha representa um quadrado
    const q1 = Number(dados[0]["valor"]);
    const q2 = Number(dados[1]["valor"]);
    const q3 = Number(dados[2]["valor"]);
    const q4 = Number(dados[3]["valor"]);

    console.log("Valores:", q1, q2, q3, q4);

    document.getElementById("q1").style.backgroundColor = q1 === 0 ? "rgb(18, 171, 18);" : "red";
    document.getElementById("q2").style.backgroundColor = q2 === 0 ? "rgb(18, 171, 18);" : "red";
    document.getElementById("q3").style.backgroundColor = q3 === 0 ? "rgb(18, 171, 18);" : "red";
    document.getElementById("q4").style.backgroundColor = q4 === 0 ? "rgb(18, 171, 18);" : "red";

  } catch (erro) {
    console.error("Erro ao buscar dados:", erro);
  }
}

atualizarQuadrados();
setInterval(atualizarQuadrados, 5000);
