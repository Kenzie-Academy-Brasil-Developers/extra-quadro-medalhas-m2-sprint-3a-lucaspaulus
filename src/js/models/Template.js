import {ContriesDatabase} from "../db/db.js"
import {ControllerInterface} from "./../controllers/Interface.js"
class Template{
    static tableContainer = document.getElementsByClassName("table-container")[0]
    static table = document.createElement("table")

    static tableWrapper = document.createElement("tbody")

    //Botões do header titles da table
    static tableHeaderBtnPosition = document.createElement("button")
    static tableHeaderBtnGold = document.createElement("button")
    static tableHeaderBtnSilver = document.createElement("button")
    static tableHeaderBtnBronze = document.createElement("button")
    
    static setTableHeader(){
     
        this.tableContainer.appendChild(this.table)
        
        const tableHeader = document.createElement("tr")
        this.table.appendChild(tableHeader)

        //header titles da table
        const tableHeaderTitlePosition = document.createElement("th")
        const tableHeaderTitleCountry = document.createElement("th")
        const tableHeaderTitleGold = document.createElement("th")
        const tableHeaderTitleSilver = document.createElement("th")
        const tableHeaderTitleBronze = document.createElement("th")
        const tableHeaderTitleTotal = document.createElement("th")

        //Associando os elementos de title com a header da table
        tableHeader.appendChild(tableHeaderTitlePosition) 
        tableHeader.appendChild(tableHeaderTitleCountry) 
        tableHeader.appendChild(tableHeaderTitleGold) 
        tableHeader.appendChild(tableHeaderTitleSilver) 
        tableHeader.appendChild(tableHeaderTitleBronze) 
        tableHeader.appendChild(tableHeaderTitleTotal)
 

        //Imagens do header titles da table
        const tableHeaderImgGold = document.createElement("img")
        const tableHeaderImgSilver = document.createElement("img")
        const tableHeaderImgBronze = document.createElement("img")

        //Associando os elementos de botões e imagem com o header da table
        tableHeaderTitlePosition.appendChild(this.tableHeaderBtnPosition)
        tableHeaderTitleGold.appendChild(tableHeaderImgGold )
        tableHeaderTitleGold.appendChild(this.tableHeaderBtnGold)
        tableHeaderTitleSilver.appendChild(tableHeaderImgSilver)
        tableHeaderTitleSilver.appendChild(this.tableHeaderBtnSilver)
        tableHeaderTitleBronze.appendChild(tableHeaderImgBronze)
        tableHeaderTitleBronze.appendChild(this.tableHeaderBtnBronze)
        


        
        //Inserindo os nomes dos botões e titulos da header
        this.tableHeaderBtnPosition.innerText = "Posição"
        tableHeaderTitleCountry.innerText = "País"
        this.tableHeaderBtnGold.innerText = "Gold"
        this.tableHeaderBtnSilver.innerText = "Silver"
        this.tableHeaderBtnBronze.innerText = "Bronze"
        tableHeaderTitleTotal.innerText = "Total"

        //Inserindo as imagem das medalhas na header
        tableHeaderImgGold.src = "./src/img/Gold.png"
        tableHeaderImgSilver.src = "./src/img/Silver.png"
        tableHeaderImgBronze.src = "./src/img/Bronze.png"

 
        
        //Adicionando a classe da header
        tableHeader.classList.add("table-header", "table-header--bg-color")

        //Adicionando a classe dos butões
        this.tableHeaderBtnPosition.classList.add("table-btn")
        this.tableHeaderBtnGold.classList.add("table-btn")
        this.tableHeaderBtnSilver.classList.add("table-btn")
        this.tableHeaderBtnBronze.classList.add("table-btn")

 
        
    }
    static setTableItem(db){
            let position = 1
            
          
        db.forEach(({country, flag_url, medal_bronze, medal_gold, medal_silver}) => {

               
       
               
                const tableItem = document.createElement("tr")
                this.tableWrapper.appendChild(tableItem)

                this.table.appendChild(this.tableWrapper)

                tableItem.classList.add("table-item","table-item--BgColor")

                const tableInfoPositionNumber = document.createElement("td")
                const tableInfoCountry = document.createElement("td")
                const tableInfoCountryImg = document.createElement("img")
                const tableInfoGold = document.createElement("td")
                const tableInfoSilver = document.createElement("td")
                const tableInfoBronze = document.createElement("td")
                const tableInfoTotal = document.createElement("td")

                tableItem.appendChild(tableInfoPositionNumber)
                tableItem.appendChild(tableInfoCountry)
                tableInfoCountry.appendChild(tableInfoCountryImg)
                tableItem.appendChild(tableInfoGold)
                tableItem.appendChild(tableInfoSilver)
                tableItem.appendChild(tableInfoBronze)
                tableItem.appendChild(tableInfoTotal)

                tableInfoPositionNumber.innerText = `${position++}`
                tableInfoCountryImg.src = `${flag_url}`
                tableInfoGold.innerText = `${medal_gold}`
                tableInfoSilver.innerText = `${medal_silver}`
                tableInfoBronze.innerText = `${medal_bronze}`
                
    

            







        });
 

    }

    

}
//console.log(ContriesDatabase)
export {Template}


        

     /*    ContriesDatabase.forEach(({country, flag_url, medal_bronze, medal_gold, medal_silver}) => {
            let total = medal_bronze + medal_gold + medal_silver

            medalsTotal.push(total)
            medalsGold.push({country,medal_gold})
            medalsSilver.push(medal_silver)
            medalsBronze.push(medal_bronze)
        
        }); */
