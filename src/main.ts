// @ts-ignore
import App from './app.svelte';
import themeScheme from './themeScheme';

document.body.style.backgroundColor = themeScheme.background;

export const github = 'https://github.com/tsukiroku/';

export default new App({
    target: document.body,
});
