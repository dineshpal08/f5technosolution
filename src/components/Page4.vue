<template>
  <div class="w-10/12 boxshadoepage1 mx-auto mt-10 pb-10">
    <div class="flex gap-7 items-center csss">
      <div class=" ">
        <h2 class="button text-lg">User</h2>
      </div>
    </div>
    <div class="forms mt-10">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Mobile NO</th>
            <th class="text-left">Designation</th>
            <th class="text-left">Email ID</th>
            <th class="text-left">Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.mobileNo }}</td>
            <td>{{ item.designation }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.selected.toString() }}</td>
            <!-- <td v-for="ite in item.selected" :key="ite.id">{{ ite.id }}</td> -->
          </tr>
        </tbody>
      </v-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      userData: {},
    };
  },

  computed: {
    ...mapState(["data"]),
    // ...mapState("userdata", ["data"]),
  },
  mounted() {
    this.getall();
  },
  methods: {
    getall() {
      this.userData = JSON.stringify(this.data);
      console.log(JSON.stringify(this.data), "fdfsdgfh0");
      console.log("page4", this.data);
    },
  },
};
</script>
