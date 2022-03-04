var canvas;
var h1;
var x = 100;
var y = 100;
var my_fav;
var x_speed = 0.1;
var y_speed = -0.1;
var bgcolor;
var button;
var slider;
var my_fav;
var slider;
var input;
var nameP;


  var firebaseConfig = {
    apiKey: "AIzaSyB7IG9IwxQPgmN3uVPJsU6UN_fw4ZPpCjc",
    authDomain: "my-first-app-acccb.firebaseapp.com",
    databaseURL: "https://my-first-app-acccb.firebaseio.com",
    projectId: "my-first-app-acccb",
    storageBucket: "my-first-app-acccb.appspot.com",
    messagingSenderId: "227621027604",
    appId: "1:227621027604:web:dc47427d8582b90b470c01",
    measurementId: "G-ZSRMHERCJH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var companyRef = firebase.database().ref('company');
var parents = database.ref('company');

var data = {
  name: "John",
}

parents.push(data);

document.getElementById('contactForm').addEventListener('submit',submitForm);

// submit form
function submitForm(e) {
  e.preventDefault();
  
  // get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  
  // Save Company Info
  saveCompany(name,company);
  
  // Show Alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide Alert after 3 Seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none'; 
  },3000);
  
  // Clear Form
  document.getElementById('contactForm').reset();
  
}

//Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

function saveCompany(name,company){
  var newCompanyRef = companyRef.push();
  newCompanyRef.set({
    name:name,
    company:company
  });
  
}


function setup() {
canvas = createCanvas(200, 200);
  canvas.position(125, 800);
input = createInput("enter your name here");  
  
  
  
  
}
  
