<template>
  <section class="card__wrapper">
    <div class="card__header">
      <h2 class="card__title">{{ heroData.name }}</h2>
    </div>
    <div class="card__body">
      <div class="profile">
        <div class="profile__item">
          <span class="item-title">Gender: </span> {{ heroData.gender }}
        </div>
        <div class="profile__item">
          <span class="item-title">Height: </span> {{ heroData.height }}
        </div>
        <div class="profile__item">
          <span class="item-title">Mass: </span>{{ heroData.mass }}
        </div>
        <div class="profile__item">
          <span class="item-title">Hair color: </span> {{ heroData.hair_color }}
        </div>
        <div class="profile__item">
          <span class="item-title">Skin color: </span>{{ heroData.skin_color }}
        </div>
        <div class="profile__item">
          <span class="item-title">Eye color: </span>{{ heroData.eye_color }}
        </div>
        <div class="profile__item">
          <span class="item-title">Birth year: </span> {{ heroData.birth_year }}
        </div>
      </div>
      <FilmsList :listItems="heroData.films"></FilmsList>
      <VehiclesList :listItems="heroData.vehicles"></VehiclesList>
    </div>
  </section>
</template>

<script>
import FilmsList from "./FilmsList";
import VehiclesList from "./VehiclesList";
export default {
  name: "HeroCard",
  components: {
    FilmsList,
    VehiclesList,
  },
  props: {
    heroData: Object,
  },
};
</script>

<style>
.card__wrapper {
  padding: 25px;
}
.card__header {
  display: block;
  margin: 0 0 25px;
  padding: 5px 0;
  border-bottom: 2px solid #50c878;
}
.card__title {
  margin: 0;
  padding: 0;
  color: #50c878;
}
.profile {
  display: flex;
  flex-flow: column;
  gap: 15px;
}
.profile .profile__item {
  display: inline-flex;
  gap: 5px;
  font-size: 16px;
}
.profile .profile__item .item-title {
  font-weight: bold;
}
</style>
