var containerEl = document.querySelector(".container");

for (var i = 8; i <= 15; i++) {
  var row = document.createElement("div");
  row.classList.add("row");
  var hour = document.createElement("div");
  hour.classList.add("col-1", "hour");
  var description = document.createElement("textarea");
  description.classList.add("col-10", "description");
  var saveBtn = document.createElement("button");
  saveBtn.classList.add("col-1", "saveBtn");
  row.appendChild(hour, description, saveBtn);
  containerEl.appendChild(row);
}
