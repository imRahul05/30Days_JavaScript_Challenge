
const main = document.getElementById('main-content');

setTimeout(() => {
 

  const div = document.createElement('div');
  div.style.color = '#721c24';
  div.className = "btn nosifer-regular ";
  const text = document.createTextNode("🚧🚧 This site is still under Development....🚧🚧");
  div.style.textAlign= 'center';

  div.appendChild(text);
  main.appendChild(div);

  setTimeout(() => {
    main.removeChild(div);
  }, 5000);
}, 0);


const dark = document.getElementById('toggle-mode');

dark.addEventListener('click', function() {
setTimeout(() => {
  

    const div = document.createElement('div');
    div.style.color = '#721c24';
    const text = document.createTextNode("Working on dark mode toggle..");
    div.style.textAlign= 'center';

    div.appendChild(text);
    main.appendChild(div);

    setTimeout(() => {
      main.removeChild(div);
    }, 1000);

},0)

})