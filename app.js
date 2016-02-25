(function (win, doc){
'use strict';

var q = doc.querySelector.bind(doc);

var eidx;
eidx = Math.floor(Math.random()*Elements.length);

var elem = q('.elem');
elem.innerHTML = Elements[eidx].Key;

})(window, document)
