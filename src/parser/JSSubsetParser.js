// Generated from grammar/JSSubset.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JSSubsetListener from './JSSubsetListener.js';
const serializedATN = [4,1,9,33,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,3,1,18,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,
3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,1,2,0,6,6,8,8,29,0,11,1,
0,0,0,2,17,1,0,0,0,4,19,1,0,0,0,6,24,1,0,0,0,8,30,1,0,0,0,10,12,3,2,1,0,
11,10,1,0,0,0,12,13,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,
18,3,4,2,0,16,18,3,6,3,0,17,15,1,0,0,0,17,16,1,0,0,0,18,3,1,0,0,0,19,20,
5,7,0,0,20,21,5,1,0,0,21,22,3,8,4,0,22,23,5,2,0,0,23,5,1,0,0,0,24,25,5,3,
0,0,25,26,5,4,0,0,26,27,5,6,0,0,27,28,5,5,0,0,28,29,5,2,0,0,29,7,1,0,0,0,
30,31,7,0,0,0,31,9,1,0,0,0,2,13,17];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JSSubsetParser extends antlr4.Parser {

    static grammarFileName = "JSSubset.g4";
    static literalNames = [ null, "'='", "';'", "'output'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, "TextLiteral", 
                             "Identifier", "Number", "WS" ];
    static ruleNames = [ "program", "simpleStatement", "assignmentStatement", 
                         "outputStatement", "constant" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSSubsetParser.ruleNames;
        this.literalNames = JSSubsetParser.literalNames;
        this.symbolicNames = JSSubsetParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSSubsetParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.simpleStatement();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleStatement() {
	    let localctx = new SimpleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JSSubsetParser.RULE_simpleStatement);
	    try {
	        this.state = 17;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.assignmentStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
	            this.outputStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JSSubsetParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(JSSubsetParser.Identifier);
	        this.state = 20;
	        this.match(JSSubsetParser.T__0);
	        this.state = 21;
	        this.constant();
	        this.state = 22;
	        this.match(JSSubsetParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputStatement() {
	    let localctx = new OutputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JSSubsetParser.RULE_outputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(JSSubsetParser.T__2);
	        this.state = 25;
	        this.match(JSSubsetParser.T__3);
	        this.state = 26;
	        this.match(JSSubsetParser.TextLiteral);
	        this.state = 27;
	        this.match(JSSubsetParser.T__4);
	        this.state = 28;
	        this.match(JSSubsetParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JSSubsetParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JSSubsetParser.EOF = antlr4.Token.EOF;
JSSubsetParser.T__0 = 1;
JSSubsetParser.T__1 = 2;
JSSubsetParser.T__2 = 3;
JSSubsetParser.T__3 = 4;
JSSubsetParser.T__4 = 5;
JSSubsetParser.TextLiteral = 6;
JSSubsetParser.Identifier = 7;
JSSubsetParser.Number = 8;
JSSubsetParser.WS = 9;

JSSubsetParser.RULE_program = 0;
JSSubsetParser.RULE_simpleStatement = 1;
JSSubsetParser.RULE_assignmentStatement = 2;
JSSubsetParser.RULE_outputStatement = 3;
JSSubsetParser.RULE_constant = 4;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_program;
    }

	simpleStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleStatementContext);
	    } else {
	        return this.getTypedRuleContext(SimpleStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitProgram(this);
		}
	}


}



class SimpleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_simpleStatement;
    }

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	outputStatement() {
	    return this.getTypedRuleContext(OutputStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterSimpleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitSimpleStatement(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_assignmentStatement;
    }

	Identifier() {
	    return this.getToken(JSSubsetParser.Identifier, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}


}



class OutputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_outputStatement;
    }

	TextLiteral() {
	    return this.getToken(JSSubsetParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterOutputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitOutputStatement(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSSubsetParser.RULE_constant;
    }

	Number() {
	    return this.getToken(JSSubsetParser.Number, 0);
	};

	TextLiteral() {
	    return this.getToken(JSSubsetParser.TextLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSSubsetListener ) {
	        listener.exitConstant(this);
		}
	}


}




JSSubsetParser.ProgramContext = ProgramContext; 
JSSubsetParser.SimpleStatementContext = SimpleStatementContext; 
JSSubsetParser.AssignmentStatementContext = AssignmentStatementContext; 
JSSubsetParser.OutputStatementContext = OutputStatementContext; 
JSSubsetParser.ConstantContext = ConstantContext; 
