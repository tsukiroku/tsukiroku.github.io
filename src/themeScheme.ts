export default {
    light: {
        background: '#fafafa',
        default: '#000000',
    },
    dark: {
        background: '#151515',
        default: '#ffffff',
    },
}[window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'];
