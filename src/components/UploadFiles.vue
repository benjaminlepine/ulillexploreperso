<template>
  <div class="uploader-ctn">
    <input type="file" class="mb-2 text-white" ref="fileInput" @change="handleFileSelect($event)" multiple>
<!--    <p id="state">{{ imagesState }}</p>-->
    <div v-if="files && files" id="list">
      <span v-for="(file, index) in files" :key="index">
        <img :src="file.url" class="uploader-img"/>
      </span>
    </div>
    <button v-if="this.files.length > 0" class="btn explorebtn explorebtnsecondary mt-2" @click="deletePreviewAndImages">{{$t('ambassador.form.deleteThisImages')}}</button>
    <!--Errors msgs-->
    <p v-if="error.tooMuchFiles || error.tooBigFile || error.wrongFormat" class="uploader-warning text-white">{{ $t('ambassador.form.errorFiles')}}<br>
      <span v-if="error.tooMuchFiles" class="font-weight-bolder text-white"><span class="montserrat text-white">{{ maxImages }}</span> {{ $t('ambassador.form.maxFiles')}}<br></span>
      <span v-if="error.tooBigFile" class="font-weight-bolder text-white">{{ $t('ambassador.form.errorFilesSize')}}
        <span class="montserrat text-white"> {{maxSize}} </span>{{ $t('ambassador.form.errorFilesSizemo')}}<br>
      </span>
      <span v-if="error.wrongFormat" class="font-weight-bolder text-white">{{ $t('ambassador.form.errorFilesFormat')}}</span>
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
      maxSize: 20,
      error:{
        tooMuchFiles: false,
        tooBigFile: false,
        wrongFormat: false,
        currentFile: null,
      }
    };
  },

  methods:{
    handleFileSelect(evt) {
      // Remove old preview images before add news
      if(this.files && this.files.length > 0){this.deletePreview();}
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
        if (!f.type.match('image.*') && !f.type.match('application/pdf')) { // FIXME Add pdf, jpeg, png
          console.log("not match image type ", f.type); // FIXME error message
          continue;
        }

        this.addImage(f);
        var reader = new FileReader();
        // Closure to capture the file information.
        // this.currentFile = f;
        // reader.onload = (e) => {
         // console.log(e);
         // this.addImage(e.target.result);
       // };
       // reader.readAsDataURL(f);
      }
    },
    addImage(file){
      this.files.push({url: URL.createObjectURL(file), file});
    },
    deletePreview(){
      while(this.files.length != 0){
         URL.revokeObjectURL(this.files.pop().url);
      }
    },
    deletePreviewAndImages(){
      while(this.files.length != 0){
        URL.revokeObjectURL(this.files.pop().url);
      }
      this.$refs['fileInput'].value = '';
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

.uploader{
  &-ctn{
    padding: 8px 12px;
    background-color: $main-color;
    border-radius: 12px;
    box-shadow: 1px 2px 5px #888888;
  }
  &-img{
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin: 1px;
  }
  &-warning{
    background-color: $second-color;
    padding: 8px 12px;
    border-radius: 10px;
  }
}
</style>

