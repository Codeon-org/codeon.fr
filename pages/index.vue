<template>
  <div id="home-wrapper">
    <div id="image-container">
      <img src="~/assets/bitmoji2.png" alt="Face bitmoji" />
    </div>
    <h1>{{ $t("pages.index.title") }}</h1>
    <p class="first" v-html="$t('pages.index.description')"></p>
  </div>
</template>

<script>
export default {
  head: {
    title: "Robin from Codeon 👋 - Software Engineer",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "I'm a french software engineer specialized in fullstack web developer. Well, I'm also a UI designer in my spare time",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "I'm a french software engineer specialized in fullstack web developer. Well, I'm also a UI designer in my spare time",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Robin from Codeon 👋 - Software Engineer",
      },

      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Robin from Codeon 👋 - Software Engineer",
      },
    ],
  },
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
      box-shadow: 0 0 25px #12161d46;
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
