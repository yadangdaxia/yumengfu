
const image = document.querySelectorAll('img')
console.log(image)
image.forEach((pic) => {
  console.log(pic)
  pic.addEventListener('click', (e) => {
    console.log(e)
    // pic.innerText="hi"
  });
});
