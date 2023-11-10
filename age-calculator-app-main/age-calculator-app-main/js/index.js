function calculateAge() {
  // Reset borders and error messages
  document.getElementById("day").style.border = "1px solid hsl(0, 0%, 86%)";
  document.getElementById("month").style.border = "1px solid hsl(0, 0%, 86%)";
  document.getElementById("year").style.border = "1px solid hsl(0, 0%, 86%)";
  document.getElementById("errorMonth").innerHTML = "";
  document.getElementById("errorYear").innerHTML = "";
  document.getElementById("errorDay").innerHTML = "";

  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);

  // Check if any field is empty
  if (!day || !month || !year) {
    // document.getElementById('error').innerHTML = 'Please enter all fields';
    if (!day) {
      document.getElementById("day").style.border = "1px solid red";
      document.getElementById("errorDay").innerHTML = "This field is required";
    }
    if (!month) {
      document.getElementById("month").style.border = "1px solid red";
      document.getElementById("errorMonth").innerHTML =
        "This field is required";
    }
    if (!year) {
      document.getElementById("year").style.border = "1px solid red";
      document.getElementById("errorYear").innerHTML = "This field is required";
    }
    // document.getElementById('result').innerHTML = '';
    return;
  }

  // Validate day, month, and year ranges
  if (
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > new Date().getFullYear()
  ) {
    // document.getElementById('error').innerHTML = 'Invalid date. Please enter valid day, month, and year.';
    if (day < 1 || day > 31) {
      document.getElementById("day").style.border = "1px solid red";
      document.getElementById("errorDay").innerHTML = "Must be a valid day";
    }
    if (month < 1 || month > 12) {
      document.getElementById("month").style.border = "1px solid red";
      document.getElementById("errorMonth").innerHTML = "Must be a valid month";
    }
    console.log("year is ", year);
    console.log(new Date().getFullYear());
    if (year < 1900 || year > new Date().getFullYear()) {
      document.getElementById("year").style.border = "1px solid red";
      document.getElementById("errorYear").innerHTML = "Must be a valid year";
    }

    return;
  }

  var birthdate = new Date(year, month - 1, day);

  // Check for invalid date
  if (isNaN(birthdate.getTime())) {
    document.getElementById("error").innerHTML =
      "Invalid date. Please enter a valid date.";
    document.getElementById("day").classList.add("error");
    document.getElementById("month").classList.add("error");
    document.getElementById("year").classList.add("error");
    document.getElementById("result").innerHTML = "";
    return;
  }

  var today = new Date();
  var ageInMilliseconds = today - birthdate;

  var years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  var months = Math.floor(
    (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  var days = Math.floor(
    (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  for (const blank of document.getElementsByClassName("blanks")) {
    blank.style.display = "none";
  }
  document.getElementById("yearsR").innerHTML = `${years}`;
  document.getElementById("monthsR").innerHTML = `${months}`;
  document.getElementById("daysR").innerHTML = `${days}`;

  // document.getElementById("error").innerHTML = "";
  // document.getElementById("result").innerHTML =
  //   "Your age is: " +
  //   years +
  //   " years, " +
  //   months +
  //   " months, and " +
  //   days +
  //   " days";
}
