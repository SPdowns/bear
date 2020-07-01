export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  stopHunger() {
    clearInterval(this.setHunger())
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }
}

// this project is at the point where I was trying to print the foodLevel every second to the dom. That was successful. now trying to figure out how to have it stop at 0 and have button functionality