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
        let taskObj = {
            text:this.newTask,
            done:false
        }
        this.list.push(taskObj)
        this.newTask = ''
        console.log(this.list);
    }
  },
}).mount('#app')