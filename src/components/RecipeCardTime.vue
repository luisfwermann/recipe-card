<template>
  <div class="r-card-time">
    <icon-clock class="r-card-time__icon"></icon-clock>
    {{ minutesHours }}
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import IconClock from "./icons/IconClock.vue";

export default {
  props: {
    minutes: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    return {
      minutesHours: computed(() => {
        let hours = 0;
        let minutes = props.minutes;
        if (minutes >= 60) {
          hours = Math.floor(minutes / 60);
          minutes = minutes - hours * 60;
          return `${hours} hr${minutes ? ` ${minutes} min` : ""}`;
        }
        return `${minutes} min`;
      })
    };
  },
  components: {
    IconClock
  }
};
</script>

<style lang="scss">
.r-card-time {
  display: flex;
  align-items: center;
  white-space: nowrap;

  .r-card-time__icon {
    margin-right: 0.5em;
  }
}
</style>
