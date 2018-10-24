document.addEventListener('DOMContentLoaded',
function() {

// ===== Grid ==================================================================
  let canvas = document.querySelector(".canvas")
  let numTiles = 3601

  for (let i = 1; i < numTiles; i++) {
    let tile = document.createElement("div")

    tile.style.width = "1%"
    tile.style.paddingBottom = "1%"
    tile.style.backgroundColor = "white"
    tile.style.border = "solid"
    tile.style.borderWidth = "thin"
    tile.style.borderColor = "grey"

    tile.style.float = "left"
    canvas.appendChild(tile)
  }


// ===== Random Hex gen ========================================================

// const randomIndex = (length) => {
//  return Math.floor(Math.random() * length)
// }
//
// const randomString = (n) => {
//    let result = '#'
//    let pool = "123456789FF"
//
//    for(let i = 0; i < n; i++) {
//      result += pool[randomIndex(pool.length)]
//    }
//
//    return result
// }



// ===== Set background ========================================================


  let brush
  let colorpalette = document.getElementsByClassName("colorpalette") // returns array
  let cell = document.getElementsByClassName("canvas")


  for(let i = 0; i < colorpalette.length; i++){
    colorpalette[i].addEventListener("click", function(){
      brush = colorpalette[i].id
      console.log(brush)
    })

  }

    canvas.addEventListener("click", function(event){
      event.target.style.backgroundColor = brush
    })








}) // DOMContentLoaded
