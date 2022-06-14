// tayendo elementos del DOM 
const navbar = document.getElementById('navbar')
const hero = document.getElementById('hero')
const containerNavbar = document.getElementById('containerNavbar')

// configuraciones del observer
const optionsNavbar = {
  rootMargin: "-10% 0px 0px 0px"
}

// cambia estilos del navbar cuando termina el hero 
const observerNavbar = new IntersectionObserver(function(entries, observerNavbar){
  entries.forEach(entry=>{
    
    // cuando el viewport esta abajo 
    if(!entry.isIntersecting){
      // cambia color de fondo de navbar
      navbar.classList.remove('nav-top')
      navbar.classList.add('nav-scrolled')
      // cambia tamaño de navbar
      containerNavbar.classList.remove('containerNavbar-top')
      containerNavbar.classList.add('containerNavbar-scrolled')


    } else{
      // cuando el viewport esta arriba

      // cambia color de fondo de navbar
      navbar.classList.remove('nav-scrolled')
      navbar.classList.add('nav-top')
      // cambia tamaño de navbar
      containerNavbar.classList.remove('containerNavbar-scrolled')
      containerNavbar.classList.add('containerNavbar-top')
    }

  })
}, optionsNavbar)

observerNavbar.observe(hero)