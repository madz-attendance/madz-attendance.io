body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  margin-bottom: 30px; /* Moved from outside any block */
}

header {
  background-color: #2A4C6B; /* Darker blue color for header */
  color: #fff; /* Text color for better readability */
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-center {
  margin: 0 auto;
}

main {
  padding: 20px;
  margin: 0 auto; /* Center the main content horizontally */
  max-width: 800px; /* Adjust the max-width as needed */
}

main > h2, 
main > h3 {
  text-align: center;
  margin: 0; /* Remove default margins */
}

.tab-button {
  background-color: #f0f0f0; /* Lighter grey color for tab buttons */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  /* Added by zaynin */
  background-color: transparent;           /* Transparent background */
  font-family: 'Corbel', sans-serif;       /* Corbel Font */
  font-weight: bold;                       /* Bold font */
  font-size: 22px;
  color: #CCCCCC;                            /* Font color */
  
}

/* Active tab button style */
.tab-button.active {
  background-color: #ccc; /* Slightly darker grey for active tab button */
}

/* Style for the tab content */
.tab-content {
  display: none;
  padding: 20px;
  background-color: #f0f0f0; /* Lighter grey color for tab content */
}

/* Show the active tab content */
.tab-content.active {
  display: block;
}

footer {
  background-color: #2A4C6B; /* Darker blue color for footer */
  color: #fff; /* Text color for better readability */
  text-align: center;
  padding: 2px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 14px;

  /* Added by Zaynin */
  font-family: 'Calibri', sans-serif;       /* Calibri Font */
  font-weight: bold;                       /* Bold font */
  font-size: 16px;
  color: white;       
}

form {
  display: flex;
  align-items: center;
}


/*Added by Anthony in class*/
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}


/* Added by Zaynin in class */
.madz_logo
{
  position: absolute;
  z-index: 100;
  top: 4px;
  left: 5px;
  width: 150px;
  height: 58px;
  cursor: pointer; /* Set to pointer cursor to tell user that this is clickable */
  
}

/*
.faq-question {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-size: 22px !important; 
    cursor: pointer;
    font-weight: bold;
    text-align: left;
}

.faq-item {
  margin-bottom: 20px; 
}
.faq-answer {
    display: none;
}

.faq-item.active .faq-answer {
    display: block;
}

.faq-item.active .arrow {
    transform: rotate(180deg);
}
*/

.questions-container{
    max-width: 800px;
    max-height: 1000px;
    margin: 0 auto;
}

.question {
  border-bottom: 1px solid #fff;
  text-align:left;
  /* Remove background-color property to make it transparent */
}

.question button {
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: flex-start; /* Align text to the left */
  align-items: center;
  padding: 20px 15px;
  border: none;
  outline: none;
  font-size: 22px;
  color: #000;
  font-weight: 700;
  cursor: pointer;
}

.question button .d-arrow {
  margin-left: auto; /* Align the arrow logo to the right */
}

.question button span {
  display: block; /* Ensure spans behave as block-level elements */
  text-align: left; /* Left align the text */
}

.question p {
  font-size: 18px;
  max-height: 0;
  opacity: 0;
  line-height: 1.5;
  overflow: hidden;
  transition: all 0.6s ease;
}

/*
.question p span {
  display: block; 
  margin-bottom: 10px; /* Add some spacing between list items 
}
*/
.d-arrow {
  transition: transform 0.5s ease-in;
  color: #000; /* Change arrow color to black */
}

/* Add this class when click */
.question p.show {
  max-height: 200px;
  opacity: 1;
  padding: 0px 15px 30px 15px;
}

.question button .d-arrow.rotate {
  transform: rotate(180deg);
}


.input-wrapper {
    position: relative;
}

input[type="text"] {
    padding-right: 25px; /* Adjust as needed to make space for the icon */
}

.clear-icon {
    position: absolute;
    top: 50%;
    right: 1px;
    transform: translateY(-50%);
    cursor: pointer;
    display: none;
}

/* Optional: Style the "X" icon */
.clear-icon:hover {
    color: red;
}

/* CSS Aspects for Sign In */
    /* Added by David */

/* Center form on the page */
.login-container {
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

/* Input containers: stack labels and inputs vertically */
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px; /* Space between each label-input pair */
}

/* Inputs style */
input[type="email_text"], input[type="pass_text"] {
  width: 100%; /* Ensure the input takes full width */
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px; /* Space between label and input */
  box-sizing: border-box; /* Ensure padding is included in width */
}

/* Labels style */
label {
  font-size: 16px;
  margin-bottom: 5px; /* Space below label */
}

/* Input focus styling */
input:focus {
  border-color: #333;
  outline: none;
}
