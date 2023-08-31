const { createApp } = Vue

createApp({
  data() {
    return {
        // titolo
        title: 'To Do List',
        // to do list
        list:[
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'fare la lavatrice',
                done: false
            },
            {
                text: 'fare la lavastoviglie',
                done: false
            },
        ],
        newTask:''


    }
  },
  methods:{
    addNewTask(){
        const taskObj = {
            text:this.newTask,
            done:false
        }
        this.list.unshift(taskObj)
        this.newTask = '';
    },
    taskDone(index){
        if (this.list[index].done == false) {
            this.list[index].done = true
        }else{
            this.list[index].done = false

        }
    },
    removeTask(index){
        this.list.splice(index,1)
    },
  },
}).mount('#app')