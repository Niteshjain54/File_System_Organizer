//Features of the Project -
//If we have numerous Files in a folder and they are not Properly arranged
//So we can use this tool to arrange them in specific directory according to their extension




const helpModule = require("./commands/help");
const organizeModule = require("./commands/organize");
const treeModule = require("./commands/tree");
let inputArr = process.argv.slice(2);



let command = inputArr[0];

switch (command) {
  case "tree":
    treeModule.treeKey(inputArr[1]);
    break;
  case "organize":
    organizeModule.organizeKey(inputArr[1]);
    break;
  case "help":
    helpModule.helpKey();
    break;

  default:
    console.log("PLEASE ENTER A VALID Command");
    break;
}