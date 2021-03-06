(function (win, doc, ElemCol){
'use strict';

window.lang = function (v) {
  if (v) {
    localStorage.setItem('lang', v);
  } else {
    return localStorage.getItem('lang');
  }
} 

var q = doc.querySelector.bind(doc);

var eidx;

var 
  langsel = q('.lang-select'),
  elem = q('.elem'),
  ekey = q('.elem .key'),
  enumb = q ('.elem .numb'),
  answtxt = q('#answ'),
  answbtn = q('.answbtn'),
  msgbox = q('#msgbox'),
  msg = q('#msgbox .msg'),
  past = [0,0,0,0,0],
  lc = false,
  msgLocal = {
    pt: [ 'Resposta correta!', 'Incorreto... A resposta era <b>' ],
    en: [ 'Thats correct!', 'Incorrect... The answer was <b>' ]
  }
;

var setlang = window.location.hash.match(/setlang=(.*)/);
if (setlang) {
  lang(setlang[1]);
}
switch (lang()) {
  case 'en':
    langsel.selectedIndex = 1;
  case 'pt':
    langsel.selectedIndex = 2;
  default:
    langsel.selectedIndex = 0;
}
langsel.addEventListener('change', function () {
  var l = langsel.options[langsel.selectedIndex].className;
  lang(l);
  window.localize();
});

function remAcentos( newStringComAcento ) {
  var string = newStringComAcento;
    var mapaAcentosHex     = {
        a : /[\xE0-\xE6]/g,
        e : /[\xE8-\xEB]/g,
        i : /[\xEC-\xEF]/g,
        o : /[\xF2-\xF6]/g,
        u : /[\xF9-\xFC]/g,
        c : /\xE7/g,
        n : /\xF1/g
    };

    for ( var letra in mapaAcentosHex ) {
        var expressaoRegular = mapaAcentosHex[letra];
        string = string.replace( expressaoRegular, letra );
    }

    return string;
}

function validate(){
  if(remAcentos(answtxt.value).toLowerCase().trim() == remAcentos(Elements[eidx]['Name-'+window.lang()]).toLowerCase().trim()) {
    msgbox.className = "ok";
    msg.innerHTML = msgLocal[window.lang()][0];
    lc = true;
  } else {
    msgbox.className = "bad";
    msg.innerHTML = msgLocal[window.lang()][1] + Elements[eidx]['Name-'+window.lang()] + "</b>";
    lc = false;
  }
}

function next() {
  answtxt.value = "";
  var lasteidx = eidx;
  do {
    eidx = Math.floor(Math.random()*Elements.length);
  } while (past.indexOf(eidx) != -1);
  if(lc === true) {
    past.pop();
    past.unshift(lasteidx);
  }
  console.log(past)
  ekey.innerHTML = Elements[eidx].Key;
  enumb.innerHTML = eidx+1;
  elem.style.background = ElemCol[Elements[eidx].Class];
}

function pass(){
  msgbox.className = "";
  next();
}

q('#msgbox .close').addEventListener("click", pass)

answbtn.addEventListener("click", function (){
  if(msgbox.className == "") validate();
  else pass();
});
answtxt.addEventListener("keyup", function (e){
  if(e.which == 13) { // Enter
    if(msgbox.className == "") validate();
    else pass();
  }  
})

next();

})(window, document, {
  'metal': '#8CE881',
  'ametal': '#EAEA6B',
  'hydrogen': '#EA91E1',
  'noblegas': '#79BBEA'
  })
