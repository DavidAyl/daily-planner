var containerEl = document.querySelector(".container");
var currentDay = document.getElementById("currentDay");
var currentTime = moment().format("LLL");
console.log(currentTime);
console.log(moment().hour());
currentDay.textContent += currentTime;
for (var i = 8; i <= 15; i++) {
  var row = document.createElement("div");
  row.classList.add("row", "time-block");
  row.dataset.hour = i;
  var hour = document.createElement("div");
  hour.classList.add("col-1", "hour");
  hour.textContent = i + ":00";
  var description = document.createElement("textarea");
  if (moment().hour() == i) {
    description.classList.add("present");
  } else if (moment().hour() >= i) {
    description.classList.add("past");
  } else {
    description.classList.add("future");
  }
  description.classList.add("col-10", "description");
  description.value = JSON.parse(localStorage.getItem(i));
  var saveBtn = document.createElement("button");
  saveBtn.classList.add("col-1", "saveBtn", "fas", "fa-save");
  row.appendChild(hour);
  row.appendChild(description);
  row.appendChild(saveBtn);
  containerEl.appendChild(row);
}

var hourBlock = document.getElementsByClassName(hour);

var textArea = document.querySelector(".description");

var inputValue = textArea.value;

var saveBtns = document.querySelectorAll("button");

// moment().hour() check against i

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
