<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('godchild.createMyProfil')}}</p>
    <div class="mainctn">
      <form @submit="submitGodchild">
        <p v-if="errors.length"><b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="text-left">
          <label class="mb-0" for="nationality">{{ $t('godchild.nationality')}}</label>
          <input class="form-control mb-3" id="nationality" v-model="nationality" type="text" name="nationality">
        </div>
        <div class="text-left">
          <label class="mb-0" for="startDate">{{ $t('godchild.whenYouStarted')}}</label>
          <input class="form-control mb-3" id="startDate" v-model="startDate" type="text" name="startDate">
        </div>
        <div class="text-left">
          <label class="mb-0" for="availability">{{ $t('godchild.whenAreYouAvailable')}}</label>
          <input class="form-control mb-3" id="availability" v-model="availability" type="text" name="availability">
        </div>
        <div class="text-left">
          <label class="mb-0" for="languagesSpoken">{{ $t('godchild.whatLanguageSpeak')}}</label>
          <input class="form-control mb-3" id="languagesSpoken" v-model="languagesSpoken" type="text" name="languagesSpoken">
        </div>
        <div class="text-left">
          <label class="mb-0" for="subjectStudying">{{ $t('godchild.whatYouStudying')}}</label>
          <input class="form-control mb-3" id="subjectStudying" v-model="subjectStudying" type="text" name="subjectStudying">
        </div>
        <div class="text-left">
          <label class="mb-0" for="faculty">{{ $t('godchild.whatFaculty')}}</label>
          <input class="form-control mb-3" id="faculty" v-model="faculty" type="text" name="faculty">
        </div>
        <div class="text-left">
          <label class="mb-0" for="department">{{ $t('godchild.whatDepartment')}}</label>
          <input class="form-control mb-3" id="department" v-model="department" type="text" name="department">
        </div>
        <div class="text-left">
          <label class="mb-0" for="outsideCourses">{{ $t('godchild.outsideCourses')}}</label>
          <input class="form-control mb-3" id="outsideCourses" v-model="outsideCourses" type="text" name="outsideCourses">
        </div>
        <div class="text-left">
          <label class="mb-0" for="hobbies">{{ $t('godchild.whatHobbies')}}</label>
          <input class="form-control mb-3" id="hobbies" v-model="hobbies" type="text" name="hobbies">
        </div>
        <div class="d-flex text-left">
          <input type="checkbox" class="largerCheckbox">
          <p class="rgpd-text">{{ $t('signup.rgpd')}}</p>
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
        errors: [],
        nationality: null,
        department: null,
        faculty: null,
        subjectStudying: null,
        languagesSpoken: null,
        hobbies: null,
        availability: null,
        startDate: null,
        outsideCourses: null,
      }
    },

    methods:{
      checkForm: function (e) {
        if (this.nationality && this.department) {
          return true;
        }
        this.errors = [];
        if (!this.nationality) {
          this.errors.push('Nationality required.');
        }
        if (!this.department) {
          this.errors.push('Department required.');
        }
        e.preventDefault();
      },
      submitGodchild: function (e) {
        this.checkForm(e);
        console.log("POST FORM")
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
