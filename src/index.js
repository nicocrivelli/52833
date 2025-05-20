const fs = require('fs');
const antlr4 = require('antlr4');
const ErrorListener = require('antlr4').ErrorListener;

// Lexer y Parser generados por ANTLR (acceso correcto a exportación por defecto)
const JSSubsetLexer = require('./parser/JSSubsetLexer').default;
const JSSubsetParser = require('./parser/JSSubsetParser').default;

// ErrorListener personalizado
class CustomErrorListener extends ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push(` Error de sintaxis en línea ${line}:${column} → ${msg}`);
  }
}

// Función principal
function analizarArchivo(rutaArchivo) {
  const input = fs.readFileSync(rutaArchivo, 'utf8');
  const chars = new antlr4.InputStream(input);
  const lexer = new JSSubsetLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new JSSubsetParser(tokens);

  // Configurar errores
  const myErrorListener = new CustomErrorListener();
  parser.removeErrorListeners();
  parser.addErrorListener(myErrorListener);

  // Parsear
  const tree = parser.program();

  // Mostrar tokens
  console.log(" Tokens reconocidos:");
  tokens.fill();
  for (const token of tokens.tokens) {
  if (token.type > 0) {
    const nombreToken = JSSubsetLexer.symbolicNames[token.type];
    console.log(`  [${token.line}] ${nombreToken}: "${token.text}"`);
  }
}

  // Mostrar errores
  if (myErrorListener.errors.length > 0) {
    console.log("\n Errores encontrados:");
    myErrorListener.errors.forEach(e => console.log("  " + e));
    return;
  }

  // Mostrar árbol
  console.log("\n Árbol sintáctico:");
  console.log(tree.toStringTree(parser.ruleNames));

  // Interpretación simulada (muy básica)
  console.log("\n Interpretación:");
  const lines = input.split('\n');
  for (let line of lines) {
    line = line.trim();
    if (line.startsWith("output(")) {
      const match = line.match(/output\("([^"]+)"\);?/);
      if (match) {
        console.log(`  output: ${match[1]}`);
      }
    }
  }
}

// Leer archivo desde argumentos
const archivoEntrada = process.argv[2];
if (!archivoEntrada) {
  console.error("  Debes especificar un archivo de entrada. Ejemplo:\n  node src/index.js input/correcto1.txt");
  process.exit(1);
}

analizarArchivo(archivoEntrada);
