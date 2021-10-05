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
import tools from "@/data/tools";

export default {
  data() {
    return {
      tools,
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

  // TODO Bug ici avec le blur de la navbar, le text n'est pas blured
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
  list-style: none;

  & li {
    line-height: 38px;
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
