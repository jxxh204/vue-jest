<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <List :task="task" />
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";

export default {
  name: "Home",
  components: {
    List,
  },
  setup(){
    const task = [
      {id:1, title: '아무것도하기싫다.' },
      {id:2, title: 'jest ㅈ같다.' }
  ];
    

  return { task }
  }
  };
</script>
