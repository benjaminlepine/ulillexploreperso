<template>
    <div class="login-ctn">
        <p class="mb-0 mainTitle text-yellow">{{ $t('home.ulillexplore')}}</p>
        <p class="mb-0 mainTitle">{{ $t('login.login')}}</p>
        <button class="btn explorebtn explorebtn--login">
            {{ $t('login.iHaveUlillAdress')}}<br>
            {{ $t('login.iClickHere')}}
        </button>
        <p class="mb-0 text-white mt-2">{{ $t('login.noteAboutUnivlille')}}</p>
        <hr class="separator-line">
        <p class="mb-0 text-white mt-4 mb-3"><b>{{ $t('login.iDontHaveAddress')}}</b></p>
        <input class="form-control mb-3" :placeholder="$t('login.email')" id="name" type="text">
        <input class="form-control mb-3" :placeholder="$t('login.password')" id="password" type="password">
        <button class="btn explorebtn" disabled>{{ $t('login.login')}}<br></button>
        <p class="mt-4 mb-2 forgot">{{ $t('login.forgotPassword')}}</p>
        <button class="btn mt-3 explorebtn explorebtn--signup">{{ $t('login.signUp')}}<br></button>
    </div>
</template>

<script>
    export default {
        props: {}
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
