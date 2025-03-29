
document.addEventListener('DOMContentLoaded', function() {
    // Set copyright year
    const currentYearEl = document.getElementById('current-year');
    if (currentYearEl) {
      currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Set last modified date
    const lastModifiedEl = document.getElementById('last-modified');
    if (lastModifiedEl) {
      lastModifiedEl.textContent = document.lastModified;
    }
  });
  