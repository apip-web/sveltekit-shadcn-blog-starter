<script lang="ts">
  export let tree = [];

  function toggle(node) {
    node.open = !node.open;
  }
</script>

<ul class="tree">
  {#each tree as node}
    <li>
      {#if node.children}
        <div
          class="folder"
          on:click={() => toggle(node)}
        >
          {node.open ? "📂" : "📁"} {node.name}
        </div>

        {#if node.open}
          <TreeView tree={node.children} />
        {/if}
      {:else}
        <div class="file">📄 {node.name}</div>
      {/if}
    </li>
  {/each}
</ul>

<style>
  .tree {
    list-style: none;
    padding-left: 16px;
  }

  .folder {
    cursor: pointer;
    user-select: none;
    font-weight: 500;
  }

  .file {
    color: #666;
    margin-left: 18px;
  }
</style>
