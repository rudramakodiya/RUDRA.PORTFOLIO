function showSection(id) {
  const sections = document.querySelectorAll('.card');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const selected = document.getElementById(id);
  selected.style.display = 'block';
  selected.scrollIntoView({ behavior: 'smooth' });
}
