<template>
  <div id="app">
    <!--div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div-->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/styles/reset.css';
@import './assets/styles/mixins.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&subset=cyrillic');

#app {
  //font-family: 'Roboto', sans-serif;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
