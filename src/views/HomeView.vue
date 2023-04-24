<template>
  <main>
<p @click="test()">123</p>
      <p>{{values}}</p>
  </main>
</template>

<script setup>
import {ref} from "vue";
let values=ref(0)
let test=()=>{
  values.value++
  console.log('1222')
}
</script>