const downButtons = document.querySelectorAll('.down');
const upButtons = document.querySelectorAll('.up');
const dropdowns = document.querySelectorAll('.drop');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const drop = document.querySelector('.drop-down');
 
downButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    dropdowns[index].style.display = 'inline-block';
    upButtons[index].style.display = 'inline-block';
    button.style.display = 'none';
  });
});
 
upButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    dropdowns[index].style.display = 'none';
    button.style.display = 'none';
    downButtons[index].style.display = 'inline-block';
  });
});
 
openBtn.addEventListener('click', () => {
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  drop.style.display = 'block';
  drop.style.animation = 'slide-in 0.5s forwards';
});
 
closeBtn.addEventListener('click', () => {
  closeBtn.style.display = 'none';
 drop.style.animation = 'slide-out 0.5s forwards';
  setTimeout(() => {
    drop.style.display = 'none';
    openBtn.style.display = 'block';
  }, 500);
});
