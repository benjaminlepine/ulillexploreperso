<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <p class="mb-0 mainTitle">{{ $t('godfather.createMyProfil')}}</p>

    <div class="mainctn">
      <form @submit="submitGodchild">

        <div class="text-left">
          <label class="mb-0" for="nationality">{{ $t('godfather.nationality')}}</label>
          <input class="form-control mb-3" id="nationality" v-model="nationality" type="text" name="nationality">
        </div>
        <div class="text-left">
          <label class="mb-0" for="startDate">{{ $t('godfather.whenYouStarted')}}</label>
          <input class="form-control mb-3" id="startDate" v-model="startDate" type="text" name="startDate">
        </div>
        <div class="text-left">
          <p class="mb-0" >{{ $t('godfather.howManyGodchild')}}</p>
          <div class="d-flex justify-content-between">
            <div><input type="radio" id="1" name="godchildNumber" checked><label class="pl-2" for="1">1</label></div>
            <div><input type="radio" id="2" name="godchildNumber"><label class="pl-2" for="2">2</label></div>
            <div><input type="radio" id="3" name="godchildNumber"><label class="pl-2" for="3">3</label></div>
            <div><input type="radio" id="4" name="godchildNumber"><label class="pl-2" for="4">4</label></div>
          </div>
        </div>
        <!-- Select month availability section -->
        <div class="text-left mb-3">
          <label class="mb-0">{{ $t('godfather.whenAreYouAvailable')}}</label>
          <ul class="lang-ctn">
            <label :for=month.monthliteral v-for="(month, index) in nextMonths" class="lang-card d-flex text-left mb-0">
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
            <label :for=language v-for="(language, index) in languages" class="lang-card d-flex text-left mb-0">
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
          <label class="mb-0" for="subjectStudying">{{ $t('godfather.whatYouStudying')}}</label>
          <input class="form-control mb-3" id="subjectStudying" v-model="subjectStudying" type="text" name="subjectStudying">
        </div>
        <div class="text-left">
          <label class="mb-0" for="faculty">{{ $t('godfather.whatFaculty')}}</label>
          <input class="form-control mb-3" id="faculty" v-model="faculty" type="text" name="faculty">
        </div>
        <div class="text-left">
          <label class="mb-0" for="department">{{ $t('godfather.whatDepartment')}}</label>
          <input class="form-control mb-3" id="department" v-model="department" type="text" name="department">
        </div>
        <div class="text-left">
          <label class="mb-0" for="outsideCourses">{{ $t('godfather.outsideCourses')}}</label>
          <input class="form-control mb-3" id="outsideCourses" v-model="outsideCourses" type="text" name="outsideCourses">
        </div>
        <div class="text-left">
          <label class="mb-0" for="hobbies">{{ $t('godfather.whatHobbies')}}</label>
          <input class="form-control mb-3" id="hobbies" v-model="hobbies" type="text" name="hobbies">
        </div>
        <div class="d-flex text-left">
          <input type="checkbox" class="largerCheckbox">
          <p class="rgpd-text">{{ $t('signup.rgpd')}}</p>
        </div>
        <div class="errors-ctn mt-3" v-if="errors.length > 0 ">
          <p class="text-danger" v-if="errors.length"><b>{{ $t('home.correctErrors')}}</b></p>
          <ul>
            <li class="text-danger errors-list" v-for="error in errors">{{ error }}</li>
          </ul>
        </div>
        <button class="btn mt-3 explorebtn" type="submit" value="Submit">{{ $t('godfather.validate')}}</button>

      </form>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data: function ()  {
      return {
        languages:["french", "english", "spanish", "portuguese", "chinese", "japanese", "korean", "russian", "arabic", "italian", "dutch", "german", "swedish", "polish", "turkish", "romanian", "czech", "greek",],
        months: ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
        nextMonths: [],
        active_el:0,
        errors: [],
        nationality: null,
        department: null,
        faculty: null,
        subjectStudying: null,
        languagesSpoken: [],
        hobbies: null,
        availability: [],
        godchildNumber: null,
        startDate: null,
        outsideCourses: null,
      }
    },

    mounted(){
      this.DateUtilFunctions()
    },

    methods:{
      checkForm: function (e) {
        if (this.nationality && this.department) {
          return true;
        }
        this.errors = [];
        if (!this.nationality) { this.errors.push('Nationality required.'); }
        if (!this.department) { this.errors.push('Department required.'); }
        e.preventDefault();
      },
      submitGodchild: function (e) {
        this.checkForm(e);
        this.DateUtilFunctions();
        console.log("languagesSpokenElement = ", this.languagesSpoken);
        console.log("this.DateUtilFunctions = ", this.DateUtilFunctions())

      },
      activate:function(el){
        this.active_el = el;
      },

      DateUtilFunctions() {
        var months = [];
        var tmpDate = new Date();
        var tmpYear = tmpDate.getFullYear();
        var tmpMonth = tmpDate.getMonth();
        var monthLiteral;
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
        console.log("this.nextMonths = ", this.nextMonths);

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
  @media screen and (max-width: 600px) { .lang-card { width: 50%; }}
  @media screen and (max-width: 450px) { .lang-card { width: 100%; }}
</style>
