<style>
body {
  font-family: monospace;
  background: #111;
  color: #ddd;
  padding: 20px;
}

ul {
  list-style: none;
  padding-left: 18px;
  margin: 0;
}

li {
  cursor: default;
  user-select: none;
  line-height: 1.6;
}

li.folder {
  cursor: pointer;
}

li.folder::before {
  content: "📁 ";
}

li.file::before {
  content: "📄 ";
  opacity: 0.7;
}

li > ul {
  display: none;
}

li.expanded > ul {
  display: block;
}
</style>

<script>
document.addEventListener('click', (e) => {
  const folder = e.target.closest('li.folder');
  if (!folder) return;
  folder.classList.toggle('expanded');
});
</script>
