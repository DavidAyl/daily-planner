var containerEl = document.querySelector(".container");
var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("LLL");
console.log(currentTime);
currentDay.textContent += currentTime;
for (var i = 8; i <= 15; i++) {
  var row = document.createElement("div");
  row.classList.add("row", "time-block");
  row.dataset.hour = i;
  var hour = document.createElement("div");
  hour.classList.add("col-1", "hour");
  var description = document.createElement("textarea");
  description.classList.add("col-10", "description");
  description.value = JSON.parse(localStorage.getItem(i));
  var saveBtn = document.createElement("button");
  saveBtn.classList.add("col-1", "saveBtn");
  row.appendChild(hour);
  row.appendChild(description);
  row.appendChild(saveBtn);
  containerEl.appendChild(row);
}

var textArea = document.querySelector(".description");

var inputValue = textArea.value;

var saveBtns = document.querySelectorAll("button");

containerEl.addEventListener("click", function (event) {
  if (event.target.matches(".saveBtn")) {
    localStorage.setItem(
      event.target.parentNode.dataset.hour,
      JSON.stringify(
        event.target.parentNode.querySelector(".description").value
      )
    );
  }
});

// saveBtns.forEach(function (button) {
//   button.addEventListener("click", function (event) {
//     event.preventDefault();
//     localStorage.setItem(
//       event.target.parentNode.dataset.hour,
//       JSON.stringify(textArea.value)
//     );
//   });
// });

// moment().hour() check against i
