(function(){
  var parts=location.pathname.split('/');
  var page=parts.pop()||'index.html';
  var theme=parts.pop();
  var inTheme=/^[abc]$/.test(theme);
  var pages=[['index.html','Home'],['hoelzer.html','Hölzer'],['produkt.html','Produkt'],['zubehoer.html','Zubehör'],['blog.html','Blog'],['artikel.html','Blogbeitrag'],['ueber-uns.html','Über uns'],['kontakt.html','Kontakt'],['warenkorb.html','Warenkorb'],['kasse.html','Kasse'],['konto.html','Konto'],['rechtliches.html','Rechtliches']];
  var base=inTheme?'../':'';
  var bar=document.createElement('div');bar.id='cbar';
  var h='<a href="'+base+'index.html"'+(!inTheme?' class="on"':'')+'>Overview</a>';
  [['a','A · Noir'],['b','B · Atelier'],['c','C · Resonanz']].forEach(function(x){
    h+='<a href="'+base+x[0]+'/'+(inTheme?page:'index.html')+'"'+(theme===x[0]?' class="on"':'')+'>'+x[1]+'</a>';
  });
  if(inTheme){
    h+='<select id="cpage" aria-label="Page">'+pages.map(function(p){return '<option value="'+p[0]+'"'+(p[0]===page?' selected':'')+'>'+p[1]+'</option>'}).join('')+'</select>';
  }
  bar.innerHTML=h;document.body.appendChild(bar);
  var sel=document.getElementById('cpage');if(sel)sel.onchange=function(){location.href=sel.value};
  var els=document.querySelectorAll('section > *, .cfg > *, .reveal-me, main > *');
  els.forEach(function(e){e.classList.add('reveal')});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.06});
  els.forEach(function(e){io.observe(e)});
  // simple interactivity for mockups
  document.querySelectorAll('.chips,.opts2,.woods2,.th,.pay,.tabs2').forEach(function(g){
    g.addEventListener('click',function(ev){var t=ev.target.closest('.chip,.opts2>div,.woods2>span,.th>div,.pay>label,.tabs2>span');if(!t||!g.contains(t))return;
      g.querySelectorAll('.on').forEach(function(o){o.classList.remove('on')});t.classList.add('on');
      if(t.parentNode.classList.contains('th')){var m=document.querySelector('.main');if(m)m.style.backgroundImage=t.style.backgroundImage}});
  });
})();
