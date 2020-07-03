/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

// Creating the Navigation
const navUl = document.getElementById('nav-links');

const docSections = document.querySelectorAll('section');

for (i = 0; i < docSections.length; ++i) {
  sectionId = docSections[i].id;
  sectionNames = docSections[i].dataset.nav;

  const navLinks = document.createElement('li');
  navLinks.classList.add('navLinks');
  navUl.appendChild(navLinks);

  const anchorTag = document.createElement('a');
  anchorTag.setAttribute('href', '#'+sectionId);
  anchorTag.innerHTML=sectionNames;
  navLinks.appendChild(anchorTag);

}

// Active on section
const soLink = document.querySelectorAll('.navLinks a');

for (i = 0; i < soLink.length; ++i) {
  const anchorHref = soLink[i].getAttribute('href');

  soLink[i].addEventListener('click', function(){
    //shows the #name of nav link clicked
    cleanId = anchorHref.replace('#','');
    const findSection = document.getElementById(cleanId);
    //findSection.classList.add('active'); //adds to section

    const currentSection = document.getElementsByClassName('info');

    for (i = 0; i < currentSection.length; i++) {
      //console.log(currentSection[i]);
      const comeOn = document.getElementsByClassName('active');
      if (comeOn.length > 0) {
        comeOn[0].className = comeOn[0].className.replace(' active', '');
      }
      findSection.className += ' active';
    }

  });
}

// Active on navigation
const navClass = navUl.getElementsByClassName('navLinks');
for (i = 0; i < navClass.length; i++) {
  //console.log(navClass);
  navClass[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('nav-active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' nav-active', '');
    }
    this.className += ' nav-active';
  });
}


// Active on section while scrolling
window.addEventListener('scroll', function() {

  // Coudn't figure out how to loop through the section find section in window and incorporate scroll.
  const scrollSection = document.getElementById('section-4');
  const sectionHere = scrollSection.getBoundingClientRect();

  if (sectionHere.top >= 0 && sectionHere.left >= 0 && sectionHere.right <= (window.innerWidth || document.documentElement.clientWidth) && sectionHere.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    //console.log('I see you');
    scrollSection.classList.add('active');
  } else {
    //console.log('I CANT see you');
    scrollSection.classList.remove('active');
  }
});

// Back to top
window.addEventListener('scroll', toTop);

function toTop() {
  //Windows height + cross-browser solution for IE8 and earlier
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  || document.body.clientHeight;

  const backToTop = document.getElementById('back-to-top');
  if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
}


// Active on section while scrolling
/*const currentSection = document.getElementsByClassName('info');
for (i = 0; i < currentSection.length; i++) {
  //console.log(currentSection);
  const ok = currentSection[i].focus();
  if(ok.length > 0){
    console.log(ok);
  }
}*/

// Active on section while scrolling
/*window.addEventListener('scroll', function() {

  // Coudn't figure out how to loop through the section and incorporate scroll.
  // So gave up and did hard manual
  const section1 = document.getElementById('section-1');
  const section2 = document.getElementById('section-2');
  const section3 = document.getElementById('section-3');
  const section4 = document.getElementById('section-4');
  const section5 = document.getElementById('section-5');
  const section6 = document.getElementById('section-6');
  const section7 = document.getElementById('section-7');

  const sectionHere1 = section1.getBoundingClientRect();
  const sectionHere2 = section2.getBoundingClientRect();
  const sectionHere3 = section3.getBoundingClientRect();
  const sectionHere4 = section4.getBoundingClientRect();
  const sectionHere5 = section5.getBoundingClientRect();
  const sectionHere6 = section6.getBoundingClientRect();
  const sectionHere7 = section7.getBoundingClientRect();

  if (sectionHere2.top >= 0 && sectionHere2.left >= 0 && sectionHere2.right <= (window.innerWidth || document.documentElement.clientWidth) <= (window.innerHeight || document.documentElement.clientHeight)) {
    console.log('I see you');
    section2.classList.add('active');
  } else {
    console.log('I CANT see you');
    section2.classList.remove('active');
  }
  if (sectionHere3.top >= 0 && sectionHere3.left >= 0 && sectionHere3.right <= (window.innerWidth || document.documentElement.clientWidth) <= (window.innerHeight || document.documentElement.clientHeight)) {
    console.log('I see you');
    section3.classList.add('active');
  } else {
    console.log('I CANT see you');
    section3.classList.remove('active');
  }
  if (sectionHere4.top >= 0 && sectionHere4.left >= 0 && sectionHere4.right <= (window.innerWidth || document.documentElement.clientWidth) && sectionHere4.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    //console.log('I see you');
    section4.classList.add('active');
  } else {
    //console.log('I CANT see you');
    section4.classList.remove('active');
  }
  if (sectionHere5.top >= 0 && sectionHere5.left >= 0 && sectionHere5.right <= (window.innerWidth || document.documentElement.clientWidth) && sectionHere5.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    section5.classList.add('active');
  } else {
    section5.classList.remove('active');
  }
  if (sectionHere6.top >= 0 && sectionHere6.left >= 0 && sectionHere6.right <= (window.innerWidth || document.documentElement.clientWidth) && sectionHere6.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    section6.classList.add('active');
  } else {
    section6.classList.remove('active');
  }
  if (sectionHere7.top >= 0 && sectionHere7.left >= 0 && sectionHere7.right <= (window.innerWidth || document.documentElement.clientWidth) && sectionHere7.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
    section7.classList.add('active');
  } else {
    section7.classList.remove('active');
  }
});*/

// Scroll and active added
/*window.addEventListener('scroll', function() {
  //console.log('stuff');
  if ( in view ){
    findSection.classList.add('active');
  }
  else{
    findSection.classList.remove('active');
  }
});*/

//elementInViewport();

/*window.addEventListener('scroll', function() {
  elementInViewport();
});*/

// Smooth scroll
/*document.querySelector('.navLinks a[href="#section-2"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#section-2').scroll({ top: 1000, left: 0, behavior: 'smooth' });
});*/


/*document.querySelectorAll('.navLinks a').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.scrollable-element-to-top').scroll({ top: 0, left: 0, behavior: 'smooth' });
});*/

/*function smooth(){
  console.log('set');
  const aTags = document.querySelectorAll('a');

  aTags.addEventListener('click', function(event){
    console.log('set in');
    event.preventDefault();
    aTags.style.
  });
}
smooth();*/
