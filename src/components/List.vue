<template>
  <div class="hello">
    <h1 v-for="title in task">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["task"],
  setup(props) {
    const task = props.task;
    return { task }
  }
};
</script>

