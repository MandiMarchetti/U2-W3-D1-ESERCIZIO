class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  static comparazione(u1, u2) {
    if (u1.age <= u2.age) {
      console.log(u2.firstName + " è più vecchia che " + u1.firstName);
    } else {
      console.log(u1.firstName + " è più vecchia che " + u2.firstName);
    }
  }
}

const utente1 = new User("Amanda", "Thomaz", "33", "Rome");
const utente2 = new User("Maria", "Airam", "26", "Floripa");

console.log(utente1);
console.log(utente2);

User.comparazione(utente1, utente2);

//form part

let petArr = [];

class Pet {
  constructor(_petName, _ownerName, _specie, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.specie = _specie;
    this.breed = _breed;
  }

  // checkSameOwner(anotherPet) {
  //   if (this.specie === anotherPet.specie) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}

const formNode = document.querySelector("#petForm");
// console.log(formNode);

formNode.onsubmit = function (e) {
  e.preventDefault();
  console.log("form inviato");

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const specie = document.getElementById("specie").value;
  const breed = document.getElementById("breed").value;

  const pet = new Pet(petName, ownerName, specie, breed);
  petArr.push(pet);
  console.log(petArr);

  const lista = document.querySelector(".lista");
  const li = document.createElement("li");
  li.innerText =
    "Pet Name: " +
    pet.petName +
    " " +
    "Owner Name: " +
    pet.ownerName +
    " " +
    "Specie: " +
    pet.specie +
    " " +
    "Breed: " +
    pet.breed;
  lista.appendChild(li);
};
