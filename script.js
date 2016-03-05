document.addEventListener('DOMContentLoaded', function () {

    var myFirstButton = document.createElement('button');
    myFirstButton.innerText = 'Add Dice';
    myFirstButton.className = 'button';
    myFirstButton.onclick = addNewDie;
    document.body.appendChild(myFirstButton)
    
    var mySecondButton = document.createElement('button');
    mySecondButton.innerText = 'Roll Them Bones';
    mySecondButton.className = 'button';
    mySecondButton.onclick = "getText";
    document.body.appendChild(mySecondButton)

var newArray = [];

    function addNewDie() {
        var myNewBox = document.createElement('div');
        var divNumber = (String(Math.floor((Math.random() * 6) + 1)));
        // divNumber = parseInt(divNumber, 10);
        myNewBox.id = divNumber;
        myNewBox.className = 'dice';
        var randNumber = String(Math.floor((Math.random() * 6) + 1)); //add id number to the dice
        var pElement = document.createElement('p');
        myNewBox.className = 'myDie';
        document.body.appendChild(myNewBox);
        myNewBox.appendChild(pElement);
        pElement.innerHTML = randNumber;
        
        newArray.push(addNewDie);
    }
    
    Array.prototype.getText = function() {
        var i;
        for (i = 0; i < this.length; i++) {
            this[i] = this[i].String(Math.floor((Math.random() * 6) + 1));
        }
    };

    function getText() {
        newArray.getText;
        document.getElementById("dice").innerHTML = newArray;
        console.log('test');
    }
});


