<template>
  <div class="w-3/4 boxshadoepage1 mx-auto mt-10 pb-10">
    <div class="flex gap-7 items-center csss">
      <div class="w-10 h-10 rounded-full flex justify-center items-center">
        <svg
          class="button MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-zjt8k w-10 h-10 textcolor"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PersonAddAltIcon"
          tabindex="-1"
          fill="currentColor"
          title="PersonAddAlt"
        >
          <path
            d="M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2H3zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3h2z"
          ></path>
        </svg>
      </div>
      <div class="h-1/2">
        <h2 class="button text-lg">Add Users</h2>
        <p class="text-sm">
          Define Users as Buyers, Sellers, Billers & Viewers to manage your
          company account on this website
        </p>
      </div>
    </div>

    <div class="flex justify-center items-center flex-column h50 gap-2">
      <div class="">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-zjt8k w-10 h-10 textcolor"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PeopleAltIcon"
          tabindex="-1"
          fill="currentColor"
          title="PeopleAlt"
        >
          <path
            fill-rule="evenodd"
            d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
          ></path>
          <circle cx="9" cy="8" r="4" fill-rule="evenodd"></circle>
          <path
            fill-rule="evenodd"
            d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zm-6 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
          ></path>
        </svg>
      </div>
      <div class="flex justify-center items-center flex-column mt-2">
        <h2><b class="text-lg">No Users Added yet</b></h2>
        <p>Start by Adding your first User</p>
      </div>
      <div class="mt-3">
        <button
          class="text-blue-600 px-5 py-2 text-md border hover:bg-blue-600 hover:text-white rounded-sm"
          @click="dialog = true"
        >
          + Add New User
        </button>
      </div>
    </div>
  </div>
  <v-dialog v-model="dialog" width="auto">
    <Page3 />
  </v-dialog>
</template>
<script>
import Page3 from "./Page3.vue";
export default {
  components: {
    Page3,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
