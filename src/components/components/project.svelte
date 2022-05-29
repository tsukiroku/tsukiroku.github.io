<script lang="ts">
    import theme from '../../themeScheme';

    export let name: string;
    export let description: string;
    export let url: string;
</script>

<div class="project">
    <a href={url}>
        <p
            class="name"
            style="color: {theme.projectName}"
            id={`project-${name}`}
        >
            {name}
        </p>
    </a>
    <p class="description" style="color: {theme.projectDescription}">
        {description}
    </p>
    <br />
</div>

<style>
    * {
        padding-bottom: 20px;
        font-size: 20px;
    }

    a:link,
    a:visited,
    a:hover,
    a:active {
        text-decoration: none;
    }

    .project > * > .name {
        font-weight: bold;
        display: inline;
    }

    .project > .description {
        display: inline;
    }

    @media (max-width: 640px) {
        * {
            display: block;
            font-size: 12px;
            padding-bottom: 20px;
        }

        .project > * > .name {
            font-size: 15px;
        }
    }
</style>
