// import Vuex, { createNamespacedHelpers } from 'vuex';
// import {
//   DefineActions,
//   DefineGetters,
//   DefineMutations
// } from 'vuex-type-helper';
// import { Todo } from '~/components/interface/Todo';

// const todoList: Todo[] = [
//   {
//     content: 'hogehoge',
//     created: '2019-04-30 15:30'
//   },
//   {
//     content: 'hogehogehoge',
//     created: '2019-04-30 15:40'
//   },
//   {
//     content: 'fugafuga',
//     created: '2019-04-30 16:00'
//   },
//   {
//     content: 'fugafugafuga',
//     created: '2019-04-30 16:10'
//   }
// ];

// export interface State {
//   todos: Todo[];
// }

// export interface Getters {
//   todos: Todo[];
// }

// export interface Mutations {
//   insert: {};
//   remove: {};
// }

// export interface Actions {
//   insertAction: {};
//   removeAction: {};
// }

// export const state: State = {
//   todos: todoList
// };

// export const getters: DefineGetters<Getters, State> = {
//   todos: state => state.todos
// };

// export const mutations: DefineMutations<Mutations, State> = {};
