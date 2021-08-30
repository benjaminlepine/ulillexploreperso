<template>
  <div class="mainctn">
    <input type="file" @change="handleFileSelect" multiple>
    <p id="state">{{ imagesState }}</p>
    <div v-if="files && files" id="list">
      <span v-for="file in files">
        <img :src="file" style="width: 150px; height: 150px" class="thumb"/>
      </span>
    </div>
    <a href="#" @click="deleteImages">{{$t('ambassador.form.deleteImages')}}</a>
    <!--Errors msgs-->
    <p v-if="error.tooMuchFiles || error.tooBigFile || error.wrongFormat" class="bg-warning">{{ $t('ambassador.form.errorFiles')}}<br>
      <span v-if="error.tooMuchFiles" class="font-weight-bolder"><span class="montserrat">{{ maxImages }}</span> {{ $t('ambassador.form.maxFiles')}}<br></span>
      <span v-if="error.tooBigFile" class="font-weight-bolder">{{ $t('ambassador.form.errorFilesSize')}}<span class="montserrat"> {{maxSize}} </span>{{ $t('ambassador.form.errorFilesSizemo')}}<br></span>
      <span v-if="error.wrongFormat" class="font-weight-bolder">{{ $t('ambassador.form.errorFilesFormat')}}</span>
    </p>
  </div>
</template>
<script>
export default {
  components: {},
  props:{
    files: Array,
    maxImages: Number
  },
  data: function ()  {
    return {
      maxSize: 1.5,
      error:{
        tooMuchFiles: false,
        tooBigFile: false,
        wrongFormat: false,
      }
    };
  },
  methods:{
    checkFileSize(){},
    handleFileSelect(evt) {
      this.deleteImages();
      const files = evt.target.files; // FileList object

      // Check number of files
      if(files.length > this.maxImages){
        this.$emit('disabled', true);
        this.error.tooMuchFiles= true;
        return-1;
      } else {
        this.$emit('disabled', false);
        this.error.tooMuchFiles= false;
      }

      // Check size of each files
      for (let i = 0; i < files.length; i++) {
        if ((files[i].size / 1024 / 1024) > this.maxSize) {
          this.$emit('disabled', true);
          this.error.tooBigFile= true;
          return-1;
        } else {
          this.$emit('disabled', false);
          this.error.tooBigFile= false;
        }
      }

      // Loop through the FileList and render image files as thumbnails.
      for (var i = 0, f; f = files[i]; i++) {
        // Only process image files.
        if (!f.type.match('image.*')) { // FIXME Add pdf, jpeg, png
          console.log("not match");
          continue;
        }
        var reader = new FileReader();
        // Closure to capture the file information.
        reader.onload = (e) => {
          this.addImage(e, e.target.result);
        };
        reader.readAsDataURL(f);
      }
    },
    addImage(e, imgData){
      this.files.push(imgData);
      console.log("addImage")
      this.$emit('save', e);
    },
    deleteImages(e){
      while(this.files.length != 0){
        this.files.pop();
      }
      //localStorage.setItem("form", JSON.stringify(this.form));
      this.$emit('save', e);
    }
  },
  computed:{
    imagesState(){
      if( this.files &&  this.files &&  this.files > 0){
        return this.files.length + " image" + ((this.files.length > 1) ? "s" : "") + " stored in your browser";
      } else {
        return "No images stored in your browser.";
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "../scss/_app-variables.scss";
@import "../scss/app.scss";



</style>

