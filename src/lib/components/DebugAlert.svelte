<script>
  import { onMount } from 'svelte';

  let folderCount = 0;

  onMount(() => {
    const folders = document.querySelectorAll('li.folder');
    folderCount = folders.length;

    folders.forEach(folder => {
      folder.addEventListener('click', (e) => {
        e.stopPropagation();
        folder.classList.toggle('expanded');
      });
    });
  });
</script>

<div class="debug">
  📂 Jumlah folder terdeteksi: {folderCount}
</div>

<style>
  .debug {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
</style>
