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
		lunarBackground(background of the canvas element).
		youWin(displayed when the game ends, replacing lunarBackground).
		earthling(player).
		-falling objects:
			decreasing life: terrGlobe, bookOne, bookTwo, bookThree, 							pithaRight, pithaLeft.
                  Increasing life: apple.

	- DOM elements : ctx (canvas), onclick (start-button), timeNode (time-counter), earthlingLivesNode (score-counter).

	-functions : 
		startGame: this element has a double flag (gameover and timeIsUp) 	
			that determines if the game has to continue displaying frames 			or has to stop and display the “you win” image.
		


		
		
		


