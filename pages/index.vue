<template>
  <!-- eslint-disable -->
  <div id="app">
    <div class="margins">
    <section id="intro" v-if="desktop">
      <div class="intro_wrapper">
      <div class="intro">

        <h1 class="title">Hi, I'm Justin.</h1>
        <p class="intro_description">I’m a software engineer specializing in designing and building efficient and exceptional digital experiences. I'm currently looking for work as a full-stack software engineer.</p>

        <div class="buttons">
          <a href='#past_projects'><button>Past Work</button></a>
          <a href='./Justin_Shi_Resume.pdf' target='_blank'><button>Resume</button></a>
        </div>

      </div>

      <!-- <model-viewer alt="ignore alt" src="/models/runnynose.gltf" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom auto-rotate generate-schema></model-viewer> -->
      <div class="portrait_wrapper">

        <model-viewer 
      id="body" 
      alt="Voxel body" 
      src="./models/body.gltf"
      shadow-intensity="0" 
      camera-controls touch-action="none" 
      interaction-prompt="none"
      orientation="0deg 0deg 180deg"
      exposure="0.5"
      environment-image=""
       disable-zoom generate-schema></model-viewer>


      <model-viewer 
      id="portrait" 
      alt="Voxel head of myself" 
      src="./models/portrait.gltf"
      scale="0.8 0.8 0.8"
      shadow-intensity="0" 
      camera-controls touch-action="none" 
      interaction-prompt="none"
      orientation="0deg 0deg 180deg"
      exposure="0.5"
      environment-image=""
       disable-zoom generate-schema></model-viewer>

      </div>

    </div>


    </section>

    <section id="intro" v-else>
      <div class="intro_wrapper">

        <div class="portrait_wrapper">

<model-viewer 
id="body" 
alt="Voxel body" 
src="./models/body.gltf"
shadow-intensity="0" 
camera-controls touch-action="none" 
interaction-prompt="none"
orientation="0deg 0deg 180deg"
exposure="0.5"
environment-image=""
disable-zoom generate-schema></model-viewer>


<model-viewer 
id="portrait" 
alt="Voxel head of myself" 
src="./models/portrait.gltf"
scale="0.8 0.8 0.8"
shadow-intensity="0" 
camera-controls touch-action="none" 
interaction-prompt="none"
orientation="0deg 0deg 180deg"
exposure="0.5"
environment-image=""
disable-zoom generate-schema></model-viewer>

</div>


      <div class="intro">

        <h1 class="title">Hi, I'm Justin.</h1>
        <p class="intro_description">I’m a software engineer specializing in designing and building efficient and exceptional digital experiences. I'm currently looking for work as a full-stack software engineer.</p>

        <div class="buttons">
          <a href='#past_projects'><button>Past Work</button></a>
          <a href='./Justin_Shi_Resume.pdf' target='_blank'><button>Resume</button></a>
        </div>

      </div>

      <!-- <model-viewer alt="ignore alt" src="/models/runnynose.gltf" shadow-intensity="1" camera-controls touch-action="pan-y" disable-zoom auto-rotate generate-schema></model-viewer> -->
      

    </div>


    </section>

    <!-- <canvas id="gradient-canvas" data-transition-in /> -->

    <section id="about">
      <div id="about">
        <h2 class="subtitle">About Me</h2>
        <p class="intro_description">I'm graduating from Northwestern University with a degree in computer science.</p>
        <div class="columns">
          <div class="column">
            <p class="intro_description">I've implemented responsive user experiences that have involved generative animations, 3D renders, complex data visualizations, and high-volume eCommerce interfaces. </p>
            <!--<nuxt-img format="webp" placeholder class="me" src="/me.png" alt='photo of justin shi' width=200 height=200 />-->
            <canvas class="me" id="gradient-canvas" data-transition-in />
          </div>
          <div class="column">
            <p class="intro_description">I've built backend features requiring high-throughput, low-latency transactions; AI-powered data sanitation and analysis; RESTful APIs; and blockchain interactions.  </p>
            <div class="name_to_svg_wrapper">
              <p class="intro_description">Submit your name to see how popular it was in 2015!</p>
              <input type="text" v-model="user_name" placeholder="Your name here">
              <button id="convert_button" v-on:click="get_popularity">Submit</button>


            </div>
          </div>
          <div class="column">
            <p class="intro_description">Outside of software engineering, I'm an <a href='https://www.instagram.com/fingees' target='_blank'>aspiring artist/content-creator</a> and can type at 200 words per minute.  </p>
            <nuxt-img format="webp" placeholder class="me" src="/fingees.png" alt='Picture of finger to represent my art' width=200 height=200 />
          </div>
          </div>
        <br><br>
        <p class="intro_description">Please view some projects I've worked on below:</p>
           
      </div>
    </section>

    <section id="past_projects">
      <div id="past_projects">
        <h2 class="subtitle">Past Projects</h2>
        <div class="project_wrapper" v-for="(project, index) in projects"
          :key="index">
          <NuxtLink class="no_underline" :to="'/' + project.slug">
          <ProjectPreview class="project"
          v-bind:name="project.name"
          v-bind:description="project.description"
          v-bind:stack="project.stack"
          v-bind:demo_link="project.demo_link"
          v-bind:github_link="project.github_link"
          v-bind:image_url="project.image_url"
          v-bind:skills="project.skills"
          v-bind:slug="project.slug"
          ></ProjectPreview>
          </NuxtLink>

          <div class="demo_buttons">
          <a class="demo" v-if="project.demo_link" v-bind:href="project.demo_link" target="_blank"><button>View Demo</button></a>
          <a class="demo" v-if="project.github_link" v-bind:href="project.github_link" target="_blank"><button>View Github</button></a>
          </div>
        </div>



      </div>

    </section>



      </div> <!-- margin -->
    <Footer />
    <NavBar />

  </div>
</template>

<!-- <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js">/*eslint-disable*/</script> -->

<script>
/* eslint-disable */

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ProjectPreview from '@/components/ProjectPreview.vue'
import {page} from 'vue-analytics'
import $ from 'jquery';
import { Gradient } from '@/plugins/gradient.js'
// import modelViewer from "@google/model-viewer";
        

export default {
  name: 'index',
  head: {
    title: 'Justin Shi: Home',
    meta: [
     {hid: 'description', name: 'description', content: "Landing page for Justin Shi's developer and designer portfolio"},
    ],
  },

  components: {
    NavBar,
    Footer,
    ProjectPreview,
  },
  data () {
    return {
       projects: [{name: "In Writing", slug: "inwriting",
       description: "A decentralized, scalable, and environmentally-friendly text NFT marketplace I cofounded, designed, and built to make NFTs accessible to writers and authors. Users can mint, read, buy, sell, and trade text NFTs easily on the Polygon and Ethereum blockchains.", 
       stack: "Vue, Nuxt, AWS Amplify, MySQL, Web3js and Web3py", skills: "Web and UIUX design, Frontend web development, mobile-friendly web development, backend web development, blockchain development, database design, server management", demo_link: "https://www.inwriting.io"},
      {name: "Sunrises", slug: "sunrises", description: "An iOS app that gives users personalized recommendations of things to look forward to every day. Users choose their interests; from content creators they enjoy to sports and shows they follow. The app’s backend scrapes dozens of APIs including IMDB, Twitch, and TheSportsDB, and dozens of websites using Selenium, and uses a custom content recommendation engine to map events in each industry to users who could be interested.", 
      skills: "UIUX design, iOS and mobile-first development, database design, working with APIs, email and phone authentication, server management, automating processes with crontab",stack: "SwiftUI, Apple Developer Ecosystem (XCode, Storyboard, Instruments), Python (Selenium), AWS Lightsail, LAMP", github_link: "https://www.github.com/notfingees/sunrises", demo_link: "https://www.sunrisesapp.com"},
      {name: "Newco", slug: "newco", description: "User interfaces and experiences designed for a talent management startup founded by two ex-McKinsey consultants. The UIUX underwent three rounds of user testing before being implemented and presented to multiple VC firms.", 
      stack: "Vue, Bootstrap, Javascript, HTML, CSS"},
      {name: "Text Art Generator", slug: "textart", 
      description: "Algorithm that uses image processing and curve fitting to convert SVG files into text line art. Try the demo!", stack: "Python (Numpy, PIL) ", github_link: "https://www.github.com/notfingees/textart"},
      /*{name: "This Website", slug: "personal", description: "My personal design and development portfolio. See how I built it in a day here!",
       stack: "Nuxt, Javascript, HTML, CSS ", github_link: "github.com/notfingees/portfolio", demo_link: "https://www.justinshi.io"}, */
      {name: "5x5GUYS", slug: "5x5guys", description: "A generative and fully-customizable collection of text art NFTs stored directly on the Polygon blockchain.", stack: "Nuxt, Javascript, HTML, CSS, Web3js, Web3py", github_link: "https://www.github.com/notfingees/5x5guys_ssr", demo_link: "https://www.5x5guys.com", image_url: 'none'}],
      

      about_section_shown: false,
      past_projects_shown: false,

      modelViewerLoaded: false,
      desktop: true,

      user_name: "",
    }
  },
  created: function () {
    // `this` points to the vm instance
    this.$gtag.pageview({ page_path: '/index' })
    page('/index')


  },

  methods: {

    get_popularity: function () {

      const self = this;

      $.post(
        "https://inwritingapi.com/personal_portfolio/get_name_popularity.php",
        { name: this.$data.user_name },
        function (data) {

          if (data.length > 0){
          var popularity = data[0]['rank'];
          alert(self.user_name + " was the #" + popularity.toString() + "th most popular name.")
          }
          else {
            alert("No one was named that in 2015.")
          }
        },
        "json"
      );

    },

    loadSections: function () {

        console.log("in loadsections");

        $("#about div").addClass("load");
        this.$data.about_section_shown = true
 

        this.$data.past_projects_shown = true
        $("#past_projects div").addClass("load");  

        document.removeEventListener("scroll", this.loadSections)
        

    },

    handleTopWriteScroll: function () {
      
      /*      
      var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

      var scrollPercent = (s / (d - c)) * 100;
      */

      var h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";

      var percent =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

      // if (percent >= 100) {
      //   //console.log("in handle top write scroll");
      //   this.getText(this.$props.sort_by);
      // }

      if (percent > 1 && !this.$data.about_section_shown){
        $("#about div").addClass("load");
        this.$data.about_section_shown = true
        // console.log('showing about section')
      }

      if (percent > 22  && !this.$data.past_projects_shown){
        this.$data.past_projects_shown = true
        $("#past_projects div").addClass("load");  
        // console.log("showing past projects")
      }

      if (this.$data.past_projects_shown && this.$data.about_section_shown){
        document.removeEventListener("scroll", this.handleTopWriteScroll)
        
      }
    },




  },

  computed: {
    loadComponent() {
      return () => import('@google/model-viewer');
    },
  },


  mounted: function () {

    this.loadComponent();

    this.$data.desktop = !window.matchMedia("only screen and (max-width: 600px)").matches;


    document.addEventListener("scroll", this.loadSections);

    addEventListener('mousemove', (event) => {

      let isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;

      if (isMobile){

        var cx = event.clientX;
        var cy = event.clientY;

        // cy goes from low (top) to high (bottom)
        // cx goes from low (left) to high (right) 
        // everything in 360 degrees 

        // first figure out left and right

        var clientx = window.innerWidth;
        var clienty = window.innerHeight;

        var roll = "0deg"
        // pitch is between -45 (looking up) and 45 (looking down)
        var pitch_int = cy/clienty*-90 + 45
        var pitch = pitch_int.toString() + "deg";
        // yaw between 90 and -90
        var yaw_int = cx/clientx*180 - 90 + 180;
        var yaw = yaw_int.toString() + "deg";

        document.getElementById("portrait").orientation = roll + " " + pitch + " " + yaw;

        document.getElementById('body').orientation = roll + " " + "5deg " + yaw;

      }

      else{

        var cx = event.clientX;
        var cy = event.clientY;

        // cy goes from low (top) to high (bottom)
        // cx goes from low (left) to high (right) 
        // everything in 360 degrees 

        // first figure out left and right

        var clientx = window.innerWidth;
        var clienty = window.innerHeight;

        var roll = "0deg"
        // pitch is between -45 (looking up) and 45 (looking down)
        var pitch_int = cy/clienty*-90 + 45
        var pitch = pitch_int.toString() + "deg";
        // yaw between 90 and -90
        var yaw_int = cx/clientx*180 - 90 + 135;
        var yaw = yaw_int.toString() + "deg";

        document.getElementById("portrait").orientation = roll + " " + pitch + " " + yaw;

        document.getElementById('body').orientation = roll + " " + "5deg " + yaw;
      }
    
    });


    // Create your instance
    const gradient = new Gradient()

    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#gradient-canvas')

    // $("#about div").addClass("load"); 
    // $("#past_projects div").addClass("load"); 


    /* rotate model */

    // var self = this;
    // const check_portrait_loaded = setInterval(function () {
    //   console.log("in interval", document.getElementById("portrait").loaded);
    //   if (document.getElementById("portrait").loaded){
    //     clearInterval(check_portrait_loaded);
    //     self.modelViewerLoaded = true;
    //   }
    // }, 5);



    
  }
}
</script>
<style>

#gradient-canvas {
  width:300px;
  height:300px;
  --gradient-color-1: #FF78BF; 
  --gradient-color-2: #3ADADD; 
  --gradient-color-3: #76FF89;  
  --gradient-color-4: #FF78BF;
}


h2, h1, p, button {
  color: white !important;
}

body {
  margin: 0 !important;
  background-color: #282F35 !important;
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #282F35;
    
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
}

::-webkit-scrollbar-thumb {
    background: white;
    -webkit-box-shadow: none;
}

::-webkit-scrollbar-thumb:window-inactive {
    background: none;
}

.name_to_svg_wrapper {
  background-color: rgba(255, 255, 255, 0.25);
  padding: 2rem;
}


/* #about div, #past_projects div{
      -webkit-transition: opacity s ease-in;
       -moz-transition: opacity 0.5s ease-in;
        -ms-transition: opacity 0.5s ease-in;
         -o-transition: opacity 0.5s ease-in;
            transition: opacity 0.5s ease-in;

            opacity: 0;
}



#about div.load, #past_projects div.load {
  opacity: 1;
} */

#about div{
      -webkit-transition: opacity s ease-in;
       -moz-transition: opacity 0.5s ease-in;
        -ms-transition: opacity 0.5s ease-in;
         -o-transition: opacity 0.5s ease-in;
            transition: opacity 0.5s ease-in;

            opacity: 1;
}



#about div.load {
  opacity: 1;
}

a {
  color: white !important;
}

a:hover {
  color: white !important;
}

.no_underline {
  text-decoration: none;
}

</style>

<style scoped>

.intro_wrapper {
  display: flex;
}
.portrait_wrapper {
  width: 100%;
  margin-top: 2rem;
}

#portrait {
  width: 30rem;
  height: 20rem;
  position: absolute;
}

#body {
  width: 30rem;
  height: 20rem;
  position: absolute;
  margin-top: 11%;
  margin-left: 2%;

}

model-viewer::part(default-progress-bar){
  background-color: transparent;
}

model-viewer {
  --poster-color: transparent;
}

.columns {
  display: flex;
  justify-content: center;
  gap: 5rem;
}

.column {
  width: 30vw;
}


@font-face {
  font-family: "Proxima Nova Medium", Helvetica, sans-serif;
  src: local("Proxima Nova Medium"),
    url(~/assets/ProximaNovaMedium.ttf) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "Proxima Nova", Helvetica, sans-serif;
  font-weight: bold;
  src: local("Proxima Nova Extra Condensed"),
    url(~/assets/ProximaNovaExtraCondensed.ttf) format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Menlo", monospace;
  src: local("Menlo"), url(~/assets/Menlo.ttf) format("truetype");
  font-display: swap;
}

input {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background-color: transparent;

    resize: none; /*remove the resize handle on the bottom right*/

}

input, input::placeholder {
  font-family: "Menlo", monospace;
}

#convert_button {
  margin-top: 1rem;
}


.buttons {
  display: flex;
  gap: 3vw;
  padding-top: 2vh;
}

.demo button {
  transition: box-shadow 0.25s ease-out 1ms;
}

.demo button:hover {
  box-shadow: 0.5em 0.5em;
  /* background-color: white; */
}

.demo_buttons {
  display: flex;
  gap: 3vw;
  position: absolute;
  margin-top: -18vh;
  margin-left: 5vh;
}



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
  width: 100%;
  background-color: #282F35;
}

.intro_description {
  font-family: "Menlo", monospace;
  font-size: 1.em;
}


.margins {
  margin-left: 12vw;
  margin-right: 12vw;
  margin-top: -2vh;

}

.intro {
  text-align: left;
  padding-top: 15vh;
  padding-bottom: 15vh;
}

#about {
  text-align: left;
  display: block;
  padding-bottom: 10vh;
  padding-top: 5vh;
}

#past_projects {
  text-align: left;
  padding-top: 0;

  
}

button {
  border: 0.1px solid white;
  background-color: #282F35;
  font-family: "Menlo", monospace;
  font-size: 1.1em;
  padding: 1vw;
  width: 10em;
  transition: box-shadow 0.25s ease-out 1ms;
}
button:hover {
  box-shadow: 0.5em 0.5em;
}

.me {
  width: 18em;
  height: auto;
  /* border: 0.1px solid white; */
  /* box-shadow: 0.75em 0.75em; */
  /* margin-top: 5vh; */
}
.technologies_used {
  display: flex;
  font-family: "Menlo", monospace;
}

.project {
  margin-bottom: 5vh;
}

.title {
  font-family: "Proxima Nova", Helvetica, sans-serif;
  font-weight: bold;
}

  .subtitle {
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
  }


@media only screen and (min-width: 601px) {


  .title {
    font-size: 2.5em;
  }

  .subtitle {
    font-size: 1.75em;
  }
}

/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {


.portrait_wrapper {
  width: 100%;
  height: auto;
  margin-top: 5rem;
}

#portrait {
  width: 20rem;
  height: 10rem;
  position: absolute;
  margin-left: -1rem;

}

#body {
  width: 20rem;
  height: 15rem;
  position: absolute;
  margin-top: 3.5rem;
  margin-left: 0;
  

}

.intro_wrapper {
  display: block;
}


  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
  }

  .buttons button {
    margin-bottom: 3vh;
  }

  .demo_buttons {
    display: block;
    width: 50%;
    margin-left: 10vw;
    margin-top: -27vh;
  }

  .demo button {
    margin-bottom: 3vh;
  }
  #app {
    overflow-x: hidden;
  }

  .title {
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 7vw;
    line-height: 7vw;
    margin-top: 10rem;
  }

  .intro_desciption {

  }

  .intro {
    margin-right: 0vw;
    justify-content: center;
  }

  button {
    padding: 2vh;
  }

  #about {
    flex-direction: column-reverse;
    padding-top: 0;
  }

  .columns {
    display: block;
  }

  .column {
    width: 100%;
  }

  .subtitle {
    font-size: 1.75em;
  }

  .left, .right {
    width: 100%;
  }



}
</style>
