<template>
    <tr class="text-slate-500">
        <td>{{ id }}</td>
        <td :class="_isFinish ? 'line-through' : ''">{{ tache }}</td>
        <td><span v-if="_isFinish ? _status = 'terminé' : 'en cours'"
                :class="_isFinish ? 'bg-green-400 text-xs  text-white px-3 rounded-md' : 'bg-red-400 text-xs text-white px-2 rounded-md'">{{ _status }}</span>
        </td>
        <td>
            <div class="flex items-center justify-center space-x-1">
                <input type="checkbox" class="accent-green-300 border-O border-green-500" v-model="_isFinish">
                 <a href="#" @click="$emit('update')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-slate-500 hover:transition ease-in-out duration-500 hover:scale-110" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </a>
                <a href="#" @click="$emit('delete')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-red-400 hover:transition ease-in-out duration-500 hover:scale-110" viewBox="0 0 20 20"
                        fill="currentColor">
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
    data() {
        return {
            class: '',
            _class2: 'bg-orange-400 text-sm rounded-full px-2 text-white',
            _status: 'en cours',
            _isFinish: false,
        }
    },

    methods: {

    },

    props: {
        id: Number,
        tache: String,
    },
    emits: ['delete','update'],
}
</script>

<style scoped>
</style>