const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#enquiry-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const text = `Hello Sheeshpal General Store, I am ${data.get('name')}. My phone number is ${data.get('phone')}. I want to enquire about: ${data.get('message')}`;
  window.open(`https://wa.me/918395851250?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
