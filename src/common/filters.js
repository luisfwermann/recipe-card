const filters = {
  minutesHours(minutes) {
    let hours = 0;
    if (minutes >= 60) {
      hours = Math.floor(minutes / 60);
      minutes = minutes - hours * 60;
      return `${hours} hr${minutes ? ` ${minutes} min` : ""}`;
    }

    return `${minutes} min`;
  },
  energy(energy, energyUnit, convertTo) {
    if (convertTo === "calories") {
      return `${
        energyUnit === "kcal" ? energy : Math.round(energy / 4.184)
      } Calories`;
    } else if (convertTo === "kJ") {
      return `${energyUnit === "kJ" ? energy : Math.round(energy * 4.184)} kJ`;
    }
    return "not implemented";
  }
};

export default filters;
