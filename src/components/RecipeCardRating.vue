<template>
  <div class="r-card-rating">
    <div class="r-card-rating__stars">
      <div v-for="i in 5" :key="i">
        <icon-star-half v-if="stars[i - 1] === 'half'"></icon-star-half>
        <icon-star-full v-else-if="stars[i - 1] === 'full'"></icon-star-full>
        <icon-star v-else></icon-star>
      </div>
    </div>
    <div class="r-card-rating__count">{{ count }} ratings</div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import IconStar from "./icons/IconStar.vue";
import IconStarFull from "./icons/IconStarFull.vue";
import IconStarHalf from "./icons/IconStarHalf.vue";

export default {
  props: {
    rating: {
      type: Number,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    return {
      stars: computed(() => {
        // Only computes full and half stars, empty stars are handled with HTML
        const full = Math.floor(props.rating);
        let starList = Array(full).fill("full");

        if (props.rating - full > 0) {
          starList.push("half");
        }

        return starList;
      })
    };
  },
  components: {
    IconStar,
    IconStarFull,
    IconStarHalf
  }
};
</script>

<style lang="scss">
.r-card-rating {
  display: flex;

  .r-card-rating__stars {
    display: flex;
    margin-right: 0.5em;
  }

  .r-card-rating__count {
    color: #1ca677;
    font-size: 0.875em;
  }
}
</style>
