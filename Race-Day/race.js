let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 18;

//if statement
if (runnersAge > 18 && registeredEarly == true){
  raceNumber += 100;
}

if (runnersAge > 18 && registeredEarly == true){
  console.log(`${raceNumber} you will race at 9:30am `);
}
else if (runnersAge > 18 && registeredEarly == false){
  console.log(`${raceNumber} you will run at 11:00am`)
}
else if (runnersAge < 18){
  console.log(`${raceNumber} you will run at 12:30pm`);
}
else{
  console.log("Please go to the registration desk");
}
