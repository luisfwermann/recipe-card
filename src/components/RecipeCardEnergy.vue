<template>
  <div class="r-card-energy">
    <icon-energy class="r-card-energy__icon"></icon-energy>
    {{ energyFormatted }}
  </div>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";
import IconEnergy from "./icons/IconEnergy.vue";

export default {
  props: {
    energy: {
      type: Number,
      required: true
    },
    energyUnit: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return {
      energyFormatted: computed(() => {
        const convertTo = inject("store").state.user?.energyUnits;
        if (convertTo === "calories") {
          return `${
            props.energyUnit === "kcal"
              ? props.energy
              : Math.round(props.energy / 4.184)
          } Calories`;
        } else if (convertTo === "kJ") {
          return `${
            props.energyUnit === "kJ"
              ? props.energy
              : Math.round(props.energy * 4.184)
          } kJ`;
        }
        return "";
      })
    };
  },
  components: {
    IconEnergy
  }
};
</script>

<style lang="scss">
.r-card-energy {
  display: flex;
  align-items: center;
  white-space: nowrap;

  .r-card-energy__icon {
    margin-right: 0.5em;
  }
}
</style>
