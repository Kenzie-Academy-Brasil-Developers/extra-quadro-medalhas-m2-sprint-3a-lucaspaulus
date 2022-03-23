class Api{
    static endpoint = "https://kenzie-olympics.herokuapp.com/paises"
    static async listCountries(){
        const response = await fetch(this.endpoint)
        const data     = await response.json()
        return data
    }
}


export {Api}