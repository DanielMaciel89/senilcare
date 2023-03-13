window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll();
  backToTopButtonOnScroll();

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //linha alvo
  const targetLine = scrollY + innerHeight / 2;



  //Verificar se a seção passou da linha
  //quais dados vou precisar ?

  //o todo da seção
  const sectionTop = section.offsetTop;

  //altura da seção
  const sectionHeight = section.offsetHeight;

  //o todo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop


  //informaões dos dados e da logica 
  console.log('O topo da seção chegou ou passou da linha ? ', sectionTopReachOrPassedTargetline)

  //verificar se a base abaixo da linha alvo
  //quais dados vou precisar 

  // a seção termina onde ?
  const sectionEndsAt = sectionTop + sectionHeight;

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;


  //limites da seção 
  const sectionBoundaries = sectionTopReachOrPassedTargetline &&
    !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries)
    menuElement.classList.add('active')
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  }
  else {
    navigation.classList.remove('scroll');
  }
}

function backToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show');
  }
  else {
    backToTopButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .item, 
#services, 
#services. header, 
#services .card,
#about,
#about .header,
#about .content`);



