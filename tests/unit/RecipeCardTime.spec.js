import { shallowMount } from "@vue/test-utils";
import RecipeCardTime from "../../src/components/RecipeCardTime.vue";

describe("RecipeCardTime.vue", () => {
  test("renders only minutes", () => {
    const wrapper = shallowMount(RecipeCardTime, {
      props: { minutes: 23 },
      global: {
        $filters: {
          minutesHours
        }
      }
    });
    expect(wrapper).toBeTruthy();
  });

  // test("renders only minutes", () => {
  //   const wrapper = shallowMount(RecipeCardTime);
  //   expect(wrapper).toBeTruthy();
  // });

  // test("renders hours and minutes", () => {
  //   const wrapper = shallowMount(RecipeCardTime);
  //   expect(wrapper).toBeTruthy();
  // });
});
