///////////////////////////////////////////////////////////
// Fixing scrolling animation
const allLink = document.querySelectorAll('a:link');
const headerEl = document.querySelector('.header');

allLink.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });

    // Scroll to spesific section
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // close mobile navigation
    if (link.classList.contains('main-nav-link')) headerEl.classList.toggle('nav-open');
  });
});

///////////////////////////////////////////////////////////
// Sticky Navigation
const heroSection = document.getElementById('hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add('sticky');
    else document.body.classList.remove('sticky');
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(heroSection);

///////////////////////////////////////////////////////////
// get and set current year in footer copy right
document.getElementById('year').textContent = new Date().getFullYear();

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNav = document.querySelector('.btn-mobile-nav');
btnNav.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
