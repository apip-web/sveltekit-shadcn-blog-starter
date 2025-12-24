<script>
import 'svelte/internal/disclose-version';
import 'svelte/internal/flags/legacy';
import 'svelte/internal/flags/async';
import * as $ from 'svelte/internal/client';

export default function App($$anchor) {
	document.addEventListener('click', (e) => {
		const folder = e.target.closest('li.folder');

		if (!folder) return;

		folder.classList.toggle('expanded');
	});
}
</script>
