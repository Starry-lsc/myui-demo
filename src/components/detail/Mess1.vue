<template>
    <div class="mess1">
      <div class="cal"><el-calendar v-model="value"></el-calendar></div>

    </div>
</template>

<script>
    export default {
        name: "Mess1",
      data() {
        return {
          value: new Date()}
      }
    }
</script>

<style scoped>
.cal{width: 700px;float: right}
</style>
