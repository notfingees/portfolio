<template>
  <!-- eslint-disable -->
  <div class="footer">
    <div class="footer_inner">
      <div class="logo">
        <h2>Justin Shi</h2>

        <div class="About">
          <p>
            My developer and designer portfolio. Contact me through email at <a class="email" href="mailto:justinshi2023@u.northwestern.edu">justinshi2023@u.northwestern.edu</a>, or by clicking <a class="email" href="mailto:justinshi2023@u.northwestern.edu">here!</a>
          </p>
        </div>


        <p class="copyright">© 2022 Justin Shi</p>
      </div>

    </div>

  </div>
</template>

<script>
/* eslint-disable */
import $ from 'jquery';

export default {
  name: "Footer",
  components: {
  },
  data () {
    return {
    }
  },

  
  methods: {





  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  background-color: #282F35;
  outline: white;
  color: white;
  border: 1px solid white;
  padding: 0.5vw;
  font-family: "Menlo", monospace;
  transition: background-color 0.25s ease-out 1ms, color 0.25s ease-out 1ms;
}
button:hover {
  color: #282F35;
  background-color: white;
}
.actionRegistered {
  display: none;
}

.footer {
  z-index: 0;
  width: 100%;
  /*margin-left: -10vw;
    margin-top: 4vh;*/
  overflow-x: hidden !important;
}
a {
  color: white;
  font-family: "Proxima Nova Medium", Helvetica, sans-serif;
  font-size: 1.15vw;
  line-height: 1.5vw;
  text-decoration: none;
}

button {
  color: white;
  font-family: "Menlo", monospace;
  font-size: 1vw;
  line-height: 1.5vw;
  text-decoration: none;
}

.email {
  text-decoration: underline;
}
a:hover {
  color: white;
  text-decoration: underline;
}
@media only screen and (min-width: 601px) {
  .copyright {
    font-size: 1vw;
    color: white;
    font-family: "Proxima Nova Medium", Helvetica, sans-serif;
    margin-top: 10vh;
  }
  .icon {
    width: 1.5vw;
    height: auto;
  }
  .contacts {
    display: flex;
    gap: 1vw;
    justify-content: left;
    width: 100%;
  }

  .footer {
    background-color: #282F35;

    height: auto;
    position: relative;
    bottom: 0;

    /*
    padding-left: 10vw;
    padding-right: 10vw;
    */
    padding-top: 3vw;
    padding-bottom: 3vw;
  }

  .footer_inner {
    display: flex;
    gap: 9vw;
    padding-left: 10vw;
    padding-right: 10vw;
  }
  h2 {
    color: white;
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.75vw;
  }
  h3 {
    color: white;
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1.15vw;
  }
  p {
    color: white;
    font-family: "Proxima Nova Medium", Helvetica, sans-serif;
    font-size: 1.15vw;
    line-height: 1.5vw;
  }
  .logo {
    width: 25%;
    text-align: left;
  }
  .marketplace {
    text-align: left;
    line-height: 2vw;
  }
  .resources {
    text-align: left;
    line-height: 2vw;
  }

  .hide-desktop {
    display: none;
  }
}

/* tablet styling */
@media only screen and (min-width: 601px) and (orientation: portrait) {
  .footer_inner {
    justify-content: space-between;
  }
}

/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {
  .hide-mobile {
    display: none;
  }
  .icon {
    width: 10vw;
    height: auto;
  }
  .contacts {
    display: flex;
    gap: 2.5vw;
    justify-content: left;
    width: 100%;
    padding-bottom: 3vh;
  }

  .copyright {
    font-size: 3vw;
    color: white;
    font-family: "Proxima Nova Medium", Helvetica, sans-serif;
    margin-top: 7vh;
  }

  .footer {
    background-color: #282F35;
    height: auto;
    position: relative;
    bottom: 0;
    display: flex;
    padding-left: 16vw;
    padding-right: 16vw;
    padding-top: 3vw;
    padding-bottom: 10vw;
    gap: 10vw;
    flex-wrap: wrap;
    column-gap: 15vw;
    row-gap: 0vw;
  }
  h2 {
    color: white;
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 6vw;
  }
  h3 {
    color: white;
    font-family: "Proxima Nova", Helvetica, sans-serif;
    font-weight: bold;
    font-size: 6vw;
  }
  p {
    color: white;
    font-family: "Proxima Nova Medium", Helvetica, sans-serif;
    font-size: 4vw;
  }
  .logo {
    padding-top: 3vh;
    width: 80%;
    text-align: left;
  }
  .marketplace {
    text-align: left;
    width: 60vw;
  }
  .resources {
    text-align: left;
    width: 60vw;
  }

  a {
    color: white;
    font-family: "Proxima Nova Medium", Helvetica, sans-serif;
    font-size: 4vw;
    line-height: 200%;
  }

  button {
    font-family: "Menlo", monospace;
    color: white;
    font-size: 5vw;
    padding: 2vw;
    line-height: 200%;
  }
}
</style>
