<template>
  <div>
    <!-- 購物車 -->
    cart頁面
    <order-header></order-header>
    <router-view></router-view>
    <order-footer></order-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import OrderFooter from "./../components/OrderFooter";
export default {
  name: "cart",
  components: {
    OrderHeader,
    OrderFooter,
  },
};
</script>

<style>
</style>