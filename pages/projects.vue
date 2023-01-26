<template>
  <div>
    <h1 class="page-title">{{ $t("header.links.projects") }}</h1>
    <p
      class="secondary page-description"
      v-html="$t('pages.projects.description')"
    ></p>

    <div id="macy-container">
      <a
        v-for="(project, idxProject) in projects"
        :key="idxProject"
        :href="project.url"
        target="_blank"
        class="project"
        :macy-complete="{ '1': idxProject === 0 }"
      >
        <div v-if="project.wip" class="wip-container">
          <div>
            <eva-icon name="flash-off-outline" class="wip-icon"></eva-icon>
            <span class="wip-text">WIP</span>
          </div>
        </div>
        <div v-if="project.image !== ''" class="image-container">
          <img :src="project.image" alt="project image" />
        </div>
        <h3>{{ $t(project.title) }}</h3>
        <p class="secondary">{{ $t(project.description) }}</p>
        <div v-if="project.tags !== []" class="project-tags">
          <span
            v-for="(tag, idxTag) in project.tags"
            :key="idxTag"
            class="tag accent"
            >{{ $t(tag) }}</span
          >
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Macy from "@/node_modules/macy/dist/macy";
import projects from "@/data/projects";

export default {
  data() {
    return {
      projects,
    };
  },
  head: {
    title: "Projects and creations - Robin from Codeon 👋",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Check out what I have achieved since I started as a developer",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Check out what I have achieved since I started as a developer",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Projects and creations - Robin from Codeon 👋",
      },

      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Projects and creations - Robin from Codeon 👋",
      },
    ],
  },

  mounted() {
    const masonry = new Macy({
      container: "#macy-container",
      mobileFirst: true,
      breakAt: {
        780: {
          margin: {
            y: 20,
            x: 20,
          },
          columns: 3,
        },
        600: {
          margin: {
            y: 16,
            x: 16,
          },
          columns: 2,
        },
        0: {
          margin: {
            y: 16,
            x: 16,
          },
          columns: 1,
        },
      },
    });

    window.addEventListener("resize", function () {
      masonry.recalculate(true);
    });
  },
};
</script>

<style lang="scss" scoped>
#macy-container {
  margin-top: 50px;
}

.project {
  background-color: $semi-dark-transparent;
  transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 8px;
  padding: 16px;
  display: block;
  text-decoration: none;
  overflow: hidden;
  position: relative;

  &:hover {
    background-color: $semi-dark-less-transparent;
    box-shadow: 0 0 25px #12161d6c;
    transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    & .image-container img {
      transform: scale(1.2);
      transition: transform 0.15s ease-in-out;
    }
  }

  & .image-container {
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 14px;
    position: relative;

    & img {
      transform: scale(1.1);
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
      transition: transform 0.15s ease-in-out;
    }
  }

  & h3 {
    margin-bottom: 12px;
  }

  & p {
    font-size: 14px;
    line-height: 20px;
  }

  & .project-tags {
    margin-top: 12px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
    row-gap: 8px;

    & .tag {
      font-size: 12px;
    }
  }

  & .wip-container {
    border-radius: 200px;
    z-index: 8;
    width: 90px;
    height: 90px;
    background-color: $accent;
    position: absolute;
    top: -40px;
    right: -40px;
    transition: top 0.4s ease-in-out, right 0.4s ease-in-out,
      width 0.4s ease-in-out, height 0.4s ease-in-out;

    &:hover {
      width: 180px;
      height: 180px;
      top: -90px;
      right: -90px;
      transition: top 0.4s ease-in-out, right 0.4s ease-in-out,
        width 0.4s ease-in-out, height 0.4s ease-in-out;

      & .wip-icon {
        opacity: 1;
        bottom: 35px;
        left: 58px;
        transition: opacity 0.25s ease-in-out, bottom 0.4s ease-in-out,
          left 0.4s ease-in-out;
      }
      & .wip-text {
        opacity: 1;
        bottom: 20px;
        left: 58px;
        transition: opacity 0.25s ease-in-out, bottom 0.4s ease-in-out,
          left 0.4s ease-in-out;
      }
    }

    & div {
      width: 100%;
      height: 100%;
      position: relative;
    }

    & .wip-icon {
      position: absolute;
      bottom: 0px;
      left: 30px;
      opacity: 1;
      transform: translate(-50%, -50%);
      fill: $dark;
      z-index: 10;
      transition: opacity 0.25s ease-in-out, bottom 0.4s ease-in-out,
        left 0.4s ease-in-out;
    }

    & .wip-text {
      opacity: 0;
      position: absolute;
      bottom: -15px;
      left: 30px;
      transform: translate(-50%, -50%);
      color: $dark;
      z-index: 10;
      font-weight: 600;
      transition: opacity 0.25s ease-in-out, bottom 0.4s ease-in-out,
        left 0.4s ease-in-out;
    }
  }
}
</style>
