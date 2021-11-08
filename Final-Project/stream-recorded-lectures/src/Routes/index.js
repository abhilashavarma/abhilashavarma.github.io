import Router from 'vue-router';
import Lectures from '@/components/Lectures';
import UploadLectures from '@/components/UploadLectures';
import VideoWatch from '@/components/VideoWatch';
import Doubts from '@/components/Doubts';
import register from '@/components/register';
import login from '@/components/login';
import Home from '@/components/Home';
import store from '@/store/index.js'




const router = new Router({
    mode:'history',
    routes:[
        {
            name:'Home',
            path:'/',
            component:Home
        },
        {
            name: 'Lectures',
            path: '/Lectures',
            component: Lectures,
            meta:{
                requireAuth: true
            }
        },

        {
            name: 'UploadLectures',
            path: '/UploadLectures',
            component: UploadLectures,
            meta:{
                requireAuth: true
            }
        },
        {
            name: 'Doubts',
            path: '/Doubts',
            component: Doubts,
            meta:{
                requireAuth: true
            }
        },
        {
            name:"video-watch",
            path:"/video/:id",
            component:VideoWatch,
            params:true,
            meta:{
                requireAuth: true
            }
        },
        {
            name:'register',
            path:'/register',
            component:register,
            meta:{
                requireGuest: true
            }
        },
        {
            name:'login',
            path:'/login',
            component:login,
            meta:{
                requireGuest: true
            }
        }

        
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.matched.some(record => record.meta.requireAuth)){
        if(!store.getters.isLoggedIn){
            next('/login');
        } else{
            next();
        }
    }else if(to.matched.some(record => record.meta.requireAuth)){
        if(store.getters.isLoggedIn){
            next('/Lectures');
        } else{
            next();
        }
    }else{
        next();
    }
})

export default router;