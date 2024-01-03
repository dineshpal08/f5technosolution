<template>
  <div
    class="main flex justify-center items-start gap-3 mt-10 mb-10 text-lg textcolor"
  >
    Setup your company’s inventory management/ buying system in 3 steps
  </div>
  <div class="main flex justify-center items-start gap-3 mt-5">
    <div>
      <div
        :class="
          incerment === 1 || 2
            ? 'w-10 h-10 rounded-full flex justify-center items-center bgblue mx-auto'
            : 'w-10 h-10 rounded-full flex justify-center items-center iconsbg mx-auto'
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6 ffff"
        >
          <path
            fill-rule="evenodd"
            d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z"
            clip-rule="evenodd"
          />
          <path
            d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z"
          />
        </svg>
      </div>
      <span class="text-sm">Company Details </span>
    </div>
    <div
      :class="
        incerment > 1
          ? 'w-40 h-1.5 rounded-lg bgblue mt-5'
          : 'w-40 h-1.5 rounded-lg bggray mt-5'
      "
    ></div>
    <div>
      <div
        :class="
          incerment > 1
            ? 'w-10 h-10 rounded-full flex justify-center items-center bgblue mx-auto ffff'
            : 'w-10 h-10 rounded-full flex justify-center items-center iconsbg mx-auto ffff'
        "
      >
        <svg
          class="w-6 h-6 ffff MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1shn170 ffff"
          focusable="false"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 24 24"
          data-testid="PersonAddAltSharpIcon"
          tabindex="-1"
          title="PersonAddAltSharp"
        >
          <path
            d="M15.39 14.56C13.71 13.7 11.53 13 9 13s-4.71.7-6.39 1.56C1.61 15.07 1 16.1 1 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm11-3V6h-2v3h-3v2h3v3h2v-3h3V9h-3z"
          ></path>
        </svg>
      </div>
      <span class="text-sm">Add Users </span>
    </div>
    <div
      :class="
        incerment == 3
          ? 'w-40 h-1.5 rounded-lg bgblue mt-5'
          : 'w-40 h-1.5 rounded-lg bggray mt-5'
      "
    ></div>

    <div>
      <div
        :class="
          incerment === 3
            ? 'w-10 h-10 rounded-full flex justify-center items-center bgblue mx-auto'
            : 'w-10 h-10 rounded-full flex justify-center items-center iconsbg mx-auto'
        "
      >
        <svg
          class="w-6 h-6 ffff MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-j5in8a ffff"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          data-testid="NearMeSharpIcon"
        >
          <path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"></path>
        </svg>
      </div>
      <span class="text-sm">Submit for Approval </span>
    </div>
  </div>
  <div></div>
  <div class="">
    <div v-if="incerment == 1">
      <Page1 />
    </div>
    <div v-if="incerment == 2">
      <Page2 />
    </div>
    <!-- <page3 /> -->
    <div v-if="incerment == 3">
      <Page4 />
    </div>
    <Footer />
  </div>
</template>
<script>
import Page1 from "./Page1.vue";
import Footer from "./Footer.vue";
import Page2 from "./Page2.vue";
import Page3 from "./Page3.vue";
import Page4 from "./Page4.vue";
import { mapState } from "vuex";

export default {
  components: {
    Page1,
    Footer,
    Page2,
    Page3,
    Page4,
  },

  watch: {
    incerment() {},
  },
  computed: {
    ...mapState(["incerment"]),
  },
  created() {
    console.log(this.incerment, "incrementincrementincrement");
  },
};
</script>
