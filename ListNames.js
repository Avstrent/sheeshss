const existingIDs = new Set();

document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const ID_num_input = document.getElementById('ID_num_input').value.trim();
    const firstname_input = document.getElementById('firstname_input').value.trim();
    const lastname_input = document.getElementById('lastname_input').value.trim();

    if (existingIDs.has(ID_num_input)) {
        alert("Error: ID Number already exists.");
        return;
    }

    const formattedLastName = lastname_input.toUpperCase();
    const inputsArray = [ID_num_input, firstname_input, formattedLastName];

    const tableBody = document.querySelector('#dataTable tbody');
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = inputsArray[0];
    newRow.insertCell(1).textContent = inputsArray[1];
    newRow.insertCell(2).textContent = inputsArray[2];

    existingIDs.add(ID_num_input);
    document.getElementById('inputForm').reset();
});