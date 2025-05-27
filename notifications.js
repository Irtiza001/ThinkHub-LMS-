function markRead(button) {
    const item = button.closest('.notification');
    item.style.opacity = 0.3;
    button.disabled = true;
    button.innerText = "Read";
  }
  