var selectedPoint = null;

function selectPoint(pointId) {
  // Deselect the currently selected point
  if (selectedPoint) {
    selectedPoint.classList.remove("red");
    selectedPoint.classList.add("blue");

    // Reset the corresponding point name style
    var lastSelectedPointName = document.getElementById(
      "pointName" + getPointNumber(selectedPoint.id)
    );
    lastSelectedPointName.style.color = "";
    lastSelectedPointName.style.borderLeft = ""; // Remove the red border
  }

  // Select the new point
  selectedPoint = document.getElementById(pointId);
  selectedPoint.classList.remove("blue");
  selectedPoint.classList.add("red");

  // Update the corresponding point name style
  var pointName = document.getElementById(
    "pointName" + getPointNumber(pointId)
  );
  pointName.style.color = "#d0191f";
  pointName.style.borderLeft = "4px solid #d0191f"; // Add a red border to the left side

  // Update modal content 
  var modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = pointName.innerHTML;
}

function getPointNumber(pointId) {
  // Extract the numeric part of the point ID
  return pointId.replace("point", "");
}

const staticBackdrop = document.getElementById("staticBackdrop");
const myInput = document.getElementById("myInput");

staticBackdrop.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});
