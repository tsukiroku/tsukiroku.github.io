<script lang="ts">
    export let name: string;
    export let url: string;
    export let color: string;
</script>

<div class="social">
    <a href={url}>
        <p class="name" style="color: {color}" id={`social-${name}`}>
            {name}
        </p>
    </a>
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

    .social > * > .name {
        font-weight: bold;
        display: inline;
    }

    @media (max-width: 640px) {
        * {
            display: block;
            font-size: 12px;
            padding-bottom: 5px;
        }

        .social > * > .name {
            font-size: 15px;
        }
    }
</style>
