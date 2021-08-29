<template>
  <div class="mainctn">
    <input type="file" @change="handleFileSelect" multiple>
    <p id="state">{{ imagesState }}</p>
    <div v-if="files && files" id="list">
      <span v-for="file in files">
        <img :src="file" style="width: 150px; height: 150px" class="thumb"/>
      </span>
    </div>
    <a href="#" @click="deleteImages">Delete Images</a>
  </div>
</template>
<script>
export default {
  components: {},
  props:{
    files: Array
  },
  data: function ()  {
    return {};
  },
  methods:{
    handleFileSelect(evt) {
      const files = evt.target.files; // FileList object
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

