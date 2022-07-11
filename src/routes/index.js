import {createRouter,createWebHistory} from 'vue-router';
import Todo from '../pages/Todo.vue';

const router=createRouter({
    
    history:createWebHistory(),
    
    routes:[
        {name:'Todo', path:'/', component:Todo, props:true},
    ]
});

export default router;