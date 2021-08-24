<template>
    <div>
        <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
        <p class="mb-0 mainTitle">{{ $t('problem.problemWithMyGodfather')}}</p>
        <div class="mainctn">
            <form @submit="submitProblem">
                <div class="text-left">
                    <label for="whatProblem">{{ $t('problem.whatIsTheProblem')}}</label>
                    <select class="form-control" name="problem" id="whatProblem">
                        <option value="">{{ $t('problem.chooseOption')}}</option>
                        <option value="">{{ $t('problem.unavailable')}}</option>
                        <option value="">{{ $t('problem.noAffinity')}}</option>
                        <option value="">{{ $t('problem.communication')}}</option>
                        <option value="">{{ $t('problem.weird')}}</option>
                    </select>
                </div>
                <div class="d-flex text-left">
                    <input type="checkbox" class="largerCheckbox">
                    <p class="rgpd-text">{{ $t('problem.rgpd')}}</p>
                </div>
                <button class="btn mt-3 explorebtn" type="submit" value="Submit">{{ $t('godchild.validate')}}</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props: {},
        data: function ()  {
            return {
                nationality: null,
            }
        },
        methods:{
            submitProblem: function (e) {
                console.log("POST FORM")
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../scss/app-variables";
    @import "../scss/app";

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
