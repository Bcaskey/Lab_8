var Die = function() {
    this.value = null;
    this.div = null;
    this.insert = function () {
        this.div = document.createElement('div');
        this.div.className = 'myDie';
        this.div.id = String(document.getElementsByClassName('myDie').length);
        // this.div.addEventListern('click', this.roll.bind(this));
        // this.div.addEventListern('dblclick', this.remove.bind(this));
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

// Die.prototype.remove = function() {
//     var index = dice.indexOf(this);
//     if (index !== -1);
//     //missed something
    
// }
$(document).click(function(){
    $('.myDie').click(function(){
    $(this).remove();
    });
});

function totalDie() {
    var myCnt = 0;
    for (var i = 0; i < dice.length; i++) {
        myCnt += dice[i].value;
    }
    var div = document.getElementById('totalArea');
    div.innerHTML = String('Your total is: ' + myCnt);
}
