<script>
  let open = {};

  function toggle(key) {
    open[key] = !open[key];
  }
</script>

<ul class="tree">
  <li class="file">components.json</li>
  <li class="file">CONTRIBUTING.md</li>
  <li class="file">.env.example</li>
  <li class="file">.gitignore</li>
  <li class="file">LICENSE</li>
  <li class="file">mdsvex.config.js</li>
  <li class="file">.npmrc</li>
  <li class="file">package.json</li>
  <li class="file">package-lock.json</li>
  <li class="file">README.md</li>

  <li>
    <div class="folder" on:click={() => toggle('src')}>src</div>
    {#if open.src}
      <ul>
        <li class="file">app.d.ts</li>
        <li class="file">app.html</li>

        <li>
          <div class="folder" on:click={() => toggle('lib')}>lib</div>
          {#if open.lib}
            <ul>
              <li>
                <div class="folder" on:click={() => toggle('assets')}>assets</div>
                {#if open.assets}
                  <ul>
                    <li class="file">favicon.svg</li>
                  </ul>
                {/if}
              </li>

              <li>
                <div class="folder" on:click={() => toggle('components')}>components</div>
                {#if open.components}
                  <ul>
                    <li>
                      <div class="folder" on:click={() => toggle('app')}>app</div>
                      {#if open.app}
                        <ul>
                          <li class="file">DesktopNav.svelte</li>
                          <li class="file">Footer.svelte</li>
                          <li class="file">Header.svelte</li>
                          <li class="file">Logo.svelte</li>
                          <li class="file">MobileNav.svelte</li>
                          <li class="file">SearchDialog.svelte</li>
                        </ul>
                      {/if}
                    </li>

                    <li>
                      <div class="folder" on:click={() => toggle('blog')}>blog</div>
                      {#if open.blog}
                        <ul>
                          <li class="file">PostCard.svelte</li>
                        </ul>
                      {/if}
                    </li>

                    <li>
                      <div class="folder" on:click={() => toggle('ui')}>ui</div>
                      {#if open.ui}
                        <ul>
                          <li>
                            <div class="folder" on:click={() => toggle('badge')}>badge</div>
                            {#if open.badge}
                              <ul>
                                <li class="file">badge.svelte</li>
                                <li class="file">index.ts</li>
                              </ul>
                            {/if}
                          </li>
                          <li>
                            <div class="folder" on:click={() => toggle('button')}>button</div>
                            {#if open.button}
                              <ul>
                                <li class="file">button.svelte</li>
                                <li class="file">index.ts</li>
                              </ul>
                            {/if}
                          </li>
                          <li>
                            <div class="folder" on:click={() => toggle('command')}>command</div>
                            {#if open.command}
                              <ul>
                                <li class="file">command-dialog.svelte</li>
                                <li class="file">command-empty.svelte</li>
                                <li class="file">command-group.svelte</li>
                                <li class="file">command-input.svelte</li>
                                <li class="file">command-item.svelte</li>
                                <li class="file">command-link-item.svelte</li>
                                <li class="file">command-list.svelte</li>
                                <li class="file">command-loading.svelte</li>
                                <li class="file">command-separator.svelte</li>
                                <li class="file">command-shortcut.svelte</li>
                                <li class="file">command.svelte</li>
                                <li class="file">index.ts</li>
                              </ul>
                            {/if}
                          </li>
                          <li>
                            <div class="folder" on:click={() => toggle('dialog')}>dialog</div>
                            {#if open.dialog}
                              <ul>
                                <li class="file">dialog-close.svelte</li>
                                <li class="file">dialog-content.svelte</li>
                                <li class="file">dialog-description.svelte</li>
                                <li class="file">dialog-footer.svelte</li>
                                <li class="file">dialog-header.svelte</li>
                                <li class="file">dialog-overlay.svelte</li>
                                <li class="file">dialog-portal.svelte</li>
                                <li class="file">dialog.svelte</li>
                                <li class="file">dialog-title.svelte</li>
                                <li class="file">dialog-trigger.svelte</li>
                                <li class="file">index.ts</li>
                              </ul>
                            {/if}
                          </li>
                          <li>
                            <div class="folder" on:click={() => toggle('input')}>input</div>
                            {#if open.input}
                              <ul>
                                <li class="file">index.ts</li>
                                <li class="file">input.svelte</li>
                              </ul>
                            {/if}
                          </li>
                          <li>
                            <div class="folder" on:click={() => toggle('textarea')}>textarea</div>
                            {#if open.textarea}
                              <ul>
                                <li class="file">index.ts</li>
                                <li class="file">textarea.svelte</li>
                              </ul>
                            {/if}
                          </li>
                        </ul>
                      {/if}
                    </li>
                  </ul>
                {/if}
              </li>

              <li>
                <div class="folder" on:click={() => toggle('config')}>config</div>
                {#if open.config}
                  <ul>
                    <li class="file">authors.ts</li>
                    <li class="file">site.ts</li>
                  </ul>
                {/if}
              </li>

              <li class="file">index.ts</li>
              <li class="file">utils.ts</li>
            </ul>
          {/if}
        </li>

        <li>
          <div class="folder" on:click={() => toggle('posts')}>posts</div>
          {#if open.posts}
            <ul>
              <li class="file">hello-world.md</li>
              <li class="file">svelte-5-runes.md</li>
              <li class="file">why-shadcn-svelte.md</li>
            </ul>
          {/if}
        </li>

        <li>
          <div class="folder" on:click={() => toggle('routes')}>routes</div>
          {#if open.routes}
            <ul>
              <li>
                <div class="folder" on:click={() => toggle('about')}>about</div>
                {#if open.about}
                  <ul>
                    <li class="file">+page.svelte</li>
                  </ul>
                {/if}
              </li>

              <li class="file">+layout.svelte</li>
              <li class="file">+page.svelte</li>
              <li class="file">+error.svelte</li>
              <li class="file">layout.css</li>
            </ul>
          {/if}
        </li>
      </ul>
    {/if}
  </li>

  <li>
    <div class="folder" on:click={() => toggle('static')}>static</div>
    {#if open.static}
      <ul>
        <li>
          <div class="folder" on:click={() => toggle('images')}>images</div>
          {#if open.images}
            <ul>
              <li class="file">blog-starter.jpg</li>
            </ul>
          {/if}
        </li>
      </ul>
    {/if}
  </li>

  <li class="file">svelte.config.js</li>
  <li class="file">tsconfig.json</li>
  <li class="file">vite.config.ts</li>

  <li>
    <div class="folder" on:click={() => toggle('vscode')}>.vscode</div>
    {#if open.vscode}
      <ul>
        <li class="file">settings.json</li>
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
    margin: 4px 0;
  }

  .folder::before {
    content: "📁 ";
  }

  .file {
    margin: 4px 0 4px 1rem;
    color: #666;
  }

  .file::before {
    content: "📄 ";
  }
</style>
