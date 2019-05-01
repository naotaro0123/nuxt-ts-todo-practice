<template>
  <section class="container">
    <Logo />
    <h1>Todo App</h1>
    <p>
      <input
        v-model="content"
        type="text"
        name="content"
        placeholder="Input Todo"
        @focus="setFindStatus"
      />
      <button @click="insert">save</button>
      <button @click="find">find</button>
    </p>
    <ul>
      <li v-for="(todo, index) in showTodos" :key="index">
        <span>{{ todo.content }}</span>
        <span>({{ todo.created }})</span>
        <span @click="remove(todo)">X</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Logo from '~/components/Logo.vue';
import { Todo } from '~/components/interface/Todo';

export default Vue.extend({
  components: {
    Logo
  },
  data() {
    return {
      content: '',
      isFind: false
    };
  },
  computed: {
    ...mapGetters(['todos']),
    showTodos(): Todo[] {
      if (!this.isFind) {
        return this.todos;
      } else {
        const data = this.todos.filter(element => {
          return element.content
            .toLowerCase()
            .includes(this.content.toLowerCase());
        });
        return data;
      }
    }
  },
  methods: {
    ...mapActions(['insertAction', 'removeAction']),
    insert() {
      this.insertAction(this.content);
      this.content = '';
    },
    find() {
      this.isFind = true;
    },
    setFindStatus() {
      if (this.isFind) {
        this.isFind = false;
        this.content = '';
      }
    },
    remove(todo) {
      this.removeAction(todo);
    }
  }
});
</script>

<style lang="scss">
.container {
  h1 {
    font-size: 32pt;
  }

  p {
    width: 390px;
    height: 40px;
    justify-content: center;
    display: flex;
  }

  input {
    width: 220px;
    height: 100%;
    padding: 8px 4px;
    font-size: 14pt;
  }

  button {
    width: 50px;
    height: 100%;
    font-size: 12pt;
  }

  ul {
    margin-top: 20px;
    padding: 0;
  }

  li {
    display: flex;
    list-style: none;
    margin: 5px 0;
    font-size: 14pt;
  }

  span {
    margin: 0 5px;
  }
}
</style>
