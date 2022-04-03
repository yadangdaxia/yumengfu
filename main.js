var colc = new Colcade('.grid', {
  columns: '.grid-col',
  items: '.grid-item'
});


const image = document.querySelectorAll('img')
console.log(image)
image.forEach((pic) => {
  console.log(pic)
  pic.addEventListener('click', (e) => {
    console.log(e)
    // pic.innerText="hi"
  });
});


// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160,
//   // percentPosition: true
//   gutter: 10,
//   fitWidth: true
// });
