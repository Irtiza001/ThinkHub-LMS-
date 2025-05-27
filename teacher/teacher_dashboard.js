// Set current date
function setCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('en-US', options);
  }
  
  // Initialize charts
  function initializeCharts() {
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
        datasets: [{
          label: 'Class Average',
          data: [65, 59, 80, 81, 76, 85],
          borderColor: '#4c6ef5',
          backgroundColor: 'rgba(76, 110, 245, 0.1)',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            min: 50,
            max: 100
          }
        }
      }
    });
  
    // Attendance Chart
    const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(attendanceCtx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Present',
          data: [28, 25, 27, 26, 24],
          backgroundColor: '#40c057',
        }, {
          label: 'Absent',
          data: [2, 5, 3, 4, 6],
          backgroundColor: '#fa5252',
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
    });
  }
  
  // Notification functionality
  function setupNotifications() {
    const notificationBell = document.querySelector('.notification-bell');
    const notificationDropdown = document.querySelector('.notification-dropdown');
    
    notificationBell.addEventListener('click', function(e) {
      e.stopPropagation();
      notificationDropdown.classList.toggle('show');
      
      // Mark notifications as read when dropdown is opened
      if (notificationDropdown.classList.contains('show')) {
        document.querySelectorAll('.notification-item.new').forEach(item => {
          item.classList.remove('new');
        });
        document.querySelector('.notification-count').textContent = '0';
      }
    });
  
    // Mark all as read button
    document.querySelector('.mark-read').addEventListener('click', function() {
      document.querySelectorAll('.notification-item.new').forEach(item => {
        item.classList.remove('new');
      });
      document.querySelector('.notification-count').textContent = '0';
    });
  }
  
  // Quick actions functionality
  function setupQuickActions() {
    const quickActionBtn = document.querySelector('.quick-action-btn');
    const quickActionsDropdown = document.querySelector('.quick-actions-dropdown');
    
    quickActionBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      quickActionsDropdown.classList.toggle('show');
    });
  }
  
  // Close dropdowns when clicking elsewhere
  function setupDocumentClickHandlers() {
    document.addEventListener('click', function() {
      document.querySelector('.notification-dropdown').classList.remove('show');
      document.querySelector('.quick-actions-dropdown').classList.remove('show');
    });
  }
  
  // Task list functionality
  function setupTaskList() {
    // Add task button
    document.querySelector('.add-task-btn').addEventListener('click', function() {
      const taskList = document.querySelector('.task-list');
      const newTaskId = `task-${Date.now()}`;
      
      const newTask = document.createElement('div');
      newTask.className = 'task-item';
      newTask.innerHTML = `
        <input type="checkbox" id="${newTaskId}">
        <label for="${newTaskId}">
          <input type="text" placeholder="Enter new task..." class="task-input">
        </label>
      `;
      
      taskList.appendChild(newTask);
      
      // Focus on the new task input
      const input = newTask.querySelector('.task-input');
      input.focus();
      
      // Save when pressing Enter
      input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          const taskText = input.value.trim();
          if (taskText) {
            newTask.innerHTML = `
              <input type="checkbox" id="${newTaskId}">
              <label for="${newTaskId}">${taskText}</label>
            `;
          } else {
            taskList.removeChild(newTask);
          }
        }
      });
    });
  }
  
  // Initialize all functionality when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    initializeCharts();
    setupNotifications();
    setupQuickActions();
    setupDocumentClickHandlers();
    setupTaskList();
    
    // Add click handler for prepare buttons
    document.querySelectorAll('.prepare-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const className = this.parentElement.querySelector('.class-name').textContent;
        alert(`Preparing materials for: ${className}`);
      });
    });
    
    // Add click handler for new announcement button
    document.querySelector('.new-announcement-btn').addEventListener('click', function() {
      window.location.href = 'teacher_announcements.html';
    });
  });