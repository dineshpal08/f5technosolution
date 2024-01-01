<template>
  <div class="w-10/12 boxshadoepage1 mx-auto mt-10 pb-10">
    <div class="flex gap-7 items-center csss">
      <div class="w-10 h-10 rounded-full flex justify-center items-center">
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-zjt8k w-10 h-10 textcolor"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="AssignmentIcon"
          tabindex="-1"
          fill="currentColor"
          title="Assignment"
        >
          <path
            d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
          ></path>
        </svg>
      </div>
      <div class=" ">
        <h2 class="text-lg textcolor">Company Details</h2>
        <p class="text-sm">
          Adding your company’s details is a mandatory step in registering your
          company
        </p>
      </div>
    </div>
    <div class="forms mt-10">
      <div class="grid grid-cols-2 gap-12 lg:px-10 w-full">
        <div class="flex gap-5 items-center">
          <div class="w-5/12 text-right">
            <label class="text-sm mb-2" for="">Registered Company Name *</label>
          </div>
          <div class="w-7/12">
            <input
              class="inputstyle"
              placeholder="Enter Company name"
              v-model="formData.companyname"
              :class="{
                'border-red-500': !validateCompanyName(),
                'border-green-500': validateCompanyName(),
              }"
            />
            <p v-if="!validateCompanyName()" class="text-red-500 text-xs mt-2">
              field is required
            </p>
            <p class="text-xs mt-2">
              Company Name as Registered on Official Documents
            </p>
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right">
            <label class="text-sm mb-2" for="">PAN No *</label>
          </div>
          <div class="w-8/12 flex items-center gap-1">
            <div>
              <input
                class="inputstyle"
                placeholder="Enter the Company PAN no."
                v-model="formData.pan"
                :class="{
                  'border-red-500': !validatePan(),
                  'border-green-500': validatePan(),
                }"
              />
              <p v-if="!validatePan()" class="text-red-500 text-xs mt-2">
                field is required
              </p>
            </div>

            <div>
              <img
                class="w-10 h-10 mx-auto"
                src="https://tse1.mm.bing.net/th?id=OIP.74Fct7_KqN0IgcajG2ZkkgHaJG&pid=Api&rs=1&c=1&qlt=95&w=88&h=109"
                alt=""
              />
              <p class="text-xs mt-2">Company-pan.pdf</p>
            </div>
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-5/12 text-right">
            <label class="text-sm mb-2" for="">Website URL *</label>
          </div>
          <div class="w-7/12">
            <input
              class="inputstyle"
              placeholder="For E.g www.PNG.com"
              v-model="formData.website"
            />
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right">
            <label class="text-sm mb-2" for="">TAN No.</label>
          </div>
          <div class="w-8/12 flex items-start gap-1">
            <div>
              <input
                class="inputstyle"
                placeholder="Enter the Company PAN no."
                v-model="formData.tan"
              />
              <p class="text-xs mt-2">
                TAN : Tax Deduction Account Number of the company
              </p>
            </div>
            <div>
              <!-- Hidden input of type file -->
              <input
                type="file"
                ref="fileInput"
                style="display: none"
                @change="handleFileUpload"
              />
              <!-- Upload button -->
              <button
                class="text-blue px-5 py-2 text-md rounded-full border"
                @click="openFileInput"
              >
                Upload
              </button>
              <p v-if="!validateFile()" class="text-red-500 text-xs mt-2">
                Please upload a file
              </p>
            </div>
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-5/12 text-right">
            <label class="text-sm mb-2" for="">Your Name *</label>
          </div>
          <div class="w-7/12">
            <input
              class="inputstyle"
              placeholder="Enter Your Name"
              v-model="formData.name"
              :class="{
                'border-red-500': !validateName(),
                'border-green-500': validateName(),
              }"
            />
            <p v-if="!validateName()" class="text-red-500 text-xs mt-2">
              field is required
            </p>

            <!-- <p class="text-xs mt-2">
                      Company Name as Registered on Official Documents
                    </p> -->
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right">
            <label class="text-sm mb-2" for="">CIN No.</label>
          </div>
          <div class="w-8/12 flex items-start justify-between gap-1">
            <div>
              <input
                class="inputstyle"
                placeholder="Enter the CIN no."
                v-model="formData.cin"
                :class="{
                  'border-red-500': !validateCinNo(),
                  'border-green-500': validateCinNo(),
                }"
              />
              <p v-if="!validateCinNo()" class="text-red-500 text-xs mt-2">
                field is required
              </p>
            </div>

            <div>
              <button
                class="text-blue px-5 py-2 text-md rounded-full border gap-1"
                @click="openFileInput"
              >
                upload
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-5/12 text-right">
            <label class="text-sm mb-2" for="">Your Email ID *</label>
          </div>
          <div class="w-7/12">
            <input
              class="inputstyle"
              placeholder="Enter your Email ID"
              v-model="formData.email"
              :class="{
                'border-red-500': !validateEmail(),
                'border-green-500': validateEmail(),
              }"
            />
            <p v-if="!validateEmail()" class="text-red-500 text-xs mt-2">
              Valid Email ID is required
            </p>

            <!-- <p class="text-xs mt-2">
                      Company Name as Registered on Official Documents
                    </p> -->
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right">
            <label class="text-sm mb-2" for="">GST No.</label>
          </div>
          <div class="w-8/12 flex items-start justify-between gap-1">
            <div>
              <input
                class="inputstyle"
                placeholder="Enter the Company GST no."
                v-model="formData.gst"
              />
            </div>
            <div>
              <button
                class="text-blue px-5 py-2 text-md rounded-full border gap-1"
                @click="openFileInput"
              >
                upload
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-5/12 text-right">
            <label class="text-sm mb-2" for="">Your Mobile No. *</label>
          </div>
          <div class="w-7/12">
            <input
              class="inputstyle"
              placeholder="Enter Your Mobile No."
              v-model="formData.mobileNo"
              :class="{
                'border-red-500': !validateMobileNo(),
                'border-green-500': validateMobileNo(),
              }"
            />
            <p v-if="!validateMobileNo()" class="text-red-500 text-xs mt-2">
              Valid Mobile No. is required
            </p>

            <!-- <p class="text-xs mt-2">
                      Company Name as Registered on Official Documents
                    </p> -->
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right">
            <label class="text-sm mb-2" for="">Cancelled Cheque </label>
          </div>
          <div class="w-8/12 flex items-start gap-1">
            <!-- <div>
                <input
                  class="inputstyle"
                  placeholder="Enter the Company PAN no."
                />
                <p class="text-xs mt-2">
                  TAN : Tax Deduction Account Number of the company
                </p>
              </div> -->

            <div>
              <button
                class="text-blue px-5 py-2 text-md rounded-full border"
                @click="openFileInput"
              >
                upload
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-5/12 text-right">
            <label class="text-sm mb-2" for="">Billing Address </label>
          </div>
          <div class="w-7/12">
            <textarea
              type="text"
              class="inputstyle"
              placeholder="Enter the Company Biling Address"
              v-model="formData.biling"
            />
            <!-- <p class="text-xs mt-2">
                      Company Name as Registered on Official Documents
                    </p> -->
          </div>
        </div>

        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right">
            <label class="text-sm mb-2" for=""
              >Company Registration Certificate *</label
            >
          </div>
          <div class="w-8/12 flex items-start gap-1">
            <!-- <div>
                <input
                  class="inputstyle"
                  placeholder="Enter the Company PAN no."
                />
                <p class="text-xs mt-2">
                  TAN : Tax Deduction Account Number of the company
                </p>
              </div> -->
            <div>
              <button
                class="text-blue px-5 py-2 text-md rounded-full border"
                @click="openFileInput"
              >
                upload
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right"></div>
          <div class="w-8/12 flex items-start gap-1">
            <div></div>
          </div>
        </div>

        <div class="flex gap-5 items-center">
          <div class="w-5/12 text-right">
            <label class="text-sm mb-2" for="">Management Authorization</label>
          </div>
          <div>
            <img
              class="w-10 h-10 mx-auto"
              src="https://tse1.mm.bing.net/th?id=OIP.74Fct7_KqN0IgcajG2ZkkgHaJG&pid=Api&rs=1&c=1&qlt=95&w=88&h=109"
              alt=""
            />
            <p class="text-xs mt-2">Company-pan.pdf</p>
          </div>
          <div class="w-8/12 flex items-start gap-1">
            <!-- <div>
                <input
                  class="inputstyle"
                  placeholder="Enter the Company PAN no."
                />
                <p class="text-xs mt-2">
                  TAN : Tax Deduction Account Number of the company
                </p>
              </div> -->
            <div>
              <button
                class="text-blue px-5 py-2 text-md rounded-full border"
                @click="openFileInput"
              >
                upload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full mt-10">
        <div>
          <div class="justify-center flex items-center gap-5">
            <button class="button px-5 py-2 text-md border">Back</button>
            <button
              class="button px-5 py-2 text-md border"
              @click="incrementVal"
            >
              Next >
            </button>
          </div>
          <p class="mt-4">
            Check the entered information before proceeding in the next part of
            the form
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
        companyname: "",
        pan: "",
        website: "",
        tan: "",
        name: "",
        cin: "",
        email: "",
        gst: "",
        mobileNo: "",
        biling: "",
        // Add other form fields here
      },
      isFileUploaded: false,
    };
  },
  methods: {
    validateFile() {
      return this.isFileUploaded;
    },
    validateCompanyName() {
      return this.formData.companyname.trim() !== "";
    },
    validateMobileNo() {
      const mobileRegex = /^\d{10}$/;
      return mobileRegex.test(this.formData.mobileNo);
    },
    validatePan() {
      return this.formData.pan.trim() !== "";
    },
    validateName() {
      return this.formData.name.trim() !== "";
    },
    validateCinNo() {
      return this.formData.cin.trim() !== "";
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.formData.email);
    },
    handleFileUpload(event) {
      // Handle the file upload logic here
      const file = event.target.files[0];

      if (file) {
        console.log("Uploaded file:", file);
        this.isFileUploaded = true;
      } else {
        this.isFileUploaded = false;
      }
    },
    openFileInput() {
      // Open the hidden file input when the button is clicked
      this.$refs.fileInput.click();
    },
    incrementVal() {
      if (
        this.validateCompanyName() &&
        this.validatePan() &&
        this.validateName() &&
        this.validateCinNo() &&
        this.validateEmail() &&
        this.validateMobileNo()
      ) {
        var inc = 2;
        inc = inc++; // Increment inc by 1
        this.$store.commit("INCREMENT_SLIDER", inc);

        // Access the updated value from the state
        const updatedIncrementValue = this.$store.state.incerment;

        // Log the updated value
        console.log(updatedIncrementValue, "sdsdsd");
      } else {
        alert("Please fill in all required fields with valid data.");
      }
    },
  },
};
</script>
