<script setup>
const items = [
  'Home',
  'For Businesses',
  'For Individuals',
  'Capitalism 2.0',
  'Marketing Efforts'
  ]
</script>

<template>
  <nav class="header__nav nav__header">
    <ul class="nav__header-list">
      <li class="nav__header-item" v-for="item in items" :key="item">
        <a class="nav__header-link" href="#">
          {{ item }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>

  .nav__header-list {
    list-style: none; 
  }

  .nav__header-item {
    line-height: 1.3;
  }

  .nav__header-link {
    text-decoration: none;
    color: #121212;
    transition: all 0.2s;

    &:hover {
      color: #8f8f8f;
    }
  }

</style>