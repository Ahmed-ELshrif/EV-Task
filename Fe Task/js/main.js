var selectedPoint = null;

function selectPoint(pointId) {
  deselectCurrentPoint();

  // Select the new point
  selectedPoint = document.getElementById(pointId);
  selectedPoint.classList.remove("blue");
  selectedPoint.classList.add("red");

  // Update the corresponding point name style
  updatePointNameStyle(pointId);


}

function selectPointByName(pointNameId) {
  deselectCurrentPoint();

  // Select the new point by name
  var pointNumber = getPointNumber(pointNameId);
  selectedPoint = document.getElementById("point" + pointNumber);
  selectedPoint.classList.remove("blue");
  selectedPoint.classList.add("red");

  // Update the corresponding point name style
  updatePointNameStyle("point" + pointNumber);


}

function deselectCurrentPoint() {
  // Deselect the currently selected point
  if (selectedPoint) {
    selectedPoint.classList.remove("red");
    selectedPoint.classList.add("blue");

    // Reset the corresponding point name style
    var lastSelectedPointName = document.getElementById(
      "pointName" + getPointNumber(selectedPoint.id)
    );
    lastSelectedPointName.style.color = "";
    lastSelectedPointName.style.borderLeft = "";

    var lastSelectedPointName = document.getElementById(
      "pointNames" + getPointNumber(selectedPoint.id)
    );
    lastSelectedPointName.style.color = "";
    lastSelectedPointName.style.borderTop = "";
  }
}

function updatePointNameStyle(elementId) {
  // Update the corresponding point name style
  var pointNameId = "pointName" + getPointNumber(elementId);
  var pointName = document.getElementById(pointNameId);
  pointName.style.color = "#d0191f";
  pointName.style.borderLeft = "4px solid #d0191f";

  var pointNamesId = "pointNames" + getPointNumber(elementId);
  var pointName = document.getElementById(pointNamesId);
  pointName.style.color = "#d0191f";
  pointName.style.borderTop = "4px solid #d0191f"; // Add a red border to the left side
}

function getPointNumber(pointId) {
  // Extract the numeric part of the point ID
  return pointId.replace("point", "");
}

var scrollorama = $.scrollorama({
  blocks: '.scrollblock'
});

scrollorama
            .animate('#shard-1', {
                delay: 0,
                duration: 800,
                property: 'top',
                start: 200,
                end: 800
            })
            .animate('#shard-2', {
                delay: 0,
                duration: 1200,
                property: 'top',
                start: 1000,
                end: 100
            })
            .animate('#shard-3', {
                delay: 200,
                duration: 1200,
                property: 'top',
                start: 1100,
                end: 100
            })
            .animate('#shard-4', {
                delay: 200,
                duration: 600,
                property: 'top',
                start: 1200,
                end: 1000
            })
            .animate('#shard-5', {
                delay: 200,
                duration: 800,
                property: 'top',
                start: 1300,
                end: 1200
            })
            .animate('#shard-11', {
                delay: 1500,
                duration: 1000,
                property: 'top',
                start: 2000,
                end: 1200
            })
            .animate('#shard-12', {
                delay: 1800,
                duration: 1500,
                property: 'top',
                start: 2200,
                end: 1500
            })
            .animate('#shard-13', {
                delay: 1800,
                duration: 500,
                property: 'top',
                start: 2500,
                end: 1000
            })
            .animate('#shard-14', {
                delay: 2000,
                duration: 2000,
                property: 'top',
                start: 2700,
                end: 1200
            })
            .animate('#shard-15', {
                delay: 2500,
                duration: 2000,
                property: 'top',
                start: 2700,
                end: 1000
            })
            .animate('#shard-16', {
                delay: 2500,
                duration: 5000,
                property: 'top',
                start: 3000,
                end: 800
            })
            .animate('#shard-6', {
                delay: 3200,
                duration: 1000,
                property: 'top',
                start: 4000,
                end: 2000
            })
            .animate('#shard-7', {
                delay: 3300,
                duration: 1000,
                property: 'top',
                start: 4200,
                end: 2000
            })
            .animate('#shard-8', {
                delay: 3800,
                duration: 800,
                property: 'top',
                start: 4100,
                end: 2000
            })
            .animate('#shard-9', {
                delay: 3800,
                duration: 2000,
                property: 'top',
                start: 4500,
                end: 2000
            })
            .animate('#shard-10', {
                delay: 4000,
                duration: 1000,
                property: 'top',
                start: 4500,
                end: 3500
            })
            .animate('#shard-17', {
                delay: 5000,
                duration: 1000,
                property: 'top',
                start: 5500,
                end: 4500
            })
            .animate('#shard-18', {
                delay: 5100,
                duration: 1000,
                property: 'top',
                start: 5600,
                end: 4000
            })
            .animate('#shard-19', {
                delay: 5100,
                duration: 1000,
                property: 'top',
                start: 5800,
                end: 5000
            })
            .animate('#shard-20', {
                delay: 5200,
                duration: 1500,
                property: 'top',
                start: 6000,
                end: 4800
            })
            .animate('#shard-21', {
                delay: 5200,
                duration: 2000,
                property: 'top',
                start: 6200,
                end: 4500
            });

