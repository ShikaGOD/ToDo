let items = document.querySelectorAll('li');
for (let i = 0; i < items.length; i++) {
   let span = document.createElement('span');
   let txt = document.createTextNode("\u00D7");
   span.classList.add('close');
   span.appendChild(txt);
   items[i].appendChild(span);
}


