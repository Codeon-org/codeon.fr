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
        v-for="(post, idx) in posts"
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
          </div>
        </div>
      </a>

      <div id="blog-action">
        <div v-if="loading" class="spinner"></div>
        <div
          v-if="!firstCall && !loading && total !== offset"
          id="more-posts"
          class="accent"
          @click="updateBlogPosts"
        >
          I want more !
        </div>
        <div
          v-if="offset === total && offset !== 0 && total !== 0"
          id="allPostsDisplayed"
        >
          You've reached the end 👍
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      total: 0,
      offset: 0,
      firstCall: true,
      loading: false,
      cancelToken: undefined,
    };
  },
  head: {
    title: "Blog posts - Robin from Codeon 👋",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Take a look at the articles I posted on Needlify",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Take a look at the articles I posted on Needlify",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Blog posts - Robin from Codeon 👋",
      },

      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "Blog posts - Robin from Codeon 👋",
      },
    ],
  },
  mounted() {
    this.updateBlogPosts();
  },
  methods: {
    updateBlogPosts() {
      if (this.cancelToken !== undefined) {
        this.cancelToken.cancel("Operation cancel due to new request");
      }

      this.cancelToken = this.$axios.CancelToken.source();
      this.loading = true;

      const params = new URLSearchParams();
      params.append("offset", this.offset);

      this.$axios
        .get("https://needlify.com/api/automation/MrAnyx/posts/get", {
          params,
          cancelToken: this.cancelToken.token,
        })
        .then(({ data }) => {
          if (this.total === 0) {
            this.posts = data.posts;
            this.total = data.total;
            this.offset = data.posts.length;
          } else {
            this.posts = this.posts.concat(data.posts);
            this.offset += data.posts.length;
          }
          this.firstCall = false;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          if (this.$axios.isCancel(err)) {
            // eslint-disable-next-line no-console
            console.log(`Cancelling previous request: ${err.message}`);
          } else {
            this.$swal("An error occured. Please try again", {
              icon: "error",
            });
          }
        });
    },
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

  & #blog-action {
    margin-top: 20px;

    & #more-posts {
      margin: 0 auto;
      padding: 10px;
      width: 115px;
      text-align: center;
    }

    & #allPostsDisplayed {
      text-align: center;
      color: $secondary;
    }
  }

  .post-container {
    background-color: $semi-dark-transparent;
    transition: background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    border-radius: 8px;
    padding: 16px;
    display: block;
    text-decoration: none;
    height: 170px;

    @include sm-screen {
      height: 145px;
    }

    @include xs-screen {
      height: 135px;
    }

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

        @include sm-screen {
          width: 145px;
          height: calc(145px - 16px - 16px); /* card height - 2 * padding */
        }

        @include xs-screen {
          display: none;
        }

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

          @include sm-screen {
            margin-bottom: 8px;
          }

          @include xs-screen {
            margin-bottom: 6px;
            font-size: 16px;
          }
        }

        & .post-description {
          -webkit-line-clamp: 3;
          font-size: 15px;
          @include sm-screen {
            font-size: 13px;
          }

          @include xs-screen {
            font-size: 12px;
          }
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

          @include sm-screen {
            margin-bottom: 4px;
          }

          @include xs-screen {
            margin-bottom: 2px;
          }

          & .post-date {
            font-size: 14px;
            @include sm-screen {
              font-size: 12px;
            }
            @include xs-screen {
              font-size: 11px;
            }
          }

          & .post-views {
            display: flex;
            align-items: center;
            column-gap: 5px;
            font-size: 14px;
            @include sm-screen {
              font-size: 12px;
              column-gap: 2px;
            }
            @include xs-screen {
              font-size: 11px;
            }

            & .post-views-icon {
              fill: $secondary;
              transform: scale(0.8);
              width: 24px;
              height: 24px;
              @include sm-screen {
                transform: scale(0.6);
              }
              @include xs-screen {
                transform: scale(0.55);
              }
            }
          }
        }
      }
    }
  }
}
</style>
