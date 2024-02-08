function validateForm() {
    const requiredFields = ["Full Name", "Course", "College", "Date of Lost", "Year Level", "Reason", "Student Signature", "ParentGuardian Signature"];
  
    for (let field of requiredFields) {
      let value = document.forms["dataform"][field].value;
      if (value.trim() === "") {
        alert(`${field} is required!`);
        return false;
      }
    }
  
    // Check if the provided URL is valid
    let studentSignature = document.forms["dataform"]["Student Signature"].value;
    if (!isValidURL(studentSignature)) {
      alert("Please enter a valid URL for Student's Signature!");
      return false;
    }
  
    let parentSignature = document.forms["dataform"]["ParentGuardian Signature"].value;
    if (!isValidURL(parentSignature)) {
      alert("Please enter a valid URL for Parent/Guardian's Signature!");
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  
  // Function to check if a string is a valid URL
  function isValidURL(str) {
    // Regular expression for a valid URL
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(str);
  }
  