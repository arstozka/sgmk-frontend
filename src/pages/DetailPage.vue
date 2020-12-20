<template>
  <div>
    <VehicleDetail :vehicleId="$route.params.id"></VehicleDetail>
  </div>
</template>
<script>
import VehicleDetail from "../components/VehicleDetail";
export default {
  name: "DetailPage",
  components: {
    VehicleDetail,
  },
  data() {
    return {
      title: "Detail",
    };
  },
};
</script>
<style></style>
