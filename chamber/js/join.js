
document.addEventListener('DOMContentLoaded', function() {
    // Set the timestamp when the form loads
    document.getElementById('timestamp').value = new Date().toISOString();
  
    // Handle membership level modal display
    const membershipLinks = document.querySelectorAll('.membership-link');
    const modals = document.querySelectorAll('.modal');
    const closeModals = document.querySelectorAll('.close-modal');
    
    // Function to open the modal for a specific membership level
    function openModal(level) {
      const modalId = `${level}Modal`;
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      }
    }
    
    // Function to close all modals
    function closeAllModals() {
      modals.forEach(modal => {
        modal.style.display = 'none';
      });
      document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Add click events to membership links
    membershipLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const level = this.getAttribute('data-level');
        openModal(level);
      });
    });
    
    // Add click events to close buttons
    closeModals.forEach(close => {
      close.addEventListener('click', closeAllModals);
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
      modals.forEach(modal => {
        if (event.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = ''; // Restore scrolling
        }
      });
    });
    
    // When selecting a membership level from a modal, set the corresponding radio button
    const selectMembershipButtons = document.querySelectorAll('.select-membership');
    if (selectMembershipButtons.length > 0) {
      selectMembershipButtons.forEach(button => {
        button.addEventListener('click', function() {
          const level = this.getAttribute('data-level');
          const radioInput = document.querySelector(`input[name="membershipLevel"][value="${level}"]`);
          if (radioInput) {
            radioInput.checked = true;
          }
          closeAllModals();
        });
      });
    }
    
    // Form validation
    const form = document.getElementById('membershipForm');
    if (form) {
      form.addEventListener('submit', function(event) {
        // We'll use HTML5 validation but add any additional validations here if needed
        console.log('Form submitted successfully!');
        
        // You can track the submission in analytics or perform other actions
        // No need to prevent default since we want the form to submit to thankyou.html
      });
    }
  });