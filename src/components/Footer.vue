<template>
  <div class="footer">
    <p>
      <a href="/">FOSBlog</a> — An open-source blog for everyone in IT industry.
      With you every step of your journey.
    </p>

    <p>
      Built on
      <a href="https://astro.build/" target="_blank">Astro</a> — the open source
      software that powers <a href="/">FOSBlog</a> and other inclusive
      communities.
    </p>

    <p>FOSBlog &copy; 2022.</p>
  </div>
</template>

<style scoped>
.footer {
  @apply p-4 bg-gray-200 text-center text-sm text-gray-900 font-roboto;
}
.footer p {
  @apply my-3;
}
.footer a {
  @apply text-blue-600;
}
.footer a:hover,
.footer a:focus,
.footer a:active {
  @apply underline text-blue-700;
}
</style>
