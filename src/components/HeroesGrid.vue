<template>
  <section class="cards-list">
    <section v-for="(hero, index) in list" :key="index" class="card">
      <HeroCard :heroData="hero"></HeroCard>
    </section>
  </section>
</template>

<script>
import HeroCard from "./HeroCard";
import axios from "axios";

export default {
  name: "HeroesGrid",
  components: {
    HeroCard,
  },
  data() {
    return {
      list: {},
    };
  },
  mounted() {
    axios.get("https://swapi.dev/api/people/").then((response) => {
      return (this.list = response.data.results);
    });
  },
};
</script>

<style>
.cards-list {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 50px;
}
.card {
  display: block;
  width: 100%;
  max-width: 100%;
  box-shadow: 0 1px 5px #101;
  border-radius: 5px;
}
</style>
