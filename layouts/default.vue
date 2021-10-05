<template>
  <div>
    <Navbar />
    <div id="wrapper">
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#wrapper {
  padding-top: 120px;
  padding-left: 35px;
  padding-right: 35px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: block;
}
</style>
