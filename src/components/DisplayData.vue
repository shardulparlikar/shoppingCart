<template>
  <div class="shopingda container">
    <div class="card" v-for="data in objectData" :key="data.price">
      <h4>Name : {{ data.title }}</h4>

      <p>Type : {{ data.type }}</p>

      <p>Description : {{ data.description }}</p>

      <h6>Price : {{ data.price }}</h6>

      <base-button  mode="flat" @click="addToCart(data.title, data.price)">
        Add To cart</base-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      objectData: [],
      addedData: [],
      terms : false ,
      isDisable : false
    };
  },
  beforeMount() {
    var config = {
      headers: { "Access-Control-Allow-Origin": "*" },
    };

    axios.get("http://localhost:8000/", config).then((res) => {
      this.objectData = res.data;
    });
  },

  methods: {
    addToCart(name, price) {
        if(this.isDisable){
            this.isDisable= false
        }
        else{
            this.isDisable= true
        }
      this.addedData.push({
        name: name,
        price: price,
      });

      console.log(this.addedData);

      window.localStorage.setItem("item", JSON.stringify(this.addedData));
    },
  },

};
</script>

<style scoped>
.shopingda {
  display: flex;
  flex-wrap: wrap;
}
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 20rem;
  justify-content: space-between;
}

</style>