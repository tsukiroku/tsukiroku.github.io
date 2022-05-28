export default {
    light: {
        background: '#fafafa',
        default: '#000000',
        description: '#3d3d3d',
    },
    dark: {
        background: '#151515',
        default: '#ffffff',
        description: '#dbdbdb',
    },
}[window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'];
