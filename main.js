'use strict';

{
  const main = document.querySelector('main');

  const open1 = document.querySelector('.open-1');
  const modal1 = document.querySelector('.modal-1');
  const close1 = document.querySelector('.close-1');

  const open2 = document.querySelector('.open-2');
  const modal2 = document.querySelector('.modal-2');
  const close2 = document.querySelector('.close-2');

  const open3 = document.querySelector('.open-3');
  const modal3 = document.querySelector('.modal-3');
  const close3 = document.querySelector('.close-3');
  

  open1.addEventListener('click', () => {
    main.classList.add('hidden');
    modal1.classList.remove('move');
  });

  close1.addEventListener('click', () => {
    main.classList.remove('hidden');
    modal1.classList.add('move');
  });

  open2.addEventListener('click', () => {
    main.classList.add('hidden');
    modal2.classList.remove('move');
  });

  close2.addEventListener('click', () => {
    main.classList.remove('hidden');
    modal2.classList.add('move');
  });

  open3.addEventListener('click', () => {
    main.classList.add('hidden');
    modal3.classList.remove('move');
  });

  close3.addEventListener('click', () => {
    main.classList.remove('hidden');
    modal3.classList.add('move');
  });


}