<template>
  <button
    :disabled="disabled || false"
    :class="[
      'button',
      'button-' + (disabled ? 'disabled' : kind),
      size ? 'button-' + size : 'button-normal'
    ]"
    @click="handleClick"
  >
    <span>
      {{ text }}
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    text: {
      type: String
    },
    kind: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    }
  }
});
</script>

<style>
.button {
  font-size: 14px;
  font-weight: bold;
  border: solid 1px;
  border-radius: 5px;
  margin: 10px 10px 10px 0;
  padding: 2px 6px 3px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  -webkit-font-smoothing: antialiased;
}

.button:hover {
  opacity: 0.5;
}

.button-minimum {
  width: 120px;
  height: 45px;
}

.button-small {
  width: 140px;
  height: 45px;
}

.button-normal {
  width: 180px;
  height: 50px;
}

.button-large {
  width: 220px;
  height: 60px;
  font-size: 19px;
}

.button-full {
  width: 100%;
  height: 45px;
}

.button-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}

.button-primary {
  background-color: #337ab7;
  border-color: #2e6da4;
  color: #fff;
}

.button-success {
  background-color: #5cb85c;
  border-color: #4cae4c;
  color: #fff;
}

.button-info {
  background-color: #5bc0de;
  border-color: #46b8da;
  color: #fff;
}

.button-warning {
  background-color: #f0ad4e;
  border-color: #eea236;
  color: #fff;
}

.button-danger {
  background-color: #d9534f;
  border-color: #d43f3a;
  color: #fff;
}

.button-dark {
  color: #fff;
  background: #2a3c4d;
}

.button-disabled {
  color: #aaa;
  background: #ddd;
  border-color: #ddd;
  cursor: default;
}

.button span {
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
