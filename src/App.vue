<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="wrapper">
    <div class="bg">
      <div class="bggray"></div>
      <div class="bgwhite"></div>
    </div>
      <h2>Michael Grinstead</h2>
      <div class="text_box">
        <p> <RouterView /> </p>
      </div>

<!--  <p id="about_text">I'm Michael Grinstead, a security systems Project Manager, trying to transition into software development. With an electronics background, my analytical-->
<!--  and problem-solving skills easily translate into programming. I have been self-learning Python, Go, and JavaScript, in my spare time, and I'm passionate-->
<!--  about creating innovative software solutions that drive businesses forward. I'm versatile, adaptable, and comfortable working in both individual and team settings.-->
<!--  My goal is to make a positive impact on the industry and contribute to the creation of cutting-edge software solutions. I'm excited to grow and learn as a software-->
<!--  developer, and I'm eager to take on new challenges and make a meaningful contribution to any development team.</p>-->

  <img src="./assets/GitHub_logo.png" id="git_logo" alt="github logo">
  <img src="./assets/At_logo.png" id="at_logo" alt="at logo">
  <img src="./assets/LinkedIn_logo.png" id="LinkedIn_logo" alt="Linked In logo">
  <router-link to="/about_me"><img src="./assets/blue_logo.png" id="blue_logo" alt="MG logo"></router-link>
  <router-link to="/blogs"><button type ="submit" id="blog">Blog</button></router-link>
  <router-link to="/projects"><button type ="submit" id="projects">Projects</button></router-link>
  <router-link to="/languages" id="languages">Languages</router-link>
  
</div>

  <!-- <p> <RouterView /> </p> -->
      <nav>

      </nav>
</template>

<style>
.wrapper {
position: absolute;
top: 50%;
left: 50%;
margin-left: -535px;
margin-top: -266px;
}
.bg {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
router-link {
  text-decoration: none;
}

body {
  background-color: #165976;
}

h2 {
 position: relative;
  width: 500px;
  height: 47px;
  left: 60px;
  top:  -600px;
  font-family: 'monospace';
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 49px;
  color: #e5e5e5e5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
/* .stack-top{
        z-index: 9;
        margin: 20px;
    } */

.text_box {
  position: absolute;
  width: 465px;
  height: 440px;
  left: 250px;
  top: 100px;
  font-family: 'monospace';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #165976 #e0e0e0;
  padding: 1rem;
  max-height: 420px;
/*  overflow-y: auto;*/
}

.text_box::-webkit-scrollbar-track {
  background-color: darkgrey;
}

.text_box::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

h4 {
/*  position: absolute;*/
  width: 465px;
  height: 347px;
/*  left: 650px;*/
/*  top: 305px;*/
  font-family: 'monospace';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.bgwhite {
  width: 1070px;
  height: 533px;
  content: none;
/*  position: absolute;*/
/*  left: 350px;*/
/*  top: 200px;*/
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  }

.bggray {
  content: none;
  position: relative;

  width: 1070px;
  height: 62px;
/*  left: 350px;*/
  top: 10px;
  background-color: #5f5f5f;
  border-radius: 10px 10px 0 0;
  }

#git_logo {
 position: absolute;
  width: 30px;
  height: 30px;
  left: 995px;
  top: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

#at_logo {
 position: absolute;
  width: 30px;
  height: 30px;
  left: 963px;
  top: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
/* #at_logo:hover {
  background-color: #6969dd;
  border-radius: 50px;
} */

#LinkedIn_logo {
 position: absolute;
  width: 30px;
  height: 30px;
  left: 1030px;
  top: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

#blue_logo {
 position: absolute;
  width: 100px;
  height: 100px;
  left: 110px;
  top: 100px;
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.25));
}
/* #blue_logo:visited {
  color: black;
}
#blue_logo:link {
  color: black;
}
#blue_logo:hover {
  cursor: pointer;
} */


#blog {
  background: none;
  border: none;
  position: relative;
  width: 84px;
  height: 53px;
  left: 795px;
  top: -500px;
  font-family: 'monospace';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 49px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
/* #blog:visited {
  color: black;
}
#blog:link {
  color: black;
}
#blog:hover {
  cursor: pointer;
} */

#projects {
  background: none;
  border: none;
  position: relative;
  width: 153px;
  height: 43px;
  left: 700px;
  top: -400px;
  font-family: 'monospace';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 49px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
/* #projects:visited {
  color: black;
}
#projects:link {
  color: black;
}
#projects:hover {
  cursor: pointer;
} */

#languages {
  background: none;
  border: none;
  position: relative;
  width: 181px;
  height: 63px;
  left: 568px;
  top: -300px;
  font-family: 'monospace';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 49px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  color: black;
}
/* #languages:visited {
  color: black;
}
#languages:link {
  color: black;
}
#languages:hover {
  cursor: pointer;
} */

</style>

