import { appState } from "../AppState.js"
import { Mage } from "../Models/Mage.js"
import {setHTML} from "../Utils/Writer.js"




function _drawMages() {
    let template = ''
    appState.mages.forEach(m => template += m.MageCardTemplate)
    setHTML('mage-list', template)
}



export class MagesController {
    constructor() {
        this.show()
        appState.on('mages', _drawMages)
    }

    show() {
        _drawMages()
    }
}