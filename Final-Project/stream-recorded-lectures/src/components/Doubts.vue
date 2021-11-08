<template>
<body>
    <div class="disp">
        <div class="disp-box">
            <div class="mydiv" v-for="dou in doubts " :key="dou.username" >
                <div class="u_name">
                    {{dou.username}}
                </div>
                <div class="doubt">{{dou.doubt}}
                </div>
            </div>
        </div>
        <div class="post">
            <form @submit.prevent="postdoubt" enctype="multipart/form-data">
                <div>
                    <input type="text" name ="username" v-model="username" class="uinput" placeholder="Enter Topic Name" required />
                </div>
                <div>
                    <input type="text" name="doubt" v-model="doubt" class="dinput" placeholder="Add Comments" required/>
                    <input class="btn btn-primary" type="submit" value="Post">
                
                </div>
            </form>
        </div>
    </div>
    <div v-if="message">
    <div class="alert alert-success" role="alert">
      {{message}}
    </div>
  </div>
  <div v-if="error">
    <div class="alert alert-danger" role="alert">
      {{error}}
    </div>
  </div>
</body>  
</template>
<script>
import axios from 'axios'
export default {  
    name:"Doubts",
    data(){
        return{
            username:'',
            doubt:'',
            doubts:[],
            message:'',
            error:null
        }
    },

    methods:{
        async postdoubt(){
            const user={
                username:this.username,
                doubt:this.doubt,
                confirmpassword:this.confirmpassword
            }
            try{
               const res= await axios.post('/doubt/ref',user);
                this.message=res.data.message;

            }catch(err){
                this.error="Unable to Post"
            }
        }
    },
     mounted(){
        axios.get('/doubts/reference')
        .then((response)=>{
            console.log(response.data);
            this.doubts = response.data;
        })
        .catch((error) =>{
            console.log(error);
        });
    }
}


</script>
<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}
.disp-box{

  width:50%;
 margin-top: 120px;
 max-height: 400px;
   position: absolute;
    top: 90px ;
    left: 0;
    right: 0;
    margin: auto;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
  overflow: auto;
}
.u_name{
    white-space: nowrap;
    display: inline-flex;
    flex-direction: row;
    background-color: #e5e5e5;
    border: none;
    max-height: 30px;
    margin-top: 5px;
    padding: 9px;
    font-size: 14px;
    margin-left: 40px;
    font-family:"Open Sans", sans-serif;
    white-space: nowrap;
    align-items: center;
    border-radius: 16px;
    vertical-align: middle;
    text-decoration: none;
    justify-content: center;
    color: orangered;


}
.mydiv{
    background-color:whitesmoke;
     margin-left: -15px;
      margin-right: 50px;
      margin-top: 10px;
      margin-bottom: 20px;
      max-height: 80px;
}
.post{
    position: absolute;
    bottom: 10px;
    left:100px;
    right:0px;
    margin: auto;
    width:50%;

}
.doubt{
    margin-left: 35px;
}
.uinput{
    border: 2px solid lightgray;
    background-color: #EAEAEA;
    position: absolute;
    padding: 5px;
    width: 30%;
    
    
}
.dinput{
    border: 2px solid darkgrey;
    background-color: #EAEAEA;
    padding: 40px;
    width: 60%;
    
    
    
}
.btn-primary{
    margin-left: 10px;
    margin-top: 10px;


}

</style>