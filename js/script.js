const userName = "Olga";
const lastName = "Demina";
const userAge = 37;

// Quando key e value hanno la stessa identica nomenclatura possono essere
// sintetizzati in questo modo
const person = {
    userName,
    lastName,
    userAge
}
//    const person = {
//        userName: userName,
//        lastName: lastName,
//        personAge: personAge,
//    }
// invece che scritto per lungo così

//   AGGIUNGERE key all'interno dell'oggetto in modi diversi
person.profession = "developer";
// ^^^ con questo metodo si usa una "sintassi diretta"

const newKey = prompt("Quale chiave vuoi aggiungere?");
const value = prompt("Dimmi ora che valore dare alla chiave");

person[newKey] = value;
// ^^^ così faccio aggiungere direttamente all'utente nuove key e nuovi value

console.log(person);
// ^^^ stampo il risultao finale per verificare questi appunti

// DESTRUTTURAZIONE
//spacchettiamo questo Array
const namesArray = ["Disego", "Alberto", "Lucia"];
//    const firstName = namesArray[0];      invece di spacchettare
//    const secondName = namesArray[1];     i valori uno ad uno
//    const thirdName = namesArray[2];      si potrebbe far così

//    const [firstName, secondName, thirdName] = namesArray; 
//        ^^^^ così se volessi spacchettare TUTTO l'Array

// ma se volessi solo il primo ed il terzo valore?

const [firstName, , thirdName] = namesArray;
// firstName e thirdName sono nomi assegnati in modo completamente arbitrario
// la posizione che occupano tra le virgole, detta chi sono
const [ , secondPippoBaudo, ] = namesArray;
// così ad esempio prendo solo il secondo elemento


const student = {
    username: "Silvio",
    age: 25,
    email: "silvio@gmail.com"
}

//    const username = student.username;
//    const age = student.age;
//    const email = student.email;

const {age, username} = student;

console.log(`Lo studente ${username} ha età ${age} anni`);

// COPIARE ARRAY CON SPREAD OPERATOR
const anotherNamesArray = ["Giorgia", "Giorgio", "Paola", "Paolo", "GianMaria"];

const anotherPerson = {
    personName: "Giada",
    personAge: 25,
    personEmail: "giada@gmail.com"
}

const copyAnotherPerson =  {...anotherPerson};

// RIVEDERE sia SPREAD operator che ARREST operator
