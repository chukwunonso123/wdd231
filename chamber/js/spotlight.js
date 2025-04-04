document.addEventListener('DOMContentLoaded', async function() {
    const spotlightContainer = document.getElementById('spotlight-container');
    
    if (!spotlightContainer) return;
    
    try {
      // Fetch members data
      const response = await fetch('./data/members.json');
      if (!response.ok) {
        throw new Error('Failed to fetch members data');
      }
      
      const data = await response.json();
      
      // Filter for gold and silver members (levels 2 and 3)
      const eligibleMembers = data.members.filter(member => member.membershipLevel >= 2);
      
      // Randomly select up to 3 members for spotlight
      const spotlightMembers = getRandomMembers(eligibleMembers, 3);
      
      // Display spotlight members
      displaySpotlights(spotlightMembers);
      
    } catch (error) {
      console.error('Error loading spotlight data:', error);
      spotlightContainer.innerHTML = '<p>Unable to load business spotlights at this time.</p>';
    }
    
    // Get random members from array
    function getRandomMembers(array, count) {
      const shuffled = [...array].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }
    
    // Display spotlights in the container
    function displaySpotlights(members) {
      spotlightContainer.innerHTML = '';
      
      members.forEach(member => {
        const spotlight = document.createElement('div');
        spotlight.classList.add('spotlight');
        
        const membershipLabel = member.membershipLevel === 3 ? 'Gold Member' : 'Silver Member';
        
        spotlight.innerHTML = `
          <img src="./images/${member.image}" alt="${member.name} Logo" class="company-logo">
          <h3>${member.name}</h3>
          <p>${member.description}</p>
          <p>${member.phone}</p>
          <div class="spotlight-level">${membershipLabel}</div>
          <a href="${member.website}" target="_blank" class="spotlight-link">Visit Website</a>
        `;
        
        spotlightContainer.appendChild(spotlight);
      });
    }
  });
  