// index.js

// Add text content to a container by ID
function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  if (container) {
    container.textContent = text;
  }
}

// Remove an element by ID
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

// Simulate a button click effect by updating container text
function simulateClick(containerId, text) {
  addElementToDOM(containerId, text);
}

// Handle form submission event
function handleFormSubmit(formId, outputId) {
  const form = document.getElementById(formId);
  const output = document.getElementById(outputId);
  const errorMessage = document.getElementById('error-message');

  if (!form || !output || !errorMessage) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = form.querySelector('input[type="text"]');
    const inputValue = input ? input.value.trim() : '';

    if (inputValue === '') {
      errorMessage.textContent = 'Input cannot be empty';
      errorMessage.classList.remove('hidden');
      output.textContent = '';
    } else {
      errorMessage.textContent = '';
      errorMessage.classList.add('hidden');
      output.textContent = inputValue;
    }
  });
}

// Initialize event listeners (call this on page load)
function initializeApp() {
  // Simulate click button event
  const simulateBtn = document.getElementById('simulate-click');
  if (simulateBtn) {
    simulateBtn.addEventListener('click', () => {
      simulateClick('dynamic-content', 'Button was clicked!');
    });
  }

  // Setup form submit handler
  handleFormSubmit('user-form', 'dynamic-content');
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Export functions for testing
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
