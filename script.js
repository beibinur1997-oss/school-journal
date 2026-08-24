let count = 0;

function addGrade() {
  const name = document.getElementById("studentName").value;
  const subject = document.getElementById("subject").value;
  const grade = document.getElementById("grade").value;

  if (name === "" || subject === "" || grade === "") {
    alert("Өтініш, барлық өрісті толтырыңыз!");
    return;
  }

  count++;
  const table = document.getElementById("journalTable");
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td>${count}</td>
    <td>${name}</td>
    <td>${subject}</td>
    <td><strong>${grade}</strong></td>
  `;

  // Енгізу өрістерін тазалау
  document.getElementById("studentName").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("grade").value = "";
}