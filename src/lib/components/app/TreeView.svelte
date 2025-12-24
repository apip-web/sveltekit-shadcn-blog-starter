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
        lib
        <ul>
          <li class="file">utils.ts</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<style>
  ul {
    list-style: none;
    padding-left: 1rem;
  }
  li.folder::before { content: "📁 "; }
  li.file::before { content: "📄 "; }
  li > ul { display: none; }
  li.expanded > ul { display: block; }
</style>
