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