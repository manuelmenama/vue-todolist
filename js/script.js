console.log('Ciao vuejs!');


const {createApp} = Vue;

createApp({
  data() {
    return {

      taskThings: [
        {
          name: "Portare fuori il cane",
          taskDone: false
        },
        {
          name: "Portare fuori il gatto",
          taskDone: true
        },
        {
          name: "Portare fuori il nonno",
          taskDone: false
        },
      ]
    }
  },
  methods: {

  },
  mounted() {
    console.log("Mounted 'vue-carousel'");
  }
}).mount("#app");

