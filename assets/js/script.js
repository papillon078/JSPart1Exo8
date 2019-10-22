function ageVerif(){
  let age = document.getElementById('age').value;
  const regexAge = /^[0-9]{1,3}$/;
  if (regexAge.test(age)){
    if (age<18){
      alert('Vous êtes mineur');
    }
    else{alert('Vous êtes majeur');}
  }
  else {alert('Entrée non valide');}
}
