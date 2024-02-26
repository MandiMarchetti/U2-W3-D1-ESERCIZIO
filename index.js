class User {
    
    constructor(_firstName, _lastName, _age, _location) {
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.age = _age;
      this.location = _location;
    }

    static comparazione(u1, u2) {
        if(u1 <= u2){
        console.log (u2 + " è più vecchio che " + u1)
        } else{
            console.log(u1 + " è più vecchio che " + u2)
        };
        
        };
  }
  
  const utente1 = new User("Amanda", "Thomaz", "33", "Rome");
  const utente2 = new User("Maria", "Airam", "26", "Floripa" );
  console.log(utente1);
  console.log(utente2);
  
  User.comparazione(utente1.age, utente2.age);