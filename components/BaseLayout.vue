<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
