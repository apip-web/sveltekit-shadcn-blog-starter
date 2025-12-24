<script>
  export let label = '';
  export let children = [];
  let open = false;

  function toggle() {
    open = !open;
  }
</script>

<li>
  {#if children.length}
    <div class="folder" on:click={toggle}>
      {open ? '📂' : '📁'} {label}
    </div>

    {#if open}
      <ul>
        {#each children as child}
          <TreeView {...child} />
        {/each}
      </ul>
    {/if}
  {:else}
    <div class="file">📄 {label}</div>
  {/if}
</li>

<style>
  ul {
    padding-left: 18px;
  }

  .folder {
    cursor: pointer;
    user-select: none;
    font-weight: 600;
  }

  .file {
    color: #555;
  }
</style>
