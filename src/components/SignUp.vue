<template>
    <div>
        <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
        <p class="mb-0 mainTitle">{{ $t('signup.signup')}}</p>
        <div class="mainctn">
            <form @submit="signUp">
                <input v-model="lastname" class="form-control mb-3" :placeholder="$t('signup.lastname')" id="lastname" type="text" required>
                <input v-model="firstname" class="form-control mb-3" :placeholder="$t('signup.firstname')" id="firstname" type="text" required>
                <input v-model="email" class="form-control mb-3" :placeholder="$t('signup.email')" id="email" type="text" required>
                <input v-model="password" class="form-control mb-3" :placeholder="$t('signup.password')" id="password" type="password" required>
                <div class="d-flex text-left">
                    <input type="checkbox" class="largerCheckbox" required>
                    <p class="rgpd-text">{{ $t('signup.rgpd')}}</p>
                </div>
                <button type="submit" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('signup.register')}}<br></button>
            </form>
            <router-link to="/signin" ><p class="mt-4 mb-2 forgot">{{ $t('login.alreadyRegister')}}</p></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data: function ()  {
            return {
                lastname: null,
                firstname: null,
                email: null,
                password: null,
            }
        },
        methods:{
            signUp: function() {
                const user = {firstname: this.firstname, lastname: this.lastname, email: this.email , password: this.password};
                this.store.dispatch('aut/signup', user).then(
                    () => {
                        // FIXME signup success, maybe we need to show some message
                        this.$router.push('/signin');
                    },
                    (err) => {
                        // FIXME something went wrong, add message to describe this error than try again
                        console.log('singup error', err);
                    }
                );
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/_app-variables.scss";
    @import "../scss/app.scss";

    .largerCheckbox{
        margin-top: 14px;
        margin-left: 4px;
        -ms-transform: scale(1.5); /* IE */
        -moz-transform: scale(1.5); /* FF */
        -webkit-transform: scale(1.5); /* Safari and Chrome */
        -o-transform: scale(1.5); /* Opera */
        transform: scale(1.5);
        padding: 10px;
    }

    .rgpd-text{
        margin-bottom: 0;
        text-align: left;
        padding-left: 12px !important;
        padding-top: 8px;
        font-size: 14px;
        color: $clear-main-color;
    }

</style>