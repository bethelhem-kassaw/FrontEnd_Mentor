const form = document.getElementById('ageForm');
const errorContainer = document.getElementById('errorContainer');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const dayInput = document.getElementById('dayInput');
  const monthInput = document.getElementById('monthInput');
  const yearInput = document.getElementById('yearInput');
  const labeld = document.getElementById('labeld');
  const labelm = document.getElementById('labelm');
  const labely = document.getElementById('labely');

  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  // Reset error styles and messages
  dayInput.classList.remove('error');
  monthInput.classList.remove('error');
  yearInput.classList.remove('error');
  errorContainer.textContent = '';

  // Check for empty inputs
  if (day === '' || month === '' || year === '') {
    if (day === '') {
      dayInput.classList.add('error');
      labeld.classList.add('error')
      
    }
    if (month === '') {
      monthInput.classList.add('error');
      labelm.classList.add('error')
    }
    if (year === '') {
      yearInput.classList.add('error');
      labely.classList.add('error')
    }
    errorContainer.textContent = 'Please fill in all the fields.';
    return;
  }

  // Perform the age calculation
  const currentDate = new Date();
  const birthDate = new Date(year, month - 1, day);

  // Check for invalid date
  if (!isValidDate(day, month, year)) {
    dayInput.classList.add('error');
    monthInput.classList.add('error');
    yearInput.classList.add('error');
    labeld.classList.add('error')
labelm.classList.add('error')
labely.classList.add('error')
    errorContainer.textContent = 'Invalid date. Please enter a valid date.';
    return;
  }
  // Remaining code for calculating and displaying the age...
  const ageInMilliseconds = currentDate - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.436875; // Approximate number of days in a month
  const ageInYears = ageInMonths / 12;

  const years = Math.floor(ageInYears);
  const months = Math.floor(ageInMonths % 12);
  const days = Math.floor(ageInDays % 30.436875);

  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `
    <div class="result">
      <h1>${years}</h1>
      <p>years</p>
    </div>
    <div class="result">
      <h1>${months}</h1>
      <p>months</p>
    </div>
    <div class="result">
      <h1>${days}</h1>
      <p>days</p>
    </div>
  `;

});
function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() == year &&
      date.getMonth() + 1 == month &&
      date.getDate() == day
    );
  }