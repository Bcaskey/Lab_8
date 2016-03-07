var Die = function() {
    this.value = null;
    this.div = null;
    this.insert = function () {
        this.div = document.createElement('div');
        this.div.className = 'myDie';
        this.roll();
        document.getElementById('diceArea').appendChild(this.div);
    }

    this.roll = function() {
        var num = Math.floor(Math.random() * 6) + 1;
        this.value = num;
        this.div.innerHTML = num;   
    }
}

var dice = [];
function newDie() {
    var die = new Die();
    die.insert();
    dice.push(die);
}

function rollDie() {
    for (var i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
}

function totalDie() {
    var myCnt = 0;
    for (var i = 0; i < dice.length; i++) {
        myCnt += dice[i].value;
    }
    var div = document.getElementById('totalArea');
    div.innerHTML = String('Your total is: ' + myCnt);
}



// Extra Credit Try extending the functionality of this lab to support the following features. They are 
// listed in order from easiest to hardest to implement.

// Add a feature where clicking on a die on the page causes just that one die to roll, updating its face value
// Add a feature where double clicking on a die on the page causes that die to be removed from the page 
// (remember to remove the die object from any arrays it may be in too).