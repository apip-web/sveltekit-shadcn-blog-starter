<script>
  import TreeView from '$lib/components/app/TreeView.svelte';

  const tree = {
    label: 'src',
    children: [
      {
        label: 'lib',
        children: [
          { label: 'utils.ts' }
        ]
      },
      {
        label: 'routes',
        children: [
          { label: '+page.svelte' }
        ]
      }
    ]
  };
</script>

<ul>
  <TreeView {...tree} />
</ul>
