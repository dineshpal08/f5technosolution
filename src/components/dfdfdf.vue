<template>
    <!-- ... (previous code) -->
    <div class="forms mt-10">
      <div class="grid grid-cols-2 gap-12 lg:px-10 w-full">
        <!-- ... (previous code) -->
        <div class="flex gap-5 items-center">
          <div class="w-4/12 text-right">
            <label class="text-sm mb-2" for="">TAN No.</label>
          </div>
          <div class="w-8/12 flex items-start gap-1">
            <div>
              <input
                class="inputstyle"
                placeholder="Enter the Company PAN no."
              />
              <p class="text-xs mt-2">
                TAN : Tax Deduction Account Number of the company
              </p>
            </div>
            <div>
              <!-- Hidden input of type file -->
              <input type="file" ref="fileInput" style="display: none" @change="handleFileUpload" />
              <!-- Upload button -->
              <button class="px-5 py-2 text-md rounded-full border" @click="openFileInput">Upload</button>
            </div>
          </div>
        </div>
        <!-- Add similar changes for other fields -->
      </div>
  
      <div class="flex justify-center w-full mt-10">
        <!-- ... (previous code) -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      incrementVal() {
        var inc = 2;
        inc = inc++; // Increment inc by 1
        this.$store.commit("INCREMENT_SLIDER", inc);
  
        // Access the updated value from the state
        const updatedIncrementValue = this.$store.state.incerment;
  
        // Log the updated value
        console.log(updatedIncrementValue, "sdsdsd");
      },
      openFileInput() {
        // Open the hidden file input when the button is clicked
        this.$refs.fileInput.click();
      },
      handleFileUpload(event) {
        // Handle the file upload logic here
        const file = event.target.files[0];
        console.log('Uploaded file:', file);
      },
    },
  };
  </script>
  