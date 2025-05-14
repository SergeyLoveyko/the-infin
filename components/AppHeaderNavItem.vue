<template>
  <li class="nav__header-item">
    <a class="nav__header-link" href="#">
      <slot></slot>
    </a>
  </li>
</template>

<style lang="scss" scoped>

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