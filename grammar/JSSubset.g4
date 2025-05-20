grammar JSSubset;

program: simpleStatement+;

simpleStatement: assignmentStatement | outputStatement;

assignmentStatement: Identifier '=' constant ';';

outputStatement: 'output' '(' TextLiteral ')' ';';

constant: Number | TextLiteral;

TextLiteral: '"' (~["\r\n])* '"';

Identifier: Letter (Letter | Digit | '_')*;

Number: Digit+;

fragment Letter: [a-zA-Z];

fragment Digit: [0-9];

WS: [ \t\r\n]+ -> skip;