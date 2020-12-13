
//sound ONE
let soundFx = document.querySelector(`#alpha`)

let wavSound = function() {
 let artiShell = new Audio(`audio/arti-shell.mp3`)
 artiShell.play()
}

soundFx.addEventListener(`click`, wavSound)



//sound TWO
let soundFxTwo = document.querySelector(`#beta`)

let wavSoundTwo = function() {
 let bellTree = new Audio(`audio/bell-tree.mp3`)
 bellTree.play()
}

soundFxTwo.addEventListener(`click`, wavSoundTwo)



//sound THREE
let soundFxThree = document.querySelector(`#waves`)

let wavSoundThree = function() {
 let whoosh = new Audio(`audio/whoosh.mp3`)
 whoosh.play()
}

soundFxThree.addEventListener(`click`, wavSoundThree)



//sound FOUR
let soundFxFour = document.querySelector(`#pause`)

let wavSoundFour = function() {
  let boingOne = new Audio(`audio/boing.mp3`)
  boingOne.play()
 }
 
 soundFxFour.addEventListener(`click`, wavSoundFour)


//sound FIVE
let soundFxFive = document.querySelector(`#play`)

let wavSoundFive = function() {
  let bullWhip = new Audio(`audio/bullwhip.mp3`)
  bullWhip.play()
 }
 
 soundFxFive.addEventListener(`click`, wavSoundFive)



//sound SIX
let soundFxSix = document.querySelector(`#progress`)

let wavSoundSix = function() {
  let fartTwo = new Audio(`audio/fart-two.mp3`)
  fartTwo.play()
 }
 
 soundFxSix.addEventListener(`click`, wavSoundSix)


//sound SEVEN
let soundFxSeven = document.querySelector(`#squiggles`)

let wavSoundSeven = function() {
  let flute = new Audio(`audio/flute.mp3`)
  flute.play()
 }
 
 soundFxSeven.addEventListener(`click`, wavSoundSeven)


//sound EIGHT
let soundFxEight = document.querySelector(`#mirror`)

let wavSoundEight = function() {
  let laugh = new Audio(`audio/laugh.mp3`)
  laugh.play()
 }
 
 soundFxEight.addEventListener(`click`, wavSoundEight)


//sound NINE
let soundFxNine = document.querySelector(`#stop`)

let wavSoundNine = function() {
  let wangle = new Audio(`audio/wangle.mp3`)
  wangle.play()
 }
 
 soundFxNine.addEventListener(`click`, wavSoundNine)