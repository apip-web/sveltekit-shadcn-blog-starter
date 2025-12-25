<script>
  let open = {};

  function toggle(key) {
    open[key] = !open[key];
  }
</script>

<ul>
  <!-- Root folder -->
  <li>
    <div class="folder" on:click={() => toggle('root')}>.</div>
    {#if open.root}
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
        <li>
          <div class="folder" on:click={() => toggle('src')}>src</div>
          {#if open.src}
            <ul>
              <li class="file">app.d.ts</li>
              <li class="file">app.html</li>

              <!-- lib -->
              <li>
                <div class="folder" on:click={() => toggle('lib')}>lib</div>
                {#if open.lib}
                  <ul>
                    <!-- assets -->
                    <li>
                      <div class="folder" on:click={() => toggle('assets')}>assets</div>
                      {#if open.assets}
                        <ul>
                          <li class="file">favicon.svg</li>
                        </ul>
                      {/if}
                    </li>

                    <!-- components -->
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
                                  <div class="folder" on:click={() => toggle('input-group')}>input-group</div>
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

                                <li>
                                  <div class="folder" on:click={() => toggle('navigation-menu')}>navigation-menu</div>
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

                                <li>
                                  <div class="folder" on:click={() => toggle('separator')}>separator</div>
                                  {#if open.separator}
                                    <ul>
                                      <li class="file">index.ts</li>
                                      <li class="file">separator.svelte</li>
                                    </ul>
                                  {/if}
                                </li>

                                <li>
                                  <div class="folder" on:click={() => toggle('sheet')}>sheet</div>
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

              <!-- posts -->
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

              <!-- routes -->
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

                    <li>
                      <div class="folder" on:click={() => toggle('api')}>api</div>
                      {#if open.api}
                        <ul>
                          <li>
                            <div class="folder" on:click={() => toggle('search')}>search</div>
                            {#if open.search}
                              <ul>
                                <li class="file">+server.ts</li>
                              </ul>
                            {/if}
                          </li>
                        </ul>
                      {/if}
                    </li>

                    <li>
                      <div class="folder" on:click={() => toggle('authors')}>authors</div>
                      {#if open.authors}
                        <ul>
                          <li>
                            <div class="folder" on:click={() => toggle('author')}>[author]</div>
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

                    <li>
                      <div class="folder" on:click={() => toggle('blog-routes')}>blog</div>
                      {#if open['blog-routes']}
                        <ul>
                          <li class="file">+page.svelte</li>
                          <li class="file">+page.ts</li>
                          <li>
                            <div class="folder" on:click={() => toggle('slug')}>[slug]</div>
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

                    <li>
                      <div class="folder" on:click={() => toggle('robots')}>robots.txt</div>
                      {#if open.robots}
                        <ul>
                          <li class="file">+server.ts</li>
                        </ul>
                      {/if}
                    </li>

                    <li>
                      <div class="folder" on:click={() => toggle('rss')}>rss.xml</div>
                      {#if open.rss}
                        <ul>
                          <li class="file">+server.ts</li>
                        </ul>
                      {/if}
                    </li>

                    <li>
                      <div class="folder" on:click={() => toggle('sitemap')}>sitemap.xml</div>
                      {#if open.sitemap}
                        <ul>
                          <li class="file">+server.ts</li>
                        </ul>
                      {/if}
                    </li>

                    <li class="file">+error.svelte</li>
                    <li class="file">layout.css</li>
                    <li class="file">+layout.svelte</li>
                    <li class="file">+page.svelte</li>
                  </ul>
                {/if}
              </li>
            </ul>
          {/if}
        </li>
      </ul>
    {/if}
  </li>

  <!-- static -->
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
