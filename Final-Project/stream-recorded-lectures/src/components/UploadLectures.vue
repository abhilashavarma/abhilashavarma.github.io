<template>
<body>

<div class="mycont">
  <form @submit.prevent="sendFile" enctype="multipart/form-data" ref="anyName">
  <div class="form">
    <div class="inputname">
      <label for="exampleInputEmail1" class="lec">Lecture Topic</label>
      <input type="text" name="name" v-model="name" class="form-control" id="name_id" aria-describedby="emailHelp" placeholder="Topic of Lecture" />
    </div><br>
      <div class="inputdes">
      <label for="exampleInputPassword1">Description</label><br>
      <input type="text" name="description" v-model="description" class="form-control" id="desc_id" placeholder="description" />
      </div>
    
      <div class="btn">
          <label class="file-label">
            <input type="file" ref="file"  class="file-input"  accept="video/*"  @change="selectFile"/><br>
            <span class="file-cta">
              <span class="file-icon">
              <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                choose a file....
              </span>
              </span>
            <span v-if="file" class="file-name">{{file.name}}</span>
          </label >   
      </div>
     
  
  <div class="field">
      <button class="button is-info">Submit</button>
  </div>
  </div>
  </form> 
</div>
<div id="app" v-if="uploading===true">
    <div>{{ progress }}%</div>
    <div class="loading-bar">
      <div class="percentage" :style="{'width' : progress + '%'}"></div>
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
import axios from 'axios';

export default{

    name:"UploadLectures",
    data(){
    return{
      name: '',
      description: '',
      file: '',
      message:'',
      error:null,
      progress:0,
      uploading:false,
    
    }
  },
  methods:{
    selectFile(){
      this.file = this.$refs.file.files[0];
    },
    async sendFile(){
      var formData= new FormData();     
      formData.append('name',this.name);
      formData.append('description',this.description)
      formData.append('file', this.$refs.file.files[0]);
     
      
      
      try{
        this.uploading=true;
       const res=await axios.post("/upload/video", formData,{
         onUploadProgress:e=>this.progress=Math.round(e.loaded*100/e.total)
       });
        this.uploading=false;
        this.message=res.data.message;
        this.name='';
        this.description='';
        this.file='';

      }catch(err){
        this.uploading=false;
          this.error="Something went wrong";
          

      }
        
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  margin-top: 0px;
  background-color: #17a2b8;
  height: 100vh;
}
.field{
  margin-left: 50px;
}
.inputdes input{
 padding:30px 20px ;
}
.inputname input{
  margin-top: 5px;
  padding: 30px 20px;
}
.up{
  margin-top: 100px;
}
.lec{
  margin-top: 20px;
}
.is-info{
    width: 100px;
}
.up{
  margin-left: 50px;
  margin-top: -40px;
}
.name-input{
   border: 2px solid lightgray;
    
    margin-top: 30px;

}
label{
  margin-left: 20px;
}

.form-control{
  margin-top: 5px;

}
.mycont{
  display: flex;
  justify-content: center;
  width:80%;
  display: relative;
 margin-top: 15px;
margin:auto;

 max-height: 400px; 
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
  
}
.form{
  margin-top: 10px;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  color: #222;
  width: 100%;
  height: 100vh;
  
}

.container {
  text-align: right;
  font-size: 20px;
  color: #555;
}

.loading-bar {
  position: relative;
  width: 400px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px green
}

  .percentage {
    position: absolute;
    top: 1px; left: 1px; right: 1px;
    display: block;
    height: 100%;
    border-radius: 15px;
    background-color: #a5df41;
    background-size: 30px 30px;
    animation: animate-stripes 3s linear infinite;
  } 


@keyframes animate-stripes {
  0% { background-position: 0 0; }
  100% { background-position: 60px 0; }
}

@media screen and (min-width:800px) {
  .mycont{
  width:50%;
  position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .inputdes input{
 padding:40px 30px ;
 
}

}
</style>