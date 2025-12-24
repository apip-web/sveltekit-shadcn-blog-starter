<script>
document.addEventListener('click', (e) => {
  const folder = e.target.closest('li.folder');
  if (!folder) return;
  folder.classList.toggle('expanded');
});
</script>

<div class="debug">
Test baru. script ini berfungsi di lokal.
</div>

<style>
  .debug {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
</style>
