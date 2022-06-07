<script lang="ts">
    import theme from '../themeScheme';
    import Project from './components/project.svelte';
    import { github } from '../main';

    const gotoSocials = () => {
        location.href = '#socials';
        (
            document.getElementsByClassName('goto-socials')[0] as HTMLElement
        ).style.animationPlayState = 'paused';
    };
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

    <Project
        name="discord-interaction-template"
        description="Discord interaction template."
        url={`${github}discord-interaction-template`}
    />
</div>
<p class="goto-socials" style="color: {theme.nextText}" on:click={gotoSocials}>
    socials
</p>

<style>
    .project {
        position: absolute;
        top: 100%;
        left: 0;
        padding: 100px 100px;
    }

    .project > .title {
        font-size: 40px;
        font-weight: bold;
    }

    p.goto-socials {
        text-align: center;
        max-width: 240px;
        margin: auto;
        position: relative;
        top: 115%;
        font-size: 20px;
        cursor: pointer;
        animation: shake 1s infinite both ease-in-out;
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
        }

        p.goto-socials {
            top: 25%;
            font-size: 15px;
        }
    }
</style>
