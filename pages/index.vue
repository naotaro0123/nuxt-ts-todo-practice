<template>
  <section class="container">
    <Logo />
    <h1>Todo App</h1>
    <p><input type="text" name="content" /></p>
    <div>
      <button>save</button>
      <button>find</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
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

export default Vue.extend({
  components: {
    Logo
  },
  data() {
    return {
      content: ''
    };
  },
  computed: {
    ...mapState(['todos'])
  }
});
</script>

<style lang="scss">
.container {
  margin: 50px;
}
</style>
