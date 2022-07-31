<script>
    export let onClick;
    export let button;
</script>

<button
    class="text-white bg-teal-700 hover:bg-teal-800 focus:ring-blue-300
            rounded-lg 
            px-24 py-2 mr-2 mb-2
            md:px-16 md:py-2.5 md:mr-2 md:mb-2"
    on:click={onClick}
>
    {button}
</button>
