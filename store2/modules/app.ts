import Vuex, { createNamespacedHelpers } from 'vuex';
import {
  DefineActions,
  DefineGetters,
  DefineMutations
} from 'vuex-type-helper';
import { Todo } from '~/components/interface/Todo';

const todoList: Todo[] = [
  {
    content: 'hogehoge',
    created: '2019-04-30 15:30'
  },
  {
    content: 'hogehogehoge',
    created: '2019-04-30 15:40'
  },
  {
    content: 'fugafuga',
    created: '2019-04-30 16:00'
  },
  {
    content: 'fugafugafuga',
    created: '2019-04-30 16:10'
  }
];

export interface State {
  todos: Todo[];
}

export interface Getters {
  todos: Todo[];
}

export interface Mutations {
  insert: {};
  remove: {};
}

export interface Actions {
  insertAction: {};
  removeAction: {};
}

export const state: State = {
  todos: todoList
};

export const getters: DefineGetters<Getters, State> = {
  todos: state => state.todos
};

export const mutations: DefineMutations<Mutations, State> = {
  insert: (state, payload) => {
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
      content: (<Todo>payload).content,
      created: formatedDate
    });
  },
  remove: (state, payload) => {
    const todo = <Todo>payload;
    for (let i = 0; i < state.todos.length; i++) {
      const stateTodos = state.todos[i];
      if (
        stateTodos.content === todo.content &&
        stateTodos.created === todo.created
      ) {
        // eslint-disable-next-line no-console
        console.log(`remove ${todo.content}`);
        state.todos.splice(i, 1);
        return;
      }
    }
  }
};

export const actions: DefineActions<Actions, State, Mutations, Getters> = {
  insertAction({ commit }, payload) {
    commit('insert', payload);
  },
  removeAction({ commit }, payload) {
    commit('remove', payload);
  }
};

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('app');

export const app = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
