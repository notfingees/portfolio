<template>
  <!-- eslint-disable-->
  <div class="section">

    <div class="left">
    <h1>{{name}}</h1>
    <p class="description">{{description}}</p>
    <p class="description">Technologies used: {{stack}}</p>
    <p class="description" v-if="skills">Skills showcased: {{skills}}</p>
    <!--<a class="demo" v-if="demo_link" v-bind:href="demo_link">View Demo</a>
    <a class="demo" v-if="github_link" v-bind:href="github_link">Github</a>-->

    <div class="spacer"></div>
    </div>

    <div class="right">
      <nuxt-img width=2956 height=1506 format="webp" placeholder v-if="name=='In Writing'" class="preview" src='/projects/inwriting/cover.png' alt="In Writing cover image"/>
      <nuxt-img width=1552 height=1048 format="webp" placeholder v-if="name=='Sunrises'" class="preview" src='/projects/sunrises/cover.png' alt="Sunrises cover image"/>
      <nuxt-img width=1331 height=985 format="webp" placeholder v-if="name=='Newco'" class="preview" src='/projects/newco/cover.png' alt="Newco cover image"/>
      <nuxt-img width=5444 height=3123 format="webp" placeholder v-if="name=='Text Art Generator'" class="preview" src='/projects/textart/cover.png' alt="Text art generator cover image"/>
      <nuxt-img width=1000 height=1000 format="webp" placeholder v-if="name=='This Website'" class="preview" src='/projects/personal/cover.png' alt="Personal cover image"/>
      <nuxt-img width=2956 height=1506 format="webp" placeholder v-if="name=='5x5GUYS'" class="preview" src='/projects/5x5guys/cover.png' alt="5x5guys cover image"/>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ProjectPreview',
  props: {
      name: null,
      description: null,
      stack: null,
      demo_link: null,
      github_link: null,
      image_url: null,
      skills: null,


  },

  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.spacer {
  height: 10vh;
}

  .demo {
  }


  .section {
    display: flex;
    padding: 2vw;
    border: 0.1px solid black;
    gap: 5vw;
    
  }

  .section:hover {
    box-shadow: 0.75em 0.75em;

  }


  h1 {
    font-family: "Proxima Nova";
    font-weight: bold;
  }

  .description, p, a {
    font-family: "Menlo";
    display: block;
  }

  .left {
    width: 67%;
  }

  .right {
    width: 33%;
    display: flex;
    align-items: center;
  }

  .preview {
    width: auto;
  max-width: 23vw;
  height: auto;
  max-height: 40vh;

    border: 0.1px solid black;
    box-shadow: 0.5em 0.5em;
  }




  
@media only screen and (min-width: 601px) {
  


}

@media only screen and (max-width: 600px) and (orientation: portrait) {

  .spacer {
    height: 18vh;
  }

  .section {
    padding: 5vh;
    flex-direction: column-reverse;
  }

  .left, .right {
    width: 100%;
  }

  .preview {
    width: 100% !important;
    min-width: 100%;
  }




}
</style>
