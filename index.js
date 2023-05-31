
var Name = document.getElementById('Name')
var Email = document.getElementById('mail')
var website = document.getElementById('web')
var btn = document.getElementById('btn');
var cards = document.querySelector('.cards');
var Male = document.getElementById('male')
var Female = document.getElementById('female')
var html = document.getElementById('c1')
var css = document.getElementById('c2')
var javascript = document.getElementById('c3')
var form = document.querySelector('form');
var cards = document.getElementById('cards');
var resetbtn = document.getElementById('resetbtn');
var selectImage;

var image = function (event) {
  selectImage = URL.createObjectURL(event.target.files[0]);
};
btn.addEventListener('click', function () {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = []
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });

  if (!Name.value || !mail.value || !web.value) {
    alert('Please enter all fields!')
  }
  else {
    cards.innerHTML += `
  <div class="card">
  <div class="card-body">
  <h4 class="title">${Name.value}</h4>
  <p class="text">${male.checked ? male.value : female.checked ? female.value : 'Others'}</p>
  <p class="text">${mail.value}</p>
  <p class="text">${web.value}</p>
  <p class="text">${values}</p>
  </div>
  <div class="image">
      <img src='${selectImage}' alt="Image">
    </div>
  </div>`

    alert('Student registered Successfully!')
    form.reset()
    selectImage = null;
  }
});
resetbtn.addEventListener('click', function () {
  selectImage = null;
  cards.innerHTML="";
  
})