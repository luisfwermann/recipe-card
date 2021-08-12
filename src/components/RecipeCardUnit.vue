<template>
  <div class="r-card-unit">
    <div class="r-card-unit__dot"></div>
    <div class="r-card-unit__val">{{ units + unitType }}</div>
  </div>
</template>

<script>
export default {
  props: {
    nutrient: {
      type: String,
      required: true
    },
    units: {
      type: Number,
      required: true
    },
    unitType: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      colors: {
        carbs: "#F94642",
        proteins: "#3177BB",
        fats: "#FDA120"
      }
    };
  }
};
</script>

<style lang="scss"></style>
