// modal one banner
var modal = document.querySelector('.modal-btn');
var modalBG = document.querySelector('.modal-bg');

var close = document.querySelector('.modal-close')
modal.addEventListener('click', function(e){
  e.preventDefault();
  modalBG.classList.add('bg-active');
})
close.addEventListener('click', function(e){
  modalBG.classList.remove('bg-active');

})
// modal one backend comm



// seconda modal
// banner one

var modal1 = document.querySelector('.modal-btn1');
var modalBG1 = document.querySelector('.modal-bg1');

var close1 = document.querySelector('.modal-close1')
modal1.addEventListener('click', function(e){
  e.preventDefault();
  modalBG1.classList.add('bg-active');
})
close1.addEventListener('click', function(e){
  modalBG1.classList.remove('bg-active');

})

var modal2 = document.querySelector('.modal-btn2');
var modalBG2 = document.querySelector('.modal-bg2');

var close2 = document.querySelector('.modal-close2')
modal2.addEventListener('click', function(e){
  e.preventDefault();
  modalBG2.classList.add('bg-active');
})
close2.addEventListener('click', function(e){
  modalBG2.classList.remove('bg-active');

})




