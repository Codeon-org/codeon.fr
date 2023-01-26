<template>
  <div id="container">
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :class="{ active: $nuxt.$route.name.includes(link.link) }"
      :to="localePath(link.link)"
    >
      <span class="link-icon">{{ link.icon }}</span> {{ $t(link.text) }}
    </nuxt-link>
    <LocaleDropdown />
  </div>
</template>

<script>
import LocaleDropdown from "./LocaleDropdown.vue";

export default {
  components: {
    LocaleDropdown,
  },
  data() {
    return {
      links: [
        {
          icon: "🏡",
          text: "header.links.home",
          link: "index",
        },

        {
          icon: "💡",
          text: "header.links.projects",
          link: "projects",
        },

        {
          icon: "💻",
          text: "header.links.tools",
          link: "tools",
        },

        {
          icon: "📝",
          text: "header.links.about",
          link: "about",
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
    transition: background-color 0.3s ease-in-out;

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
