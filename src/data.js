// Ansi console colors and styles
const Reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan0 = "\x1b[36m"
const FgWhite = "\x1b[37m"
const FgBrightBlack = "\x1b[90m"
const FgBrightRed = "\x1b[91m"
const FgBrightGreen = "\x1b[92m"
const FgBrightYellow = "\x1b[93m"
const FgBrightBlue = "\x1b[94m"
const FgBrightMagenta = "\x1b[95m"
const FgBrightCyan = "\x1b[96m"
const FgBrightWhite = "\x1b[97m"

const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"
const BgBrightBlack = "\x1b[100m"
const BgBrightRed = "\x1b[101m"
const BgBrightGreen = "\x1b[102m"
const BgBrightYellow = "\x1b[103m"
const BgBrightBlue = "\x1b[104m"
const BgBrightMagenta = "\x1b[105m"
const BgBrightCyan = "\x1b[106m"
const BgBrightWhite = "\x1b[107m"

// Spaces on the puzzle board
export const spaces = [
  ['0,0', {x: 0, y: 0, name: 'Jan', neighbors: ['1,0', '0,1'], val: 'Jan'}],
  ['1,0', {x: 1, y: 0, name: 'Feb', neighbors: ['0,0', '2,0', '1,1'], val: 'Feb'}],
  ['2,0', {x: 2, y: 0, name: 'Mar', neighbors: ['1,0', '3,0', '2,1'], val: 'Mar'}],
  ['3,0', {x: 3, y: 0, name: 'Apr', neighbors: ['2,0', '4,0', '3,1'], val: 'Apr'}],
  ['4,0', {x: 4, y: 0, name: 'May', neighbors: ['3,0', '5,0', '4,1'], val: 'May'}],
  ['5,0', {x: 5, y: 0, name: 'Jun', neighbors: ['4,0', '5,1'], val: 'Jun'}],
  ['0,1', {x: 0, y: 1, name: 'Jul', neighbors: ['0,0', '1,1', '0,2'], val: 'Jul'}],
  ['1,1', {x: 1, y: 1, name: 'Aug', neighbors: ['1,0', '0,1', '2,1', '1,2'], val: 'Aug'}],
  ['2,1', {x: 2, y: 1, name: 'Sep', neighbors: ['2,0', '1,1', '3,1', '2,2'], val: 'Sep'}],
  ['3,1', {x: 3, y: 1, name: 'Oct', neighbors: ['3,0', '2,1', '4,1', '3,2'], val: 'Oct'}],
  ['4,1', {x: 4, y: 1, name: 'Nov', neighbors: ['4,0', '3,1', '5,1', '4,2'], val: 'Nov'}],
  ['5,1', {x: 5, y: 1, name: 'Dec', neighbors: ['5,0', '4,1', '5,2'], val: 'Dec'}],
  ['0,2', {x: 0, y: 2, name: ' 1 ', neighbors: ['0,1', '1,2', '0,3'], val: 1}],
  ['1,2', {x: 1, y: 2, name: ' 2 ', neighbors: ['1,1', '0,2', '2,2', '1,3'], val: 2}],
  ['2,2', {x: 2, y: 2, name: ' 3 ', neighbors: ['2,1', '1,2', '3,2', '2,3'], val: 3}],
  ['3,2', {x: 3, y: 2, name: ' 4 ', neighbors: ['3,1', '2,2', '4,3', '3,3'], val: 4}],
  ['4,2', {x: 4, y: 2, name: ' 5 ', neighbors: ['4,1', '3,2', '3,4', '4,3'], val: 5}],
  ['5,2', {x: 5, y: 2, name: ' 6 ', neighbors: ['5,1', '4,2', '6,2', '5,3'], val: 6}],
  ['6,2', {x: 6, y: 2, name: ' 7 ', neighbors: ['5,2', '6,3'], val: 7}],
  ['0,3', {x: 0, y: 3, name: ' 8 ', neighbors: ['0,2', '1,3', '0,4'], val: 8}],
  ['1,3', {x: 1, y: 3, name: ' 9 ', neighbors: ['1,2', '0,3', '2,3', '1,4'], val: 9}],
  ['2,3', {x: 2, y: 3, name: '10 ', neighbors: ['2,2', '1,3', '3,3', '2,4'], val: 10}],
  ['3,3', {x: 3, y: 3, name: '11 ', neighbors: ['3,2', '2,3', '4,3', '3,4'], val: 11}],
  ['4,3', {x: 4, y: 3, name: '12 ', neighbors: ['4,2', '3,3', '5,3', '4,4'], val: 12}],
  ['5,3', {x: 5, y: 3, name: '13 ', neighbors: ['5,2', '4,3', '6,3', '5,4'], val: 13}],
  ['6,3', {x: 6, y: 3, name: '14 ', neighbors: ['6,2', '5,3', '6,4'], val: 14}],
  ['0,4', {x: 0, y: 4, name: '15 ', neighbors: ['0,3', '1,4', '0,5'], val: 15}],
  ['1,4', {x: 1, y: 4, name: '16 ', neighbors: ['1,3', '0,4', '2,4', '1,5'], val: 16}],
  ['2,4', {x: 2, y: 4, name: '17 ', neighbors: ['2,3', '1,4', '3,4', '2,5'], val: 17}],
  ['3,4', {x: 3, y: 4, name: '18 ', neighbors: ['3,3', '2,4', '4,4', '3,5'], val: 18}],
  ['4,4', {x: 4, y: 4, name: '19 ', neighbors: ['4,3', '3,4', '5,4', '4,5'], val: 19}],
  ['5,4', {x: 5, y: 4, name: '20 ', neighbors: ['5,3', '4,4', '6,4', '5,5'], val: 20}],
  ['6,4', {x: 6, y: 4, name: '21 ', neighbors: ['6,3', '5,4', '6,5'], val: 21}],
  ['0,5', {x: 0, y: 5, name: '22 ', neighbors: ['0,4', '1,5'], val: 22}],
  ['1,5', {x: 1, y: 5, name: '23 ', neighbors: ['1,4', '0,5', '2,5'], val: 23}],
  ['2,5', {x: 2, y: 5, name: '24 ', neighbors: ['2,4', '1,5', '3,5', '2,6'], val: 24}],
  ['3,5', {x: 3, y: 5, name: '25 ', neighbors: ['3,4', '2,5', '4,5', '3,6'], val: 25}],
  ['4,5', {x: 4, y: 5, name: '26 ', neighbors: ['4,4', '3,5', '5,5', '4,6'], val: 26}],
  ['5,5', {x: 5, y: 5, name: '27 ', neighbors: ['5,4', '4,5', '6,5'], val: 27}],
  ['6,5', {x: 6, y: 5, name: '28 ', neighbors: ['6,4', '5,5'], val: 28}],
  ['2,6', {x: 2, y: 6, name: '29 ', neighbors: ['2,5', '3,6'], val: 29}],
  ['3,6', {x: 3, y: 6, name: '30 ', neighbors: ['3,5', '2,6', '4,6'], val: 30}],
  ['4,6', {x: 4, y: 6, name: '31 ', neighbors: ['4,5', '3,6'], val: 31}],
];

/**
 * Pieces for the puzzle to be placed. These are order by number of spaces 
 * each piece occupies descending then by number of variants the piece has descending
 */
export const pieces = [
  // ## ## #   # #### #### #       #
  // #   # #   # #       # #### ####
  // #   # #   #
  // #   # ## ##
  {
    name: 'Large L',
    symbol: FgBlack + BgGreen + 'L' + Reset,
    variants: [      
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}],
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 1, y: 3}],
      [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}, {x: 0, y: 3}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 0, y: 1}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 3, y: 1}],
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}],
      [{x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 3, y: 0}],
    ]
  },
  // ##  ###  ## ### #   # ## ##
  // ### ##  ###  ## ## ## ## ##
  //                 ## ## #   #
  {
    name: '9',
    symbol: FgBlack + BgMagenta + '9' + Reset,
    variants: [
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 0}],
      [{x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}],
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}],
      [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 0, y: 2}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}],
    ]
  },
  // ##   ## #     #
  //  #   #  ### ###
  //  ## ##    # #
  {
    name: 'Large Z',
    symbol: FgBlack + BgBrightWhite + 'Z' + Reset,
    variants: [
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 2, y: 2}],
      [{x: 2, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 0, y: 2}],
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 2, y: 2}],
      [{x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 0, y: 2}],
    ]
  },
  // ## ## ### # #
  // #   # # # ###
  // ## ##
  {
    name: 'U',
    symbol: FgBlack + BgCyan + 'U' + Reset,
    variants: [
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 2, y: 1}],
      [{x: 0, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
    ]
  },
  //  #
  // ###
  //  #
  {
    name: 'plus',
    symbol: FgBlack + BgBlue + '+' + Reset,
    variants: [
      [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}, {x: 1, y: 2}]
    ]
  },
  // ## ## #   # ### ### #     #
  // #   # #   # #     # ### ###
  // #   # ## ##
  {
    name: 'Small L',
    symbol: FgBlack + BgRed + 'l' + Reset,
    variants: [
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}],
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 2}],
      [{x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2}, {x: 0, y: 2}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 0, y: 1}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 2, y: 1}],
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
      [{x: 2, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
    ]
  },
  // #   # ##   ##
  // ## ##  ## ##
  //  # #
  {
    name: 'Small Z',
    symbol: FgBlack + BgBrightMagenta + 'z' + Reset,
    variants: [
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}],
      [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 0, y: 2}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}, {x: 2, y: 1}],
      [{x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 0}, {x: 2, y: 0}],
    ]
  },
  //  #  ### #   #
  // ###  #  ## ##
  //         #   #
  {
    name: 'T',
    symbol: FgBlack + BgYellow + 'T' + Reset,
    variants: [
      [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}],
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 1, y: 1}],
      [{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}, {x: 1, y: 1}],
      [{x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}, {x: 1, y: 2}],
    ]
  },
  // ##
  // ##
  {
    name: 'square',
    symbol: FgBlack + BgBrightRed + 'S' + Reset,
    variants: [
      [{x: 0, y: 0}, {x: 1, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}]
    ]
  },
]

// Blank and empty spaces
export const blank = Reset + 'X';
export const empty = Reset + '.';

