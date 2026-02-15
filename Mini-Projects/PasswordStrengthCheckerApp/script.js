// Password Strength Checker JavaScript

// Get DOM elements
const passwordInput = document.getElementById('password-input');
const toggleButton = document.getElementById('toggle-password');
const eyeIcon = document.getElementById('eye-icon');
const strengthText = document.getElementById('strength-text');
const strengthBar = document.getElementById('strength-bar');

// Get check indicator elements
const checks = {
  length: document.getElementById('length-check').querySelector('span'),
  uppercase: document.getElementById('uppercase-check').querySelector('span'),
  lowercase: document.getElementById('lowercase-check').querySelector('span'),
  number: document.getElementById('number-check').querySelector('span'),
  special: document.getElementById('special-check').querySelector('span')
};

// Toggle password visibility
toggleButton.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  
  // Update eye icon
  eyeIcon.innerHTML = isPassword ? 
    // Eye slashed (hidden)
    `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>` :
    // Eye open (visible)
    `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>`;
});

// Check password strength on input
passwordInput.addEventListener('input', checkPassword);

function checkPassword() {
  const password = passwordInput.value;
  
  // Check each criterion
  const criteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  };
  
  // Calculate score (0-5)
  const score = Object.values(criteria).filter(Boolean).length;
  
  // Update UI
  updateChecks(criteria);
  updateStrength(score);
}

function updateChecks(criteria) {
  Object.keys(criteria).forEach(key => {
    const isMet = criteria[key];
    checks[key].className = isMet ? 
      'w-4 h-4 rounded-full bg-green-500 mr-3 flex-shrink-0 transition-colors duration-300' : 
      'w-4 h-4 rounded-full bg-red-500 mr-3 flex-shrink-0 transition-colors duration-300';
  });
}

function updateStrength(score) {
  const strengths = [
    { text: 'Very Weak', color: '#ef4444', width: '20%' },
    { text: 'Weak', color: '#ef4444', width: '40%' },
    { text: 'Fair', color: '#eab308', width: '60%' },
    { text: 'Good', color: '#eab308', width: '80%' },
    { text: 'Strong', color: '#22c55e', width: '100%' }
  ];
  
  const strength = score > 0 ? strengths[score - 1] : { text: 'Enter Password', color: '#ef4444', width: '0%' };
  
  strengthText.textContent = strength.text;
  strengthBar.style.width = strength.width;
  strengthBar.style.backgroundColor = strength.color;
}
