let palavras = ["ALURA","ORACLE","FORCA","HTML","JAVASCRIPT","LOGICA","PROGRAMACAO"];
let tabuleiro = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

function escolherPalavraSecreta(){
  let palavra = palavras[Math.floor(Math.random()*palavras.length)]
  palavraSecreta = palavra;
  console.log(palavraSecreta);
  return palavra;

}

function iniciarJogo(){
  document.getElementById('div-desaparece').style.display = "none";

  escolherPalavraSecreta();
  desenharCanvas();
  desenharLinhas();
}


// Math.floor => arredonda para baixo.
//Math.random => sorteia palavra