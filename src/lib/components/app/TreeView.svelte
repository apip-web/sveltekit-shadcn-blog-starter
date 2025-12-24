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

<script>
  import { onMount } from 'svelte';

  onMount(() => {
    console.log('Component has mounted and DOM is ready');
    // Initialize external JS library here
    document.addEventListener('click', (e) => {
  const folder = e.target.closest('li.folder');
  if (!folder) return;
  folder.classList.toggle('expanded');
});
  });
</script>
