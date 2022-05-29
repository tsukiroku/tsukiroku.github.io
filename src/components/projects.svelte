<script lang="ts">
    import theme from '../themeScheme';
    import Project from './components/project.svelte';
    import { github } from '../main';
</script>

<div class="project">
    <p class="title" style="color: {theme.default}" id="projects">Projects</p>

    <Project
        name="type"
        description="Type level programming."
        url={`${github}type`}
    />

    <Project
        name="gist"
        description="Asynchronous gist API wrapper."
        url={`${github}gist`}
    />

    <Project
        name="twitter-readme-profile"
        description="Your twitter profile in README."
        url={`${github}twitter-readme-profile`}
    />

    <Project
        name="tsukiroku.github.io"
        description="Personal website."
        url={`${github}tsukiroku.github.io`}
    />
</div>

<style>
    .project {
        position: absolute;
        top: 100%;
        left: 0;
        padding: 100px 100px;
    }

    .project > .title {
        font-size: 40px;
        font-family: 'Fira Code', sans-serif;
        font-weight: bold;
    }

    @media (max-width: 640px) {
        .project {
            text-align: center;
            max-width: 240px;
            margin: auto;
            position: relative;
            top: 40%;
        }

        .project > .title {
            font-size: 30px;
            font-family: 'Fira Code', sans-serif;
        }
    }
</style>
