class User {
    
    constructor(_firstName, _lastName, _age, _location) {
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.age = _age;
      this.location = _location;
    }

    static comparazione(u1, u2) {
        if(u1.age <= u2.age){
        console.log (u2.firstName + " è più vecchia che " + u1.firstName)
        } else{
            console.log(u1.firstName + " è più vecchia che " + u2.firstName)
        };
        
        };
  }
  
  const utente1 = new User("Amanda", "Thomaz", "33", "Rome");
  const utente2 = new User("Maria", "Airam", "26", "Floripa" );

  console.log(utente1);
  console.log(utente2);
  
  User.comparazione(utente1, utente2);