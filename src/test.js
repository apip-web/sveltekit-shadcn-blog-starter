document.addEventListener('click', (e) => {
  const folder = e.target.closest('li.folder');
  if (!folder) return;
  folder.classList.toggle('expanded');
});
