$(document).ready(function () {

    //Declaraion of global variables.
    var firstGem;
    var secondGem;
    var thirdGem;
    var fourthGem;
    var targetNumber;
    var playerTotal;
    var wins = 0;
    var losses = 0;


    function initialize() {

        //Sets random values for the gems and the targetNumber.
        firstGem = Math.floor(Math.random() * 12) + 1;
        console.log(firstGem);

        secondGem = Math.floor(Math.random() * 12) + 1;
        console.log(secondGem);

        thirdGem = Math.floor(Math.random() * 12) + 1;
        console.log(thirdGem);

        fourthGem = Math.floor(Math.random() * 12) + 1;
        console.log(fourthGem);

        targetNumber = Math.floor(Math.random() * 101) + 19;

        playerTotal = 0;

        $("#number-to-guess").text(targetNumber);
        $("#score").text(playerTotal);
        $("#wins").text(wins);
        $("#losses").text(losses);

        //Clears previous given to on click value when initialize is called to reset.
        $('.gem').prop('onclick', null).off('click');

        addClickHandler('#firstGem', firstGem);
        addClickHandler('#secondGem', secondGem);
        addClickHandler('#thirdGem', thirdGem);
        addClickHandler('#fourthGem', fourthGem);

    }

    initialize();

    //On click function to add random value of the gems to the playerTotal.
    function addClickHandler(buttonId, gemValue) {
        $(buttonId).on("click", function (e) {
            console.log(gemValue);

            if (playerTotal <= targetNumber) {
                playerTotal += gemValue;
                $("#score").text(playerTotal);
            }
            if (playerTotal === targetNumber) {
                winner();
            }

            if (playerTotal > targetNumber) {
                loser();
            }

        });

    }

    //End game functions.
    function winner() {
        wins++;
        initialize();
    }

    function loser() {
        losses++;
        initialize();
    }

});