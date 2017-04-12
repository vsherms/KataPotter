##### How to use this repository

Clone this repo `https://github.com/Montana-Code-School/minesweeper-typescript.git` and run `npm test`

Create the minefield application with Test Driven Development.

TDD is a loop RED->GREEN->REFACTOR->RED...

RED - Write a failing test (make sure it fails)
GREEN - Make test pass in the simplest way possible
REFACTOR - Clean up the code without changing how it works.

Minesweeper is a simple game of finding and tagging mines.
You can explore squares in the minefield.
If you hit a mine, the game is over.
If you hit a space next to one or more mines, that square will show the count of adjacent mines
If you hit a space next to zero mines, all adjacent squares with zero mines will also be exposed, and then one adjacent square with 1 or more mines will show the number of adjacent squares.
You can flag any unexplored square as having a mine.
The number of unflagged mines shows up on the minefield display so you know how many more mines to find.

Some initial stories/tasks
- I can create an unexplored minefield of x by y squres without any mines
- If I have a minefield, I can get it's dimensions
- I can print an empty minefield of x by y squares (a dash means it is unexplored)
- I can create an unexplored minefield with one bomb at a defined coordinate.
- I can print the number mines in a minefield
- I can flag an unexplored square in the minefield and then
    - display the number of unflagged mines remaining
    - print out the minefield and a ? will show on the flagged mine
- With 3x3 minefield with one mine at 0,0, if I explore 2,2, it won't explode, and 0,0 will show as explored with a count of 0.
- As a player I can see a 'minefield' of different sizes on a webpage
