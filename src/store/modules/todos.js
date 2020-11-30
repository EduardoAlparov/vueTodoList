const todos = {
  state: {
    todos: [],
    filter: 'all'
  },
  mutations: {
    checkTodo(state, todo) {
      state.todos = state.todos.map(item => (item.id === todo.id ? todo : item));
    },
    filterTodos(state, filter) {
      state.filter = filter;
    },
    removeTodo(state, todoId) {
      state.todos = state.todos.filter(item => item.id !== todoId)
      // console.log(todoId);
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {},
  getters: {}
}

export default todos;