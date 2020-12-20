<template>
  <section class="detail">
    <div class="detail__wrapper">
      <h1 class="detail__title">{{ data.name }}</h1>
      <div class="detail__body">
        <div class="vehicle-params">
          <div class="params-item">
            <span class="item__title">Model:</span>{{ data.model }}
          </div>
          <div class="params-item">
            <span class="item__title">Manufacturer:</span>
            {{ data.manufacturer }}
          </div>
          <div class="params-item">
            <span class="item__title">Cost in credits:</span>
            {{ data.cost_in_credits }}
          </div>
          <div class="params-item">
            <span class="item__title">Length:</span>{{ data.length }}
          </div>
          <div class="params-item">
            <span class="item__title">Max atmosphering speed:</span>
            {{ data.max_atmosphering_speed }}
          </div>
          <div class="params-item">
            <span class="item__title">Crew:</span>{{ data.crew }}
          </div>
          <div class="params-item">
            <span class="item__title">Passengers:</span> {{ data.passengers }}
          </div>
          <div class="params-item">
            <span class="item__title">Cargo capacity:</span>
            {{ data.cargo_capacity }}
          </div>
          <div class="params-item">
            <span class="item__title">Consumables:</span>
            {{ data.consumables }}
          </div>
          <div class="params-item">
            <span class="item__title">Vehicle class:</span>
            {{ data.vehicle_class }}
          </div>
        </div>
      </div>
      <router-link :to="{ path: '/' }" class="link"
        >Back to main page</router-link
      >
    </div>
  </section>
</template>
<script>
import axios from "axios";
export default {
  name: "VehicleDetail",
  props: {
    vehicleId: String,
  },
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    axios
      .get(`https://swapi.dev/api/vehicles/${this.vehicleId}`)
      .then((response) => {
        return (this.data = response.data);
      });
  },
};
</script>
<style>
.detail {
  display: flex;
}
.detail__wrapper {
  border: 1px solid #111;
  border-radius: 5px;
  padding: 25px;
  display: flex;
  flex-flow: column;
  width: 100%;
}
.detail__body {
  margin: 0 0 25px;
}
.detail__title {
  color: #50c878;
  font-size: 28px;
  text-align: center;
  padding: 5px;
  margin: 0 0 25px;
  border-bottom: 2px solid #50c878;
}
.vehicle-params {
  display: flex;
  flex-flow: column;
  gap: 15px;
}
.vehicle-params .params-item {
  display: inline-flex;
  gap: 5px;
}
.vehicle-params .params-item .item__title {
  font-weight: bold;
}
</style>
