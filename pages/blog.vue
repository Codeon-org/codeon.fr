<template>
  <div>
    <h1 class="page-title">Blog</h1>

    <p class="secondary page-description">
      Since May 2021, I regularly write posts on a community platform that I've
      created called Needlify. Everyone of them are accessible on my
      <a href="https://needlify.com/me/MrAnyx" class="accent">Needlify</a>
      profile. Anyway, here is a list of my previous posts. Hope you like it 👍.
    </p>

    <div id="posts-wrapper" class="">
      <a
        v-for="(post, idx) in blogs.posts"
        :key="idx"
        class="post-container"
        :href="post.url"
      >
        <div class="post-content">
          <div class="image-container">
            <img :src="post.image" alt="post image" />
          </div>
          <div class="post-text">
            <p class="post-info">
              <span class="post-date secondary">{{
                getDateFromTimestamp(post.publishedAt.timestamp)
              }}</span>
              <span class="post-views secondary">
                <eva-icon name="eye-outline" class="post-views-icon"></eva-icon>
                {{ post.views }}
              </span>
            </p>
            <h3 class="post-title" :title="post.title">
              {{ post.title }}
            </h3>

            <p class="post-description secondary">
              {{ post.description }}
            </p>

            <div class="post-description-skeleton">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </a>

      <div id="more-posts" class="accent">I want more !</div>
    </div>
  </div>
</template>

<script>
import blogs from "@/data/blogs";

export default {
  data() {
    return {
      blogs,
    };
  },
  async mounted() {
    // TODO Implementer l'appel API
    // this.$axios
    //   .get("https://needlify.com/api/automation/MrAnyx/posts/get")
    //   .then(({ data }) => {
    //     console.log(data);
    //   });
    // console.log(this.blogs.posts);
    // const blogs = await this.$http.$get(
    //   "https://needlify.com/api/automation/MrAnyx/posts/get"
    // );
    // console.log(blogs);
  },
  methods: {
    getDateFromTimestamp(timestamp) {
      const date = new Date(timestamp * 1000);
      return `${date.getDate()} ${date.toLocaleString("default", {
        month: "short",
      })}, ${date.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
#posts-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 50px;

  & #more-posts {
    margin: 0 auto;
    padding: 10px;
    margin-top: 20px;
  }

  &.loading {
    .post-container {
      background-color: $semi-dark-transparent;
      transition: background-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
      border-radius: 8px;
      padding: 16px;
      display: block;
      text-decoration: none;
      height: 170px;

      &:hover {
        background-color: $semi-dark-less-transparent;
        box-shadow: 0 0 25px #12161d6c;
      }

      & .post-content {
        display: flex;
        column-gap: 16px;
        position: relative;

        & .image-container {
          width: 200px;
          height: calc(170px - 16px - 16px); /* card height - 2 * padding */
          overflow: hidden;
          border-radius: 6px;
          margin-bottom: 14px;
          position: relative;
          background-color: $secondary-transparent;

          & img {
            display: none;
          }
        }

        & .post-text {
          flex: 1;

          & .post-title {
            margin-bottom: 14px;
            -webkit-line-clamp: 1;
            background-color: $secondary-transparent;
            color: transparent;
            border-radius: 6px;
          }

          & .post-description {
            -webkit-line-clamp: 3;
            font-size: 15px;
            display: none;
          }

          & .post-description-skeleton {
            width: 100%;
            height: 64px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            & div {
              height: 14px;
              background-color: $secondary-transparent;
              border-radius: 4px;
            }
          }
          & .post-title {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box !important;
            -webkit-box-orient: vertical;
            white-space: normal;
          }

          & .post-info {
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            & .post-date {
              font-size: 14px;
              background-color: $secondary-transparent;
              color: transparent;
              border-radius: 6px;
            }

            & .post-views {
              display: flex;
              align-items: center;
              column-gap: 5px;
              font-size: 14px;
              background-color: $secondary-transparent;
              color: transparent;
              border-radius: 6px;

              & .post-views-icon {
                fill: transparent;
                transform: scale(0.8);
                width: 24px;
                height: 24px;
              }
            }
          }
        }
      }
    }
  }

  &:not(.loading) {
    .post-container {
      background-color: $semi-dark-transparent;
      transition: background-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
      border-radius: 8px;
      padding: 16px;
      display: block;
      text-decoration: none;
      height: 170px;

      &:hover {
        background-color: $semi-dark-less-transparent;
        box-shadow: 0 0 25px #12161d6c;

        & .image-container img {
          transform: scale(1.1);
        }
      }

      & .post-content {
        display: flex;
        column-gap: 16px;
        position: relative;

        & .image-container {
          width: 200px;
          height: calc(170px - 16px - 16px); /* card height - 2 * padding */
          overflow: hidden;
          border-radius: 6px;
          margin-bottom: 14px;
          position: relative;

          & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.15s ease-in-out;
          }
        }

        & .post-text {
          flex: 1;

          & .post-title {
            margin-bottom: 14px;
            -webkit-line-clamp: 1;
          }

          & .post-description {
            -webkit-line-clamp: 3;
            font-size: 15px;
          }

          & .post-description,
          & .post-title {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box !important;
            -webkit-box-orient: vertical;
            white-space: normal;
          }

          & .post-info {
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            & .post-date {
              font-size: 14px;
            }

            & .post-views {
              display: flex;
              align-items: center;
              column-gap: 5px;
              font-size: 14px;

              & .post-views-icon {
                fill: $secondary;
                transform: scale(0.8);
                width: 24px;
                height: 24px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
