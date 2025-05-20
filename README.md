## 📦 Requisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [ANTLR 4](https://www.antlr.org/) (para generar el parser desde el archivo `.g4`)

---

## 🚀 Instalación

1. Clonar este repositorio o copiar los archivos a una carpeta local.
2. Instalar las dependencias:

```bash
npm install
```

3. (Opcional) Si necesitas regenerar el parser desde el archivo `.g4`:

```bash
antlr4 -Dlanguage=JavaScript -visitor -o src/parser JSSubset.g4
```

> Se debe tener `antlr4` en el PATH. Si no se cuenta con el mismo, se pueden seguir las instrucciones aquí: [https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md)

---

## 🧪 Uso

Se puede ejecutar el analizador con un archivo de entrada `.txt` que contenga código del lenguaje JSSubset. Por ejemplo:

```bash
node src/index.js input/correcto1.txt
```

### 📂 Estructura esperada del archivo

```txt
x = 5;
output("Hola mundo");
```

---

## ✅ Ejemplo de salida

```bash
🧩 Tokens reconocidos:
  [1] Identifier: "x"
  [1] '=': "="
  [1] Number: "5"
  [1] ';': ";"
  [2] 'output': "output"
  [2] '(': "("
  [2] TextLiteral: ""Hola mundo""
  [2] ')': ")"
  [2] ';': ";"

🌳 Árbol sintáctico:
(program (simpleStatement (assignmentStatement x = (constant 5) ;)) (simpleStatement (outputStatement output ( "Hola mundo" ) ;)))

📤 Interpretación:
  output: Hola mundo
```
---

## 📌 Notas

- El archivo `JSSubset.g4` define las reglas léxicas y sintácticas del lenguaje.
