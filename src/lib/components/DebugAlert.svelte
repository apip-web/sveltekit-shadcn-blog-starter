<script>
  import { onMount } from 'svelte';

  let folderCount = 0;

  onMount(() => {
    const tree = document.querySelector('.tree-root');
    const folders = tree.querySelectorAll('li.folder');
    folderCount = folders.length;

    tree.addEventListener('click', (e) => {
      const folder = e.target.closest('li.folder');
      if (!folder || !tree.contains(folder)) return;

      folder.classList.toggle('expanded');
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
