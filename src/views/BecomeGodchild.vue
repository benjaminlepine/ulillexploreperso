<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('godchild.createMyProfile')}}</p>
    <div class="mainctn">
      <form @submit.prevent="submitGodchild">
        <div class="text-left">
          <label class="mb-0" for="nationality">{{ $t('godchild.nationality')}}</label>
          <input class="form-control mb-3" type="text" list="nationality" ref="nationality" v-model="formulaire.nationality" name="nationality"/>
          <datalist id="nationality" ref="nationality" name="nationality">
            <option class="form-control" v-for="(country, index) in countrys" :key="index">{{country.name}}</option>
          </datalist>
        </div>
        <!-- Select month availability section -->
        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godchild.whenAreYouAvailable')}}</label>
          <ul class="lang-ctn">
            <label :for=month.monthName v-for="(month, index) in nextMonths" :key="index" class="lang-card d-flex text-left mb-0">
              <div class="lang-inside d-flex justify-content-between">
                <div>
                  <input :id=month.monthName v-model="formulaire.availabilities[index]" type="checkbox" class="mt-1" name="availability">
                  <span class="mb-0 w-100 ml-2">{{ $t('months.'+month.monthName)}} {{month.year}}</span>
                </div>
              </div>
            </label>
          </ul>
        </div>
        <!-- Language selection section -->
        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godchild.whatLanguageSpeak')}}</label>
          <ul class="lang-ctn">
            <label :for=language v-for="(language, index) in languages" :key="index" class="lang-card d-flex text-left mb-0">
              <div class="lang-inside d-flex justify-content-between">
                <div>
                  <input :id=language v-model="formulaire.spokenLanguages[index]" type="checkbox" class="mt-1" name="languagesSpoken">
                  <span class="mb-0 w-100 ml-2">{{ $t('lang.'+language)}}</span>
                </div>
                <img :alt="language" class="lang-flag" :src="require(`@/assets/img/flags/${language}.svg`)">
              </div>
            </label>
          </ul>
        </div>
        <div class="text-left">
          <label class="mb-0" for="cycleOfStudies">{{ $t('godchild.whatYouStudying')}}</label>
          <select class="form-control mb-3" id="cycleOfStudies" v-model="formulaire.studyCycle">
            <option selected="true" disabled="disabled">{{ $t('problem.chooseOption')}}</option>
            <option v-for="(cycleOfStudies, index) in cycleOfStudiesList" :key="index">{{cycleOfStudies}}</option>
          </select>
        </div>

        <div class="text-left">
          <label class="mb-0" for="faculty">{{ $t('godchild.whatFaculty')}}</label>
          <select class="form-control mb-3" id="faculty" v-model="formulaire.faculty">
            <option selected="true" disabled="disabled">{{ $t('problem.chooseOption')}}</option>
            <option v-for="(faculty, index) in faculties" :key="index" :value="index">{{faculty.name}}</option>
          </select>
        </div>
        <div v-if="formulaire.faculty > -1" class="text-left">
          <label class="mb-0" for="department">{{ $t('godchild.whatDepartment')}}</label>
          <select class="form-control mb-3" id="department" v-model="formulaire.department">
            <option selected="true" disabled="disabled">{{ $t('problem.chooseOption')}}</option>
            <option v-for="(dpt, index) in faculties[formulaire.faculty].departments" :key="index">{{dpt}}</option>
          </select>
        </div>

        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godchild.outsideCourses')}}  {{ $t('godfather.outsideCoursesMinMax')}}</label>
          <ul class="lang-ctn">
            <label v-for="(activity, index) in activities" :key="index" class="lang-card d-flex text-left mb-0 w-100">
              <div class="hobbie-inside d-flex justify-content-between">
                <input :id="activity.name" @click="CheckBoxCount($event, activities,4)" v-model="activity.checked" type="checkbox" class="mt-1">
                <span :for="activity.name" class="mb-0 w-100 ml-2">{{activity.name}}</span>
              </div>
            </label>
          </ul>
        </div>
        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godchild.whatHobbies')}}  {{ $t('godfather.outsideCoursesMinMax')}}</label>
          <ul class="lang-ctn">
            <label  v-for="(hobby, index) in hobbies" :key="index" class="lang-card d-flex text-left mb-0 w-100">
              <div class="hobbie-inside d-flex justify-content-between">
                <input :id="hobby.name" @click="CheckBoxCount($event, hobbies,4)" v-model="hobby.checked" type="checkbox" class="mt-1">
                <span for="hobby.name" class="mb-0 w-100 ml-2">{{hobby.name}}</span>
              </div>
            </label>
          </ul>
        </div>
        <div class="d-flex text-left">
          <input type="checkbox" id="rgpdCB" class="largerCheckbox">
          <div>
            <label class="rgpd-text" for="rgpdCB">{{ $t('signup.rgpd')}}</label>
            <button @click="showModal=true" id="show-modal" class="rgpd-text rgpd-text-link">{{ $t('signup.rgpdPopUpLink')}}</button>
          </div>
        </div>
        <Popup v-if="showModal" @close="showModal=false">
          <div slot="body"><RGPDGodchild></RGPDGodchild></div>
        </Popup>
        <div class="errors-ctn mt-3" v-if="errors.length > 0 ">
          <p class="text-danger" v-if="errors.length"><b>{{ $t('home.correctErrors')}}</b></p>
          <ul>
            <p class="text-danger errors-list mb-0" v-for="(error, index) in errors" :key="index">• {{ error }}</p>
          </ul>
        </div>
        <button class="btn mt-3 explorebtn" type="submit" value="Submit">{{ $t('godchild.validate')}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import countrys from '../assets/i18n/country.json'
import formInfos from '../assets/i18n/formInfos.json'
import Popup from "@/components/Popup";
import RGPDGodchild from "@/views/RGPDGodchild";
import { utils } from "@/utils";

export default {
  components: {RGPDGodchild, Popup},
  props: {},
  data: function ()  {
    return {
      formulaire: {
        nationality: null,
        spokenLanguages: [],
        department: null,
        faculty: -1,
        hobbies: [],
        studyCycle: null,
        activities: [],
        availabilities: []
      },
      // data fetch
      faculties: [],
      hobbies: [],
      activities: [],

      // variable
      countrys: countrys,
      languages: formInfos.languages,
      nextMonths: [],
      errors: [],
      showModal: false,
      storageFacultyName: null,
    }
  },

  watch:{
    lang(){
      this.$store.state.header.lang;
      this.getHobbiesAndActivities();
    }
  },
  computed: {
    lang(){
      return this.$store.getters['header/language'];
    },
    cycleOfStudiesList(){
      return formInfos.cycleOfStudiesList[this.$i18n.locale];
    },
  },
  mounted(){
    this.getFaculties();
    this.getHobbiesAndActivities();
    this.DateUtilFunctions();
    this.setAvailabilities();
  },
  beforeMount(){
    this.formulaire = this.$store.getters["user/godchildProfile"];
    if (!this.formulaire){
      this.initForm();
    }else {
      this.storageFacultyName = this.formulaire.faculty;
      this.setSpokenLanguages();
      this.setFaculty();
    }
  },
  methods:{
    initForm(){
      this.formulaire = {
        nationality: null,
        spokenLanguages: [],
        department: null,
        faculty: -1,
        hobbies: [],
        studyCycle: null,
        activities: [],
        availabilities: []
      };
    },
    setFaculty(){
      for (let i = 0; i < this.faculties.length; i++) {
        if (this.faculties[i].name === this.storageFacultyName){
          this.formulaire.faculty = i;
          return;
        }
      }
      this.formulaire.faculty = -1;
    },
    setHobbies(){
      if (this.hobbies && this.hobbies.length > 0){
        this.formulaire.hobbies.forEach((value) => {
          this.hobbies[value].checked = true;
        });
      }
    },
    setActivities(){
      if (this.activities && this.activities.length > 0){
        this.formulaire.activities.forEach((value) => {
          this.activities[value].checked = true;
        });
      }
    },
    setSpokenLanguages(){
      if (this.formulaire && this.formulaire.spokenLanguages && this.formulaire.spokenLanguages.length){
        const tmp = [];
        this.formulaire.spokenLanguages.forEach((value) => {
            tmp[value] = true;
        });
        this.formulaire.spokenLanguages = tmp;
      }
    },
    setAvailabilities(){
      if (this.formulaire && this.formulaire.availabilities && this.formulaire.availabilities.length){
        const tmp = [];
        this.formulaire.availabilities.forEach((mmyyyy) => {
            this.nextMonths.find((month, index) => {
              if (month.mmyyyy == mmyyyy){
                tmp[index] = true;
              }
            });
        });
        this.formulaire.availabilities = tmp;
      }
    },

    CheckBoxCount(e, tab, max){ utils.CheckBoxCount(e, tab, max) },
    getFaculties(){
      this.$store.dispatch("user/fetchFaculties").then(
          faculties => {
            this.faculties = faculties;
            this.setFaculty();
          },
          err => {
           //  Bus.$emit('DisplayMessage', {text: this.$t('profile.errorGen')+ " = " + err, type: 'error'});
          }
      );
    },
    getHobbiesAndActivities(){
      this.$store.dispatch("user/fetchHobbiesAndActivities").then(
          payload => {
            payload.hobbies.forEach((name, index) => {
              const checked = this.hobbies[index] && this.hobbies[index].checked;
              this.$set(this.hobbies, index, {name, checked});
            });
            payload.activities.forEach((name, index) => {
              const checked = this.activities[index] && this.activities[index].checked;
              this.$set(this.activities, index, {name, checked});
            });
            this.setHobbies();
            this.setActivities();
          },
          err => {
            // Bus.$emit('DisplayMessage', {text: this.$t('profile.errorGen')
            //      +" / Error went we try to get the hobbies and activities data || " + err, type: 'error'});
          }
      );
    },
    checkForm(e) {
      this.errors = [];
      if (!this.formulaire.nationality) { this.errors.push(this.$t("errorsMsg.nationalityRequired")); }
      if (this.formulaire.availabilities.length === 0) { this.errors.push(this.$t("errorsMsg.availabilityRequired")); }
      if (this.formulaire.spokenLanguages.length === 0) { this.errors.push(this.$t("errorsMsg.languagesSpokenRequired")); }
      if (!this.formulaire.studyCycle) { this.errors.push(this.$t("errorsMsg.cycleOfStudiesRequired")); }
      if (this.formulaire.faculty < 0 || !this.faculties[this.formulaire.faculty] || !this.faculties[this.formulaire.faculty].name) {
        this.errors.push(this.$t("errorsMsg.facultyRequired"));
      }
      if (!this.formulaire.department) { this.errors.push(this.$t("errorsMsg.departmentRequired")); }
      if (this.activities.length === 0) { this.errors.push(this.$t("errorsMsg.activitiesRequired")); }
      if (this.hobbies.length === 0) { this.errors.push(this.$t("errorsMsg.hobbiesRequired")); }

      return this.errors.length == 0;
    },

    submitGodchild: function (e) {
      if (!this.checkForm(e)){ return; }

      const availabilities = [];
      this.formulaire.availabilities.forEach((v, index) => {
        if (v){
          availabilities.push(this.nextMonths[index].mmyyyy);
        }
      });
      const form = {
        id: this.formulaire.id,
        nationality: this.formulaire.nationality,
        availabilities: availabilities,
        spokenLanguages: utils.getArrayIndexesFrom(this.formulaire.spokenLanguages), // indexes
        studyCycle: this.formulaire.studyCycle,
        faculty: this.faculties[this.formulaire.faculty].name,
        department: this.formulaire.department,
        activities: utils.getArrayIndexesFrom(this.activities, function(value){ return value.checked}), // indexes
        hobbies: utils.getArrayIndexesFrom(this.hobbies, function(value){ return value.checked}) // indexes
      }
      this.$store.dispatch('user/createGodchildProfile', form).then(
          (profile) => {
            console.log(profile);
            Bus.$emit('DisplayMessage', {text: this.$t('profile.successCreation'), type: 'success'});
            // this.$router.push("/profile"); FIXME uncomment
          },
          err => {
            if (err && err.response && err.response.data && err.response.data.messages){
              Bus.$emit('DisplayMessage', {text: err.response.data.messages, type: 'error'});
            }else {
              Bus.$emit('DisplayMessage', {text: "FIXME", type: 'error'}); // FIXME
            }
          }
      );
    },
    DateUtilFunctions() {
      this.nextMonths =  utils.getNextMonths();
    },
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
  &-link{
    background-color: white;
    border: none;
    &:hover{
      text-decoration: underline;
    }
  }
}

ul,li{
  margin: 0;
  padding: 0;
}
li {
  text-align: center;
  flex: 1 0 calc(33.333% - 20px); // 20px is gutter size -- can set to any value
  max-width: calc(33.333% - 20px); // 20px is gutter size -- can set to any value
}

.lang{
  &-ctn{
    display: flex;
    flex-flow: row wrap;
  }
  &-card{
    width: 33%;
    & > label, input{cursor: pointer}
  }
  &-inside{
    margin: 3px;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }
  &-flag{
    height: 32px;
  }
}

.hobbie-inside{
  margin: 3px;
  width: 100%;
  padding: 0.3rem 0;
}

@media screen and (max-width: 600px) { .lang-card { width: 50%; }}
@media screen and (max-width: 450px) { .lang-card { width: 100%; }}
</style>
