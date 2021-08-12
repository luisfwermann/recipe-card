import { shallowMount } from "@vue/test-utils";
import RecipeCardEnergy from "../../src/components/RecipeCardEnergy.vue";

describe("RecipeCardEnergy.vue", () => {
  const getText = (energy, energyUnit, userUnit) => {
    const store = {
      state: { user: { energyUnits: userUnit } }
    };
    const wrapper = shallowMount(RecipeCardEnergy, {
      props: { energy, energyUnit },
      global: { provide: { store } }
    });
    return wrapper.text();
  };

  test("renders calories when configured by user", () => {
    expect(getText(12312, "kJ", "calories")).toEqual("2943 Calories");
    expect(getText(600, "kcal", "calories")).toEqual("600 Calories");
  });

  test("renders kJ when configured by user", () => {
    expect(getText(1111, "kJ", "kJ")).toEqual("1111 kJ");
    expect(getText(879, "kcal", "kJ")).toEqual("3678 kJ");
  });
});
