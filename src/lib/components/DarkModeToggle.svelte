<script lang="ts">
	import { onMount } from 'svelte';

	const STORAGE_KEY = 'theme';
	const DARK_PREFERENCE = '(prefers-color-scheme: dark)';
	let currentTheme: string;

	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};

	const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches;

	const applyTheme = () => {
		const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT;
		let currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		if (currentTheme === THEMES.DARK) {
			document.body.classList.remove(THEMES.LIGHT);
			document.body.classList.add(THEMES.DARK);
		} else {
			document.body.classList.remove(THEMES.DARK);
			document.body.classList.add(THEMES.LIGHT);
		}
	};

	const toggleTheme = () => {
		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, prefersDarkThemes() ? THEMES.LIGHT : THEMES.DARK);
		}

		applyTheme();
	};

	onMount(() => {
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
	});
</script>

<label class="switch">
	<input type="checkbox" checked={currentTheme !== THEMES.DARK} on:click={toggleTheme} />
	<span class="slider round" />
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 30px;
		height: 17px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 12px;
		width: 12px;
		left: 2px;
		bottom: 4px;
		top: 2px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider {
		background-color: #2196f3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196f3;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(12px);
		-ms-transform: translateX(12px);
		transform: translateX(12px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
