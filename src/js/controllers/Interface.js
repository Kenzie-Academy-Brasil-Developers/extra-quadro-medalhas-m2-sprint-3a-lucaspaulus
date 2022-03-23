import {ContriesDatabase} from "../db/db.js"
import {Template} from "../models/Template.js"
import {OrderObjects} from "../models/OrderObjects.js"
class ControllerInterface{
    /*  Template.tableHeaderBtnPosition
        Template.tableHeaderBtnGold
        Template.tableHeaderBtnSilver
        Template.tableHeaderBtnBronze 
     */
    static Table(){
        Template.tableHeaderBtnPosition.addEventListener("click", function(){
            OrderObjects.orderBytotal(ContriesDatabase)
            Template.tableWrapper.innerHTML = ''
            Template.setTableItem(ContriesDatabase)
            console.log(ContriesDatabase)
        })

        Template.tableHeaderBtnGold.addEventListener("click", function(){
            OrderObjects.orderByGold(ContriesDatabase)
            Template.tableWrapper.innerHTML = ''
            Template.setTableItem(ContriesDatabase)
            console.log(ContriesDatabase)
        })

        Template.tableHeaderBtnSilver.addEventListener("click", function(){
            OrderObjects.orderBySilver(ContriesDatabase)
            Template.tableWrapper.innerHTML = ''
            Template.setTableItem(ContriesDatabase)
            console.log(ContriesDatabase)
        })

        Template.tableHeaderBtnBronze.addEventListener("click", function(){
            OrderObjects.orderByBronze(ContriesDatabase)
            Template.tableWrapper.innerHTML = ''
            Template.setTableItem(ContriesDatabase)
            console.log(ContriesDatabase)
        })
    }
}
 





export {ControllerInterface}