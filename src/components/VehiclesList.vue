<template>
  <div class="list-wrapper">
    <h4 class="list-title">Vehicles</h4>
    <ul class="list" v-if="list.length">
      <li v-for="item in list" :key="item.id">
        <router-link :to="{ path: `/vehicle/${item.id}` }" class="link">
          {{ item.data.name }}
        </router-link>
      </li>
    </ul>
    <span v-else> No vehicles</span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VehiclesList",
  props: {
    listItems: Array,
  },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    for (let item in this._props.listItems) {
      axios.get(this._props.listItems[item]).then((response) => {
        const url = response.data.url;
        const id = url.match(/[0-9]+/);
        return this.list.push({ id: id[0], data: response.data });
      });
    }
  },
};
</script>

<style>
.list-title {
  font-size: 20px;
  padding: 0;
  margin: 0 0 15px;
}
.list {
  display: flex;
  flex-flow: column;
  list-style: none;
  padding: 0;
  gap: 10px;
  font-size: 16px;
}
</style>
