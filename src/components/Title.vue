<template>
    <div class="py-4 px-4 md:px-8">
        
        <h1 class="text-3xl text-green-400 text-center pb-2 font-bold font-inter">{{vuejs}}</h1>
        <h2 class="text-4xl text-slate-500  text-center font-inter">{{Title}}</h2>
        
    </div>
</template>

<script>
    export default {
        name:'Title',
        props:{
            vuejs:String,
            Title:String,
        }
    }
</script>

<style scoped>

</style>