<template>
  <div id="container">
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :class="{ active: $nuxt.$route.path === link.link }"
      :to="link.link"
    >
      <span class="link-icon">{{ link.icon }}</span> {{ link.text }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          icon: "🏡",
          text: "Home",
          link: "/",
        },
        {
          icon: "📚",
          text: "Blog",
          link: "/blog",
        },
        {
          icon: "💡",
          text: "Projects",
          link: "/projects",
        },
        {
          icon: "💻",
          text: "Tools",
          link: "/tools",
        },
        {
          icon: "📝",
          text: "About",
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
  z-index: 5;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 12px;

  @include xs-screen {
    column-gap: 4px;
  }

  & a {
    color: $light;
    text-decoration: none;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 6px;
    transition: background-color 0.12s ease-in-out;

    @include xs-screen {
      font-size: 14px;
      padding: 6px 8px;
      border-radius: 4px;
    }

    &:hover {
      background-color: $semi-dark-transparent;
      transition: background-color 0.3s ease-in-out;
    }

    & span.link-icon {
      @include sm-screen {
        display: none;
      }
    }
  }

  & a.active {
    color: $accent;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: $accent-semi-transparent;
      transition: background-color 0.3s ease-in-out;
    }
  }
}
</style>
