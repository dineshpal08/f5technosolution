<template>
  <div class="w-8/12 boxshadoepage1 mx-auto mt-10 pb-10 z-50 bgffff rounded-lg">
    <div class="flex gap-7 items-center csss">
      <div class=" ">
        <h2 class="button text-lg">Add User</h2>
      </div>
    </div>
    <div class="forms mt-10">
      <div class="grid grid-cols-2 gap-12 lg:px-10 w-full">
        <div class="flex gap-5 items-center">
          <div class="w-5/12 text-right">
            <label class="text-sm mb-2" for="">Name </label>
            <label v-if="!validateName()" class="text-red-500 text-xs">*</label>
          </div>
          <div class="w-7/12">
            <input
              class="inputstyle"
              placeholder="Enter the User Name"
              v-model="formData.name"
              :class="{
                'border-red-500': !validateName(),
                'border-green-500': validateName(),
              }"
            />
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right">
            <label class="text-sm mb-2" for="">Mobile No. </label>
            <label v-if="!validateMobileNo()" class="text-red-500 text-xs"
              >*</label
            >
          </div>
          <div class="w-8/12 items-center gap-1">
            <input
              class="inputstyle"
              placeholder="Enter the Mobile No."
              v-model="formData.mobileNo"
              :class="{
                'border-red-500': !validateMobileNo(),
                'border-green-500': validateMobileNo(),
              }"
            />
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-5/12 text-right">
            <label class="text-sm mb-2" for="">Designation </label>
            <label v-if="!validateDesignation()" class="text-red-500 text-xs"
              >*</label
            >
          </div>
          <div class="w-7/12">
            <input
              class="inputstyle"
              placeholder="Enter the User Designation"
              v-model="formData.designation"
              :class="{
                'border-red-500': !validateDesignation(),
                'border-green-500': validateDesignation(),
              }"
            />
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right">
            <label class="text-sm mb-2" for="">Email ID </label>
            <label v-if="!validateEmail()" class="text-red-500 text-xs"
              >*</label
            >
          </div>
          <div class="w-8/12 flex gap-1">
            <div>
              <input
                class="inputstyle"
                placeholder="Enter User's company Email ID"
                v-model="formData.email"
                :class="{
                  'border-red-500': !validateEmail(),
                  'border-green-500': validateEmail(),
                }"
              />
            </div>
          </div>
        </div>

        <div class="flex gap-5 items-center">
          <div class="flex gap-3">
            <div class="w-4/12 text-right">
              <label class="text-sm mb-2" for="">Profile *</label>
            </div>
            <div class="flex gap-5">
              <div class="w-8/12 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="Seller"
                  class="inputstyle cursor-pointer w-5 h-5"
                  placeholder="Enter Company name"
                  v-model="formData.selected"
                  value="Seller"
                />
                <p class="text-sm">Seller</p>
              </div>
              <div class="w-7/12 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="Buyer"
                  class="inputstyle cursor-pointer w-5 h-5"
                  placeholder="Enter Company name"
                  v-model="formData.selected"
                  value="Buyer"
                />
                <p class="text-sm">Buyer</p>
              </div>
              <div class="w-7/12 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="Billing"
                  class="inputstyle cursor-pointer w-5 h-5"
                  placeholder="Enter Company name"
                  v-model="formData.selected"
                  value="Billing"
                />
                <p class="text-sm">Billing</p>
              </div>
              <div class="w-7/12 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="Viewer"
                  class="inputstyle cursor-pointer w-5 h-5"
                  placeholder="Enter Company name"
                  v-model="formData.selected"
                  value="Viewer"
                />
                <p class="text-sm">Viewer</p>
              </div>
            </div>
          </div>
          <div class="flex justify-center"></div>
        </div>

        <!-- Add validation for other form fields if needed -->
      </div>
      <div class="flex justify-center w-full mt-10">
        <div>
          <div class="justify-center flex items-center gap-5">
            <button
              class="text-blue px-5 py-2 text-md border"
              @click="laststep"
            >
              Save User
            </button>
          </div>
          <p class="mt-4">
            You can view the above user’s details after saving the changes
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      formData: {
        name: "",
        mobileNo: "",
        designation: "",
        email: "",
        selected: [],
        // Add other form fields here
      },
    };
  },
  computed: {
    ...mapState(["incerment", "data"]),
  },
  methods: {
    // validateProfile() {
    //   return !this.formData.selected.length;
    // },
    validateName() {
      return this.formData.name.trim() !== "";
    },
    validateMobileNo() {
      // Basic mobile number validation (you may want to enhance it based on your requirements)
      const mobileRegex = /^\d{10}$/;
      return mobileRegex.test(this.formData.mobileNo);
    },
    validateDesignation() {
      return this.formData.designation.trim() !== "";
    },
    validateEmail() {
      // Basic email validation (you may want to enhance it based on your requirements)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.formData.email);
    },
    laststep() {
      if (
        this.validateName() &&
        this.validateMobileNo() &&
        this.validateDesignation() &&
        this.validateEmail()
        /* Add other validations here */
      ) {
        console.log(JSON.stringify(this.formData), "formDataformDataformData");
        this.$store.commit("ADD_USER_DATA", this.formData);
        const dataA = this.$store.state.data;
        console.log(dataA, "xxxxxxxxxxxxxxxxxx");

        var inc = 3;
        this.$store.commit("INCREMENT_SLIDER", inc);
        const updatedIncrementValue = this.$store.state.incerment;
        console.log(updatedIncrementValue, "sdsdsd");
      } else {
        alert("Please fill in all required fields with valid data.");
      }
    },
  },

  mounted() {
    const userData = this.$store.state.data;
    const userDataArray = JSON.parse(JSON.stringify(this.formData));

    // Log the actual data
    console.log(userDataArray);
  },
};
</script>
