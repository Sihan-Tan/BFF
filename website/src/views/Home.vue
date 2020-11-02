<!--
 * @Author: Tan Xuan
 * @Date: 2020-10-30 22:12:30
 * @LastEditors: Tan Xuan
 * @LastEditTime: 2020-10-30 22:18:06
 * @Description: File content
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to vue" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
