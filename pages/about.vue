<template>
  <div id="about-wrapper">
    <h1 class="page-title">About</h1>
    <p v-html="$t('pages.about.text1')"></p>
    <p v-html="$t('pages.about.text2')"></p>
    <p v-html="$t('pages.about.text3')"></p>
    <p v-html="$t('pages.about.text4')"></p>
    <p v-html="$t('pages.about.text5')"></p>
    <p v-html="$t('pages.about.text6')"></p>
    <p v-html="$t('pages.about.text7')"></p>
    <p v-html="$t('pages.about.text8')"></p>

    <div id="education-wrapper">
      <h2 class="page-title-h2">{{ $t("pages.education.title") }}</h2>

      <div id="schools-wrapper">
        <div
          v-for="(edu, eduIdx) in educations"
          :key="eduIdx"
          class="school-container"
        >
          <div class="school-info">
            <h3 class="school-name">{{ $t(edu.school) }}</h3>
            <div class="school-date secondary">
              {{ $t(edu.from)
              }}<span v-if="edu.to !== ''" class="secondary">
                - {{ $t(edu.to) }}</span
              >
            </div>
          </div>

          <p class="school-location">{{ $t(edu.country) }}</p>

          <p class="school-fields secondary">
            {{ $t("pages.education.subjects") }} :
          </p>
          <span
            v-for="(field, fieldIdx) in edu.fields"
            :key="fieldIdx"
            class="accent hover field"
            >{{ $t(field) }}</span
          >
          <div v-if="edu.diplomas">
            <ul class="school-diplomas">
              <li
                v-for="(diploma, diplomasIdx) in edu.diplomas"
                :key="diplomasIdx"
              >
                {{ $t(diploma.date) }} - <b>{{ $t(diploma.name) }}</b>
                {{ $t(diploma.info) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="experience-wrapper">
      <h2 class="page-title-h2">{{ $t("pages.experience.title") }}</h2>

      <div id="jobs-wrapper">
        <div v-for="(job, jobIdx) in jobs" :key="jobIdx" class="job-container">
          <div class="job-info">
            <h3 class="job-title">{{ $t(job.title) }}</h3>
            <div class="job-date secondary">
              {{ $t(job.from)
              }}<span v-if="job.to !== ''" class="secondary">
                - {{ $t(job.to) }}</span
              >
            </div>
          </div>
          <p class="job-company">
            {{ $t(job.contrat) }} - {{ $t(job.company) }}
          </p>
          <p class="job-tech secondary">{{ $t("pages.experience.techs") }} :</p>
          <span
            v-for="(technology, technologyIdx) in job.technologies"
            :key="technologyIdx"
            class="accent hover tech"
            >{{ technology }}</span
          >
          <ul class="job-actions">
            <li v-for="(actions, actionsIdx) in job.actions" :key="actionsIdx">
              {{ $t(actions) }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <p class="last">{{ $t("pages.about.text9") }}</p>
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
