<template>
    <div class="py-4 px-4 md:px-8 bg-white font-inter mt-3 text-xs md:text-sm mb-3">

        <div class="px-4 py-4 md:px-8 md:grid grid-cols-4 gap-8">

            <div class="md:col-span-2 md:flex md:justify-end">
                <div class="flex items-center space-x-2">
                    <input type="text" placeholder="Ajouter une tache" class="focus:outline-none focus:placeholder-green-300 bg-slate-50 py-2 px-2 w-36 text-xs md:text-sm rounded-md placeholder-slate-600">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-green-300" viewBox="0 0 20 20" fill="currentColor">
                       <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                    </svg>
                </div>
             </div>

             <div class="md:col-span-2 md:flex md:justify-start">
                <div class="flex items-center px-2 bg-slate-50 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input :v-model="search"  type="text" placeholder="Recherche..." class="focus:outline-none focus:placeholder-green-300 bg-transparent py-1 px-2 w-36 text-xs md:text-sm placeholder-slate-600 focus:transition ease-in focus:duration-500 {{search}}" />
                </div>
             </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        name:'addtache',

        props:{
            search:String,
        }
    }
</script>

<style scoped>

</style>