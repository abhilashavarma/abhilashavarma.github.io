<template>
    <div>
         
        <video-player v-if="lectures.length"  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions">
        </video-player>
        <h1></h1>
         <div><h2></h2>     
                    </div> 
       
    </div>
</template>
<script>
import 'video.js/dist/video-js.css' 
import { videoPlayer } from 'vue-video-player'
import axios from 'axios'
 
export default{
    name:'VideoWatch',
    components:{
        videoPlayer,

    },
    data(){
        return{
            lectures:[]
        }
    },
    
    
    mounted(){
        axios.get('/lecture/video')
        .then((response)=>{
            console.log(response.data);
            this.lectures = response.data;
            
        })
        .catch((error) =>{
            console.log(error);
        });
    },

    computed:{
        
        playerOptions() {
            
            const video= this.lectures.find(vid=> 
            vid._id==this.$route.params.id)
        
            
            return {

                // videojs options
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0,2.5],
                sources: [{
                    type: "video/mp4",
                    src: video.videoUrl
                }],
            }
            
        }
    }
        
    
    
}
</script>
<style >
.video-js{
    margin: auto;
    margin-top: 50px;
}
</style>