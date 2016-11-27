'use strict';

Vue.component('todo-item', {
	template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
  ',
	props: ['title']
});

var app = new Vue({
	el: '#todo-list-example',
	data: {
		newTodoText: '',
		todos: ['DO', 'TAKE', 'MOW']
	},
	methods: {
		addNewTodo: function addNewTodo() {
			console.log('add : ' + undefined.newTodoText);
			undefined.todos.push(undefined.newTodoText);
			undefined.newTodoText = '';
		},
		reverseTodo: function reverseTodo() {
			console.log('reverse');
			undefined.todos.reverse();
		}
	}
});
