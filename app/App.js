// import { ValuesController } from "./Controllers/ValuesController.js";
import {MagesController} from './Controllers/MagesController.js'

class App {
  // valuesController = new ValuesController();
  magesController = new MagesController()
}

window["app"] = new App();
