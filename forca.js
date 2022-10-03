let palavras = ["ALURA","ORACLE","FORCA","HTML","JAVASCRIPT","LOGICA","PROGRAMACAO"];
let tabuleiro = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";
let letras = []

function escolherPalavraSecreta(){
  let palavra = palavras[Math.floor(Math.random()*palavras.length)]
  palavraSecreta = palavra;
  console.log(palavraSecreta);
  return palavra;
}
// Math.floor => arredonda para baixo.
//Math.random => sorteia palavra

function verificarLetra(key){
  let estado = false
  //numeros da tabela ASCII; indexOf => primeira ocorrência de uma string 
  
  if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
    letras.push(key) //inserindo dados no array letras.
    console.log(key)
    console.log(letras)
    return estado;
  }
  else{
    estado = true
    letras.push(key)
    console.log(key)
    console.log(letras,"if true")
    return estado;
  }
}

function iniciarJogo(){
  document.getElementById('div-desaparece').style.display = "none";
  escolherPalavraSecreta();

  desenharCanvas();
  desenharLinhas();

  document.onkeydown = (e)=> {

    let letra = e.key.toUpperCase()

    if (verificarLetra(letra) && palavraSecreta.includes(letra)) {
      //includes => percorre a string e verifica se tem a string desejada
      for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra){
          escreverLetraCorreta(i)
        }
               
      }
    }
  }
}


