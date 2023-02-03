<template>
  <!-- eslint-disable -->
  <div id="app">
    <div class="margins">
    <section id="intro">
      <div class="intro">

        <h1 class="title">Text Art Generator</h1>
        <p class="intro_description">Algorithm that uses image processing and curve fitting to convert SVG files into text line art. It works by first converting an image (PNG or JPG) to an SVG using the Rapid Resizer API, and then analyzes the curves and points present in the SVG document to re-render the SVG lines as text. More specifically, it finds the angles of incremental paths on the SVG, and then converts that angle to a pre-set text arrangement (for example, a straight line path in the SVG would be at angle 0, and the corresponding text would be <mark>---</mark>) and stores the text into a 2D array. When this process is done for every path in the SVG, it prints the 2D array of text.<br></br>I built this to generate promotional content for my startup, <a href='https://www.inwriting.io' target="_blank">In Writing.</a> Try the demo below!</p>

        <div class="image">
        <nuxt-img format="webp" placeholder class="main" src="/projects/textart/demo.png" alt="Example conversions using the text art generator"></nuxt-img format="webp" placeholder>
        <p class="caption">Example conversions of a flower illustration and a Bored Ape NFT using the text art generator</p>
        </div>

        <h2 class="subtitle">Technology Used:</h2>
        <div class="technology_used">

          <div class="column">
            <h3 class="column_heading">Languages</h3>
          <ul>
            <li>Python</li>
          </ul>
          </div>

          <div class="column">
            <h3 class="column_heading">Libraries & Frameworks</h3>
          <ul>
            <li>Numpy (Text generation, matrix manipulation)</li>
            <li>PIL (Image processing)</li>
          </ul>
          </div>

          <div class="column">
            <h3 class="column_heading">Tools & Platforms</h3>
          <ul>
            <li>Rapid Resizer API</li>
            
          </ul>
          </div>

        </div>  
        

      </div>



    </section>



      </div> <!-- margin -->
    <Footer />
    <NavBar />

  </div>
</template>

<script>
/* eslint-disable */

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ProjectPreview from '@/components/ProjectPreview.vue'
import {page} from 'vue-analytics'
import $ from 'jquery';

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
       projects: [{name: "In Writing", 
       description: "A decentralized, scalable, and environmentally-friendly text NFT marketplace I cofounded, designed, and built to make NFTs accessible to writers and authors. Users can mint, read, buy, sell, and trade text NFTs easily on the Polygon and Ethereum blockchains.", 
       stack: "Vue, Nuxt, AWS Amplify, MySQL, Web3js and Web3py", demo_link: "https://www.inwriting.io"},
      {name: "Sunrises", description: "An iOS app that gives users personalized recommendations of things to look forward to every day. Users choose their interests; from content creators they enjoy to sports and shows they enjoy. The app’s backend scrapes hundreds of APIs including IMDB, Twitch, and TheSportsDB, and uses a custom content recommendation engine to map events in each industry to users who could be interested.", 
      stack: "SwiftUI, Apple Developer Ecosystem (XCode, Storyboard, Instruments), AWS Lightsail, LAMP", github_link: "github.com/notfingees/sunrises", demo_link: "https://www.sunrisesapp.com"},
      {name: "Newco", description: "User interfaces and experiences designed for a talent management startup founded by two ex-McKinsey consultants. The UIUX underwent three rounds of user testing before being implemented and presented to multiple VC firms.", 
      stack: "Vue, Bootstrap, Javascript, HTML, CSS"},
      {name: "Text Art Generator", 
      description: "Algorithm that uses image processing and curve fitting to convert SVG files into text line art. Try the demo!", stack: "Python (Numpy, PIL) ", github_link: "github.com/notfingees/textart", demo_link: "https://www.5x5guys.com"},
      {name: "This Website", description: "My personal design and development portfolio. See how I built it in a day here!",
       stack: "Nuxt, Javascript, HTML, CSS ", github_link: "github.com/notfingees/portfolio", demo_link: "https://www.justinshi.io"},
      {name: "5x5GUYS", description: "A generative and fully-customizable collection of text art NFTs stored directly on the Polygon blockchain.", stack: "Nuxt, Javascript, HTML, CSS, Web3js, Web3py", github_link: "github.com/notfingees/5x5guys", demo_link: "https://www.5x5guys.com", image_url: 'none'}],
      

      about_section_shown: false,
      past_projects_shown: false,
    }
  },
  created: function () {
    // `this` points to the vm instance
    this.$gtag.pageview({ page_path: '/index' })
    page('/index')


  },

  methods: {


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
        console.log('showing about section')
      }

      if (percent > 18  && !this.$data.past_projects_shown){
        this.$data.past_projects_shown = true
        $("#past_projects div").addClass("load");  
        console.log("showing past projects")
      }

      if (this.$data.past_projects_shown && this.$data.about_section_shown){
        document.removeEventListener("scroll", this.handleTopWriteScroll)
        
      }
    },




  },
  mounted: function () {

    document.addEventListener("scroll", this.handleTopWriteScroll);

    // $("#about div").addClass("load"); 
    // $("#past_projects div").addClass("load"); 

    
  }
}
</script>
<style>
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


#about div, #past_projects div{
      -webkit-transition: opacity s ease-in;
       -moz-transition: opacity 0.5s ease-in;
        -ms-transition: opacity 0.5s ease-in;
         -o-transition: opacity 0.5s ease-in;
            transition: opacity 0.5s ease-in;

            opacity: 0;
}



#about div.load, #past_projects div.load {
  opacity: 1;
}

a {
  color: white;
}

a:hover {
  color: white;
}

mark {
  background-color: white;
}

</style>

<style scoped>
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

.buttons {
  display: flex;
  gap: 3vw;
  padding-top: 2vh;
}

.main {
  width: 100%;
  height: auto;
}

.image {
  margin-left: 12vw;
  margin-right: 12vw;
  padding-top: 6vh;
  padding-bottom: 6vh;

}

.technology_used {
  display: flex;
  justify-content: space-between;
}

h3 {
  font-family: "Proxima Nova", Helvetica, sans-serif;
  font-weight: bold;
}

ul, li {
  font-family: "Menlo", monospace;
  font-size: 1em;
}

.column {
  width: 33%;
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
  font-size: 1em;
}

.caption {
  font-family: "Menlo", monospace;
  font-size: 0.8em;
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

.feature_wrapper {
  display: flex;
  gap: 5vw;
  margin-bottom: 5vh;
}

.feature_text {
  font-size: 1em;
  font-family: "Menlo", monospace;
}

.feature_image_wrapper {
  width: 40%;
}

.feature_image {
  width: 100%;
  height: auto;
  border: 0.1px solid white;
  box-shadow: 0.5em 0.5em;
}

.feature_description {
  width: 60%;
}



#about {
  text-align: left;
  display: flex;
  padding-bottom: 15vh;
  padding-top: 5vh;
  gap: 5vw;
}

#past_projects {
  text-align: left;
  padding-top: 5vh;

  
}

button {
  border: 0.1px solid white;
  background-color: #282F35;
  font-family: "Menlo", monospace;
  font-size: 1em;
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
  border: 0.1px solid white;
  box-shadow: 0.75em 0.75em;
  margin-top: 5vh;
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
  #app {
    overflow-x: hidden;
  }

  .title {
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 7vw;
    line-height: 7vw;
  }

  .intro_desciption {

  }

  .intro {
    margin-right: 0vw;
  }

  button {
    padding: 2vh;
  }

  #about {
    flex-direction: column-reverse;
  }

  .subtitle {
    font-size: 1.75em;
  }

  .left, .right {
    width: 100%;
  }

  .image {
  margin-left: 0vw;
  margin-right: 0vw;
  padding-top: 6vh;
  padding-bottom: 6vh;

}

.technology_used {
  display: block;
}

.column {
  width: 100%;
}

.feature_wrapper {
  flex-direction: column;
}

.feature_image_wrapper {
  width: 100%;
}

.feature_description {
  width: 100%;
}



}
</style>
