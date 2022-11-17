function PrintFigure (num){
let result = "";
let text = '+'
for (let currentLine = 1; currentLine <= num; currentLine++){
    for (let space = 0; space < num- currentLine; space++){
        result += " ";
    }
    for (let numElem = 0; numElem < currentLine; numElem++){
        result += text;
    }
    result += "\n";
}
return result;
}

console.log (PrintFigure (5));
