<template>
    <tr class="text-slate-500">
        <td>{{id}}</td>
        <td :class="_isFinish?'line-through':''">{{tache}}</td>
        <td><span v-if="_isFinish?_status='terminé':'en cours' " :class="_isFinish?'bg-green-500 text-white px-3 rounded-md':'bg-orange-500 text-white px-2 rounded-md'">{{_status}}</span></td>
        <td>
            <div class="flex items-center justify-center space-x-1">
                <input type="checkbox" class="accent-green-400" v-model="_isFinish">
                <a href="#" @click="$emit('delete')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'tablist',
    data(){
        return {
           class:'',
           _class2:'bg-orange-400 text-sm rounded-full px-2 text-white',
            _status:'en cours',
            _isFinish:false,
        }
    },

    methods:{
        
    },

    props:{
        id:Number,
        tache:String,
    },
    emits:['delete'],
}
</script>

<style scoped>

</style>