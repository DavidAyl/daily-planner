var containerEl = document.querySelector(".container");
var currentDay = document.getElementById('currentDay')
var currentTime = moment().format('LLL');
console.log(currentTime)
currentDay.textContent += currentTime
for (var i = 8; i <= 15; i++) {
  var row = document.createElement("div");
  row.classList.add("row");
  var hour = document.createElement("div");
  hour.classList.add("col-1", "hour");
  var description = document.createElement("textarea");
  description.classList.add("col-10", "description");
  var saveBtn = document.createElement("button");
  saveBtn.classList.add("col-1", "saveBtn");
  row.appendChild(hour);
  row.appendChild(description)
  row.appendChild(saveBtn)
  containerEl.appendChild(row);
}

var textArea = document.querySelector('.description')

var inputValue = textArea.value

var saveBtns = document.querySelectorAll("button");

saveBtns.forEach(function (button) {
  button.addEventListener('click', function(event) {
    event.preventDefault()
    localStorage.setItem('inputValue', JSON.stringify(textArea.value));
    })
  })

textArea.value = JSON.parse(localStorage.getItem("inputValue"))

