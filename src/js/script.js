import {Template} from "./models/Template.js"
import {ControllerInterface} from "./controllers/Interface.js" 

Template.setTableHeader()
ControllerInterface.Table()
 
const table = document.querySelector("table") 
console.log(table)

/* let number = 0
let myArr = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i < myArr.length ; i++){
    console.log(number++)
} 
console.log(number) */