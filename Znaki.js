var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
var dinosaur = 'triceratops'

var dino = dinosaur.toUpperCase()

var new = text.replace('Velociraptor', dinosaur)

var newtext = text.slice(0, text.length/2);
console.log(newtext)