let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];
 

function mediaNotas(atletas) {
  atletas.map(atleta => { 
    let notas = atleta.notas.map(notas => notas);
    notas.sort((a, b) => a - b);
    let notasValidas = notas.slice(1, 4);
    let mediaValida = notasValidas.reduce((total, nota) => {
      return total + nota;
    }, 0) / notasValidas.length;
    
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas}`);
    console.log(`Media Válida: ${mediaValida} `);  
    console.log("");
  })

}

mediaNotas(atletas)