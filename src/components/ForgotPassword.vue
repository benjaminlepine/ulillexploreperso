<template>
    <div>
        <div>
            <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
            <div class="mainctn">
                <h5>{{ $t('login.getYourAccount')}}</h5>
                <form @submit="resetPassword">
                    <input v-model="email" class="form-control mb-3" :placeholder="$t('signup.email')" id="email" type="text" required>
                    <button type="submit" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('login.validate')}}<br></button>
                </form>
                <router-link to="/signin" ><p class="mt-4 mb-2 forgot">{{ $t('login.alreadyRegister')}}</p></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data: function ()  {
            return {
                email: null,
            }
        },
        methods:{
            resetPassword: function() {
                this.$apiService.resetPassword(this.email);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/_app-variables.scss";
    @import "../scss/app.scss";

</style>
