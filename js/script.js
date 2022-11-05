console.log('Ciao vuejs!');


const {createApp} = Vue;

createApp({
  data() {
    return {

      newTaskString: "",
      generalError: "",
      findDoubleTask: undefined,

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
    //funzione per cancellare i task gia eseguiti
    deleteTask(index) {
      this.taskThings[index].errorMsg = '';
      if(!this.taskThings[index].taskDone){
        this.taskThings[index].errorMsg = "Devi prima completare il task!";
      }else{
        this.taskThings.splice(index, 1);
      }
    },
    //funzione per aggiungere task
    addTask() {
      this.generalError = '';

      //cerca prima dei task con lo stesso nome dell'array
      findDoubleTask = this.taskThings.find((item) => item.name.toLowerCase().includes(this.newTaskString.toLowerCase()))
      console.log(findDoubleTask);

      //primo controllo dei task presenti e secondo della lunghezza
      if(findDoubleTask) {
        this.generalError = "Task gia presente!";
        this.newTaskString = "";
      }else {
        if(this.newTaskString.length < 5) {
          this.generalError = "Inserire min. 5 caratteri";
        }else {
          const newTask = {
            name: this.newTaskString,
            taskDone: false
          }
          this.taskThings.unshift(newTask);
          this.newTaskString = '';
        }
      }
    }
  },
  mounted() {
    console.log("Mounted 'vue-carousel'");
  }
}).mount("#app");

