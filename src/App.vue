<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  dl,
  dd,
  hr {
    margin: 0;
  }

  body{

  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .clearfix::after{
    content: "";
    clear: both;
    display: block;
  }
  input{
    outline: 0;
    border: 0;
  }
</style>
