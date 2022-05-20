

// var colc = new Colcade('.grid', {
//   columns: '.grid-col',
//   items: '.grid-item'
// });


// const images = document.querySelectorAll('img')
// images.forEach((pic) => {
//   console.log(pic)

//   pic.addEventListener('mouseover', (e) => {
//     console.log(e, "youre hovering")
//     // pic.innerText = title
//     const title = document.querySelector('.image-text')
//     console.log(title.innerText, "title here")
//   });
// });




// new Splide('#image-carousel').mount();
// document.addEventListener('DOMContentLoaded', function () {
//   new Splide('#image-carousel').mount();
// });




// Tagged projects appear and disappear

let comicButton = document.getElementById('comic');
let drawingButton = document.getElementById('drawing');
let artbookButton = document.getElementById('artbook');
let printButton = document.getElementById('print');
let showAllButton = document.getElementById('show-all');

let comicPics = document.querySelectorAll('.comic');
let drawingPics = document.querySelectorAll('.drawing');
let artbookPics = document.querySelectorAll('.artbook');
let printPics = document.querySelectorAll('.print');

function showAll() {
  comicPics.forEach((pic) => {
    pic.style.display = 'block';
  });
  drawingPics.forEach((pic) => {
    pic.style.display = 'block';
  });
  artbookPics.forEach((pic) => {
    pic.style.display = 'block';
  });
  printPics.forEach((pic) => {
    pic.style.display = 'block';
  });
  showAllButton.classList.add('active');
  comicButton.classList.remove('active');
  drawingButton.classList.remove('active');
  artbookButton.classList.remove('active');
  printButton.classList.remove('active');
}

function showComics() {
  comicPics.forEach((pic) => {
    pic.style.display = 'block';
  });
  drawingPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  artbookPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  printPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  showAllButton.classList.remove('active');
  comicButton.classList.add('active');
  drawingButton.classList.remove('active');
  artbookButton.classList.remove('active');
  printButton.classList.remove('active');
}

function showDrawings() {
  comicPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  drawingPics.forEach((pic) => {
    pic.style.display = 'block';
  });
  artbookPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  printPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  drawingButton.classList.add('active');
  showAllButton.classList.remove('active');
  comicButton.classList.remove('active');
  artbookButton.classList.remove('active');
  printButton.classList.remove('active');
}

function showArtbooks() {
  comicPics.forEach((pic) => {
    pic.style.display = 'none';
  })
  drawingPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  artbookPics.forEach((pic) => {
    pic.style.display = 'block';
  });
  printPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  artbookButton.classList.add('active');
  showAllButton.classList.remove('active');
  comicButton.classList.remove('active');
  drawingButton.classList.remove('active');
  printButton.classList.remove('active');
}

function showPrints() {
  comicPics.forEach((pic) => {
    pic.style.display = 'none';
  })
  drawingPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  artbookPics.forEach((pic) => {
    pic.style.display = 'none';
  });
  printPics.forEach((pic) => {
    pic.style.display = 'block';
  });
  printButton.classList.add('active');
  showAllButton.classList.remove('active');
  comicButton.classList.remove('active');
  drawingButton.classList.remove('active');
  artbookButton.classList.remove('active');
}

// show all work
showAllButton.addEventListener('click', () => {
  showAll();
});

// show and hide comics
comicButton.addEventListener('click', () => {
  showComics();
  // location.refresh();

  // console.log('clicked comic')
  // console.log(comicPics)
  // comicPics.forEach((pic) => {
  //   if (pic.style.display === 'none') {
  //     pic.style.display = 'block';
  //   }
  //   else {
  //     pic.style.display = 'none'
  //   }
  // });
});

// show and hide drawings
drawingButton.addEventListener('click', () => {
  showDrawings();

});

// show and hide artbook
artbookButton.addEventListener('click', () => {
  showArtbooks();
});

// show and hide prints
printButton.addEventListener('click', () => {
  showPrints();
});
