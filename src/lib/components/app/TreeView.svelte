<script>
  let open = {};

  function toggle(key) {
    open[key] = !open[key];
  }
</script>

<ul>
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

  <!-- src -->
  <li class="folder" on:click={() => toggle('src')} class:expanded={open.src}>
    src
    {#if open.src}
      <ul>
        <li class="file">app.d.ts</li>
        <li class="file">app.html</li>

        <!-- lib -->
        <li class="folder" on:click={() => toggle('lib')} class:expanded={open.lib}>
          lib
          {#if open.lib}
            <ul>
              <li class="folder" on:click={() => toggle('assets')} class:expanded={open.assets}>
                assets
                {#if open.assets}
                  <ul>
                    <li class="file">favicon.svg</li>
                  </ul>
                {/if}
              </li>

              <li class="folder" on:click={() => toggle('components')} class:expanded={open.components}>
                components
                {#if open.components}
                  <ul>
                    <li class="folder" on:click={() => toggle('app')} class:expanded={open.app}>
                      app
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

                    <li class="folder" on:click={() => toggle('blog')} class:expanded={open.blog}>
                      blog
                      {#if open.blog}
                        <ul>
                          <li class="file">PostCard.svelte</li>
                        </ul>
                      {/if}
                    </li>

                    <li class="folder" on:click={() => toggle('ui')} class:expanded={open.ui}>
                      ui
                      {#if open.ui}
                        <ul>
                          <li class="folder" on:click={() => toggle('badge')} class:expanded={open.badge}>
                            badge
                            {#if open.badge}
                              <ul>
                                <li class="file">badge.svelte</li>
                                <li class="file">index.ts</li>
                              </ul>
                            {/if}
                          </li>
                          <li class="folder" on:click={() => toggle('button')} class:expanded={open.button}>
                            button
                            {#if open.button}
                              <ul>
                                <li class="file">button.svelte</li>
                                <li class="file">index.ts</li>
                              </ul>
                            {/if}
                          </li>
                          <li class="folder" on:click={() => toggle('command')} class:expanded={open.command}>
                            command
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
                          <li class="folder" on:click={() => toggle('dialog')} class:expanded={open.dialog}>
                            dialog
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
                          <li class="folder" on:click={() => toggle('input')} class:expanded={open.input}>
                            input
                            {#if open.input}
                              <ul>
                                <li class="file">index.ts</li>
                                <li class="file">input.svelte</li>
                              </ul>
                            {/if}
                          </li>
                          <li class="folder" on:click={() => toggle('input-group')} class:expanded={open['input-group']}>
                            input-group
                            {#if open['input-group']}
                              <ul>
                                <li class="file">index.ts</li>
                                <li class="file">input-group-addon.svelte</li>
                                <li class="file">input-group-button.svelte</li>
                                <li class="file">input-group-input.svelte</li>
                                <li class="file">input-group.svelte</li>
                                <li class="file">input-group-textarea.svelte</li>
                                <li class="file">input-group-text.svelte</li>
                              </ul>
                            {/if}
                          </li>
                          <li class="folder" on:click={() => toggle('navigation-menu')} class:expanded={open['navigation-menu']}>
                            navigation-menu
                            {#if open['navigation-menu']}
                              <ul>
                                <li class="file">index.ts</li>
                                <li class="file">navigation-menu-content.svelte</li>
                                <li class="file">navigation-menu-indicator.svelte</li>
                                <li class="file">navigation-menu-item.svelte</li>
                                <li class="file">navigation-menu-link.svelte</li>
                                <li class="file">navigation-menu-list.svelte</li>
                                <li class="file">navigation-menu.svelte</li>
                                <li class="file">navigation-menu-trigger.svelte</li>
                                <li class="file">navigation-menu-viewport.svelte</li>
                              </ul>
                            {/if}
                          </li>
                          <li class="folder" on:click={() => toggle('separator')} class:expanded={open.separator}>
                            separator
                            {#if open.separator}
                              <ul>
                                <li class="file">index.ts</li>
                                <li class="file">separator.svelte</li>
                              </ul>
                            {/if}
                          </li>
                          <li class="folder" on:click={() => toggle('sheet')} class:expanded={open.sheet}>
                            sheet
                            {#if open.sheet}
                              <ul>
                                <li class="file">index.ts</li>
                                <li class="file">sheet-close.svelte</li>
                                <li class="file">sheet-content.svelte</li>
                                <li class="file">sheet-description.svelte</li>
                                <li class="file">sheet-footer.svelte</li>
                                <li class="file">sheet-header.svelte</li>
                                <li class="file">sheet-overlay.svelte</li>
                                <li class="file">sheet-portal.svelte</li>
                                <li class="file">sheet.svelte</li>
                                <li class="file">sheet-title.svelte</li>
                                <li class="file">sheet-trigger.svelte</li>
                              </ul>
                            {/if}
                          </li>
                          <li class="folder" on:click={() => toggle('textarea')} class:expanded={open.textarea}>
                            textarea
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

              <!-- config -->
              <li class="folder" on:click={() => toggle('config')} class:expanded={open.config}>
                config
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

        <!-- posts -->
        <li class="folder" on:click={() => toggle('posts')} class:expanded={open.posts}>
          posts
          {#if open.posts}
            <ul>
              <li class="file">hello-world.md</li>
              <li class="file">svelte-5-runes.md</li>
              <li class="file">why-shadcn-svelte.md</li>
            </ul>
          {/if}
        </li>

        <!-- routes -->
        <li class="folder" on:click={() => toggle('routes')} class:expanded={open.routes}>
          routes
          {#if open.routes}
            <ul>
              <li class="folder" on:click={() => toggle('about')} class:expanded={open.about}>
                about
                {#if open.about}
                  <ul>
                    <li class="file">+page.svelte</li>
                  </ul>
                {/if}
              </li>

              <li class="folder" on:click={() => toggle('api')} class:expanded={open.api}>
                api
                {#if open.api}
                  <ul>
                    <li class="folder" on:click={() => toggle('search')} class:expanded={open.search}>
                      search
                      {#if open.search}
                        <ul>
                          <li class="file">+server.ts</li>
                        </ul>
                      {/if}
                    </li>
                  </ul>
                {/if}
              </li>

              <li class="folder" on:click={() => toggle('authors')} class:expanded={open.authors}>
                authors
                {#if open.authors}
                  <ul>
                    <li class="folder" on:click={() => toggle('author')} class:expanded={open.author}>
                      [author]
                      {#if open.author}
                        <ul>
                          <li class="file">+page.svelte</li>
                          <li class="file">+page.ts</li>
                        </ul>
                      {/if}
                    </li>
                  </ul>
                {/if}
              </li>

              <li class="folder" on:click={() => toggle('blog-routes')} class:expanded={open['blog-routes']}>
                blog
                {#if open['blog-routes']}
                  <ul>
                    <li class="file">+page.svelte</li>
                    <li class="file">+page.ts</li>
                    <li class="folder" on:click={() => toggle('slug')} class:expanded={open.slug}>
                      [slug]
                      {#if open.slug}
                        <ul>
                          <li class="file">+page.svelte</li>
                          <li class="file">+page.ts</li>
                        </ul>
                      {/if}
                    </li>
                  </ul>
                {/if}
              </li>

              <li class="file">+error.svelte</li>
              <li class="file">layout.css</li>
              <li class="file">+layout.svelte</li>
              <li class="file">+page.svelte</li>
              <li class="file">robots.txt</li>
              <li class="file">rss.xml</li>
              <li class="file">sitemap.xml</li>
            </ul>
          {/if}
        </li>
      </ul>
    {/if}
  </li>

  <!-- static -->
  <li class="folder" on:click={() => toggle('static')} class:expanded={open.static}>
    static
    {#if open.static}
      <ul>
        <li class="folder" on:click={() => toggle('images')} class:expanded={open.images}>
          images
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

  <li class="folder" on:click={() => toggle('vscode')} class:expanded={open.vscode}>
    .vscode
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
    padding-left: 18px;
    margin: 0;
  }

  li {
    cursor: default;
    user-select: none;
    line-height: 1.6;
  }

  li.folder {
    cursor: pointer;
  }

  li.folder::before {
    content: "📁 ";
  }

  li.file::before {
    content: "📄 ";
    opacity: 0.7;
  }

  li > ul {
    display: none;
  }

  li.expanded > ul {
    display: block;
  }
</style>
