<script>
    import Button from './components/titleButton.svelte';
</script>

<div class="flex flex-col justify-center items-center h-screen">
    <div class="flex select-none">
        <p class="text-white text-5xl md:text-7xl font-bold">Hello</p>
        <img
            class="w-14 h-14 md:w-24 md:h-24
                pb-3 pl-3 md:pb-5 md:pl-5
                bg-transparent animate-wave"
            src="https://twemoji.maxcdn.com/v/latest/svg/1f44b.svg"
            alt="twemoji"
        />
    </div>
    <div class="flex select-none">
        <p class="text-gray-300 text-2xl md:text-3xl font-bold">
            다람쥐 헌 쳇바퀴에 타고파
        </p>
    </div>
    <div class="flex flex-col md:flex-row pt-7 select-none">
        <Button
            button="Projects"
            onClick={() => (window.location.href = '#projects')}
        />
        <Button
            button="Github"
            onClick={() => window.open('https://github.com/tsukiroku')}
        />
    </div>
</div>
