import { planDetails, productData } from '../../assets/Data.js';

const recommendationSystem = {
  getRecommendation(answers) {
    const [floors, rooms, realTimeControl, optimization, support] = answers;

    const plan = this.getPlan(realTimeControl, optimization);
    const products = this.getProducts(floors, rooms);
    const totalPrice = this.calculateTotalPrice(products);

    return {
      plan: plan,
      products: products,
      totalPrice: totalPrice
    };
  },

  getPlan(realTimeControl, optimization) {
    if (realTimeControl === 1 && optimization === 1) {
      return "Basic Plan";
    } else if (realTimeControl === 2 && optimization === 2) {
      return "Standard Plan";
    } else if (realTimeControl === 2 && optimization === 3) {
      return "Premium Plan";
    }
    return "Basic Plan";
  },

  getProducts(floors, rooms) {
    return {
      1: floors,  // Global Thermostat
      2: floors,  // IoT Hub
      3: floors * rooms  // TRVs
    };
  },

  calculateTotalPrice(products) {
    let total = 0;
    Object.entries(products).forEach(([id, count]) => {
      total += productData[id].price * count;
    });
    return total.toFixed(2);
  }
};

// Example usage
function getRecommendation(answers) {
  return recommendationSystem.getRecommendation(answers);
}

// Test cases
console.log(getRecommendation([1, 1, 1, 1, 1])); // Q1: A, Q2: A, Q3: A, Q4: A, Q5: A
console.log(getRecommendation([1, 1, 2, 2, 1])); // Q1: A, Q2: A, Q3: B, Q4: B, Q5: A
console.log(getRecommendation([1, 1, 2, 3, 1])); // Q1: A, Q2: A, Q3: B, Q4: C, Q5: A
console.log(getRecommendation([2, 3, 2, 3, 2])); // Q1: B, Q2: C, Q3: B, Q4: C, Q5: B
console.log(getRecommendation([5, 5, 2, 3, 2])); // Q1: E, Q2: E, Q3: B, Q4: C, Q5: B

