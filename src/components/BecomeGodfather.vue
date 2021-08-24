<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('godfather.createMyProfil')}}</p>
    <div class="mainctn">
      <form @submit="submitGodFather">
        <div class="text-left">
          <label class="mb-0" for="nationality">{{ $t('godfather.nationality')}}</label>
          <input class="form-control mb-3" type="text" list="nationality" ref="nationality" v-model="nationality" name="nationality"/>
          <datalist id="nationality" ref="nationality" name="nationality">
            <option class="form-control" v-for="(country, index) in countrys" :key="index">{{country.name}}</option>
          </datalist>
        </div>
        <div class="text-left">
          <label class="mb-0" for="startDate">{{ $t('godfather.whenYouStarted')}}</label>
          <input class="form-control mb-3 datepicker" id="startDate" v-model="startDate" ref="startDate" type="date" name="startDate" @change="checkSeniorityDate">
        </div>
        <div class="errors-ctn mt-3 mb-3" v-if="isOlderSubscribed">
          <p class="text-danger mb-0" v-if="isOlderSubscribed"><b>{{ $t('wait.oneUndredDay')}}</b></p>
        </div>
        <div class="text-left">
          <p class="mb-0" >{{ $t('godfather.howManyGodchild')}}</p>
          <div class="d-flex justify-content-between">
            <div><input v-model="godChildNumber" value="1" type="radio" id="1" name="godchildNumber" checked><label class="pl-2" for="1">1</label></div>
            <div><input v-model="godChildNumber" value="2" type="radio" id="2" name="godchildNumber"><label class="pl-2" for="2">2</label></div>
            <div><input v-model="godChildNumber" value="3" type="radio" id="3" name="godchildNumber"><label class="pl-2" for="3">3</label></div>
            <div><input v-model="godChildNumber" value="4" type="radio" id="4" name="godchildNumber"><label class="pl-2" for="4">4</label></div>
          </div>
        </div>
        <!-- Select month availability section -->
        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godfather.whenAreYouAvailable')}}</label>
          <ul class="lang-ctn">
            <label :for=month.monthliteral v-for="(month, index) in nextMonths" :key="index" class="lang-card d-flex text-left mb-0">
              <div class="lang-inside d-flex justify-content-between">
                <div>
                  <input :id=month.monthliteral v-model="availability[index]" type="checkbox" class="mt-1" name="availability">
                  <span class="mb-0 w-100 ml-2">{{ $t('months.'+month.monthliteral)}} {{month.tmpYear}}</span>
                </div>
              </div>
            </label>
          </ul>
        </div>
        <!-- Language selection section -->
        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godfather.whatLanguageSpeak')}}</label>
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
          <label class="mb-0" for="cycleOfStudies">{{ $t('godfather.whatYouStudying')}}</label>
          <select class="form-control mb-3" id="cycleOfStudies" v-model="cycleOfStudies">
            <option v-for="(cycleOfStudies, index) in cycleOfStudiesList" :key="index">{{cycleOfStudies}}</option>
          </select>
        </div>
        <div class="text-left">
          <label class="mb-0" for="faculty">{{ $t('godfather.whatFaculty')}}</label>
            <select class="form-control mb-3" id="faculty" v-model="faculty">
            <option v-for="(faculty, index) in facultyList" :key="index">{{faculty}}</option>
          </select>
        </div>
        <div class="text-left">
          <label class="mb-0" for="department">{{ $t('godfather.whatDepartment')}}</label>
          <select class="form-control mb-3" id="department" v-model="department">
            <option v-for="(department, index) in departmentList" :key="index">{{department}}</option>
          </select>
        </div>
        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godfather.outsideCourses')}}</label>
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
          <label class="mb-0">{{ $t('godfather.whatHobbies')}}</label>
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
          <div slot="body"><RGPDGodfather></RGPDGodfather></div>
        </Popup>
        <div class="errors-ctn mt-3" v-if="errors.length > 0 ">
          <p class="text-danger" v-if="errors.length"><b>{{ $t('home.correctErrors')}}</b></p>
          <ul>
            <p class="text-danger errors-list mb-0" v-for="(error, index) in errors" :key="index">• {{ error }}</p>
          </ul>
        </div>
        <button class="btn mt-3 explorebtn" type="submit" value="Submit" :disabled="isOlderSubscribed">{{ $t('godfather.validate')}}</button>
      </form>
    </div>
  </div>
</template>

<script>
  import countrys from '../assets/i18n/country.json'
  import formInfos from '../assets/i18n/formInfos.json'
  import Popup from "@/components/Popup";
  import RGPDGodfather from "@/views/RGPDGodfather";
  export default {
    components: {RGPDGodfather, Popup},
    props: {},
    data: function ()  {
      return {
        languages: formInfos.languages,
        months: formInfos.months,
        nextMonths: [],
        active_el:0,
        isOlderSubscribed: false,
        errors: [],
        nationality: null,
        department: null,
        faculty: null,
        cycleOfStudies: null,
        languagesSpoken: [],
        availability: [],
        godchildNumber: null,
        showModal: false,
        startDate: null,
        godChildNumber: null,
        formResult: null,
        hobbies: [],
        activities: [],
        facultyList: ["Lille", "Rouen", "Paris"],
        departmentList: ["Physique", "Histoire", "Chimie", "Français"],
        countrys: countrys
      }
    },

    watch:{
      lang(){
        this.$store.state.language.lang;
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
      this.getHobbiesAndActivities();
      this.DateUtilFunctions();
    },

    methods:{
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
      checkForm: function (e) {
        // if (this.nationality && this.department) {
        //   return true;
        // }
        this.errors = [];
        if (!this.nationality) { this.errors.push(this.$t("errorsMsg.nationalityRequired")); }
        if (!this.startDate) { this.errors.push(this.$t("errorsMsg.startDateRequired")); }
        if (!this.godChildNumber) { this.errors.push(this.$t("errorsMsg.godChildNumberRequired")); }
        if (this.availability.length === 0) { this.errors.push(this.$t("errorsMsg.availabilityRequired")); }
        if (this.languagesSpoken.length === 0) { this.errors.push(this.$t("errorsMsg.languagesSpokenRequired")); }
        if (!this.cycleOfStudies) { this.errors.push(this.$t("errorsMsg.cycleOfStudiesRequired")); }
        if (!this.faculty) { this.errors.push(this.$t("errorsMsg.facultyRequired")); }
        if (!this.department) { this.errors.push(this.$t("errorsMsg.departmentRequired")); }
        if (this.activities.length === 0) { this.errors.push(this.$t("errorsMsg.activitiesRequired")); }
        if (this.hobbies.length === 0) { this.errors.push(this.$t("errorsMsg.hobbiesRequired")); }
        e.preventDefault();
      },
      submitGodFather: function (e) {
        this.checkForm(e);
        this.DateUtilFunctions();
        this.formResult = {
          nationality: this.nationality,
          startDate:this.startDate,
          godChildNumber: this.godChildNumber,
          availability: this.availability,
          languagesSpoken: this.languagesSpoken,
          cycleOfStudies: this.cycleOfStudies,
          faculty: this.faculty,
          department: this.department,
          activity: this.activity,
          hobby:this.hobby
        }
        this.$store.dispatch("", ).then(
          (resp) => { 
            // FXIME form submit with succes
            console.log("FIXME form submit with succes");
          },
          err => {
            // FIXME something went wrong show message
            console.log("FIXME Error went we try to submit godfather form", err);
          }
        )
        console.log("formResult = ", this.formResult)
      },
      activate:function(el){
        this.active_el = el;
      },
      DateUtilFunctions() {
        var months = [], tmpDate = new Date(), tmpYear = tmpDate.getFullYear(), tmpMonth = tmpDate.getMonth(), monthLiteral;
        for (var i = 0 ; i < 12 ; i++) {
          tmpDate.setMonth(tmpMonth + i);
          tmpDate.setFullYear(tmpYear);
          monthLiteral = this.months[tmpMonth];
          months.push({monthliteral: monthLiteral, tmpYear: tmpYear });
          //months.push(monthLiteral + ' ' + tmpYear);
          if (tmpMonth === 11){
            tmpMonth = 0;
            tmpYear++
          }
          else {tmpMonth++}
        }
        this.nextMonths = months;
      },
      checkSeniorityDate() {
        if(Date.now() - this.$refs['startDate'].valueAsNumber > (24 * 3600000 * 100)){
          this.isOlderSubscribed = false;
        } else {
          this.isOlderSubscribed = true;
        }
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
