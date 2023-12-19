  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('.feedback-form  input');
  const messageInput = form.querySelector('.feedback-form textarea');
  const Key = 'feedback-form-state';
  
  const storedState = localStorage.getItem(Key);

  if (storedState) {
    const { email, message } = JSON.parse(storedState);
    emailInput.value = email;
    messageInput.value = message;
  }
  form.addEventListener('input', (e) => {
    const currentState = {
      email: emailInput.value.trim(), 
      message: messageInput.value.trim(),
    };    
    localStorage.setItem(storageKey, JSON.stringify(currentState));
});

form.addEventListener('submit', (e) => {
e.preventDefault();
    if (emailInput.value.trim() && messageInput.value.trim()) {
    
        localStorage.removeItem(Key);
        emailInput.value = ' ';
        messageInput.value = ' ';
    };
  }
)
  
