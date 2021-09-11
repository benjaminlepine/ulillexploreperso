<template>
    <div class="login-ctn">
        <p class="mb-0 mainTitle text-yellow">{{ $t('home.ulillexplore')}}</p>
        <p class="mb-0 mainTitle">{{ $t('login.login')}}</p>
        <button class="btn explorebtn explorebtn--login" @click="casSignIn()">
            {{ $t('login.iHaveUlillAdress')}}<br>
            {{ $t('login.iClickHere')}}
        </button>
        <p class="mb-0 text-white mt-2">{{ $t('login.noteAboutUnivlille')}}</p>
        <hr class="separator-line">
        <p class="mb-0 text-white mt-4 mb-3"><b>{{ $t('login.iDontHaveAddress')}}</b></p>
        <form @submit.prevent="handleSignIn">
            <input v-model="user.email" class="form-control mb-3" :placeholder="$t('login.email')" id="name" type="text" required>
            <input v-model="user.password" class="form-control mb-3" :placeholder="$t('login.password')" id="password" type="password" required>
            <button type="submit" class="btn explorebtn">{{ $t('login.login')}}<br></button>
        </form>
        <router-link to="/forgotpassword" ><p class="mt-4 mb-2 forgot">{{ $t('login.forgotPassword')}}</p></router-link>
        <router-link to="/signup" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('login.signUp')}}<br></router-link>
    </div>
</template>

<script>
    import User from '../models/user';
    import R from '../resources';
import axios from 'axios';

    export default {
        props: {},
        data: function ()  {
            return {
                user: new User('', ''),
                loading: false,
                message: '',
                email: null,
                password: null,
            };
        },
        beforeMount(){
            if (document.cookie){
                const casCookie = document.cookie
                .split(';')
                .find(row => row.startsWith("XSRF-TOKEN"))
                .split('=')[1];
                console.log("casCookie = ", casCookie);
                if (casCookie){
                    this.$store.dispatch("auth/casSignin").then(
                        (user) => {
                            console.log(user);
                            this.$router.push('/profile');
                        },
                        err=>{
                            console.log(err);
                        }

                    );
                }
            }
        },
        compute: {
            loading(){
                return this.$store.auth.getters.loading;
            },
            signIn(){
                return this.$store.auth.getters.signIn;
            },
            create(){
                if (this.signIn){
                    this.$router.push('/profile');
                }
            }
        },
        methods:{
            casSignIn(){
                window.location.href = R.endpoint.casSignin();
            },
            handleSignIn(){
                this.loading = true;
                // formulaire validate
                if (this.user.email && this.user.password){
                    this.$store.dispatch('auth/signin', this.user).then(
                        () => {
                            this.$router.push('/profile');
                        },
                        error => {
                            this.loading = false;
                            this.message = (error.response && error.response.data) || error.message || error.toString();
                            console.log(this.message);
                        }
                    );
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/_app-variables.scss";
    @import "../scss/app.scss";

    .login-ctn{
        width: 90%;
        margin-left: 5%;
    }

    .separator-line{
        height: 2px;
        background-color: $third-color;
        border: none;
        width: 60%;
        margin-top: 25px;
    }

    .forgot{
        text-decoration: underline;
        color: white;
        &:hover{
            cursor: pointer;
            opacity:0.8;
        }
    }

    .explorebtn--login{
        background-color: $second-color;
        &:hover{background-color: darken($second-color, 10%);}
    }

    .explorebtn--signup{
        background-color: transparent;
        border: solid 3px $third-color;
        color: $third-color;
        transition: background-color 300ms;
        &:hover{background-color: transparent; color: $third-color; opacity: 0.8}
    }
</style>
