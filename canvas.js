// let largura = 600
function desenharCanvas(){
  tabuleiro.lineWidth = 8;
  tabuleiro.lineCap = "round";
  tabuleiro.lineJoin = "round";
  tabuleiro.fillStyle = "#333138";
  tabuleiro.strokeStyle = "#ff006e";

  //manipulação
  tabuleiro.fillRect(0,0,1200,800);
  tabuleiro.beginPath();
  tabuleiro.moveTo(650,500); //900,500
  tabuleiro.lineTo(900,500); //650,500
  tabuleiro.stroke();
  tabuleiro.closePath();

}

function desenharLinhas(){
  tabuleiro.lineWidth = 6;
  tabuleiro.lineCap = "round";
  tabuleiro.lineJoin = "round";
  tabuleiro.fillStyle = "#333138";
  tabuleiro.strokeStyle = "#ff006e";

  let largura = 600/palavraSecreta.length;
  for (let i = 0; i < palavraSecreta.length; i++) {
    tabuleiro.moveTo(503+(largura*i),640)
    tabuleiro.lineTo(550+(largura*i),640)    
  }
  tabuleiro.stroke()
  tabuleiro.closePath()
}
function escreverLetraCorreta(index){
  tabuleiro.font = 'bold 52px Inter'
  tabuleiro.lineWidth = 6
  tabuleiro.lineCap = "round" 
  tabuleiro.lineJoin = "round"
  tabuleiro.fillStyle = "#ff006e"
  let largura = 600/palavraSecreta.length //tamanho max.600px
  tabuleiro.fillText(palavraSecreta[index],505+(largura*index),620)
  tabuleiro.stroke()
}