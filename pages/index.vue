<template>
  <section class="container">
    <Logo />
    <h1>Todo App</h1>
    <p>
      <input
        v-model="content"
        type="text"
        name="content"
        @focus="setFindStatus"
      />
    </p>
    <div>
      <button @click="insert">save</button>
      <button @click="find">find</button>
    </div>
    <ul>
      <li v-for="(todo, index) in showTodos" :key="index">
        <span>{{ todo.content }}</span>
        <span>({{ todo.created }})</span>
        <span>x</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
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
    ...mapState(['todos']),
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
    insert() {
      this.$store.commit('insert', { content: this.content });
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
    }
  }
});
</script>

<style lang="scss">
.container {
  margin: 50px;
}
</style>
