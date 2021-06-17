<template>
  <div class="card1">
      <base-button @click="setSelectedTab('Display-Data')"> Shoping Data</base-button>
      <base-button  @click="setSelectedTab('ShopingCart')"> Cart</base-button>
  </div>
  <component :is="selectedTab"></component>
</template>

<script>
import DisplayData from './DisplayData.vue'
import ShopingCart from "./ShoppingCart"
export default {
    components : {
    
    ShopingCart,
    DisplayData

    },
data() {
    return {
        selectedTab : ''
    }
    
},
methods: {
        setSelectedTab(tab){
            this.selectedTab =tab;
        }
    },
}
</script>

<style>

.card1 {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  display: flex;
  justify-content: space-around;
}
</style>