(function (win, doc){
'use strict';

var q = doc.querySelector.bind(doc);

var eidx;
eidx = Math.floor(Math.random()*Elements.length);

var 
  elem = q('.elem'),
  ekey = q('.elem .key'),
  enumb = q ('.elem .numb')
;
ekey.innerHTML = Elements[eidx].Key;
enumb.innerHTML = eidx;

})(window, document)
