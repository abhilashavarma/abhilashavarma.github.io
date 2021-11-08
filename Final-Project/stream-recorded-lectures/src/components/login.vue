<template>
    <body>
    <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" @submit.prevent="loginUser">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Registered email:</label><br>
                                <input type="email" name="email" id="email" class="form-control" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="password" name="password" id="password" class="form-control"  v-model="password" required>
                            </div>
                            
                            <div class="form-group">
                               <input type="submit" name="submit" class="btn btn-info btn-md" value="Login">
                            </div><br>
                             <div id="register-link" class="text-right">
                                <router-link to='/register' class="card-link">Need an Account</router-link>
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
import { mapActions } from "vuex";
export default {
    name:"login",
    data(){
        return{
            email:"",
            password:""

        }
    },
    methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        email: this.email,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("/Lectures");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};

    

</script>
<style scoped>
#register-link{
    margin-top:30px;
}
body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}

#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  height: 320px;
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