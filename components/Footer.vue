<template>
  <div id="wrapper">
    <eva-icon name="github-outline" class="icon"></eva-icon>
    <eva-icon name="twitter-outline" class="icon"></eva-icon>
    <eva-icon name="linkedin-outline" class="icon"></eva-icon>
    <eva-icon name="camera-outline" class="icon"></eva-icon>
    <eva-icon name="at-outline" class="icon"></eva-icon>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#wrapper {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
}

.icon {
  fill: $secondary;
}
</style>
