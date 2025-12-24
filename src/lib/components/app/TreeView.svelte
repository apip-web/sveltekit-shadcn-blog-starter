<div class="debug">
Test baru. script ini berfungsi di lokal.
</div>

<style>
  .debug {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
</style>

<script>
  let count = 0;
  function increment() {
    count += 1;
  }
</script>

<button on:click={increment}>
  Clicks: {count}
</button>
