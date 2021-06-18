FLATEARTHLING NIGHTMARE

This is a canvas based game, where a FLATEARTHLING will have to dodge falling science books, terrestrial globes and Pythagoras figures and try to catch some Newton apples in order to recover a little of life. In this game, if you loose you win. There is a limited time to play.

PLAYING INSTRUCTIONS

The player can move in the four directions using the arrow buttons, there is a life and time DOM elements, if the time or the life elements arrive to 0, the game ends and and a “you win” display appears.

BACKLOG

1. index.html
2. /JS
 . index.js
3. /styles 
 . styles.css
 . /resources

1. index.js
	Contains all the elements of the logic of the game:
	- objects : they all are triggered by the start-button DOM element.
		-lunarBackground(background of the canvas element).
		-youWin(displayed when the game ends, replacing lunarBackground).
		-earthling(player).
		-falling objects:
			decreasing life: terrGlobe, bookOne, bookTwo, bookThree, 							pithaRight, pithaLeft.
                  Increasing life: apple.

	- DOM elements : ctx (canvas), onclick (start-button), timeNode (time-			counter), earthlingLivesNode (score-counter).

	- most important functions : 

		startGame: this element has a double flag (gameover and timeIsUp) 	
			that determines if the game has to continue displaying frames 			or has to stop and display the “you win” image. 
			For displaying the game, it takes the gameInterval variable 			and sets it to the requestAnimationFrame method with a 				callback for the startGame function.
			For stopping it, we use the method cancelAnimationFrame with 
			the variable gameInterval as a callback, now set to 					requestAnimationFrame.
			This function is also responsible for drawing all the objects.
		
		timeCounter: takes the timeNode from the DOM and, with a   					setInterval, decreases the time from 60 to 0, returning 				timeRemaining to the DOM element if its value is more than -1
			or setting the state flag timeIsUp to true and setting a 				clearInterval in the other case, triggering the end of the 				game.
		
		moveEarthling: it moves the earthling object taking control of the
			keydown event and, with a switch statement, making possible 
			the player movement. Before the switch, we put an if condition
			to prevent that the arrow keys have their default use during 	
			gameplay.
