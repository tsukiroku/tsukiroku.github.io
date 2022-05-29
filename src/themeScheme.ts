export default {
    light: {
        background: '#fafafa',
        default: '#000000',
        description: '#3d3d3d',
        nextText: '#4a5ef7',
        projectName: '#121212',
        projectDescription: '#303030',
    },
    dark: {
        background: '#151515',
        default: '#ffffff',
        description: '#dbdbdb',
        nextText: '#fad20c',
        projectName: '#e8e8e8',
        projectDescription: '#c9c9c9',
    },
}[window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'];
