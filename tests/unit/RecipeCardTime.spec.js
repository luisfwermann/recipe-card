import { shallowMount } from "@vue/test-utils";
import RecipeCardTime from "../../src/components/RecipeCardTime.vue";

describe("RecipeCardTime.vue", () => {
  const getText = (minutes) => {
    const wrapper = shallowMount(RecipeCardTime, {
      props: { minutes }
    });
    return wrapper.text();
  };

  test("renders only minutes", () => expect(getText(23)).toEqual("23 min"));
  test("renders only hours", () => expect(getText(120)).toEqual("2 hr"));
  test("renders minutes and hours", () =>
    expect(getText(132)).toEqual("2 hr 12 min"));
});
