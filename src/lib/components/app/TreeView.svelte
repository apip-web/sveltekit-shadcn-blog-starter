<script>
  let open = {};
  function toggle(key) {
    open[key] = !open[key];
  }
</script>

<ul class="tree">
  <li>
    <div class="folder" on:click={() => toggle('src')}>
      📁 src
    </div>

    {#if open.src}
      <ul>
        <li>
          <div class="folder" on:click={() => toggle('lib')}>
            📁 lib
          </div>

          {#if open.lib}
            <ul>
              <li class="file">📄 utils.ts</li>
            </ul>
          {/if}
        </li>
      </ul>
    {/if}
  </li>
</ul>

<style>
  ul {
    list-style: none;
    padding-left: 1rem;
  }

  .folder {
    cursor: pointer;
    user-select: none;
    font-weight: 600;
  }

  .file {
    color: #666;
    margin-left: 1rem;
  }
</style>
