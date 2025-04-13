
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }
  
  // Set copyright year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  // Add back-to-top button functionality
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '<i data-lucide="arrow-up"></i>';
  backToTopButton.className = 'fixed bottom-6 right-6 z-50 bg-ebike-electric-blue text-white p-3 rounded-full shadow-lg opacity-0 transition-opacity duration-300';
  backToTopButton.id = 'back-to-top';
  backToTopButton.style.opacity = '0';
  backToTopButton.style.pointerEvents = 'none';
  
  document.body.appendChild(backToTopButton);
  lucide.createIcons();
  
  // Show button when page is scrolled
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.opacity = '1';
      backToTopButton.style.pointerEvents = 'auto';
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.pointerEvents = 'none';
    }
  });
  
  // Scroll to top when button is clicked
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Create events page
class EventsManager {
  constructor() {
    this.events = [
      {
        id: 1,
        title: "Downtown Exploration Ride",
        date: "Apr 15, 2025",
        time: "9:00 AM",
        location: "City Park Entrance",
        description: "A leisurely ride through downtown, exploring urban trails and scenic spots.",
        difficulty: "Beginner",
        image: "https://images.unsplash.com/photo-1626663011551-5cd4ed7364b0?q=80&w=1374&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Mountain Trail Adventure",
        date: "Apr 22, 2025",
        time: "8:30 AM",
        location: "Mountain Base Station",
        description: "Experience thrilling mountain trails with spectacular views and challenging terrain.",
        difficulty: "Intermediate",
        image: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=1374&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Sunset Beach Cruise",
        date: "Apr 29, 2025",
        time: "5:00 PM",
        location: "Beachfront Pavilion",
        description: "Ride along the stunning coastline and enjoy the sunset with fellow e-bikers.",
        difficulty: "Beginner",
        image: "https://images.unsplash.com/photo-1595703013566-db085ae93c04?q=80&w=1374&auto=format&fit=crop"
      },
      {
        id: 4,
        title: "Urban Architecture Tour",
        date: "May 5, 2025",
        time: "10:00 AM",
        location: "City Hall Plaza",
        description: "Discover the architectural wonders of our city with expert commentary and easy pacing.",
        difficulty: "Beginner",
        image: "https://images.unsplash.com/photo-1587568788333-8ce921d4a0c8?q=80&w=1374&auto=format&fit=crop"
      },
      {
        id: 5,
        title: "Forest Trail Expedition",
        date: "May 12, 2025",
        time: "9:00 AM",
        location: "National Forest Entrance",
        description: "Immerse yourself in nature with this serene forest ride through ancient trails.",
        difficulty: "Intermediate",
        image: "https://images.unsplash.com/photo-1575526785128-d422ff1c6599?q=80&w=1376&auto=format&fit=crop"
      },
      {
        id: 6,
        title: "Waterfront Night Ride",
        date: "May 19, 2025",
        time: "7:30 PM",
        location: "Harbor Lookout",
        description: "Experience the city lights reflecting on the water during this magical evening ride.",
        difficulty: "Beginner",
        image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1470&auto=format&fit=crop"
      }
    ];
  }

  renderEventsList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const eventsHTML = this.events.map(event => `
      <div class="card overflow-hidden card-hover">
        <div class="h-48 overflow-hidden">
          <img 
            src="${event.image}" 
            alt="${event.title}" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="card-header">
          <div class="flex items-center text-sm text-muted-foreground mb-2">
            <i data-lucide="calendar" class="mr-1 h-4 w-4"></i>
            <span>${event.date}</span>
            <i data-lucide="clock" class="ml-4 mr-1 h-4 w-4"></i>
            <span>${event.time}</span>
          </div>
          <h3 class="card-title">${event.title}</h3>
          <div class="card-description flex items-center">
            <i data-lucide="map-pin" class="mr-1 h-4 w-4"></i> ${event.location}
          </div>
        </div>
        <div class="card-content">
          <p class="text-gray-600">${event.description}</p>
          <div class="mt-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            <i data-lucide="users" class="mr-1 h-3 w-3"></i> ${event.difficulty}
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary w-full">Register Now</button>
        </div>
      </div>
    `).join('');

    container.innerHTML = eventsHTML;
    lucide.createIcons();
  }
  
  // Filter events by difficulty
  filterEvents(difficulty, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let filteredEvents = this.events;
    
    if (difficulty !== 'all') {
      filteredEvents = this.events.filter(event => event.difficulty.toLowerCase() === difficulty.toLowerCase());
    }
    
    const eventsHTML = filteredEvents.map(event => `
      <div class="card overflow-hidden card-hover">
        <div class="h-48 overflow-hidden">
          <img 
            src="${event.image}" 
            alt="${event.title}" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="card-header">
          <div class="flex items-center text-sm text-muted-foreground mb-2">
            <i data-lucide="calendar" class="mr-1 h-4 w-4"></i>
            <span>${event.date}</span>
            <i data-lucide="clock" class="ml-4 mr-1 h-4 w-4"></i>
            <span>${event.time}</span>
          </div>
          <h3 class="card-title">${event.title}</h3>
          <div class="card-description flex items-center">
            <i data-lucide="map-pin" class="mr-1 h-4 w-4"></i> ${event.location}
          </div>
        </div>
        <div class="card-content">
          <p class="text-gray-600">${event.description}</p>
          <div class="mt-4 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            <i data-lucide="users" class="mr-1 h-3 w-3"></i> ${event.difficulty}
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary w-full">Register Now</button>
        </div>
      </div>
    `).join('');
    
    container.innerHTML = eventsHTML;
    lucide.createIcons();
  }
}

// Initialize managers when needed
document.addEventListener('DOMContentLoaded', function() {
  // If we're on the events page and the events-container exists
  const eventsContainer = document.getElementById('events-container');
  if (eventsContainer) {
    const eventsManager = new EventsManager();
    eventsManager.renderEventsList('events-container');
    
    // Set up event filters
    const filterAll = document.getElementById('filter-all');
    const filterBeginners = document.getElementById('filter-beginners');
    const filterIntermediate = document.getElementById('filter-intermediate');
    const filterAdvanced = document.getElementById('filter-advanced');
    
    if (filterAll) {
      filterAll.addEventListener('click', function() {
        eventsManager.filterEvents('all', 'events-container');
      });
    }
    
    if (filterBeginners) {
      filterBeginners.addEventListener('click', function() {
        eventsManager.filterEvents('beginner', 'events-container');
      });
    }
    
    if (filterIntermediate) {
      filterIntermediate.addEventListener('click', function() {
        eventsManager.filterEvents('intermediate', 'events-container');
      });
    }
    
    if (filterAdvanced) {
      filterAdvanced.addEventListener('click', function() {
        eventsManager.filterEvents('advanced', 'events-container');
      });
    }
  }
});
