(function (doc, $$) {
'use strict';

var strings = {
  title: {
    en: 'Periodic Helper',
    pt: 'Tabela Periódica'
  },
  desc: {
    en: 'Learn the periodic table in no time!',
    pt: 'Aprenda a tabela periódica em pouco tempo!'
  },
  by: {
    en: 'Created by: Leonardo Riether',
    pt: 'Criado por Leonardo Riether'
  },
  gitproj: {
    en: 'This project on github',
    pt: 'Este projeto no github'
  }
};

var lang = (function () {
  var l = localStorage.getItem('lang');
  if (l !== null) { return l; }
  else {
    localStorage.setItem('lang', 'en');
    return 'en';
  }
})();

[].forEach.call($$('[string]'), function (e) {
  e.textContent = strings[e.attributes.string][lang];
});

window.strings = strings;
window.lang = lang;

})(document, document.querySelectorAll.bind(document));
