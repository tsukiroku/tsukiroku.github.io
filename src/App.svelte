<script>
    import Title from './components/title.svelte';
    import Tiny from './components/projects/tiny.svelte';
    import Type from './components/projects/type.svelte';
    import InteractionTemplate from './components/projects/dexample.svelte';
</script>

<Title />

<!-- Projects -->
<Tiny />
<InteractionTemplate />
<Type />

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
