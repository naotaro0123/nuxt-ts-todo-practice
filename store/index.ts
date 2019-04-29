/* eslint-disable no-console */
import Vuex from 'vuex';
import { Todo } from '~/components/interface/Todo';

const todoList: Todo[] = [
  {
    content: 'hogehoge',
    created: '2019-03-31 15:30'
  },
  {
    content: 'fugafuga',
    created: '2019-03-31 16:00'
  }
];

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: todoList
    }),
    mutations: {
      insert: (state, todo: Todo) => {
        const date = new Date();
        const formatedDate =
          date.getFullYear() +
          '-' +
          ('00' + (date.getMonth() + 1)).slice(-2) +
          '-' +
          ('00' + (date.getDate() + 1)).slice(-2) +
          '-' +
          ('00' + (date.getHours() + 1)).slice(-2) +
          ':' +
          ('00' + (date.getMinutes() + 1)).slice(-2);
        state.todos.unshift({
          content: todo.content,
          created: formatedDate
        });
      },
      remove: (state, todo: Todo) => {
        for (let i = 0; i < state.todos.length; i++) {
          const stateTodos = state.todos[i];
          if (
            stateTodos.content === todo.content &&
            stateTodos.created === todo.created
          ) {
            console.log(`remove ${todo.content}`);
            state.todos.splice(i, 1);
            return;
          }
        }
      }
    }
  });
};

export default createStore;
