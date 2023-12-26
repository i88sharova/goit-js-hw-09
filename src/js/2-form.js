  const form = document.querySelector('.feedback-form');
  document.addEventListener('DOMContentLoaded',renderPage)
  
  const storageKey = 'feedback-form-state';
  function renderPage() {
  const storedState = localStorage.getItem(storageKey);

  if (storedState) {
    const userData=JSON.parse(storedState);
    const { email, message } = userData;
    const {email:emailInput, message:messageInput}=form.elements;
    emailInput.value=email;
    messageInput.value=message;
  }
  }
  form.addEventListener('input', (e) => {
    const {email, message}=e.currentTarget.elements;
    const userData = {
      email: email.value.trim(), 
      message: message.value.trim(),
    };    
    localStorage.setItem(storageKey, JSON.stringify(userData));
}); 

form.addEventListener('submit', (e) => {
e.preventDefault();
const {email, message}=form.elements;
    if (email.value!=='' && message.value!=='') {
      const userData={
        email: email.value.trim(),
        message: message.value.trim,
      }
    
        console.log(userData);
    } else {
      return alert ('Please fill in all fields before submitting.')
    }
    localStorage.removeItem(storageKey);
    form.reset();
  }
)
  
