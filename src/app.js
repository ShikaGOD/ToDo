

let list = document.querySelector('#myUL');

let data = ['find a job', 'relocate', 'buy a new PC']

function init() {
   data.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = item;
      list.appendChild(li);

      let span = document.createElement('span');
      let txt = document.createTextNode("\u00D7");
      span.classList.add('close');
      span.appendChild(txt);
      li.appendChild(span); 
   })
}


init();