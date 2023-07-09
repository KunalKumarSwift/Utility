// User data
var userValues = [30, 40, 20, 10]; // User percentage values for each utility

// Utility labels
var labels = ["Electricity", "Water", "Gas", "Internet"];

// Generate pie charts for each utility
for (var i = 0; i < labels.length; i++) {
  var ctx = document.getElementById("chartCanvas" + (i + 1)).getContext("2d");
  var newChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: [
        "Percentage of users paying more",
        "Percentage of users paying less",
      ],
      datasets: [
        {
          data: [userValues[i], 100 - userValues[i]],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
          hoverBackgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderWidth: 0.5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: true,
        labels: {
          color: "white",
        },
      },
    },
  });
}
