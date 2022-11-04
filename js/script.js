console.log('Ciao vuejs!');


const {createApp} = Vue;

createApp({
  data() {
    return {

      indexCounter: 0,
      newTaskString: "",

      taskThings: [
        {
          name: "Portare fuori il cane",
          taskDone: false,
          errorMsg: ''
        },
        {
          name: "Portare fuori il gatto",
          taskDone: true,
          errorMsg: ''

        },
        {
          name: "Portare fuori il nonno",
          taskDone: false,
          errorMsg: ''
        },
      ]
    }
  },
  methods: {
    deleteTask(index) {
      this.taskThings[index].errorMsg = '';
      if(!this.taskThings[index].taskDone){
        this.taskThings[index].errorMsg = "Devi prima completare il task!"
      }else{
        this.taskThings.splice(index, 1)
      }
    },
    addTask() {
      const newTask = {
        name: this.newTaskString,
        taskDone: false
      }
      this.taskThings.unshift(newTask);
      this.newTaskString = '';
    }
  },
  mounted() {
    console.log("Mounted 'vue-carousel'");
  }
}).mount("#app");

