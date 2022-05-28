// @ts-ignore
import App from './app.svelte';
import themeScheme from './themeScheme';

document.body.style.backgroundColor = themeScheme.background;

export default new App({
    target: document.body,
});
