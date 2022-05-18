const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
   return names.reduce((acc, curr) => {
       return acc + curr.split('').reduce((somas, passa) => {
        return (passa === 'a' || passa === 'A') ? somas + 1 : somas;
       },0)
   },0)
}
 console.log(containsA());
