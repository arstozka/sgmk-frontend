<template>
  <div class="list-wrapper">
    <h4>Films</h4>
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FilmsList",
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
        return this.list.push(response.data.title);
      });
    }
  },
};
</script>

<style></style>
