<template>
    <body>
    <div id="login">
        <h3 class="text-center text-white pt-5">Register</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" @submit.prevent="registerUser">
                            <h3 class="text-center text-info">Register</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Enter Your Email:</label><br>
                                <input type="email" name="email" id="email" class="form-control" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password" name="password" id="password" class="form-control"  v-model="password" required>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Confirm Password</label><br>
                                <input type="password" name="confirmpassword" id="c_password" class="form-control"  v-model="confirmpassword" required>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                            </div><br>
                             <div id="register-link" class="text-right">
                                <router-link to='/login' class="card-link">Have an Account?</router-link>
                            </div>
                        </form>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
    </body>
      

</template>

<script>
//import axios from 'axios'
import {mapActions} from "vuex"
export default {
    name:"register",
    data(){
        return{
            email:'',
            password:'',
            confirmpassword:''

        }
    },
    methods:{
        ...mapActions(['register']),
       registerUser(){
            let user={
                email:this.email,
                password:this.password,
                confirmpassword:this.confirmpassword
            };
             this.register(user).then(res =>{
                 if(res.data.success){
                     this.$router.push("/Lectures")
                 }
             });
        }
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
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 400px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>
        