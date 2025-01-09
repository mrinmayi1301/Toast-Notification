function getButtonId(button) {
  let clickedButtonId = button.id;
  console.log("Clicked button ID:", clickedButtonId);

  let addToast = document.getElementById("container");
  let iconName;
  let color;
  let message;

  if (clickedButtonId === "success") {
    iconName = "check_circle";
    color = "green";
    message = "Successfully submitted";
  } else if (clickedButtonId === "error") {
    iconName = "cancel";
    color = "red";
    message = "Please fix the error!";
  } else {
    iconName = "error";
    color = "orange";
    message = " Invalid input, check again";
  }
  let newToast = document.createElement("div");
  newToast.classList.add("msgBox");
  let icon = document.createElement("span");
  icon.className = "material-icons";
  icon.innerHTML = iconName;
  icon.style.color = color;
  let msg = document.createElement("span");
  msg.innerHTML = message;
  newToast.classList.add(clickedButtonId);

  newToast.appendChild(icon);
  newToast.append(msg);
  addToast.appendChild(newToast);

  setTimeout(() => {
    newToast.remove();
  }, 6000);
}
