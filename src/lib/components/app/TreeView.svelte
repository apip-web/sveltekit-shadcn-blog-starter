<script>
  // handle click expand
  function toggle(e) {
    e.stopPropagation();
    const folder = e.currentTarget;
    folder.classList.toggle("expanded");
  }
</script>

<style>
  ul { list-style: none; padding-left: 20px; }
  li { margin: 4px 0; cursor: pointer; }
  li.file { cursor: default; color: #555; }
  li.folder::before { content: "📁 "; }
  li.file::before { content: "📄 "; }
  li > ul { display: none; }
  li.expanded > ul { display: block; }
</style>

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
      <!-- tambahkan isi struktur lain sesuai kebutuhan -->
    </ul>
  </li>
</ul>
