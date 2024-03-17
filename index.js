function rollDice(){
    var numOfDice = document.getElementById('numOfDice').value;
    var diceResult = document.getElementById('diceResult');
    var diceImages = document.getElementById('diceImages');
    var values = [];
    var images = [];

    for(let i = 0;i<numOfDice;i++){
        var value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice-images/Dice-${value}.png">`);
    }
    diceResult.textContent =`Dice:${values.join(', ')}`;
    diceImages.innerHTML =images.join("");
}