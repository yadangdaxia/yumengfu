var colc = new Colcade('.grid', {
  columns: '.grid-col',
  items: '.grid-item'
});


const images = document.querySelectorAll('img')
images.forEach((pic) => {
  console.log(pic)


  pic.addEventListener('mouseover', (e) => {
    console.log(e, "youre hovering")
    // pic.innerText = title
    const title = document.querySelector('.image-text')
    console.log(title.innerText, "title here")
  });
});


// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160,
//   // percentPosition: true
//   gutter: 10,
//   fitWidth: true
// });
