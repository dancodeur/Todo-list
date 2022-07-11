<template>
    <div class="py-4 px-4 rounded-md md:px-8 bg-slate-50 font-inter mt-3 text-xs md:text-sm mb-3 md:flex  mx-auto"
        style="width:29%">
        <div class="flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-green-300 " fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>

            <span class="text-xs text-slate-600">{{text}} : {{Total }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer',
    props: {
        text: String,
        Total: Number,
    }
}
</script>

<style scoped>
</style>