function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
// Exercicio 01
  function createLi(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let element = document.getElementById('days');
  for (let coisa in dezDaysList){
      let create = document.createElement('li');
      let armazen = dezDaysList[coisa]
    if(armazen === 24 | armazen === 31){
        create.className = 'day holiday'
        create.innerHTML = armazen;
        element.appendChild(create)
    } else if (armazen === 4 | armazen === 11 | armazen === 18){
        create.className = 'day friday'
        create.innerHTML = armazen;
        element.appendChild(create);
    } else if (armazen === 25){
        create.className = 'day holiday friday';
        create.innerHTML = armazen;
        element.appendChild(create);
    }else {
        create.className = 'day'
        create.innerHTML = armazen;
        element.appendChild(create);
    }
  }
  }
  createLi();
  // Exercicio 02
  function palavra(feriados){
      let caixa = document.getElementsByClassName('buttons-container')[0];
      let criado = document.createElement('button');
      criado.id = 'btn-holiday';
      criado.innerHTML = feriados;
      caixa.appendChild(criado);
  }
  palavra('Feriados');
  // Exercicio 03
  function colorHoliday(){
  let pegar = document.getElementById('btn-holiday');
  let pegar2 = document.getElementsByClassName('holiday');
  let cor = "rgb(238,238,238)";
  let novaCor = 'red';
pegar.addEventListener('click', function (){
      for(let nova = 0; nova < pegar2.length; nova +=1){
        let guardar = pegar2[nova];
        if(guardar.style.backgroundColor === novaCor){
            guardar.style. backgroundColor = cor;
        }else{
            guardar.style.backgroundColor = novaCor;
        }
      }
  });
  }
  colorHoliday();
  // Exercicio 04
  function newPalavra(sextou){
    let caixa = document.getElementsByClassName('buttons-container')[0];
    let criado = document.createElement('button');
    criado.id = 'btn-friday';
    criado.innerHTML = sextou;
    caixa.appendChild(criado);
}
newPalavra('Sexta-Feira');
// Exercicio 05
function colorFriday(){
    let achar = document.getElementById('btn-friday');
    let achar1 = document.getElementsByClassName('friday');
    let string = 'SEXTOU!';
  achar.addEventListener('click', function (){
        for(let newGlob = 0; newGlob < achar1.length; newGlob +=1){
          let guardar = achar1[newGlob];
          if(guardar.innerHTML === string){
            guardar.innerHTML = guardar;
          }else{
              guardar.innerHTML = string;
          }
        }
    });
    }
    colorFriday();
    // Exercicio 06
    let dias = document.getElementById('days');
    function aumentarZoom(){
    dias.addEventListener('mouseover', function(){
        event.target.style.fontSize = '30px'
        event.target.style.fontWeight = '600'
    });
    }
    aumentarZoom();
    function diminuirZoom(){
        dias.addEventListener('mouseout', function(){
            event.target.style.fontSize = '20px'
            event.target.style.fontWeight = '200';
        });
    }
    diminuirZoom();
    // Exercicio 07
    function actions(tarefa){
        let elementCriado = document.createElement('span');
        let addOnde = document.getElementsByClassName('my-tasks')[0];
        elementCriado.innerText = tarefa;
        addOnde.appendChild(elementCriado);
    }
actions('Lavar o banheiro');
//Exercicio 08
function addColor(cor){
    let addOnde = document.getElementsByClassName('my-tasks')[0];
    let cria = document.createElement('div');
    cria.className = 'task';
    cria.style.backgroundColor = cor;
    addOnde.appendChild(cria);
}
addColor('pink');
// Exercicio 09
function mudar(){
let cor = document.getElementsByClassName('task')[0];
cor.addEventListener('click',function(){
    event.target.className = 'task selected';
});
}
