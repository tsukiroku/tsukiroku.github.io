<script>
    import Title from './components/title.svelte';
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    * {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        background-color: #24292e;
        font-family: 'Noto Sans', sans-serif;
    }
</style>

<Title />
