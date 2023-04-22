<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="root">

  <header>
    <div class="wrapper">
      <nav class="nav-bar">
        <RouterLink class="nav-item" to="/">Collection</RouterLink>
        <RouterLink class="nav-item" to="/about">Story-Ideas</RouterLink>
        
      </nav>
    </div>
  </header>
<div class="content-wrapper">
  <RouterView />
</div>
</div>

</template>

<style scoped>
.nav-bar{
  display: flex;
}
.nav-bar:after{
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background-color:  var(--color_nav_line);
}
.nav-item{
  display: block;
  padding: 1rem 2rem;
  font-weight: bold;
  font-size: var(--menu-font-size);
  color: var(--color_nav_line);

}
.router-link-active{
  color: var(--color_nav);
}
.content-wrapper{
  padding-top: 1rem;
}
</style>
