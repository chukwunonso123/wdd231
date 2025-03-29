document.addEventListener('DOMContentLoaded', async function() {
    // Elements
    const gridBtn = document.getElementById('grid-btn');
    const listBtn = document.getElementById('list-btn');
    const directoryCards = document.getElementById('directory-cards');
    const memberCountEl = document.getElementById('member-count');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const primaryNav = document.getElementById('primary-nav');
    
    // Toggle mobile menu
    hamburgerBtn.addEventListener('click', () => {
      primaryNav.classList.toggle('open');
      hamburgerBtn.textContent = primaryNav.classList.contains('open') ? '✕' : '☰';
    });
    
    // Toggle view modes
    gridBtn.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
        setViewMode('grid');
      }
    });
    
    listBtn.addEventListener('click', function() {
      if (!this.classList.contains('active')) {
        setViewMode('list');
      }
    });
    
    function setViewMode(mode) {
      if (mode === 'grid') {
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
        directoryCards.classList.add('grid-view');
        directoryCards.classList.remove('list-view');
        // Save preference to localStorage
        localStorage.setItem('directoryViewMode', 'grid');
      } else {
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
        directoryCards.classList.remove('grid-view');
        directoryCards.classList.add('list-view');
        // Save preference to localStorage
        localStorage.setItem('directoryViewMode', 'list');
      }
      
      // Redisplay members with the new view mode
      displayMembers(membersData, mode);
    }
    
    // Load members data
    let membersData = [];
    
    try {
      const response = await fetch('data/members.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      membersData = await response.json();
      
      // Update member count
      memberCountEl.textContent = membersData.length;
      
      // Check if user has a saved preference
      const savedViewMode = localStorage.getItem('directoryViewMode') || 'grid';
      setViewMode(savedViewMode);
      
    } catch (error) {
      console.error('Error loading members data:', error);
      directoryCards.innerHTML = `<p class="error-message">Failed to load directory data. Please try again later.</p>`;
    }
    
    // Display members based on view mode
    function displayMembers(members, viewMode) {
      directoryCards.innerHTML = '';
      
      if (viewMode === 'grid') {
        members.forEach(member => {
          directoryCards.appendChild(createGridCard(member));
        });
      } else {
        members.forEach(member => {
          directoryCards.appendChild(createListCard(member));
        });
      }
    }
    
    // Create a grid card for a member
    function createGridCard(member) {
      const card = document.createElement('div');
      card.className = 'card';
      
      const membershipLevel = getMembershipBadge(member.membershipLevel);
      
      card.innerHTML = `
        <div class="card-image">
          ${member.image ? `<img src="${member.image}" alt="${member.name} logo" loading="lazy">` : 
          '<div class="placeholder-icon"></div>'}
        </div>
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">${member.name}</h3>
            ${membershipLevel}
          </div>
          <p class="card-description">${member.description}</p>
          <div class="card-contact">
            <div class="contact-item">
              <span class="contact-icon email-icon"></span>
              <a href="mailto:${member.email}">${member.email}</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon phone-icon"></span>
              <a href="tel:${member.phone}">${member.phone}</a>
            </div>
            <div class="contact-item">
              <span class="contact-icon website-icon"></span>
              <a href="${member.website}" target="_blank" rel="noopener noreferrer">
                ${member.website.replace(/(^\w+:|^)\/\//, '')}
              </a>
            </div>
          </div>
        </div>
      `;
      
      return card;
    }
    
    // Create a list card for a member
    function createListCard(member) {
      const card = document.createElement('div');
      card.className = 'list-card';
      
      const membershipLevel = getMembershipBadge(member.membershipLevel);
      
      card.innerHTML = `
        <div class="list-card-main">
          <div class="list-card-image">
            ${member.image ? `<img src="${member.image}" alt="${member.name} logo" loading="lazy">` : 
            '<div class="placeholder-icon"></div>'}
          </div>
          <div class="list-card-content">
            <div class="list-card-header">
              <div class="list-card-title-row">
                <h3 class="card-title">${member.name}</h3>
                ${membershipLevel}
              </div>
              <p class="list-card-description">${member.description}</p>
            </div>
            <div class="list-card-contact">
              <div class="contact-item">
                <span class="contact-icon email-icon"></span>
                <a href="mailto:${member.email}">${member.email}</a>
              </div>
              <div class="contact-item">
                <span class="contact-icon phone-icon"></span>
                <a href="tel:${member.phone}">${member.phone}</a>
              </div>
              <div class="contact-item">
                <span class="contact-icon website-icon"></span>
                <a href="${member.website}" target="_blank" rel="noopener noreferrer">
                  ${member.website.replace(/(^\w+:|^)\/\//, '')}
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      
      return card;
    }
    
    // Helper function to create membership badge
    function getMembershipBadge(level) {
      switch (level) {
        case 3:
          return `<span class="membership-badge badge-gold">
            <span class="check-icon"></span>
            Gold
          </span>`;
        case 2:
          return `<span class="membership-badge badge-silver">
            <span class="check-icon"></span>
            Silver
          </span>`;
        case 1:
          return `<span class="membership-badge badge-member">
            <span class="check-icon"></span>
            Member
          </span>`;
        default:
          return '';
      }
    }
  });
  