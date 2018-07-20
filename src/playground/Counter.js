let rockPaperScissors = function( n ) {
    let options = ['rock', 'paper', 'scissors'];
    let outcomes = [];
    
    let roundChoice = function(round, roundNumber) {
      for(let i = 0;i<options.length;i++){
        round.push(options[i]);
        if(roundNumber === n){
          outcomes.push(round.slice());
        }else{
          roundChoice(round, roundNumber + 1);
        }
        round.pop();
       }
     }
    roundChoice([], 1);
    return outcomes;
  }