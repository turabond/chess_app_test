import BishopBlack from './figures/Chess_Black_Bishop.svg';
import BishopWhite from './figures/Chess_White_Bishop.svg';
import KingBlack from './figures/Chess_Black_King.svg';
import KingWhite from './figures/Chess_White_King.svg';
import QueenBlack from './figures/Chess_Black_Queen.svg';
import QueenWhite from './figures/Chess_White_Queen.svg';
import KnightBlack from './figures/Chess_Black_Knight.svg';
import KnightWhite from './figures/Chess_White_Knight.svg';
import PawnBlack from './figures/Chess_Black_Pawn.svg';
import PawnWhite from './figures/Chess_White_Pawn.svg';
import RookBlack from './figures/Chess_Black_Rook.svg';
import RookWhite from './figures/Chess_White_Rook.svg';

const data = {
    11: {x: 1, y: 1, isEmpty: false, itemType: "black", rulesType: "pawn", figure: RookBlack},
    12: {x: 1, y: 2, isEmpty: false, itemType: "black", rulesType: "knight", figure: KnightBlack},
    13: {x: 1, y: 3, isEmpty: false, itemType: "black", rulesType: "pawn", figure: BishopBlack},
    14: {x: 1, y: 4, isEmpty: false, itemType: "black", rulesType: "pawn", figure: QueenBlack},
    15: {x: 1, y: 5, isEmpty: false, itemType: "black", rulesType: "pawn", figure: KingBlack},
    16: {x: 1, y: 6, isEmpty: false, itemType: "black", rulesType: "pawn", figure: BishopBlack},
    17: {x: 1, y: 7, isEmpty: false, itemType: "black", rulesType: "knight", figure: KnightBlack},
    18: {x: 1, y: 8, isEmpty: false, itemType: "black", rulesType: "pawn", figure: RookBlack},
    21: {x: 2, y: 1, isEmpty: false, itemType: "black", rulesType: "pawn", figure: PawnBlack},
    22: {x: 2, y: 2, isEmpty: false, itemType: "black", rulesType: "pawn", figure: PawnBlack},
    23: {x: 2, y: 3, isEmpty: false, itemType: "black", rulesType: "pawn", figure: PawnBlack},
    24: {x: 2, y: 4, isEmpty: false, itemType: "black", rulesType: "pawn", figure: PawnBlack},
    25: {x: 2, y: 5, isEmpty: false, itemType: "black", rulesType: "pawn", figure: PawnBlack},
    26: {x: 2, y: 6, isEmpty: false, itemType: "black", rulesType: "pawn", figure: PawnBlack},
    27: {x: 2, y: 7, isEmpty: false, itemType: "black", rulesType: "pawn", figure: PawnBlack},
    28: {x: 2, y: 8, isEmpty: false, itemType: "black", rulesType: "pawn", figure: PawnBlack},
    31: {x: 3, y: 1, isEmpty: true},
    32: {x: 3, y: 2, isEmpty: true},
    33: {x: 3, y: 3, isEmpty: true},
    34: {x: 3, y: 4, isEmpty: true},
    35: {x: 3, y: 5, isEmpty: true},
    36: {x: 3, y: 6, isEmpty: true},
    37: {x: 3, y: 7, isEmpty: true},
    38: {x: 3, y: 8, isEmpty: true},
    41: {x: 4, y: 1, isEmpty: true},
    42: {x: 4, y: 2, isEmpty: true},
    43: {x: 4, y: 3, isEmpty: true},
    44: {x: 4, y: 4, isEmpty: true},
    45: {x: 4, y: 5, isEmpty: true},
    46: {x: 4, y: 6, isEmpty: true},
    47: {x: 4, y: 7, isEmpty: true},
    48: {x: 4, y: 8, isEmpty: true},
    51: {x: 5, y: 1, isEmpty: true},
    52: {x: 5, y: 2, isEmpty: true},
    53: {x: 5, y: 3, isEmpty: true},
    54: {x: 5, y: 4, isEmpty: true},
    55: {x: 5, y: 5, isEmpty: true},
    56: {x: 5, y: 6, isEmpty: true},
    57: {x: 5, y: 7, isEmpty: true},
    58: {x: 5, y: 8, isEmpty: true},
    61: {x: 6, y: 1, isEmpty: true},
    62: {x: 6, y: 2, isEmpty: true},
    63: {x: 6, y: 3, isEmpty: true},
    64: {x: 6, y: 4, isEmpty: true},
    65: {x: 6, y: 5, isEmpty: true},
    66: {x: 6, y: 6, isEmpty: true},
    67: {x: 6, y: 7, isEmpty: true},
    68: {x: 6, y: 8, isEmpty: true},
    71: {x: 7, y: 1, isEmpty: false, itemType: "white", rulesType: "pawn", figure: PawnWhite},
    72: {x: 7, y: 2, isEmpty: false, itemType: "white", rulesType: "pawn", figure: PawnWhite},
    73: {x: 7, y: 3, isEmpty: false, itemType: "white", rulesType: "pawn", figure: PawnWhite},
    74: {x: 7, y: 4, isEmpty: false, itemType: "white", rulesType: "pawn", figure: PawnWhite},
    75: {x: 7, y: 5, isEmpty: false, itemType: "white", rulesType: "pawn", figure: PawnWhite},
    76: {x: 7, y: 6, isEmpty: false, itemType: "white", rulesType: "pawn", figure: PawnWhite},
    77: {x: 7, y: 7, isEmpty: false, itemType: "white", rulesType: "pawn", figure: PawnWhite},
    78: {x: 7, y: 8, isEmpty: false, itemType: "white", rulesType: "pawn", figure: PawnWhite},
    81: {x: 8, y: 1, isEmpty: false, itemType: "white", rulesType: "pawn", figure: RookWhite},
    82: {x: 8, y: 2, isEmpty: false, itemType: "white", rulesType: "knight", figure: KnightWhite},
    83: {x: 8, y: 3, isEmpty: false, itemType: "white", rulesType: "pawn", figure: BishopWhite},
    84: {x: 8, y: 4, isEmpty: false, itemType: "white", rulesType: "pawn", figure: QueenWhite},
    85: {x: 8, y: 5, isEmpty: false, itemType: "white", rulesType: "pawn", figure: KingWhite},
    86: {x: 8, y: 6, isEmpty: false, itemType: "white", rulesType: "pawn", figure: BishopWhite},
    87: {x: 8, y: 7, isEmpty: false, itemType: "white", rulesType: "knight", figure: KnightWhite},
    88: {x: 8, y: 8, isEmpty: false, itemType: "white", rulesType: "pawn", figure: RookWhite},
};

export default data;
