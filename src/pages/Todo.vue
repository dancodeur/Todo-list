<template>
    <div>
        <Title vuejs='Vue Js' Title="Todolist Application"></Title>

        <!--Component de recherche-->
        <div class="py-4 px-4 md:px-8 bg-white font-inter mt-3 text-xs md:text-sm mb-3">

            <div class="px-4 py-4 md:px-8 md:grid grid-cols-4 gap-8">

                <div class="md:col-span-2 md:flex md:justify-end">
                    <div class="flex items-center space-x-2">
                        <input type="text" placeholder="Ajouter une tache" v-model="addTache"
                            class="focus:outline-none focus:placeholder-green-300 bg-slate-50 py-2 px-2 w-36 text-xs md:text-sm rounded-md placeholder-slate-600">

                        <svg xmlns="http://www.w3.org/2000/svg" @click="add"
                            class="h-8 w-8 cursor-pointer fill-green-300 hover:transition ease-in-out duration-500 hover:scale-110"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div class="md:col-span-2 md:flex md:justify-start">
                    <div class="flex items-center px-2 bg-slate-50 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 stroke-green-300" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input v-model="search" type="text" placeholder="Recherche..."
                            class="focus:outline-none focus:placeholder-green-300 bg-transparent py-1 px-2 w-36 text-xs md:text-sm placeholder-slate-600 focus:transition ease-in focus:duration-500 {{search}}" />
                    </div>
                </div>
            </div>

        </div>
        <!-- Fin du Component de recherche-->

        <div class="py-4 px-4 md:px-8 bg-white font-inter mt-3 text-xs md:text-sm mb-3 md:flex justify-center">
            <table class="table-auto" style="width:30%;">
                <thead>
                    <tr class="text-slate-600">
                        <th>N<sup>°</sup></th>
                        <th>Tache</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody class="space-y-1 md:space-y-3" v-for="taches in Search" :key="taches.id">
                    <TabList :id="taches.id" :tache="taches.taches" @delete="del(taches.taches)"
                        @update="update(taches.id)" />
                    <tr v-if="_open">
                        <td><span :class="_id==taches.id?'text-slate-600 font-semibold text-sm':'hidden'">{{ taches.id }}</span></td>
                        <td><input type="text"
                                class="text-slate-600 border-0 px-2 bg-slate-300 focus:outline-none text-center rounded-lg"
                                v-model="taches.taches" :class="_id==taches.id?' text-sm':'hidden'"></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p v-if="tache.length == 0" class="text-slate-500 text-center text-sm">Vous n'avez pour l'instant aucune tache à
            effectué !</p>

        <Footer text="Nombre de tache" :Total="tache.length" />
    </div>
</template>

<script>
let id = 1;
import Title from '../components/Title.vue'
import AddTache from '../components/AddTache.vue'
import TabList from '../components/TabList.vue'
import Footer from '../components/Footer.vue';
export default {
    name: 'todo',
    data() {
        return {

            tache: [
                { id: id++, taches: 'Apprendre Laravel 9' },
                { id: id++, taches: 'Apprendre Vue 3 ' },
            ],

            search: '', //data de recherche
            addTache: '', //data ajouter une tache
            _open: false,  //toggle update...
            _id:'', // ???


        }
    },
    components: {
        Title,
        AddTache,
        TabList,
        Footer,
    },
    methods: {
        del(x) {

            this.tache = this.tache.filter(taches => taches.taches !== x);
        },

        update(x) {
            
            if(x!==this.tache.id){
                if(this._open==false){
                    this._open=true;
                    this._id=x; //la variable _id stocke dynamiquement l'identifiant passé en paramètre...
                }else{
                    this._open=false;
                }
            }
           
        },

        add() {

            if (this.addTache == '') {

                //Si rien n'a été passé en parametre dans la variable la recherche ne s'effectuera pas !
            } else {
                this.tache.push({ id: id++, taches: this.addTache });
                this.addTache = '';
            }
        }
    },

    computed: {


        Search() {
            return this.tache.filter((taches) => {
                return taches.taches.includes(this.search);
            });
        }
    }
}
</script>

<style>
table tr td {
    text-align: center;
    margin-bottom: 20px;
}

table tr th {
    padding-bottom: 12px;
}
</style>