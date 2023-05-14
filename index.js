const XLSX = require('xlsx');

//XLSX.writeFile(workbook, 'output.xlsb');

const wb = XLSX.readFile('output/classeur1.xlsx');

console.log(wb);
 