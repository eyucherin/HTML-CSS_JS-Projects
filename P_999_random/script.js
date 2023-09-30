for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => console.log("Capturing:", elem.tagName), true);
  }

// const outer = document.querySelector('#outer');
// const middle = document.querySelector('#middle');
// const inner = document.querySelector('#inner');

// outer.addEventListener('click', () => {
//   console.log('Outer clicked');
// });

// middle.addEventListener('click', (event) => {
//   console.log('Middle clicked');
// });

// inner.addEventListener('click', (event) => {
//    event.stopPropagation();
//   console.log('Inner clicked');
// });