

// DEFINIR SITUACAO FINAL COM BASE NA MEDIA//
function situacaoFinal(mediaFinal) {
    let calcularMedia = ''
}  
    

function calcularMedia() {
    
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);

    // Verificar se as notas são válidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert('Por favor, insira valores numéricos válidos para todas as notas.');
        return;
    }

    // Calcular a média das notas
    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    

    // Calcula a média
    // let media = soma / quantidadeNotas;
    if (media>=7) {
        alert("sua Média é: " + media.toFixed(2) + " você passou")
        
    } else {
        alert("sua Média é: " + media.toFixed(2) + " você reprovou")
    }
          
    
}
        
         function reiniciar(){
            window.location.reload();
   }
