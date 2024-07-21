// Get the form data from local storage
const formData = JSON.parse(localStorage.getItem("formData"));

if (formData && formData.length > 0) {
  const tableBody = document.querySelector("tbody");

  // Iterate through form data and create table rows
  formData.forEach((data) => {
    const row = document.createElement("tr");
    for (const key in data) {
      const cell = document.createElement("td");
      cell.textContent = data[key];
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  });
}
// Retrieve form data from local storage
// const formData = JSON.parse(localStorage.getItem("formData")) || [];

// // Function to display form data in the table
// function displayFormData() {
//   const tbody = document.querySelector("tbody");

//   for (const data of formData) {
//     const row = document.createElement("tr");

//     for (const key in data) {
//       const cell = document.createElement("td");
//       cell.textContent = data[key];
//       row.appendChild(cell);
//     }

//     const deleteCell = document.createElement("td");
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => deleteEntry(data));
//     deleteCell.appendChild(deleteButton);
//     row.appendChild(deleteCell);

//     tbody.appendChild(row);
//   }
// }

// // Function to delete an entry from local storage and update the table
// function deleteEntry(entry) {
//   const index = formData.findIndex(
//     (item) => JSON.stringify(item) === JSON.stringify(entry)
//   );

//   if (index !== -1) {
//     formData.splice(index, 1);
//     localStorage.setItem("formData", JSON.stringify(formData));
//     location.reload(); // Refresh the page to update the table
//   }
// }

// // Call the displayFormData function when the page loads
// window.onload = displayFormData;
