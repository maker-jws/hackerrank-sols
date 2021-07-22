function gameOfStones(n) {
    // Write your code here
    let current = n
    let rounds = 0
    let winner = "Second"
    // each player alternates from a number n 
    // each player has the option of taking 2/3/5 tiles
    // if player X takes and there are no more tiles to take that equal 2 , then X wins
    // players will always try to take most available tiles (ie play to win)
    if(current<2){
        return winner
    }
    while(current>0){
        let test = rounds%2 == 0
        console.log(rounds, test, current)
        if(current-5>=0){
            current-=5;
        }else if(current-3>=0){
            current-=3;
        }else if (current-2>=0){
            current-=2;
        }
        if(current<2 || current == 0){
            winner = test ? "First":"Second"
            current =0;
        }
        rounds++
    }  
    return winner;
}

console.log(gameOfStones(10))