<template>
  <!-- eslint-disable -->

  <div class="navbar">
    <div class="navbar-mobile">

      <p class="navbar_icon" v-on:click="toggleNavbarMobile">☰</p>
      <div v-if="show_navbar_mobile" class="navbar-inner">
        <NuxtLink class="navbar-link" to="/">Home</NuxtLink>
        <NuxtLink class="navbar-link" :to="{path: '/', hash: '#about'}">About</NuxtLink>
        <NuxtLink class="navbar-link" :to="{path: '/', hash: '#past_projects'}">Work</NuxtLink>
        <a class="navbar-link" href="mailto:justinshi2023@u.northwestern.edu">Contact</a>
        <a class="navbar-link" target="_blank" href="/Justin_Shi_Resume.pdf">Resume</a>
      </div>
    </div>

    <div class="navbar-desktop">

      <div class="navbar-inner">
        <NuxtLink class="brand" to="/">Justin Shi</NuxtLink>

        <div class="navbar-icons">
          <NuxtLink class="navbar-link" :to="{path: '/', hash: '#about'}">About</NuxtLink>
          <NuxtLink class="navbar-link" :to="{path: '/', hash: '#past_projects'}">Work</NuxtLink>
          <a class="navbar-link" href="mailto:justinshi2023@u.northwestern.edu">Contact</a>
          <a class="navbar-link" target="_blank" href="/Justin_Shi_Resume.pdf">Resume</a>
        </div>
      </div>
    </div>

    <!--<b-navbar-brand class = "navbar-text" href="../home">In Writing</b-navbar-brand>
        <b-navba class = "navbar-text" href="../home"><i class="fas fa-wallet"></i></b-navbar-brand>
        <i class="fas fa-wallet"></i>
        <p> Hello!!!</p>
    </b-navbar>
    -->


  </div>
</template>

<script>
/* eslint-disable */
import $ from "jquery";
export default {
  name: "NavBar",
  components: {
  },
  data() {
    return {
      accounts: [],
      current_address: null,

      action_register_text: null,
      action_register_icon: null,

      show_navbar_mobile: false,
    };
  },
  methods: {


    toggleNavbarMobile() {
      this.$data.show_navbar_mobile = !this.$data.show_navbar_mobile;
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.actionRegistered {
  display: none;
}

.promotional {
  background-color: black;
  font-family: "Proxima Nova", Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  text-align: center;
}

.promotional-link {
  color: white;
  text-decoration: underline;
}

@media only screen and (min-width: 601px) {
  .promotional {
    padding: 0.75vw;
    margin-top: -2vh;
    margin-bottom: 1vh;
    font-size: 1vw;
  }

  .promotional-link {
    font-size: 1vw;
  }

  .navbar-mobile {
    display: none;
  }

  i {
    position: absolute;
    top: 0;
    right: 0;
    width: 20vw;
    font-size: 10vw;
  }

  .navbar {
    z-index: 6;

    position: fixed;
    top: 0vw;
    width: 100%;
    height: auto;
    background-color: #E0C1BD;
    padding-top: 2vh;
  }
  .navbar-inner {
    display: flex;
    gap: 58vw;
    height: 6vh;
  }

  .navbar-icons {
    display: flex;
    gap: 3vw;
  }
  .brand {
    color: black;
    font-family: "Menlo", monospace;
    font-size: 1.3125vw;
    margin-left: 2vw;
  }
  .navbar-link {
    color: black;
    font-family: "Menlo", monospace;
    font-size: 1.3125vw;
    position: relative;
    top: 0.75vh;
  }

  img {
    height: 1.75vw;
    width: auto;
    top: 0.75vh;
    position: relative;
  }
}

/* tablet styling */
@media only screen and (min-width: 601px) and (orientation: portrait) {
  .navbar-inner {
    justify-content: space-between;
  }

  .navbar-icons {
    width: 20vw;
    justify-content: space-between;
    padding-right: 8vw;
  }

  .promotional,
  .promotional-link {
    font-size: 2vw;
  }

  .promotional {
    padding: 1vh;
  }
}

/* phone styling */
/* @media only screen and (max-width: 600px) and (orientation: portrait) { */
@media only screen and (max-width: 600px) and (orientation: portrait) {

  .promotional {
    margin-top: -2vh;
    padding: 1vh;
  }
  .navbar-desktop {
    display: none;
  }

  .navbar {
    position: fixed;
    top: 0vw;
    width: 100vw;
    height: auto;
    background-color: #E0C1BD;
    padding-top: 2vh;
  }

  .navbar-inner {
    display: block;
    padding-left: 10vw;
    padding-right: 10vw;
    background-color: #E0C1BD;
    padding-bottom: 2.5vh;
    padding-top: 5vh;
    margin-top: -7vh;
    height: auto;
  }

  .navbar_icon {
    font-size: 12vw;
    line-height: 0vh;
    text-align: right;
    padding-right: 10vw;
  }

  .brand {
    color: black;
    font-family: "Menlo", monospace;
    font-size: 6vw;
    margin-left: 2vw;
    width: auto;
    margin-top: 0.3vh;
  }
  .navbar-link {
    color: black;
    font-family: "Menlo", monospace;
    font-size: 6vw;
    position: relative;
    top: 0vh;
    display: block;
    text-align: left;
  }

  img {
    height: 2.33vw;
    width: auto;
    top: 0vh;
    position: relative;
    padding-left: 3vw;
  }

  .titlediv {
    margin: auto;
    width: 100%;
    padding-top: 20vw;
  }
}
</style>
