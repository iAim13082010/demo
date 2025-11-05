// Smooth scroll cho link nội bộ
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Xử lý form demo (hiển thị alert thay vì gửi thật)
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  alert(`Cảm ơn ${data.name}! Mình sẽ phản hồi qua email: ${data.email}.`);
  form.reset();
});