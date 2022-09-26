<template>
  <div>
    <div> {{ message }} ... </div> <div>{{ fromServer }}</div></div
  >
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "IndexPage",
    data() {
      return {
        message: "",
        fromServer: ""
      };
    },

    async mounted() {
      // axios post to api/express and console.log the response
      const response = await this.$axios.post("/api/express", {
        info: "hello"
      });
      this.message = response.data;

      const respons2 = await this.$axios.get("/api/", {});
      this.fromServer = respons2.data.message;
      const sendEmail = await this.$axios.post("/api/send-email", {
        email: "weirdfalcao@gmail.com",
        name: "ov",
        message: "hello from nuxt..." + Math.random()
      });
      console.log(JSON.stringify(sendEmail, null, 2));
    }
  });
</script>
