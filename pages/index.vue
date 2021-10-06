<template>
  <div id="home-wrapper">
    <div id="image-container">
      <img src="~/assets/bitmoji2.png" alt="Face bitmoji" />
    </div>
    <h1>Hey, I'm Robin 👋</h1>
    <p class="first">
      <b>I'm a french software developer and engineer student</b>. Well, I'm
      also a UI designer in my spare time. I'm currently working at
      <a href="https://icohup.com/" class="accent">Icohup</a>, a french startup
      based in Limoges and I'm also an independent with my micro-company called
      <a href="" class="accent">Codeon</a>.
    </p>
  </div>
</template>

<script>
export default {
  layout: "main",
};
</script>

<style lang="scss">
#home-wrapper {
  & #image-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto;
    background-color: $semi-dark-very-transparent;
    transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
      background-color: $semi-dark-transparent;
      box-shadow: 0 0 25px #12161d7a;
      transition: background-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    }

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & h1 {
    text-align: center;
    font-size: 60px;
    margin-top: 40px;
  }

  & p {
    font-size: 18.5px;
    color: $secondary;
    text-align: center;
    line-height: 32px;

    &.first {
      margin-top: 40px;
      display: inline-block;
    }
  }
}
</style>
