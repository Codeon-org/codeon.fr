<template>
  <div>
    <h1>Home</h1>

    <div id="image-container">
      <img src="~/assets/bitmoji.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
};
</script>

<style lang="scss">
#image-container {
  width: 250px;
  height: 250px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;

  & img {
    width: 100%;
    height: 100%;
  }
}
</style>
