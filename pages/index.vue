<template>
  <!-- eslint-disable -->
  <div id="app">
    <div class="margins">
    <section id="intro">
      <div class="intro">

        <h1 class="title">Hi, I'm Justin.</h1>
        <p class="intro_description">I’m a software engineer specializing in designing and building efficient and exceptional digital experiences. I'm currently looking for work as a full-stack software engineer.</p>

        <div class="buttons">
          <a href='#past_projects'><button>Past Work</button></a>
          <a href='/Justin_Shi_Resume.pdf' target='_blank'><button>Resume</button></a>
        </div>

      </div>



    </section>

    <section id="about">
      <div id="about">
        <div class="left">

        <h2 class="subtitle">About Me</h2>
        <p class="intro_description">In high school, I did graphic design and created basic websites for clients. I wanted to incorporate more control and interactivity, 
          and so I learned the basics of HTML and CSS.<br><br>Four years later, I'm graduating Northwestern University with a degree in computer science and the experience
          of having worked in the Web3, entertainment, and management industries. <br><br>Here are some of the technologies I've been working with recently.</p>

          <div class="technologies_used">
            <div class="col">
              <ul>
                <li>Vue, Nuxt, and Node.js</li>
                <li>web3.js</li>
                <li>Mocha</li>
              </ul>
            </div>
            <div class="col">
              <ul>
                <li>Swift</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>

          </div>

          </div>

          <div class="right">
            <nuxt-img format="webp" placeholder class="me" src="/me.png" alt='photo of justin shi' width=200 height=200 />
          </div>
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
       projects: [{name: "In Writing", slug: "inwriting",
       description: "A decentralized, scalable, and environmentally-friendly text NFT marketplace I cofounded, designed, and built to make NFTs accessible to writers and authors. Users can mint, read, buy, sell, and trade text NFTs easily on the Polygon and Ethereum blockchains.", 
       stack: "Vue, Nuxt, AWS Amplify, MySQL, Web3js and Web3py", skills: "Web and UIUX design, Frontend web development, mobile-friendly web development, backend web development, blockchain development, database design, server management", demo_link: "https://www.inwriting.io"},
      {name: "Sunrises", slug: "sunrises", description: "An iOS app that gives users personalized recommendations of things to look forward to every day. Users choose their interests; from content creators they enjoy to sports and shows they follow. The app’s backend scrapes dozens of APIs including IMDB, Twitch, and TheSportsDB, and dozens of websites using Selenium, and uses a custom content recommendation engine to map events in each industry to users who could be interested.", 
      skills: "UIUX design, iOS and mobile-first development, database design, working with APIs, email and phone authentication, server management, automating processes with crontab",stack: "SwiftUI, Apple Developer Ecosystem (XCode, Storyboard, Instruments), Python (Selenium), AWS Lightsail, LAMP", github_link: "https://www.github.com/notfingees/sunrises", demo_link: "https://www.sunrisesapp.com"},
      {name: "Newco", slug: "newco", description: "User interfaces and experiences designed for a talent management startup founded by two ex-McKinsey consultants. The UIUX underwent three rounds of user testing before being implemented and presented to multiple VC firms.", 
      stack: "Vue, Bootstrap, Javascript, HTML, CSS"},
      {name: "Text Art Generator", slug: "textart", 
      description: "Algorithm that uses image processing and curve fitting to convert SVG files into text line art. Try the demo!", stack: "Python (Numpy, PIL) ", github_link: "https://www.github.com/notfingees/textart", demo_link: "https://www.justinshi.io/textart"},
      /*{name: "This Website", slug: "personal", description: "My personal design and development portfolio. See how I built it in a day here!",
       stack: "Nuxt, Javascript, HTML, CSS ", github_link: "github.com/notfingees/portfolio", demo_link: "https://www.justinshi.io"}, */
      {name: "5x5GUYS", slug: "5x5guys", description: "A generative and fully-customizable collection of text art NFTs stored directly on the Polygon blockchain.", stack: "Nuxt, Javascript, HTML, CSS, Web3js, Web3py", github_link: "https://www.github.com/notfingees/5x5guys_ssr", demo_link: "https://www.5x5guys.com", image_url: 'none'}],
      

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

      if (percent > 22  && !this.$data.past_projects_shown){
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
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #E0C1BD;
    
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: none;
}

::-webkit-scrollbar-thumb {
    background: black;
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
  color: black !important;
}

a:hover {
  color: black !important;
}

.no_underline {
  text-decoration: none;
}

</style>

<style scoped>
@font-face {
  font-family: "Proxima Nova Medium";
  src: local("Proxima Nova Medium"),
    url(~/assets/ProximaNovaMedium.ttf) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "Proxima Nova";
  font-weight: bold;
  src: local("Proxima Nova Extra Condensed"),
    url(~/assets/ProximaNovaExtraCondensed.ttf) format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "Menlo";
  src: local("Menlo"), url(~/assets/Menlo.ttf) format("truetype");
  font-display: swap;
}

.buttons {
  display: flex;
  gap: 3vw;
  padding-top: 2vh;
}

.demo button:hover {
  box-shadow: 0em 0em;
  background-color: white;
}

.demo_buttons {
  display: flex;
  gap: 3vw;
  position: absolute;
  margin-top: -18vh;
  margin-left: 2vw;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
  width: 100%;
  background-color: #E0C1BD;
}

.intro_description {
  font-family: "Menlo";
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
  margin-right: 24vw;
  padding-bottom: 15vh;
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
  border: 0.1px solid black;
  background-color: #E0C1BD;
  font-family: "Menlo";
  font-size: 1.1em;
  padding: 1vw;
  width: 10em;
}
button:hover {
  box-shadow: 0.5em 0.5em;
}

.me {
  width: 18em;
  height: auto;
  border: 0.1px solid black;
  box-shadow: 0.75em 0.75em;
  margin-top: 5vh;
}
.technologies_used {
  display: flex;
  font-family: "Menlo";
}

.project {
  margin-bottom: 5vh;
}

.title {
  font-family: "Proxima Nova";
  font-weight: bold;
}

  .subtitle {
    font-family: "Proxima Nova";
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

  .buttons {
    display: block;
    
  }

  .buttons button {
    margin-bottom: 3vh;
  }

  .demo_buttons {
    display: block;
    width: 50%;
    margin-left: 6vw;
    margin-top: -27vh;
  }

  .demo button {
    margin-bottom: 3vh;
  }
  #app {
    overflow-x: hidden;
  }

  .title {
    font-family: "Proxima Nova";
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



}
</style>
