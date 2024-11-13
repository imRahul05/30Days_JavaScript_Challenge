
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


