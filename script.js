document.querySelector('.hamburger').addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav');
  const open=nav.dataset.open==='1';
  if(open){nav.removeAttribute('style');nav.dataset.open='0';}
  else{nav.dataset.open='1';nav.style.display='flex';nav.style.position='absolute';nav.style.top='68px';nav.style.left='0';nav.style.right='0';nav.style.padding='18px 6vw';nav.style.background='#fff';nav.style.flexDirection='column';nav.style.gap='16px';nav.style.boxShadow='0 10px 25px #08254318';}
});
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>{
  const nav=document.querySelector('.nav nav'); nav.removeAttribute('style'); nav.dataset.open='0';
}));
