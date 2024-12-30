# Solver for The Whole Year Puzzle

This is a puzzle I recently got as a gift. It is a daily calendar puzzle game. The goal is to use the 9 puzzle pieces to reveal only 2 spaces on the board that display the current date. Below is representation of the board and the puzzle pieces.

``` txt
Puzzle Board
+-------------------------+
| Jan Feb Mar Apr May Jun |
|                         |
| Jul Aug Sep Oct Nov Dec |
|                         +--+
|  1   2   3   4   5   6   7 |
|                            |
|  8   9  10  11  12  13  14 |
|                            |
| 15  16  17  18  19  20  21 |
|                            |
| 22  23  24  25  26  27  28 |
+-------+            +-------+
        | 29  30  31 |
        +------------+

Pieces
##  ##  ##  ##   ##   #  ## #  # 
#   #    #   ##  #   ### ## ## ##
#   #    ##      ##   #     ## #
#
```

Everyday should have more than one solution to make this puzzle not too difficult to solve. The goal of this project is to put in any day/month combination and get all of the possible solutions for it.
