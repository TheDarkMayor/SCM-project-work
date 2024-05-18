function toggleForm() 
{
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const formHeading = document.getElementById('formHeading');
    const toggleFormText = document.getElementById('toggleFormText');
    if (loginForm.style.display === 'block')
    {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      formHeading.innerText = 'Sign Up';
      toggleFormText.innerHTML = 'Already have an account? <a href="#" onclick="toggleForm()">Login</a>';
    }
    else
    {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      formHeading.innerText = 'Login';
      toggleFormText.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleForm()">Sign Up</a>';
    }
}