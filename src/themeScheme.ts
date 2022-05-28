export default {
    light: {
        background: '#fafafa',
        default: '#000000',
        description: '#3d3d3d',
        nextText: '#4a5ef7',
    },
    dark: {
        background: '#151515',
        default: '#ffffff',
        description: '#dbdbdb',
        nextText: '#fad20c',
    },
}[window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'];
