(function (win, doc){
'use strict';

var q = doc.querySelector.bind(doc);

var eidx;

var 
  elem = q('.elem'),
  ekey = q('.elem .key'),
  enumb = q ('.elem .numb'),
  answtxt = q('#answ'),
  answbtn = q('.answbtn'),
  msgbox = q('#msgbox'),
  msg = q('#msgbox .content')
;

function validate(){
  if(answtxt.value == Elements[eidx].Name) {
    msgbox.className = "ok";
    msg.innerHTML = "Thats correct!";
  } else {
    msgbox.className = "bad";
    msg.innerHTML = "Incorrect... The answer was <b>" + Elements[eidx].Name + "</b>";
  }
}

function next() {
  answtxt.value = "";
  eidx = Math.floor(Math.random()*Elements.length);
  ekey.innerHTML = Elements[eidx].Key;
  enumb.innerHTML = eidx;
}

q('#msgbox .close').addEventListener("click", function (){
  msgbox.className = "";
  next();
});

answbtn.addEventListener("click", validate);
answtxt.addEventListener("keyup", function (e){
  if(e.which == 13) // Enter
    validate();
})

})(window, document)
