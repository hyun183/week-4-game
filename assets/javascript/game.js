$(document).ready(function(){

	var chosenCharacter;
	var moveEnemy;
	var chosenEnemy;
	var chosenPlayerHP = 0;
	var chosenEnemyHP = 0;
	var random = Math.floor(Math.random() * 2);

	$("button").on("click", function() {
		if ($(this).hasClass("character")) {	
		// Choose Character to Play With	
		var chosenCharacter = $(this);
			console.log(this);
			$('#playerChar').append(chosenCharacter);
		var chosenPlayerHP = this.value;		
			$('#playerHP').html("HP " + chosenPlayerHP);

		// Moves Remaining Characters to Choose Enemy Section	
		var moveEnemy = $('.character').not(this);
			console.log(moveEnemy);
         	$("#chooseenemyChar").append(moveEnemy);

        // Moves Chosen Enemy to the Enemy Character	
        moveEnemy.on("click", function() {
			var chosenEnemy = $(this);
				$("#enemyChar").append(chosenEnemy);
			var chosenEnemyHP = this.value;		
				$('#enemyHP').html("HP " + chosenEnemyHP);
				$('#playerChar').append(chosenCharacter);

		});

    	}

    	if ($(this).hasClass("attack")) {
    		chosenPlayerHP--;
    		chosenPlayerHP = $('.character').value;
    		$('#playerHP').html("HP " + chosenPlayerHP + random);
    		chosenEnemyHP--;
    		chooseEnemyHP = $('.character').value;
    		$('#enemyHP').html("HP " + chosenEnemyHP + random);

    	}

    }); 

});

