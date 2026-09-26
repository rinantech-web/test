// Set your real launch date here (year, monthIndex 0-11, day, hour, minute)
const LAUNCH_DATE = new Date();
LAUNCH_DATE.setDate(LAUNCH_DATE.getDate() + 45);

const els = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

function pad(n) {
  return String(n).padStart(2, '0');
}

function tick() {
  const diff = LAUNCH_DATE - new Date();

  if (diff <= 0) {
    els.days.textContent = '00';
    els.hours.textContent = '00';
    els.minutes.textContent = '00';
    els.seconds.textContent = '00';
    return;
  }

  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const sec = Math.floor((diff / 1000) % 60);

  els.days.textContent = pad(day);
  els.hours.textContent = pad(hour);
  els.minutes.textContent = pad(min);
  els.seconds.textContent = pad(sec);
}

tick();
setInterval(tick, 1000);

// Signup form
const form = document.getElementById('signup');
const emailInput = document.getElementById('email');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  if (!isValid) {
    note.textContent = 'That email doesn\'t look right — mind checking it?';
    note.className = 'note error';
    return;
  }

  // Wire this up to your real signup endpoint / provider.
  note.textContent = "You're on the list — we'll email you at launch.";
  note.className = 'note success';
  emailInput.value = '';
  emailInput.disabled = true;
  form.querySelector('button').disabled = true;
});
