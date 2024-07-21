document.addEventListener("DOMContentLoaded", function () {
  const countryDropdown = document.getElementById("countryDropdown");
  const stateDropdown = document.getElementById("stateDropdown");
  const outputDiv = document.getElementById("output");

  countryDropdown.addEventListener("change", function () {
    const selectedCountry = countryDropdown.value;
    stateDropdown.innerHTML = ""; // Clear previous options

    if (selectedCountry === "India") {
      const indianStates = [
        "select the state",
        "Andhra Pradesh",
        "Maharashtra",
        "Karnataka",
        "Tamil Nadu",
      ];
      populateDropdown(indianStates);
    } else if (selectedCountry === "USA") {
      const usaStates = [
        "select the state",
        "California",
        "New York",
        "Texas",
        "Florida",
      ];
      populateDropdown(usaStates);
    }
  });

  function populateDropdown(states) {
    states.forEach(function (state) {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      stateDropdown.appendChild(option);
    });
  }
});
