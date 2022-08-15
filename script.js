const pass = document.getElementById('pass');
const confirmPassInput = document.getElementById('confirm');

confirmPassInput.addEventListener('keypress', (e) => {
  confirmPass = e.target.value + e.key
  if (pass.value === confirmPass) {
    // some code to make pass valid
  } else { 
    // some code to show error on-screen
    console.log("ERROR")
  }
})