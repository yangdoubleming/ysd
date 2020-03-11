<template>
    <div class="">
      <Header></Header>
      <AppMain></AppMain>
      <Footer v-show="$route.name != 'businessInfo'"></Footer>
    </div>
</template>

<script>
import header from "./header";
import footer from "./footer";
import AppMain from "./AppMain";

export default {
  name: "layout",
  components: {
    Header:header,
    Footer:footer,
    AppMain
  },
}
</script>

<style scoped>

</style>
