<template>
  <div>
    <h1>Tools</h1>
    <p class="secondary">
      Here is a quick list of tools and softwares I daily use as a developer.
    </p>

    <div v-for="(tool, index) in tools" :key="tool.header">
      <h2 :id="tool.anchor" :class="{ 'first-header': index === 0 }">
        <a :href="`#${tool.anchor}`">{{ tool.header }}</a>
      </h2>
      <ul>
        <li v-for="item in tool.items" :key="item.name">
          <a :href="item.link" class="accent">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tools: [
        {
          header: "Code editors",
          anchor: "code-editors",
          items: [
            {
              name: "Visual Studio Code",
              link: "https://code.visualstudio.com/",
              description: "",
            },
            {
              name: "PHPStorm",
              link: "https://www.jetbrains.com/phpstorm/",
              description: "",
            },
            {
              name: "Lite XL",
              link: "https://lite-xl.github.io/",
              description: "",
            },
            {
              name: "Github Codespace",
              link: "https://github.com/features/codespaces",
              description: "",
            },
          ],
        },
        {
          header: "Fonts",
          anchor: "fonts",
          items: [
            {
              name: "Cascadia Code",
              link: "https://github.com/microsoft/cascadia-code",
              description: "",
            },
            {
              name: "Fira Code",
              link: "https://github.com/tonsky/FiraCode",
              description: "",
            },
            {
              name: "JetBrains Mono",
              link: "https://www.jetbrains.com/lp/mono/",
              description: "",
            },
          ],
        },
        {
          header: "Inspirations",
          anchor: "inspirations",
          items: [
            {
              name: "Dribbble",
              link: "https://dribbble.com/",
              description: "",
            },
            {
              name: "Pinterest",
              link: "https://www.pinterest.com/",
              description: "",
            },
            {
              name: "Screenlane",
              link: "https://screenlane.com/",
              description: "",
            },
            {
              name: "Flowrift",
              link: "https://flowrift.com/",
              description: "",
            },
          ],
        },
        {
          header: "Productivity softwares",
          anchor: "productivity-softwares",
          items: [
            {
              name: "Notion",
              link: "https://dribbble.com/",
              description: "",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 46px;
  line-height: 95px;
}

h2 {
  margin-top: 34px;
  margin-bottom: 20px;
  font-size: 30px;
  position: relative;

  &.first-header {
    margin-top: 64px;
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
  list-style: none; /* Remove default bullets */

  & li {
    line-height: 35px;
  }

  & li::before {
    content: "\2022";
    color: $secondary-transparent;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: 20px;
  }
}

.secondary {
  color: $secondary;
}
</style>
