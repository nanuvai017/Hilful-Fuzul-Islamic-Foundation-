// Program Slider (JavaScript for sliding)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Program Filter (JavaScript for filtering programs)
const filter = document.getElementById('program-filter');
const programItems = document.querySelectorAll('.program-item');

filter.addEventListener('change', (event) => {
    const selectedFilter = event.target.value;
    programItems.forEach(item => {
        if (selectedFilter === 'all' || item.classList.contains(selectedFilter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Event Registration Form (Event listener)
const eventForm = document.querySelector('.event-registration form');
if (eventForm) {
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        alert('ধন্যবাদ! আপনার রেজিস্ট্রেশন সফলভাবে সম্পন্ন হয়েছে।');
        // You can add AJAX call to submit form data if needed
    });
}

// Donate Form (Custom Donation Submit)
const donateForm = document.querySelector('.custom-donation form');
if (donateForm) {
    donateForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const donationAmount = document.getElementById('custom-donation').value;
        alert(`আপনার দান পরিমাণ: ${donationAmount} টাকা। ধন্যবাদ!`);
        // You can add AJAX call to submit form data if needed
    });
}

// Volunteer Registration Form
const volunteerForm = document.querySelector('.volunteer-registration form');
if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        alert('আপনার নিবন্ধন সম্পন্ন হয়েছে। ধন্যবাদ!');
        // You can add AJAX call to submit form data if needed
    });
}

// Feedback Form Submission
const feedbackForm = document.querySelector('.feedback form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const feedbackMessage = document.getElementById('feedback').value;
        alert(`আপনার মতামত গ্রহণ করা হয়েছে: ${feedbackMessage}`);
        // You can add AJAX call to submit form data if needed
    });
}

// Fundraising Progress Bar (Update Progress)
function updateProgressBar(progressPercent) {
    const progressBar = document.querySelector('.fundraising-progress .progress');
    if (progressBar) {
        progressBar.style.width = `${progressPercent}%`;
        progressBar.textContent = `${progressPercent}%`;
    }
}

// Example: Update fundraising progress to 70% (you can make this dynamic)
updateProgressBar(70);

// Donation History (You can dynamically fetch and display donation history)
const donationHistory = document.querySelector('.donation-history tbody');
if (donationHistory) {
    // Example: Add a new donation record
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>১২ জুন, ২০২৪</td>
        <td>১০০০ টাকা</td>
        <td>নগদ</td>
    `;
    donationHistory.appendChild(newRow);
}

// Program Slider Auto-Slide Functionality
let slideInterval = setInterval(nextSlide, 3000);
const stopSliderButton = document.getElementById('stop-slider');
if (stopSliderButton) {
    stopSliderButton.addEventListener('click', () => {
        clearInterval(slideInterval); // Stops the slider
    });
}

// Event Registration Form Validation
const eventRegistrationForm = document.querySelector('.event-registration form');
if (eventRegistrationForm) {
    eventRegistrationForm.addEventListener('submit', (e) => {
        const eventName = document.getElementById('event-name').value;
        const participantName = document.getElementById('participant-name').value;
        const participantEmail = document.getElementById('participant-email').value;
        
        if (!eventName || !participantName || !participantEmail) {
            e.preventDefault();
            alert('অনুগ্রহ করে সমস্ত ক্ষেত্র পূরণ করুন!');
        } else {
            alert('ইভেন্টে রেজিস্ট্রেশন সফল!');
        }
    });
}