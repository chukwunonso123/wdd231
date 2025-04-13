
document.addEventListener('DOMContentLoaded', async function() {
    // Get elements
    const discoverGrid = document.querySelector('.discover-grid');
    const visitorMessage = document.getElementById('visitor-message');
    
    // Load discover data
    try {
      const response = await fetch('data/discover.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const discoverData = await response.json();
      
      // Display discover cards
      displayDiscoverCards(discoverData);
      
    } catch (error) {
      console.error('Error loading discover data:', error);
      discoverGrid.innerHTML = `<p class="error-message">Failed to load discover data. Please try again later.</p>`;
    }
    
    // Handle last visit message using localStorage
    displayLastVisitMessage();
    
    // Function to display discover cards
    function displayDiscoverCards(items) {
      discoverGrid.innerHTML = '';
      
      items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'discover-card';
        card.style.setProperty('--order', index);
        
        card.innerHTML = `
          <div class="discover-card-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
          </div>
          <div class="discover-card-content">
            <h2 class="discover-card-title">${item.name}</h2>
            <address class="discover-card-address">${item.address}</address>
            <p class="discover-card-description">${item.description}</p>
            <button class="discover-card-button">Learn More</button>
          </div>
        `;
        
        discoverGrid.appendChild(card);
      });
    }
    
    // Function to display last visit message
    function displayLastVisitMessage() {
      // Get current visit time in milliseconds
      const currentVisit = Date.now();
      
      // Get last visit time from localStorage
      const lastVisit = localStorage.getItem('lastVisit');
      
      // Create the message
      let message = '';
      
      if (!lastVisit) {
        // First visit
        message = "Welcome! Let us know if you have any questions.";
      } else {
        // Calculate difference in days
        const daysDifference = Math.floor((currentVisit - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysDifference < 1) {
          message = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
          message = "You last visited 1 day ago.";
        } else {
          message = `You last visited ${daysDifference} days ago.`;
        }
      }
      
      // Display message
      visitorMessage.textContent = message;
      
      // Save current visit time to localStorage
      localStorage.setItem('lastVisit', currentVisit);
    }
  });
  