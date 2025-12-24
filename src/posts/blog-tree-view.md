---
title: "Blog's Tree View"
description: "Blog's Tree View Detailed List."
date: "2025-12-22"
tags: ["sveltekit", "mdsvex", "shadcn", "starter", "blog"]
author: "apip-web"
---

<style>
ul {
  list-style: none;
  padding-left: 20px;
}
li {
  margin: 4px 0;
  cursor: pointer;
}
li.file {
  cursor: default;
  color: #555;
}
li.folder::before {
  content: "📁 ";
}
li.file::before {
  content: "📄 ";
}
li > ul {
  display: none;
}
li.expanded > ul {
  display: block;
}
</style>

<h2>Repo Structure: sveltekit-shadcn-blog-starter</h2>

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

    <li class="folder">src
      <ul>
        <li class="file">app.d.ts</li>
        <li class="file">app.html</li>

        <li class="folder">lib
          <ul>
            <li class="folder">assets
              <ul>
                <li class="file">favicon.svg</li>
              </ul>
            </li>

            <li class="folder">components
              <ul>
                <li class="folder">app
                  <ul>
                    <li class="file">DesktopNav.svelte</li>
                    <li class="file">Footer.svelte</li>
                    <li class="file">Header.svelte</li>
                    <li class="file">Logo.svelte</li>
                    <li class="file">MobileNav.svelte</li>
                    <li class="file">SearchDialog.svelte</li>
                  </ul>
                </li>

                <li class="folder">blog
                  <ul>
                    <li class="file">PostCard.svelte</li>
                  </ul>
                </li>

                <li class="folder">ui
                  <ul>
                    <li class="folder">badge
                      <ul>
                        <li class="file">badge.svelte</li>
                        <li class="file">index.ts</li>
                      </ul>
                    </li>

                    <li class="folder">button
                      <ul>
                        <li class="file">button.svelte</li>
                        <li class="file">index.ts</li>
                      </ul>
                    </li>

                    <li class="folder">command
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
                    </li>

                    <li class="folder">dialog
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
                    </li>

                    <li class="folder">input
                      <ul>
                        <li class="file">index.ts</li>
                        <li class="file">input.svelte</li>
                      </ul>
                    </li>

                    <li class="folder">textarea
                      <ul>
                        <li class="file">index.ts</li>
                        <li class="file">textarea.svelte</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li class="folder">config
              <ul>
                <li class="file">authors.ts</li>
                <li class="file">site.ts</li>
              </ul>
            </li>

            <li class="file">index.ts</li>
            <li class="file">utils.ts</li>
          </ul>
        </li>

        <li class="folder">posts
          <ul>
            <li class="file">hello-world.md</li>
            <li class="file">svelte-5-runes.md</li>
            <li class="file">why-shadcn-svelte.md</li>
          </ul>
        </li>

        <li class="folder">routes
          <ul>
            <li class="folder">about
              <ul>
                <li class="file">+page.svelte</li>
              </ul>
            </li>

            <li class="file">+layout.svelte</li>
            <li class="file">+page.svelte</li>
            <li class="file">+error.svelte</li>
            <li class="file">layout.css</li>
          </ul>
        </li>
      </ul>
    </li>

    <li class="folder">static
      <ul>
        <li class="folder">images
          <ul>
            <li class="file">blog-starter.jpg</li>
          </ul>
        </li>
      </ul>
    </li>

    <li class="file">svelte.config.js</li>
    <li class="file">tsconfig.json</li>
    <li class="file">vite.config.ts</li>

    <li class="folder">.vscode
      <ul>
        <li class="file">settings.json</li>
      </ul>
    </li>
  </ul>

36 directories, 109 files

<script>
  import DebugAlert from '$lib/components/DebugAlert.svelte';
</script>

# Blog Tree View

<DebugAlert />
