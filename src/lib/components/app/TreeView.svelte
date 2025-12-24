<script>
  let open = new Set();

  function toggle(path) {
    if (open.has(path)) {
      open.delete(path);
    } else {
      open.add(path);
    }
    open = open; // trigger reactivity
  }
</script>

<ul class="tree">
  <li class="folder" class:expanded={open.has('src')} on:click={() => toggle('src')}>
    src
    <ul>
      <li class="folder" class:expanded={open.has('src/lib')} on:click|stopPropagation={() => toggle('src/lib')}>
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

  li {
    margin: 4px 0;
  }

  li.folder {
    cursor: pointer;
    font-weight: 600;
  }

  li.file {
    color: #555;
    cursor: default;
  }

  li > ul {
    display: none;
  }

  li.expanded > ul {
    display: block;
  }

  li.folder::before {
    content: "📁 ";
  }

  li.file::before {
    content: "📄 ";
  }
</style>
