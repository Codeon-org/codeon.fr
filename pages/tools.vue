<template>
  <div>
    <h1 class="page-title">Tools</h1>
    <p class="secondary page-description">
      Here is a quick list of tools and softwares use for my day-to-day work as
      a web developer and an engineer student.
    </p>

    <div v-for="(tool, index) in tools" :key="tool.header">
      <h2 :id="tool.anchor" :class="{ 'first-header': index === 0 }">
        <a :href="`#${tool.anchor}`">{{ tool.header }}</a>
      </h2>

      <ul>
        <li v-for="item in tool.items" :key="item.name">
          <a :href="item.link" target="_blank" class="accent">{{
            item.name
          }}</a>
          <span v-show="item.description !== ''" class="secondary">
            : {{ item.description }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import tools from "@/data/tools";

export default {
  data() {
    return {
      tools,
    };
  },
  head: {
    title: "Tools - Robin from Codeon 👋",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Discover the tools and software that I use on a daily basis as a web developer and an engineering student",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Discover the tools and software that I use on a daily basis as a web developer and an engineering student",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Tools - Robin from Codeon 👋",
      },

      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Tools - Robin from Codeon 👋",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 34px;
  margin-bottom: 20px;
  font-size: 30px;

  position: relative;
  z-index: 1;

  &.first-header {
    margin-top: 50px;
  }

  & a {
    text-decoration: none;

    &::before {
      font-size: 24px;
      opacity: 0;
      color: $secondary-transparent;
      transition: opacity 0.2s ease-in-out;
      font-weight: 400;
      position: absolute;
      top: 5px;
      font-family: "Inter";
      content: "#";
      left: -26px;
    }

    &:hover::before {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
  }
}

ul {
  list-style: none;

  & li {
    line-height: 38px;
    position: relative;
    margin-left: 38px;
  }

  & li::before {
    position: absolute;
    content: "\2022";
    color: $secondary-transparent;
    font-weight: bold;
    display: inline-block;
    left: -18px;
  }
}
</style>
