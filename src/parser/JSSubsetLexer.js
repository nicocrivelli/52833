// Generated from grammar/JSSubset.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,72,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,1,1,1,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,5,5,41,8,5,10,5,12,5,44,
9,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,52,8,6,10,6,12,6,55,9,6,1,7,4,7,58,8,7,11,
7,12,7,59,1,8,1,8,1,9,1,9,1,10,4,10,67,8,10,11,10,12,10,68,1,10,1,10,0,0,
11,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,0,19,0,21,9,1,0,4,3,0,10,10,13,
13,34,34,2,0,65,90,97,122,1,0,48,57,3,0,9,10,13,13,32,32,75,0,1,1,0,0,0,
0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,
0,0,15,1,0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,3,25,1,0,0,0,5,27,1,0,0,0,7,34,
1,0,0,0,9,36,1,0,0,0,11,38,1,0,0,0,13,47,1,0,0,0,15,57,1,0,0,0,17,61,1,0,
0,0,19,63,1,0,0,0,21,66,1,0,0,0,23,24,5,61,0,0,24,2,1,0,0,0,25,26,5,59,0,
0,26,4,1,0,0,0,27,28,5,111,0,0,28,29,5,117,0,0,29,30,5,116,0,0,30,31,5,112,
0,0,31,32,5,117,0,0,32,33,5,116,0,0,33,6,1,0,0,0,34,35,5,40,0,0,35,8,1,0,
0,0,36,37,5,41,0,0,37,10,1,0,0,0,38,42,5,34,0,0,39,41,8,0,0,0,40,39,1,0,
0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,42,1,0,0,
0,45,46,5,34,0,0,46,12,1,0,0,0,47,53,3,17,8,0,48,52,3,17,8,0,49,52,3,19,
9,0,50,52,5,95,0,0,51,48,1,0,0,0,51,49,1,0,0,0,51,50,1,0,0,0,52,55,1,0,0,
0,53,51,1,0,0,0,53,54,1,0,0,0,54,14,1,0,0,0,55,53,1,0,0,0,56,58,3,19,9,0,
57,56,1,0,0,0,58,59,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,16,1,0,0,0,61,
62,7,1,0,0,62,18,1,0,0,0,63,64,7,2,0,0,64,20,1,0,0,0,65,67,7,3,0,0,66,65,
1,0,0,0,67,68,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,71,6,
10,0,0,71,22,1,0,0,0,6,0,42,51,53,59,68,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class JSSubsetLexer extends antlr4.Lexer {

    static grammarFileName = "JSSubset.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'='", "';'", "'output'", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, null, "TextLiteral", 
                          "Identifier", "Number", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "TextLiteral", 
                      "Identifier", "Number", "Letter", "Digit", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

JSSubsetLexer.EOF = antlr4.Token.EOF;
JSSubsetLexer.T__0 = 1;
JSSubsetLexer.T__1 = 2;
JSSubsetLexer.T__2 = 3;
JSSubsetLexer.T__3 = 4;
JSSubsetLexer.T__4 = 5;
JSSubsetLexer.TextLiteral = 6;
JSSubsetLexer.Identifier = 7;
JSSubsetLexer.Number = 8;
JSSubsetLexer.WS = 9;



