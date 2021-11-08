<template>
<div class="mynav">
    <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container">
            <ul class="nav navbar-nav mr-auto">
                
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link class="nav-link" to="/Lectures" active-class="nav-link active" exact>Lectures</router-link>
                </li>
                <li class="nav-item " v-if="isLoggedIn">
                    <router-link class="nav-link" to="/UploadLectures" active-class="nav-link active">Upload Lectures</router-link>
                </li>
                 <li class="nav-item " v-if="isLoggedIn">
                    <router-link class="nav-link" to="/Doubts" active-class="nav-link active">Reference</router-link>
                </li>
                
            </ul>
        </div>
      
            <ul class="nav navbar-nav ml-auto">
                     <li class="nav-item " v-if="!isLoggedIn">
                    <router-link class="nav-link" to="/login" active-class="nav-link active">Login</router-link>
                </li>
                 <li class="nav-item " v-if="!isLoggedIn">
                    <router-link class="nav-link" to="/register" active-class="nav-link active">SignUp</router-link>
                </li>
                  <div class="container" id="rightid">
                 <li class="nav-item ml-auto" v-if="isLoggedIn">
                    <a to="/logout" class="nav-link" active-class="nav-link active" @click.prevent="logoutUser">Logout</a>
                </li>
                  </div>
            </ul>
        
    </nav>
</div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
export default{
    name: 'Navbar',
    computed:{
        ...mapGetters(['isLoggedIn'])
    },
    methods:{
        ...mapActions(['logout']),
        logoutUser(){
            this.logout();
        }
    }
};
</script>

<style scoped>
.container{
    margin: 0px;
    
}
#rightid{
    margin-top: -70px;
}
@media screen and (min-width:800px){
    #rightid{
        margin-top: 5px;
    }
}
</style>