import axios from 'axios';
import router from '../Routes/index';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error:null

};

const getters = {
   
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    // Login Action
    async login({
        commit
    }, user) {
        commit('auth_request');
        try{
            let res = await axios.post('/users/login', user)
            if (res.data.success) {
                const token = res.data.token;
                const user = res.data.user;
                // Store the token into the localstorage
                localStorage.setItem('token', token);
              // Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
         }catch(err){
            commit('auth_error',err);
         }
        
    },
    //Register User
    async register({
        commit
    }, userData) {
        
        commit('register_request');
            try{
                let res = await axios.post('/users/signup', userData);
                if (res.data.success !== undefined) {
                    commit('register_success');
                }
                return res;
            }catch(err){
                commit('register_error',err);
             }
        
    },
    
    //Logout the user
    async logout({
        commit
    }) {
        await localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    }
 };

 const mutations = {
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
         state.error = err.response.data.message
     },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
     register_error(state, err) {
        state.error = err.response.data.message
     },
     logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    },
 };

export default {
    state,
    actions,
    mutations,
    getters
};