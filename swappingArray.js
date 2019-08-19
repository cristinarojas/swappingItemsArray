const items = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const elementsToMove = [1, 3, 4]; // 200, 300, 400 ANTES DEL 800
let toIndex = 7 // [100, 300, 600, 700, 200, 400, 500, 800, 900];


const movedElements = [];

 elementsToMove.forEach(elementIndex => {
   if (items[elementIndex]) {
     movedElements.push(items[elementIndex]);
   }
 })

movedElements.sort((a, b) => {
  return b - a
});

let newItems = items.map(val =>  {
  if(!movedElements.includes(val)) {
    return val
  }

  return 'x';
});


movedElements.forEach((moved, i) => {
  newItems.splice(toIndex, 0, movedElements[i])
})

const finalData = newItems.filter((item) => item !== 'x');

console.log('finalData--->', finalData)
