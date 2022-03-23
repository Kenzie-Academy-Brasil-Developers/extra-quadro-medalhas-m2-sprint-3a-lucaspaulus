import {Template} from "./Template.js"

class OrderObjects{
    static orderBytotal(database){

        database.forEach(({medal_bronze, medal_gold, medal_silver})=> {
           const{total} = medal_bronze + medal_gold + medal_silver
           const result = database[total]          
           return result  
        });
    }

    static orderByGold(database){
        database.sort(function(a,b){
            return b.medal_gold - a.medal_gold
        })
    }

    static orderBySilver(database){
        database.sort(function(a,b){
            return b.medal_silver - a.medal_silver
        })
    }

    static orderByBronze(database){
        database.sort(function(a,b){
            return b.medal_bronze - a.medal_bronze
        })
    }

}

export {OrderObjects}