document.addEventListener("DOMContentLoaded", function () {
  // Get the table data cells
  var electricityData1 = document.getElementById("electricityData1");
  var electricityData2 = document.getElementById("electricityData2");
  var waterData1 = document.getElementById("waterData1");
  var waterData2 = document.getElementById("waterData2");
  var gasData1 = document.getElementById("gasData1");
  var gasData2 = document.getElementById("gasData2");
  var internetData1 = document.getElementById("internetData1");
  var internetData2 = document.getElementById("internetData2");

  // Get the month select element
  var monthDropdown = document.getElementById("monthDropdown");

  // Get the checkboxes for utilities
  var electricityCheckbox = document.getElementById("electricityCheckbox");
  var waterCheckbox = document.getElementById("waterCheckbox");
  var gasCheckbox = document.getElementById("gasCheckbox");
  var internetCheckbox = document.getElementById("internetCheckbox");

  // Add event listeners to checkboxes
  //   electricityCheckbox.addEventListener("change", updateTable);
  //   waterCheckbox.addEventListener("change", updateTable);
  //   gasCheckbox.addEventListener("change", updateTable);
  //   internetCheckbox.addEventListener("change", updateTable);

  // Get the postal code input values

  // Add event listener to the submit button
  var submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", updateTable);

  // Function to update the table based on the selected month and checkboxes
  function updateTable() {
    // Get the selected month
    var selectedMonth = monthDropdown.value;

    // Check the state of each utility checkbox
    var showElectricity = electricityCheckbox.checked;
    var showWater = waterCheckbox.checked;
    var showGas = gasCheckbox.checked;
    var showInternet = internetCheckbox.checked;

    var postalCode1 = document.getElementById("postalCode1").value;
    var postalCode2 = document.getElementById("postalCode2").value;

    // Update the postal code headers
    var postalCode1Header = document.getElementById("postalCode1Header");
    var postalCode2Header = document.getElementById("postalCode2Header");
    postalCode1Header.textContent = postalCode1;
    postalCode2Header.textContent = postalCode2;

    // Generate random data for the selected month and update the table
    generateRandomData(
      selectedMonth,
      showElectricity,
      showWater,
      showGas,
      showInternet
    );
  }

  // Function to generate random data for a given month and update the table
  function generateRandomData(
    month,
    showElectricity,
    showWater,
    showGas,
    showInternet
  ) {
    // Generate random data for each utility and update the respective table cells
    if (showElectricity) {
      electricityData1.textContent = getRandomValue();
      electricityData2.textContent = getRandomValue();
      document.getElementById("electricityRow").classList.remove("hidden");
    } else {
      document.getElementById("electricityRow").classList.add("hidden");
    }

    if (showWater) {
      waterData1.textContent = getRandomValue();
      waterData2.textContent = getRandomValue();
      document.getElementById("waterRow").classList.remove("hidden");
    } else {
      document.getElementById("waterRow").classList.add("hidden");
    }

    if (showGas) {
      gasData1.textContent = getRandomValue();
      gasData2.textContent = getRandomValue();
      document.getElementById("gasRow").classList.remove("hidden");
    } else {
      document.getElementById("gasRow").classList.add("hidden");
    }

    if (showInternet) {
      internetData1.textContent = getRandomValue();
      internetData2.textContent = getRandomValue();
      document.getElementById("internetRow").classList.remove("hidden");
    } else {
      document.getElementById("internetRow").classList.add("hidden");
    }
  }

  // Function to generate a random value between 50 and 200
  function getRandomValue() {
    return Math.floor(Math.random() * 151) + 50;
  }
});
