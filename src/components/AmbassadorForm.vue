<template>
  <div>
    <p class="mb-0 uptitle">{{ $t('home.ulillexplore')}}</p>
    <!--    <p class="mb-0 mainTitle">{{ $t('ambassador.becomeAmbassador')}}</p>-->
    <div class="mainctn">
      <h3>{{ $t('ambassador.form.becomeAmbassador')}}</h3>
      <form action="mailto:benjamin.lepine@gmail.com" class="text-left">
        <div class="personal_infos">
          <h5>{{ $t('ambassador.form.personalInfos')}}</h5>
          <input class="form-control mb-3" v-model="ambaLastname" :placeholder="$t('ambassador.form.ambaLastname')">
          <input class="form-control mb-3" v-model="amFirstname" :placeholder="$t('ambassador.form.amFirstname')">
          <input class="form-control mb-3" v-model="amMail" :placeholder="$t('ambassador.form.amMail')">
          <input class="form-control mb-3" v-model="amCountry" :placeholder="$t('ambassador.form.amCountry')">
          <input class="form-control mb-3" v-model="amUniversity" :placeholder="$t('ambassador.form.amUniversity')">
          <input class="form-control mb-3" v-model="amExchange" :placeholder="$t('ambassador.form.amExchange')">
          <input class="form-control mb-3" v-model="amComposante" :placeholder="$t('ambassador.form.amComposante')">
        </div>
        <h5 class="mt-4">{{ $t('ambassador.form.amBefore')}}</h5>

        <label class="mb-0" for="amDoPortrait">{{ $t('ambassador.form.amDoPortrait')}}</label>
        <textarea class="form-control mb-3" id="amDoPortrait" v-model="amDoPortrait" rows="5" cols="33"></textarea>

        <label class="mb-0" for="amDoInterview">{{ $t('ambassador.form.amDoInterview')}}</label>
        <p class="mb-0"><b>{{ $t('ambassador.form.amChooseInterview')}}</b></p>
        <input class="form-control mb-3" v-model="amDoInterview" id="amDoInterview" type="date">

        <label class="mb-0" for="amDoPhoto">{{ $t('ambassador.form.amDoPhoto')}}</label>
        <input class="form-control mb-3" v-on="amDoPhoto" id="amDoPhoto" type="file">

        <label class="mb-0" for="amDoPubli">{{ $t('ambassador.form.amDoPubli')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amProposition')}}</p>
        <textarea class="form-control mb-3" v-model="amDoPubli" id="amDoPubli"></textarea>

        <label class="mb-0" for="amDoPostal">{{ $t('ambassador.form.amDoPostal')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amAdress')}}</p>
        <p class="mb-0">{{ $t('ambassador.form.amFizer')}}</p>
        <input class="form-control mb-3" v-on="amDoPostal" id="amDoPostal" type="file">

        <label class="mb-0" for="amRepresent">{{ $t('ambassador.form.amRepresent')}}</label>
        <input class="form-control mb-3" v-on="amRepresent" id="amRepresent" type="file">

        <label class="mb-0" for="amBlog">{{ $t('ambassador.form.amBlog')}}</label>
        <textarea class="form-control mb-3" v-model="amBlog" id="amBlog" ></textarea>

        <label class="mb-0" for="amCarnet">{{ $t('ambassador.form.amCarnet')}}</label>
        <input class="form-control mb-3" v-on="amCarnet" id="amCarnet" type="file">

        <label class="mb-0" for="amPlan">{{ $t('ambassador.form.amPlan')}}</label>
        <input class="form-control mb-3" v-on="amPlan" id="amPlan" type="file">

        <label class="mb-0" for="amPromotion">{{ $t('ambassador.form.amPromotion')}}</label>
        <p class="mb-0">{{ $t('ambassador.form.amPromotionList')}}</p>
        <input class="form-control mb-3" v-on="amPromotion" id="amPromotion" type="file">

        <hr>
        <p class="mb-0">{{ $t('ambassador.form.amIdea')}}</p>
        <p class="mb-0">{{ $t('ambassador.form.amParticipate')}}</p>



        <!--        "amDoInterview": "- Faire un entretien Skype dans le mois d’arrivée et / ou pendant la mobilité (date de l’entretien)",-->
        <!--        "amQuestionnaire": "- Répondre au questionnaire avant et après la mobilité sous forme de réponses écrites ou d’un entretien vidéo.",-->
        <!--        "amDoPhoto": "- Faire une séance photo pour présenter un objet que j’ai acquis pendant ma mobilité et ce qu’il évoque pour moi. (photos + texte)",-->
        <!--        "amDoPubli": "- Faire des publications sur les réseaux sociaux concernant ma mobilité et ajouter le @international_univlille. J’accompagne mes photos d’une description (au moins détails de lieu et date).  (lien publication)",-->
        <!--        "amProposition": "Propositions de photos à prendre : •Campus / Amphi / journée d’intégration •Visites •Selfie avec des ami.e.s dans l’Université d’accueil •Un coucher ou lever de soleil •Evénement de la ville, pays, université •Plat typique…",-->
        <!--        "amDoPostal": "- Envoyer une carte postale à l’Université à l’adresse : (photo de la carte postale)",-->
        <!--        "amAdress": "Université de Lille - Direction Mobilités Internationales Bât. A3, Cité Scientifique Villeneuve d’Ascq, 59650 - France",-->
        <!--        "amFizer": "*Il est possible d’utiliser l’application Fizzer pour créer la carte avec vos photos. Voir : www.fizzer.com",-->
        <!--        "amRepresent": "- Représenter et / ou promouvoir l’Université de Lille pendant un événement international à l’université d’accueil. Je contacte l’université de Lille en avance pour recevoir le matériel nécessaire (goodies, prospectus, affiches…). (photo)",-->
        <!--        "amBlog": "- Je suis auteur d’un blog, d’une chaîne vidéo ou un créateur, et je partage le lien vers mon/mes articles qui concernent ma mobilité. (lien, possibilité plusieurs liens)",-->
        <!--        "amCarnet": "- Faire un carnet de bord, écrit, dessin, peinture, etc… Je le présenterai si je le souhaite à l’Université lors d’une exposition ou lors d’un l’événement international. (photos)",-->
        <!--        "amPlan": "- J’écris un recueil de bons plans: université d’accueil, ville ou pays de ma mobilité, itiné-raires, lieux, restos, astuces. Nous pourrons les publier sur le site international de l’Université de Lille. (document texte, document PDF, lien)",-->

        <!--        "amPhotoDefi": "-Je participe avec mes nouvelles connaissances au défi photo/vidéo (date à préciser) : •Je fais goûter une spécialité française •J’enseigne des mots de français (et pas de gros mots) •Je trouve un commerce français ou portant un nom français dans la ville de mon séjour •Je porte les couleurs de l’Université de Lille pendant une course à pied, ou autre manifestation dans l’université ou la ville d’accueil. •Je fais porter un t-shirt de l’Université de Lille à un étudiant de mon université d’accueil (photo ou vidéo).",-->
        <!--        "amIdea": "Des idées pour mon retour de mobilité : (rien à cocher)",-->
        <!--        "amParticipate": "-Participer à l’organisation de l’International Student Week en tant que bénévole -Devenir parrain pour un/des étudiants internationaux -Participer à un CafÉrasmus organisé sur l’un des Campus de L’Université de Lille"-->

        <input v-model="acceptCB" id="ambassadorCG" class="cbAmbassador" type="checkbox" required>
        <label for="ambassadorCG" class="ml-3">{{ $t('ambassador.charte.cgAccept')}}</label>
        <button type="submit" class="btn mt-3 explorebtn explorebtn--signup">{{ $t('login.validate')}}<br></button>
      </form>

    </div>
  </div>
</template>

<script>
import router from 'vue'
export default {
  components: {},
  props: {
    ambaLastname:null,
    amFirstname:null,
    amMail:null,
    amCountry:null,
    amUniversity:null,
    amExchange:null,
    amComposante:null,
    amDoPortrait:null,
    amDoInterview:null,
    amDoPhoto: null,
    amDoPubli:null,
    amDoPostal:null,
    amRepresent:null,
    amBlog:null,
    amCarnet:null,
    amPlan:null,
    amPromotion:null,

  },
  data: function ()  {
    return {
      acceptCB: false
    }
  },
  methods:{
    becomeAmbassador(){
      console.log("becomeAmbassador = OK")
    }
  }
}
</script>

<style scoped lang="scss">
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";

.cbAmbassador{
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
}

.personal_infos{
  background-color: #f0f0f0;
  padding: 15px;
}


</style>

