<template>
<body>
    <div class="content">
        <br>
        <h1>Lectures</h1>
        <div class="d-flex justify-content-center" v-if="status ==='LOADING'"> 
        <div class="spinner-grow" role="status" >
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="status === 'ERROR'">
        {{error.message}}
    </div>
        <div class="video-container" v-if="status==='LOADED'">
            <div v-for="lecture in lectures" :key="lecture._id">
                <router-link  style="text-decoration: none;" :to="{name:'video-watch',params:{id:lecture._id}}" >
                <div class="video-box">
                    
                    <h3> {{lecture.name}}</h3>
                    <div><h3>{{lecture.description}} </h3>  
                    </div>    
                </div>
                </router-link>
            </div>
        </div>
    </div>
</body>
</template>
<script>
import axios from 'axios'
 export default{
     name:'Lectures',
     components: {},
     data(){
         return{
              lectures:[],
             status:'LOADING',
             error:null
        }
    },
    mounted(){
        try{
        axios.get('/lecture/video')
        .then((response)=>{
             this.status='LOADING';
            this.lectures = response.data;
            this.status='LOADED'
        })}
        catch(error){
            console.log(error);
        }
    }
 };




</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}

.content h1{
    color: white;
    margin-left: 650px;
    margin-bottom: 30px;

}
.video-box{
    border: 1px solid grey;
    border-radius: 10px;
    padding: 10px;
    margin-left: 35px;
     margin-right: 35px;
    margin-bottom: 30px;
    background-color:white;
    text-decoration: none;
    
}
.video-box:hover{
    background-color: rgb(247, 239, 229);
}
h3{
    color: gray;
}

</style>