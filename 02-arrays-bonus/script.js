const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE




// 1. Inverti l'ordine degli insegnanti nell'array teachers e salva il risultato nella variabile reversedTeachers

//modo di base con la funzione .reverse()
const reversedTeachers = teachers.reverse();
console.log(`Es.1 ${reversedTeachers}`);

//modo elaborato con il ciclo for
let reversedTeachers1 = [];

for(let i = teachers.length-1; i >= 0; i--){
  const currentTeacher = teachers[i];
  reversedTeachers1.push(currentTeacher)
}
console.log(`Es.1 ${reversedTeachers1}`);



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti con un nome di lunghezza maggiore o uguale a 5 caratteri

//modo funzione substring?

//modo elaborato con il ciclo for
let longNames = [];

for(let i = 0; i < teachers.length; i++){
  const currentTeacher = teachers[i];
  if(currentTeacher.length >= 5){
    longNames.push(currentTeacher) 
  }
}
console.log(`Es.2 ${longNames}`);



// 3. Rimuovi 'Ed' dall'array teachers

//modo con la funzione .splice
teachers.splice(5,1);
console.log(`Es.3 ${teachers}`);

//modo elaborato con il ciclo for
for(let i = 0; i < teachers.length; i++){
  const currentTeacher = teachers[i];
  if(currentTeacher == "Ed"){
    teachers.splice(i, 1); 
  }
}
console.log(`Es.3 ${teachers}`);



// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

let isFabioPresent = false;
// modo col il ciclo for:
for(let i = 0; i < teachers.length; i++){
  const currentTeacher = teachers[i];
  if(currentTeacher == "Fabio"){    
    isFabioPresent = true; 
    break;
  }
}
console.log(`Es.4 ${isFabioPresent}`);



// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

//modo col la funzione .concat()
let teachersString = teachers.concat(); //????
console.log(`Es.5 ${teachersString}`);  

//modo con concatenazione somma degli iterazioni
let teachersString1 = "";
for (let i = 0; i < teachers.length; i++){
  const currentTeacher = teachers[i];
  teachersString1 += currentTeacher + ",";
}
console.log(`Es.5 ${teachersString1}`);

//un altro modo con metodo .toString
let teachersString2 = "";
for (let i = 0; i < teachers.length; i++){
  teachersString2 = teachers.toString(i);
}
console.log(`Es.5 ${teachersString2}`);