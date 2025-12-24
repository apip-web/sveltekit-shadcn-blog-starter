<script>
  import { onMount } from 'svelte';

  onMount(() => {
    document.querySelectorAll('li.folder').forEach((li) => {
      li.addEventListener('click', (e) => {
        e.stopPropagation();
        li.classList.toggle('expanded');
      });
    });
  });
</script>
