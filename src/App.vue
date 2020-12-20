<template>
  <main id="app">
    <div class="container">
      <header id="logo" class="logo-wrapper">
        <img src="./assets/logo.png" alt="" class="logo" />
      </header>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.container {
  padding: 0 20px;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}
.logo-wrapper {
  width: 360px;
  max-width: 100%;
  height: auto;
  margin: 0 auto 50px;
}
.logo-wrapper .logo {
  width: 100%;
  height: auto;
}
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  color: #50c878;
  text-decoration: underline;
  text-underline-position: under;
}
</style>
