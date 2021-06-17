<template>
  <div class="contaier text-center">
    <h4>Your Total is {{ total }}</h4>
  </div>
  <div class="container">
    <div class="row">
      
        <div
          class="cart-data col-3"
          v-for="data in cartData"
          :key="data.price"
          :v-if="data.name != ''"
        >
          <p>Name: {{ data.name }}</p>
          <p>Price {{ data.price }}</p>
        </div>
      
    </div>
  </div>
</template>
 
<script>
export default {
  components: {},

  data() {
    return {
      cartData: JSON.parse(window.localStorage.getItem("item")),
      finalPrice: 0,
    };
  },

  computed: {
    total: function () {
      return this.cartData.reduce(function (total, value) {
        return total + Number(value.price);
      }, 0);
    },
  },
};
//  let cartData= JSON.parse(window.localStorage.getItem('item'))
//     console.log(cartData)
</script>

<style scoped>
.cart-data {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 20rem;
 justify-content: space-between;
}
</style>