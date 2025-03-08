// Course data
const courses = [
    { code: "CSE 110", name: "Programming Building Blocks", credits: 3, completed: false },
    { code: "CSE 111", name: "Programming with Functions", credits: 3, completed: false },
    { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false },
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: false },
    { code: "WDD 131", name: "Web Frontend Development I", credits: 3, completed: false },
    { code: "WDD 231", name: "Web Frontend Development II", credits: 3, completed: false }
];

// DOM Content Loaded Event Handler
document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Date functionality
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;

    // Course grid functionality
    const courseGrid = document.getElementById('courseGrid');
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    
    function displayCourses(filteredCourses) {
        courseGrid.innerHTML = '';
        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = `course-card ${course.completed ? 'completed' : ''}`;
            card.innerHTML = `
                <h3>${course.code}</h3>
                <p>${course.name}</p>
                <p>Credits: ${course.credits}</p>
            `;
            courseGrid.appendChild(card);
        });
    }

    function filterCourses(filter) {
        if (filter === 'all') return courses;
        return courses.filter(course => course.code.startsWith(filter.toUpperCase()));
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.dataset.filter;
            displayCourses(filterCourses(filter));
        });
    });

    // Initial display of courses
    displayCourses(courses);
});