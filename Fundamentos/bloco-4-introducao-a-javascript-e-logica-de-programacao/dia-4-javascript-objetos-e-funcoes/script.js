// Exercicio 01
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem vinda '+ info.personagem);
  console.log('--------------------------------------');
  //Exercicio 02
  info.recorrente = 'Sim'; 
  console.log(info);
  console.log('-----------------------------');
  //Exerciico 03
  for(let object in info){
      console.log(object);
  }
  console.log('------------------------------');
  // Exercicio 04
  for(let object in info){
    console.log(info[object]);
  }
console.log('---------------------------------');
// Exercicio 05
let newInfo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorente: 'Sim'
  };
// Exercicio 06
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log('O livro favorito da '+ leitor.nome+' '+ leitor.sobrenome+' '+ 'se chama '+ leitor['livrosFavoritos'][0]['titulo']);
  console.log('-------------------------------------')
  // Exercicio 07
  leitor.livrosFavoritos.push(
      {
      titulo:'Harry potter e o Prisioneiro de Azkaban',
      autor:'JK Rowling',
      editora:'Rocco',
  }
  );
  console.log(leitor)
  console.log('----------------------------------');
  //Exercicio 08
  console.log( leitor.nome+' '+'tem '+leitor.livrosFavoritos.length +' '+ 'livros favoritos');