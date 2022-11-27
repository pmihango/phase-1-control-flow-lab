function scuberGreetingForFeet(ride){
  if(ride <= 400) {
      return 'This one is on me!'}
    else  if (ride >= 2500) {
      return 'No can do.' }
      else {
          return 'I will gladly take your thirty bucks.'}
  }
  function ternaryCheckCity(city){
    return city === 'NYC'?"Ok, sounds good." :"No go."
    }
  const tip = 400;
  function switchOnCharmFromTip(tip){
    switch(tip) {
      case 'generous':
        return "Thank you so much."
      case 'not as generous':
        return "Thank you."
      default:
        return "Bye."
    }
  }