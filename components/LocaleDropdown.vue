<template>
  <a v-click-outside="close" class="dropdown" @click="toggle">
    <div class="button-content">
      <eva-icon
        name="globe-outline"
        class="icon-globe"
        width="22px"
        height="22px"
      ></eva-icon>
      <eva-icon
        :name="chevronIcon"
        class="icon-indicator"
        width="22px"
        height="22px"
      ></eva-icon>
    </div>
    <div class="dropdown-content" :class="{ show: show }">
      <nuxt-link
        :to="switchLocalePath('fr')"
        :class="{ active: $i18n.locale === 'fr' }"
      >
        {{ $t("header.locale.french") }}
      </nuxt-link>
      <nuxt-link
        :to="switchLocalePath('en')"
        :class="{ active: $i18n.locale === 'en' }"
      >
        {{ $t("header.locale.english") }}
      </nuxt-link>
    </div>
  </a>
</template>

<script>
export default {
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
      },
      unbind(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
      },
    },
  },
  data: () => ({
    show: false,
  }),
  computed: {
    chevronIcon() {
      return this.show ? "chevron-up" : "chevron-down";
    },
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    close() {
      this.show = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
  background: transparent;
  cursor: pointer;

  .button-content {
    user-select: none;
    display: flex;
    align-items: center;

    .icon-globe {
      fill: $semi-light;
      transition: fill 300ms ease-in-out;
    }
    .icon-indicator {
      fill: $light;
    }

    .icon-globe,
    .icon-indicator {
      pointer-events: none;
      width: 22px;
      height: 22px;
    }
  }

  &:hover {
    .icon-globe {
      fill: $semi-light-light;
    }
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: $semi-dark;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 6px;
  overflow: hidden;

  a {
    color: $light;
    padding: 8px 16px;
    text-decoration: none;
    display: block;

    &.active {
      background-color: $accent-less-transparent;
    }

    &:hover {
      background-color: $semi-dark-light;
    }
  }
}

.show {
  display: block;
}
</style>
