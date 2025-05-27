document.addEventListener('DOMContentLoaded', function () {
    // Dark/Light Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');

    if (darkModeToggle) {
        // Check for saved user preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }

        darkModeToggle.addEventListener('change', function () {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }

    // Profile Picture Upload and Cropping
    const profileUpload = document.getElementById('profileUpload');
    const uploadBtn = document.getElementById('uploadBtn');
    const profilePicture = document.getElementById('profilePicture');
    const imageCropperModal = document.getElementById('imageCropperModal');
    const imageToCrop = document.getElementById('imageToCrop');
    const closeModal = document.querySelector('.close');
    const cancelCropBtn = document.querySelector('.cancel-btn');
    const cropSaveBtn = document.getElementById('cropSaveBtn');

    let cropper;

    if (uploadBtn && profileUpload) {
        uploadBtn.addEventListener('click', function () {
            profileUpload.click();
        });

        profileUpload.addEventListener('change', function (e) {
            if (e.target.files.length) {
                const reader = new FileReader();
                reader.onload = function (event) {
                    imageToCrop.src = event.target.result;
                    imageCropperModal.style.display = 'block';

                    if (cropper) cropper.destroy(); // Prevent multiple instances
                    cropper = new Cropper(imageToCrop, {
                        aspectRatio: 1,
                        viewMode: 1,
                        autoCropArea: 0.8,
                        responsive: true,
                    });
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    // Close modal and destroy cropper
    function closeCropperModal() {
        imageCropperModal.style.display = 'none';
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeCropperModal);
    }

    if (cancelCropBtn) {
        cancelCropBtn.addEventListener('click', closeCropperModal);
    }

    // Save cropped image
    if (cropSaveBtn && profilePicture) {
        cropSaveBtn.addEventListener('click', function () {
            if (cropper) {
                const canvas = cropper.getCroppedCanvas({
                    width: 300,
                    height: 300,
                });

                if (canvas) {
                    canvas.toBlob(function (blob) {
                        const url = URL.createObjectURL(blob);
                        profilePicture.src = url;
                        closeCropperModal();
                    }, 'image/png');
                }
            }
        });
    }
});
