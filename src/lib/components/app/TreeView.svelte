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
  function toggle(e) {
    e.stopPropagation();
    e.currentTarget.classList.toggle('expanded');
  }
</script>

<ul class="tree-root">
  <li class="folder" on:click={toggle}>
    src
    <ul>
      <li class="folder" on:click={toggle}>
        components
        <ul>
          <li class="file">Header.svelte</li>
          <li class="file">Footer.svelte</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
