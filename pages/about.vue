<template>
  <div id="about-wrapper">
    <h1 class="page-title">About</h1>
    <p>
      As you may have seen, I'm Robin (aka MrAnyx) and I'm a
      <b class="accent-text">tech and open-source enthusiast</b>. Since 2019,
      I'm specialized in <b class="accent-text">fullstack web development</b>. I
      am currently a french <b class="accent-text">software engineer</b> in a
      company called
      <b class="accent-text">Icohup</b>
      which creates connected radioactivity sensors. Besides that, I created my
      micro business called <b class="accent-text">Codeon</b> in which I create
      websites or web application for individuals or startups. One thing i
      really like is to build apps and things and share them on the Internet so
      that people can give their feedback.
    </p>
    <p>
      I first experienced web development when I was in 9th grade. With a friend
      of mine, we tried to create our very first website using HTML and CSS
      thanks to the explanations and tutorials that we could find on "le site du
      zéro" (now known as
      <a href="https://openclassrooms.com/" target="_blank" class="accent"
        >OpenClassrooms</a
      >). I spent a lot of time trying to create a navigation bar or a paragraph
      and align it all in an HTML page. That was fun 😄
    </p>

    <p>
      I started programming and development with Python (very original 😄) but
      it was when I discovered web technologies that I really started to get
      involved in this environment. I started with the basics with HTML, CSS and
      Javascript, then I continued with CSS frameworks such as bootstrap. Quite
      quickly, I got interested in backend frameworks like Symfony or Laravel or
      even Javascript frameworks like React or Electron. I was fascinated by
      these technologies.
    </p>

    <p>
      With all the knowledge that I have been able to accumulate over all these
      years, I started to create small projects like the game of life or the
      langton's ant, both available in the
      <nuxt-link to="projects" class="accent">projects page</nuxt-link>. Then,
      the more I developed, the more my ambitions increased and my projects
      grew. From thread to needle, I gathered enough knowledge to create my
      biggest project yet :
      <a href="https://needlify.com" class="accent" target="_blank">Needlify</a
      >, a platform where
      <b class="accent-text"
        >people can share and learn things around new technologies</b
      >. I spent almost a year creating this project. In reality, I had to start
      over from the beginning because the bases I had created did not correspond
      to what I wanted to achieve. Then I knew how to seize the opportunities
      that were given to me and optimize my time to concentrate on this project.
      In 5 months, the development projects were completed and the site was in
      production.
    </p>

    <p>
      For quite some time now, I've really enjoyed discovering new technologies
      like: Electron, Nuxt, Vue.js or even new programming languages like Pony
      or Vlang and trying to create projects with that. Believe me, I have no
      shortage of ideas. I have an endless list of project ideas, sometimes
      totally implausible, that I try to achieve as soon as I have the ability
      and the inclination.
    </p>

    <p>
      For everything related to programming or the tools I use, I advise you to
      take a look at the
      <nuxt-link to="projects" class="accent">projects</nuxt-link> or
      <nuxt-link to="tools" class="accent">tools</nuxt-link> page. If you have
      any questions regarding these areas, you can contact me via social
      networks or by <a href="mailto://robin@codeon.fr" class="accent">mail</a>.
    </p>

    <p>
      Finally, to keep track of what I achieve during the year, I created a
      <a
        href="https://codeon.notion.site/Roadmap-2021-2022-92830dd78ad5471b8b79303c74b110f8"
        target="_blank"
        class="accent"
        >development roadmap</a
      >
      for myself. It therefore allows me to know what I want to learn or what I
      would like to improve myself on. You can take inspiration from it, if you
      feel like it.
    </p>

    <p>
      Besides programming, I try to write articles regularly in order to share
      my knowledge. I am also a music lover which means as soon as I do
      something <b class="accent-text">I MUST have music in my ears</b>.
      Finally, I try as much as possible to stay organized, which is why I love
      organizational and planning tools such as
      <a href="https://www.notion.so/" class="accent" target="_blank">Notion</a>
      or
      <a href="https://todoist.com" target="_blank" class="accent">Todoist</a>.
      This allows me to plan my weeks and days to be more productive.
    </p>

    <div id="education-wrapper">
      <h2 class="page-title-h2">Education</h2>

      <div id="schools-wrapper">
        <div
          v-for="(edu, eduIdx) in educations"
          :key="eduIdx"
          class="school-container"
        >
          <div class="school-info">
            <h3 class="school-name">{{ edu.school }}</h3>
            <div class="school-date secondary">
              {{ edu.from
              }}<span v-if="edu.to !== ''" class="secondary">
                - {{ edu.to }}</span
              >
            </div>
          </div>

          <p class="school-location">{{ edu.country }}</p>

          <p class="school-fields secondary">Fields :</p>
          <span
            v-for="(field, fieldIdx) in edu.fields"
            :key="fieldIdx"
            class="accent hover field"
            >{{ field }}</span
          >
          <div v-if="edu.diplomas">
            <ul class="school-diplomas">
              <li
                v-for="(diploma, diplomasIdx) in edu.diplomas"
                :key="diplomasIdx"
              >
                {{ diploma.date }} - <b>{{ diploma.name }}</b>
                {{ diploma.info }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="experience-wrapper">
      <h2 class="page-title-h2">Experience</h2>

      <div id="jobs-wrapper">
        <div v-for="(job, jobIdx) in jobs" :key="jobIdx" class="job-container">
          <div class="job-info">
            <h3 class="job-title">{{ job.title }}</h3>
            <div class="job-date secondary">
              {{ job.from
              }}<span v-if="job.to !== ''" class="secondary">
                - {{ job.to }}</span
              >
            </div>
          </div>
          <p class="job-company">{{ job.company }}</p>
          <p class="job-tech secondary">Technologies :</p>
          <span
            v-for="(technology, technologyIdx) in job.technologies"
            :key="technologyIdx"
            class="accent hover tech"
            >{{ technology }}</span
          >
          <ul class="job-actions">
            <li v-for="(actions, actionsIdx) in job.actions" :key="actionsIdx">
              {{ actions }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p class="last">Hope you enjoyed finding out more about me 👍</p>
  </div>
</template>

<script>
import jobs from "@/data/experience";
import educations from "@/data/education";

export default {
  data() {
    return {
      jobs,
      educations,
    };
  },
  head: {
    title: "About me - Robin from Codeon 👋",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Learn more about me and my experience as a developer",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Learn more about me and my experience as a developer",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "About me - Robin from Codeon 👋",
      },

      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "About me - Robin from Codeon 👋",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
#about-wrapper {
  p {
    line-height: 26px;
    color: $secondary;

    &:not(.last) {
      margin-bottom: 20px;
    }
  }
}

#experience-wrapper,
#education-wrapper {
  margin-bottom: 40px;

  #jobs-wrapper,
  #schools-wrapper {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 55px;
    .job-container,
    .school-container {
      .job-info,
      .school-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;

        @include sm-screen {
          display: block;
          margin-bottom: 10px;
        }

        .job-title,
        .school-name {
          font-size: 18px;
        }

        .job-date,
        .school-date {
          font-size: 14px;
          font-style: italic;
        }
      }

      .job-company,
      .school-location {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: bold;
      }

      .job-tech,
      .school-fields {
        margin-bottom: 12px;
        font-size: 14px;
        display: inline;
        // font-style: italic;
      }

      span.tech,
      span.field {
        display: inline-block;
        margin-right: 8px;
        font-size: 14px;
        margin-top: 8px;
      }

      .job-actions,
      .school-diplomas {
        list-style: none;
        margin-top: 15px;

        li {
          line-height: 28px;
          position: relative;
          margin-left: 20px;
          color: $light-transparent;

          &::before {
            position: absolute;
            content: "\2022";
            color: $secondary-transparent;
            font-weight: bold;
            display: inline-block;
            left: -18px;
          }
        }
      }
    }
  }
}
</style>
