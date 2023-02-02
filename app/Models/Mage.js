// import { generateId } from "../Utils/generateId";



export class Mage {
    constructor (data) {
        // this.id = data.id || generateId()
        this.name = data.name
        this.rarity = data.rarity
        this.price = data.price
        this.imgUrl = data.imgUrl
    }


get MageCardTemplate() {
    return /*html*/`
    
    <div class="col-md-3 my-3 text-light">
        <div class="card-elevation-4" onclick="app.magesController.setActiveMage('')">
        <img class="img-size img-fluid rounded"
          src="${this.imgUrl}"
          alt="${this.name}">
            <div class="card-body rounded">
            <p><b>${this.name}</b></p>
            <p>${this.rarity}</p>
            <p>${this.price}</p>
            </div>
    </div>
    
    `
}


}