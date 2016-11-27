Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
  props: ['title']
})

var todoApp = new Vue({
  el: '#todoApp',
  data: {
    title: "Welcome to Vue.js",
    fontStyle: {
        fontSize: "20px"
    },
    seen: true,
    todo: "",
    todos: []
  },
  methods: {
    addTodo: function() {
        this.todos.push({
        name: this.todo,
        doing: false
      })
      this.todo = ""
    },
    begin: function(index){
    	console.log('begin');
        this.todos[index].doing = !this.todos[index].doing;
    },
    hidden: function() {
      console.log('hidden');
      if (this.seen == true)this.seen = false;
      else this.seen = true;
    }
  }
})