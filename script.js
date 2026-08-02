document.getElementById("enrollForm").addEventListener("submit", function(e){

    e.preventDefault();

    let studentName =
    document.getElementById("studentName").value;

    let course =
    document.getElementById("course").value;

    document.getElementById("successMessage").innerHTML =
    "✅ Thank You " +
    studentName +
    "! Your enrollment request for " +
    course +
    " has been submitted successfully.";

    document.getElementById("enrollForm").reset();
});