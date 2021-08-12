<template>
  <div class="r-card">
    <div class="r-card__image">
      <img class="r-card__image__bg" :src="imgSrc" :alt="recipe.title" />
      <div class="r-card__image__fav">
        <icon-favorite></icon-favorite>
      </div>
      <div v-if="recipe.isPremium" class="r-card__image__premium">
        <icon-trophy class="r-card__image__premium_icon"></icon-trophy>
        Premium Recipe
      </div>
    </div>
    <div class="r-card__info">
      <div class="r-card__info__title">
        {{ recipe.title }}
      </div>
      <div class="r-card__info__rating">
        <recipe-card-rating
          :rating="recipe.rating.score"
          :count="recipe.rating.count"
        ></recipe-card-rating>
      </div>
      <div class="r-card__info__details">
        <div class="r-card__info__details__time">
          <icon-clock class="r-card__info__details__time__icon"></icon-clock>
          {{ $filters.minutesHours(recipe.preparationTimeMinutes) }}
        </div>
        <div class="r-card__info__details__energy">
          <icon-energy
            class="r-card__info__details__energy__icon"
          ></icon-energy>
          {{
            $filters.energy(
              recipe.details.energy,
              recipe.details.units.energy,
              store.state.user?.energyUnits
            )
          }}
        </div>
        <div class="r-card__info__details__units">
          <recipe-card-unit
            class="r-card__info__details__units__item"
            v-for="nutrient in nutrients"
            :nutrient="nutrient"
            :units="recipe.details.nutrients[nutrient]"
            :unitType="recipe.details.units[nutrient]"
            :key="nutrient"
          ></recipe-card-unit>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "@vue/runtime-core";
import IconClock from "./icons/IconClock.vue";
import IconEnergy from "./icons/IconEnergy.vue";
import IconFavorite from "./icons/IconFavorite.vue";
import IconTrophy from "./icons/IconTrophy.vue";
import RecipeCardUnit from "./RecipeCardUnit.vue";
import RecipeCardRating from "./RecipeCardRating.vue";

export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      imgSrc: computed(() => {
        return props.recipe.images[0].url;
      }),
      nutrients: ["carbs", "proteins", "fats"],
      store: inject("store")
    };
  },
  components: {
    IconClock,
    IconEnergy,
    IconFavorite,
    IconTrophy,
    RecipeCardUnit,
    RecipeCardRating
  }
};
</script>

<style lang="scss">
.r-card {
  border-radius: 1em;
  background: white;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  cursor: pointer;

  .r-card__image {
    position: relative;
    overflow: hidden;
    height: 200px;
    border-top-left-radius: 0.625em;
    border-top-right-radius: 0.625em;

    .r-card__image__bg {
      position: absolute;
      height: auto;
      max-width: calc(100%);
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
    }

    .r-card__image__fav {
      position: absolute;
      top: 5%;
      right: 5%;
    }

    .r-card__image__premium {
      font-size: 0.75em;
      font-weight: 600;
      color: white;
      position: absolute;
      bottom: 0.5em;
      left: 0.5em;
      background-color: rgba(255, 255, 255, 0.3);
      padding: 0.25em 0.5em;
      border-radius: 0.625em;
      display: flex;
      align-items: center;

      .r-card__image__premium_icon {
        margin-right: 0.5em;
      }
    }
  }

  .r-card__info {
    padding: 1em;

    .r-card__info__title {
      font-size: 1.125em;
      font-weight: bold;
      line-height: 20px;
      color: #0c0c0a;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 1em;
    }

    .r-card__info__rating {
      margin-bottom: 0.2em;
    }

    .r-card__info__details {
      font-size: 0.7em;
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      grid-template-columns: min-content min-content;
      font-weight: 500;
    }

    .r-card__info__details__time,
    .r-card__info__details__energy {
      display: flex;
      align-items: center;
      color: #393c40;
      white-space: nowrap;
      margin-right: 1em;

      .r-card__info__details__time__icon,
      .r-card__info__details__energy__icon {
        margin-right: 0.5em;
      }
    }

    .r-card__info__details__units {
      display: flex;
      align-items: center;
      color: #6f737a;
      justify-content: flex-end;

      .r-card__info__details__units__item:not(:last-of-type) {
        margin-right: 0.5em;
      }
    }
  }

  &:hover {
    .r-card__image {
      opacity: 0.8;
    }
  }
}
</style>
