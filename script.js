
/* I am aware this is baby code and is the long way of writing something that could be much shorter. My level of knowledge does not extend to that level of complexity just yet, as I am a beginner.  I am working on it but only achieved a basci level of understanding so-far this term. I have another version of js code that is commented out at the bottom of this page, but have some issues with it.  So still figuring that out.*/


//=============  Original js - simple  =====================
 
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
 
 /* =============     JS WORK IN PROGRESS... ==========================

let mainBtns = document.querySelector('.buttons')

let allSounds = [
  {
  id: 'alpha',
  img: 'icons/alpha.svg',
  sound: 'audio/arti-shell.mp3',
  desc: 'square symbol with inner circle containing a three fingered hand.'
}, {
  id: 'beta',
  img: 'icons/beta.svg',
  sound: 'audio/bell-tree.mp3',
  desc: 'a square shape with inner circle covering a five-sided star containing a three fingered hand.'
},{
  id: 'waves',
  img: 'icons/waves.svg',
  sound: '`audio/whoosh.mp3`',
  desc: 'hexagon shape with smaller inner hexagon shape conttaining an illustration of sound amplification waves.'
},{
  id: 'pause',
  img: 'icons/pause-fancy.svg',
  sound: '`audio/boing.mp3`',
  desc: 'Two parallel vertical thick bar shapes highlighted by repeating multi-colored lines.'
},{
  id: 'play',
  img: 'icons/play.svg',
  sound: '`audio/bullwhip.mp3`',
  desc: 'Triangle pointing downward with green addition sign in the centre, surrounded by three small yellow dots.'
},{
  id: 'progress',
  img: 'icons/progress.svg',
  sound: '`audio/fart-two.mp3`',
  desc: 'Three vertical bars of varying thicknesses and vertical formation. Inside each bar is an ellipse with some line notations.'
},{
  id: 'squiggles',
  img: 'icons/squiggles.svg',
  sound: '`audio/flute.mp3`',
  desc: 'A rectangle in portrati orientation framing a flock of vertical line notations.'
},{
  id: 'mirror',
  img: 'icons/mirror.svg',
  sound: '`audio/laugh.mp3`',
  desc: 'An oval in portarit orientation framing a series of empty asymmetrical shaped circles.'
},{
  id: 'stop',
  img: 'icons/zeta.svg',
  sound: '`audio/wangle.mp3`',
  desc: 'A perect square containg another smaller square, of various colors and borders.'
},
]

let soundFx = document.createElement(`div`)
soundFx.setAttribute(`id`, allSounds.id)

let soundImg = document.createElement(`img`)
soundImg.setAttribute(`src`, allSounds.img)
soundImg.setAttribute(`alt`, allSounds.desc)

let wavSound = function() {
  let newSound = new Audio(allSounds.sound)
  newSound.play()
 }
 soundFx.addEventListener(`click`, wavSound)

soundFx.append(soundImg)
mainBtns.append(soundFx)

*/