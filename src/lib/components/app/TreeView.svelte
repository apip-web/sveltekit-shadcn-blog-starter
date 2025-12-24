<script>
document.querySelectorAll('li.folder').forEach(folder => {
  folder.addEventListener('click', e => {
    e.stopPropagation();
    folder.classList.toggle('expanded');
  });
});
</script>
<script>
    alert('TreeView CLICK OK');
</script>
<script>
  alert("Alert from DebugAlert component!");
</script>

<div>
  📢 Alert sudah dijalankan!
</div>
