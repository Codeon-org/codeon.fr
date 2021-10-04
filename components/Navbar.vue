<template>
  <div id="container">
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :class="{ active: $nuxt.$route.path === link.link }"
      :to="link.link"
    >
      {{ link.text }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          text: "🏡 Home",
          link: "/",
        },
        {
          text: "💡 Projects",
          link: "/projects",
        },
        {
          text: "💻 Tools",
          link: "/tools",
        },
        {
          text: "📝 About",
          link: "/about",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 70px;
  background-color: $dark-transparent;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 12px;

  & a {
    color: $light;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 6px;
    transition: background-color 0.12s ease-in-out;

    &:hover {
      background-color: $semi-dark;
      transition: background-color 0.3s ease-in-out;
    }
  }

  & a.active {
    color: $accent;
  }
}
</style>
