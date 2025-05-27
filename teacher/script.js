document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('announcementForm');
    const titleInput = document.getElementById('title');
    const messageInput = document.getElementById('message');
    const announcementList = document.getElementById('announcementList');
    const darkModeToggle = document.getElementById('darkModeToggle');
  
    // Load saved dark mode
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.checked = true;
    }
  
    // Toggle dark mode
    darkModeToggle.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  
    // Load announcements from localStorage
    const loadAnnouncements = () => {
      const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
      announcementList.innerHTML = '';
      announcements.forEach((announcement) => {
        const div = document.createElement('div');
        div.className = 'announcement-card';
        div.innerHTML = `
          <h3>${announcement.title}</h3>
          <p>${announcement.message}</p>
          <small>Posted on: ${announcement.date}</small>
        `;
        announcementList.appendChild(div);
      });
    };
  
    // Submit form
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const title = titleInput.value.trim();
      const message = messageInput.value.trim();
  
      if (title && message) {
        const newAnnouncement = {
          title,
          message,
          date: new Date().toLocaleString()
        };
  
        const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
        announcements.unshift(newAnnouncement);
        localStorage.setItem('announcements', JSON.stringify(announcements));
  
        titleInput.value = '';
        messageInput.value = '';
        loadAnnouncements();
      }
    });
  
    loadAnnouncements();
  });
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('announcementForm');
  const titleInput = document.getElementById('title');
  const messageInput = document.getElementById('message');
  const announcementList = document.getElementById('announcementList');
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Load saved dark mode
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  }

  // Toggle dark mode
  darkModeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // Load announcements from localStorage
  const loadAnnouncements = () => {
    const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
    announcementList.innerHTML = '';
    announcements.forEach((announcement) => {
      const div = document.createElement('div');
      div.className = 'announcement-card';
      div.innerHTML = `
        <h3>${announcement.title}</h3>
        <p>${announcement.message}</p>
        <small>Posted on: ${announcement.date}</small>
      `;
      announcementList.appendChild(div);
    });
  };

  // Submit form
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = titleInput.value.trim();
    const message = messageInput.value.trim();

    if (title && message) {
      const newAnnouncement = {
        title,
        message,
        date: new Date().toLocaleString()
      };

      const announcements = JSON.parse(localStorage.getItem('announcements')) || [];
      announcements.unshift(newAnnouncement);
      localStorage.setItem('announcements', JSON.stringify(announcements));

      titleInput.value = '';
      messageInput.value = '';
      loadAnnouncements();
    }
  });

  loadAnnouncements();
});
  