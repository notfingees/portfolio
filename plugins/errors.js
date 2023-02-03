/* eslint-disable */

export default function ({ app }) {



  app.nuxt.error = async (args) => {



    //const close_error = () => document.getElementById("nuxt_error").remove();

    const node = document.createElement("div");
    node.style.backgroundColor = '#282F35';
    node.style.border = '0.1px solid white';
    node.style.color = 'white';
    node.style.boxShadow = '10px 10px';
    node.style.position = 'fixed';
    node.style.left = '50%';
    node.style.marginLeft = '-15vw';
    node.style.top = '15vh';
    node.style.width = '30vw';
    node.style.padding = '1vw';
    node.style.fontFamily = '"Menlo", Courier';
    node.id = "nuxt_error"
    node.innerHTML = `
    <span><p style='float:right; margin-top:-0.75vh;'>X</p><p style='margin-top:2.5vh;'>❌ ${args} - Please contact us if the issue persists</p></span>
    `
    document.getElementById("app").appendChild(node);
    //await delay(7500);
    //node.remove();

    node.addEventListener('click', function () { document.getElementById("nuxt_error").remove() })

    /*
    function close_error() {
      document.getElementById("nuxt_error").remove()
      //node.remove();
    }
    */



  }





}

/*
const close_error = () => document.getElementById("nuxt_error").remove();


const delay = ms => new Promise(res => setTimeout(res, ms));
*/