<template>
  <div id="footer-wrapper">
    <div id="footer-links">
      <a href="https://github.com/MrAnyx" target="_blank"
        ><eva-icon name="github-outline" class="icon"></eva-icon
      ></a>

      <a href="https://twitter.com/MrAnyx" target="_blank"
        ><eva-icon name="twitter-outline" class="icon"></eva-icon>
      </a>

      <a href="https://www.linkedin.com/in/rob-bch/" target="_blank"
        ><eva-icon name="linkedin-outline" class="icon"></eva-icon>
      </a>

      <a href="https://www.instagram.com/rob.bch/" target="_blank"
        ><eva-icon name="camera-outline" class="icon"></eva-icon>
      </a>

      <a href="mailto:robin@codeon.fr" target="_blank"
        ><eva-icon name="at-outline" class="icon"></eva-icon>
      </a>
    </div>

    <div id="footer-credits">
      {{ $t("footer.credits.madeWith") }}
      <a href="https://nuxtjs.org/" class="accent">Nuxt</a>

      <br />

      {{ $t("footer.credits.license") }}

      <a
        href="https://github.com/Codeon-org/codeon.fr/blob/master/LICENSE"
        class="accent"
        target="_blank"
        >CC-BY-SA-4.0</a
      >

      © {{ year }} <nuxt-link to="/" class="accent">Codeon</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
#footer-wrapper {
  margin-top: 75px;

  height: 140px;

  display: flex;

  align-items: center;

  flex-direction: column;

  & #footer-links {
    display: flex;

    justify-content: center;

    align-items: center;

    column-gap: 12px;

    & a {
      color: $light;

      text-decoration: none;

      padding: 8px 8px 4px 8px;

      border-radius: 6px;

      transition: background-color 0.12s ease-in-out;

      &:hover {
        background-color: $semi-dark-transparent;

        transition: background-color 0.3s ease-in-out;
      }
    }
  }

  & #footer-credits {
    text-align: center;

    margin-top: 15px;

    font-size: 12px;

    line-height: 30px;
  }
}

.icon {
  fill: $secondary;
}
</style>
