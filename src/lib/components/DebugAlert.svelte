<div id="debug-output" style="
  margin-top:16px;
  padding:8px;
  background:#111;
  color:#0f0;
  font-family:monospace;
  font-size:14px;
">
  Debug belum jalan
</div>

<script>
  const output = document.getElementById('debug-output');

  const folders = document.querySelectorAll('li.folder');

  output.innerHTML = `
    ✅ JS JALAN<br>
    Folder ditemukan: <b>${folders.length}</b>
  `;
</script>
