<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link v-bind:to="{name: 'Home'}">
              <img src="./assets/build-a-bot-logo.png" class="logo">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/build">Build</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart">Cart ({{cart.length}})</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- <HomePage/> -->
      <!-- <RobotBuilder/> -->
      <router-view/>
    </main>
  </div>
</template>

<script>
// // import HomePage from './components/HomePage.vue';
// import RobotBuilder from './components/RobotBuilder.vue';

export default {
  name: 'App',
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  // components: {
  //   // HomePage,
  //   RobotBuilder,
  // },
};
</script>

<style>

body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}

</style>
