<template>
  <div class="r-card-unit" :title="title">
    <div class="r-card-unit__dot" :style="style"></div>
    <div class="r-card-unit__val">{{ units + unitType }}</div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

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
  setup(props) {
    const colors = {
      carbs: "#F94642",
      proteins: "#3177BB",
      fats: "#FDA120"
    };

    return {
      style: computed(() => ({
        "background-color": colors[props.nutrient]
      })),
      title: computed(
        () => props.nutrient.charAt(0).toUpperCase() + props.nutrient.slice(1)
      )
    };
  }
};
</script>

<style lang="scss">
.r-card-unit {
  display: flex;
  align-items: center;

  .r-card-unit__dot {
    width: 0.4em;
    height: 0.4em;
    margin-right: 0.4em;
    border-radius: 50%;
  }
}
</style>
