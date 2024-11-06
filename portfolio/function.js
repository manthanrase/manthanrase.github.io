const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const primaryNav = document.querySelector('.dropdown-open');

toggleBtnIcon.addEventListener('click', function () {
  const visibility = primaryNav.getAttribute('data-visible');
  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
  } else {
    primaryNav.setAttribute('data-visible', false);
  }
});
