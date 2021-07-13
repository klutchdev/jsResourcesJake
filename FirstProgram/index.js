// Mentor variable declarations and their types
let mentorName = "Kyle"; // String
let mentorYearsCoding = 10; // Number
let mentorHasFun = true; // boolean
let mentorTech = ["JavaScript", "React", "Firebase", "Netlify", "CSS"]; // Array

// Student variables
let studentName = "Not added";
let studentYears = "Not added";
let studentTech = "Not added";

// Functions
const showMentorWelcome = () => {
  // Show welcome message alert
  alert(
    `Hey there Rockstar!
I'm stoked to help mentor you on your journey.
I have been in the industry for ${mentorYearsCoding} years, and I can't wait to help
you become the best ${mentorTech.join(", ")}
and full stack developer you can be!
Cheers, ${mentorName}`
  );
};
const setStudentName = () => {
  studentName = prompt("Please enter your name:");
  if (studentName) {
    showStudentName.innerText = studentName;
    setStudentYears();
  } else {
    setStudentName();
  }
};
const setStudentYears = () => {
  studentYears = prompt("How many years have you been coding?");
  if (studentYears) {
    showStudentYears.innerText = studentYears;
    setStudentTech();
  } else {
    setStudentYears();
  }
};
const setStudentTech = () => {
  studentTech = prompt(
    "What are your tech learning goals? (example: React, C++, full stack , etc.)"
  );
  if (studentTech) {
    showStudentTech.innerText = studentTech;
    studentAddButton.innerText = "Edit your info";
    alert(`🔥 Welcome, ${studentName}! 🔥`);
  } else {
    setStudentTech();
  }
};

// Mentor element ID assignment
const showMentorName = document.getElementById("mentor-name");
const showMentorYears = document.getElementById("mentor-years");
const showMentorHasFun = document.getElementById("mentor-fun");
const showMentorTech = document.getElementById("mentor-tech");
const mentorWelcomeButton = document.getElementById("mentor-welcome-button");
// Set the inital values of mentor elements
showMentorName.innerText = mentorName;
showMentorYears.innerText = mentorYearsCoding;
showMentorHasFun.innerText = mentorHasFun;
showMentorTech.innerText = mentorTech.join(", ");

// Student element ID assignment
const showStudentName = document.getElementById("student-name");
const showStudentYears = document.getElementById("student-years");
const showStudentTech = document.getElementById("student-tech");
const studentAddButton = document.getElementById("student-add-button");
// Set the intial values of student elements
showStudentName.innerText = studentName;
showStudentYears.innerText = studentName;
showStudentTech.innerText = studentName;

// Call the welcome message function when button is clicked
mentorWelcomeButton.onclick = () => showMentorWelcome();

// Open prompt to add the students info when clicked
studentAddButton.onclick = () => setStudentName();
