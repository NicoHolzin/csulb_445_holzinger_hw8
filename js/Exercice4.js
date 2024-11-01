function submitForm() {
  const table = document.getElementById("formDataTable");
  const rowCount = table.rows.length;
  for (let i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  const form = document.getElementById("sampleForm");
  const formData = new FormData(form);

  for (let [key, value] of formData.entries()) {
    const row = table.insertRow();
    const cellKey = row.insertCell(0);
    const cellValue = row.insertCell(1);
    cellKey.textContent = key;
    cellValue.textContent = value;
  }
}
