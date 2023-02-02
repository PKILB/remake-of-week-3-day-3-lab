import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Mage } from "./Models/Mage.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./Models/Mage').Mage[]} */
  mages = [
    new Mage (
      {
        name: 'Brand',
        rarity: 'Legendary',
        price: 100,
        imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc6bc1f1-2870-4492-909c-29369011dcf6/dd2iter-f284a762-ec6d-4ec0-bf68-6375d53d63e8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjNmJjMWYxLTI4NzAtNDQ5Mi05MDljLTI5MzY5MDExZGNmNlwvZGQyaXRlci1mMjg0YTc2Mi1lYzZkLTRlYzAtYmY2OC02Mzc1ZDUzZDYzZTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pi2n7mn3MnKrpi7_YYbLZAVdyKONr7dL_NDuoxFskIo'
      }
    ),
  ]
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
