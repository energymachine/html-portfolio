(function(){
  var f=location.pathname.split('/').pop()||'a.html';
  var bar=document.createElement('div');bar.id='cbar';
  bar.innerHTML='<span>Design concept</span>'+
    [['index.html','Overview'],['a.html','A · Noir'],['b.html','B · Atelier'],['c.html','C · Resonanz']]
    .map(function(x){return '<a href="'+x[0]+'"'+(f===x[0]?' class="on"':'')+'>'+x[1]+'</a>'}).join('');
  document.body.appendChild(bar);
  var els=document.querySelectorAll('section > *, .cfg > *, .reveal-me');
  els.forEach(function(e){e.classList.add('reveal')});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  els.forEach(function(e){io.observe(e)});
})();
