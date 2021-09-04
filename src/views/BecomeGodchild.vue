<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('godchild.createMyProfile')}}</p>
    <div class="mainctn">
      <form @submit.prevent="submitGodchild">
        <div class="text-left">
          <label class="mb-0" for="nationality">{{ $t('godchild.nationality')}}</label>
          <input class="form-control mb-3" type="text" list="nationality" ref="nationality" v-model="nationality" name="nationality"/>
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
                  <input :id=month.monthName v-model="availability[index]" type="checkbox" class="mt-1" name="availability">
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
                  <input :id=language v-model="languagesSpoken[index]" type="checkbox" class="mt-1" name="languagesSpoken">
                  <span class="mb-0 w-100 ml-2">{{ $t('lang.'+language)}}</span>
                </div>
                <img :alt="language" class="lang-flag" :src="require(`@/assets/img/flags/${language}.svg`)">
              </div>
            </label>
          </ul>
        </div>
        <div class="text-left">
          <label class="mb-0" for="cycleOfStudies">{{ $t('godchild.whatYouStudying')}}</label>
          <select class="form-control mb-3" id="cycleOfStudies" v-model="cycleOfStudies">
            <option v-for="(cycleOfStudies, index) in cycleOfStudiesList" :key="index">{{cycleOfStudies}}</option>
          </select>
        </div>

        <div class="text-left">
          <label class="mb-0" for="faculty">{{ $t('godchild.whatFaculty')}}</label>
          <select class="form-control mb-3" id="faculty" v-model="facultyIndex">
            <option v-for="(faculty, index) in faculties" :key="index" :value="index">{{faculty.name}}</option>
          </select>
        </div>
        <div v-if="facultyIndex > -1" class="text-left">
          <label class="mb-0" for="department">{{ $t('godchild.whatDepartment')}}</label>
          <select class="form-control mb-3" id="department" v-model="department">
            <option v-for="(department, index) in faculties[facultyIndex].departments" :key="index">{{department}}</option>
          </select>
        </div>



        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godchild.outsideCourses')}}</label>
          <ul class="lang-ctn">
            <label v-for="(activity, index) in activities" :key="index" class="lang-card d-flex text-left mb-0 w-100">
              <div class="hobbie-inside d-flex justify-content-between">
                <input :id="activity.name" v-model="activity.checked" type="checkbox" class="mt-1">
                <span :for="activity.name" class="mb-0 w-100 ml-2">{{activity.name}}</span>
              </div>
            </label>
          </ul>
        </div>
        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godchild.whatHobbies')}}</label>
          <ul class="lang-ctn">
            <label  v-for="(hobby, index) in hobbies" :key="index" class="lang-card d-flex text-left mb-0 w-100">
              <div class="hobbie-inside d-flex justify-content-between">
                <input :id="hobby.name" v-model="hobby.checked" type="checkbox" class="mt-1">
                <span for="hobby.name" class="mb-0 w-100 ml-2">{{hobby.name}}</span>
              </div>
            </label>
          </ul>
        </div>
        <div class="d-flex text-left">
          <input type="checkbox" class="largerCheckbox">
          <div>
            <p class="rgpd-text">{{ $t('signup.rgpd')}}</p>
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
      languages: formInfos.languages,
      nextMonths: [],
      active_el:0,
      errors: [],
      nationality: null,

      faculties: [],
      department: null,
      facultyIndex: -1,
      cycleOfStudies: null,

      languagesSpoken: [],
      availability: [],
      showModal: false,
      hobbies: [],
      activities: [],
      countrys: countrys
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
      return formInfos.cycleOfStudiesList[this.$i18n.locale]
    },
  },
  mounted(){
    this.getFaculties();
    this.getHobbiesAndActivities();
    this.DateUtilFunctions();
  },

  methods:{
    getFaculties(){
      this.$store.dispatch("user/fetchFaculties").then(
        faculties => {
          this.faculties = faculties;
        },
        err => {
          // FIXME error message
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
          },
          err => {
            // FIXME something went wrong show message
            console.log("Error went we try to get the hobbies and activities data", err);
          }
        );
    },
    checkForm(e) {
      this.errors = [];
      if (!this.nationality) { this.errors.push(this.$t("errorsMsg.nationalityRequired")); }
      if (this.availability.length === 0) { this.errors.push(this.$t("errorsMsg.availabilityRequired")); }
      if (this.languagesSpoken.length === 0) { this.errors.push(this.$t("errorsMsg.languagesSpokenRequired")); }
      if (!this.cycleOfStudies) { this.errors.push(this.$t("errorsMsg.cycleOfStudiesRequired")); }
      if (this.facultyIndex < 0 || !this.faculties[this.facultyIndex] || !this.faculties[this.facultyIndex].name) {
        this.errors.push(this.$t("errorsMsg.facultyRequired"));
      }
      if (!this.department) { this.errors.push(this.$t("errorsMsg.departmentRequired")); }
      if (this.activities.length === 0) { this.errors.push(this.$t("errorsMsg.activitiesRequired")); }
      if (this.hobbies.length === 0) { this.errors.push(this.$t("errorsMsg.hobbiesRequired")); }
      
      return this.errors.length == 0;
    },
    submitGodchild: function (e) {
      if (!this.checkForm(e)){ return; }

      const availabilities = [];
      this.availability.forEach((v, index) => {
        if (v){
          availabilities.push(this.nextMonths[index].mmyyyy);
        }
      });
      const form = {
        nationality: this.nationality,
        availabilities: availabilities,
        spokenLanguages: utils.getArrayIndexesFrom(this.languagesSpoken), // indexes
        studyCycle: this.cycleOfStudies,
        faculty: this.faculties[this.facultyIndex].name,
        department: this.department,
        activities: utils.getArrayIndexesFrom(this.activities, function(value){ return value.checked}), // indexes
        hobbies: utils.getArrayIndexesFrom(this.hobbies, function(value){ return value.checked}) // indexes
      }
      console.log(form)
      this.$store.dispatch('user/createGodchildProfile', form).then(
        (profile) => {
          console.log(profile);
            // FXIME form submit with succes
          this.$router.push('/matching');
        },
        err => {
          // FIXME error message
        }
      );
    },
    activate:function(el){
      this.active_el = el;
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
