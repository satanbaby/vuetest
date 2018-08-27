<template>
  <div class="hello">
    <div class="btn-group">
      <router-link class="btn btn-outline-danger" to="/page/">子頁1</router-link>
      <router-link class="btn btn-outline-danger" to="/page/page2">子頁2</router-link>
      <router-link class="btn btn-outline-danger" to="/page/page3">子頁3</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;;
}
</style>
