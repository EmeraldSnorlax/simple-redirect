<script>
  import "../app.postcss";
  const redirectWait = 5;
  let remaining = redirectWait;
</script>

<div class="bg-true-gray-900 h-screen flex items-center justify-center">
  <div class="bg-true-gray-800 rounded-md shadow-lg">
    <div class="p-4">
      <h1 class="text-white text-5xl text-center">snorlax.cc is moving!</h1>
      <p class="text-true-gray-300 text-center text-xl my-2">
        The new location for this content is <a href="https://snorlax.sh/"
          >snorlax.sh</a
        >
      </p>
      <p class="text-white text-center text-3xl my-4">
        You will automatically be redirected in {remaining} seconds.
      </p>
    </div>
    <div
      class="bg-gradient-to-r from-green-400 to-purple-500 h-2 rounded-md transition-all"
      style="width: 64%"
      role="progressbar"
      aria-valuenow={remaining}
      aria-valuemin={0}
      aria-valuemax={redirectWait}
    />
  </div>
</div>
<footer
  class="absolute bottom-0 text-true-gray-300 bg-true-gray-800 w-full lg:flex lg:items-center lg:justify-between p-4"
>
  <p>fun fact: tiny text makes any footer look better.</p>
  <a>source code</a>
</footer>

<slot />
