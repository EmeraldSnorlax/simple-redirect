<script>
  import { browser } from "$app/env";
  import { fade } from "svelte/transition";

  import "../app.postcss";
  const redirectWait = 7;
  let remaining = redirectWait;
  let destination;
  let paused = false;
  if (browser) {
    destination = window.location.href.replace("snorlax.cc", "snorlax.sh");
    const tick = setInterval(() => {
      if (remaining >= 0.01 && !paused) {
        remaining -= 0.01;
      } else if (!paused) {
        window.location.replace(destination);
        clearInterval(tick);
      }
    }, 10);
  }
</script>

<div class="bg-true-gray-900 h-screen flex items-center justify-center">
  <div class="bg-true-gray-800 rounded-md shadow-lg">
    <div class="p-4">
      <h1 class="text-white text-5xl text-center">snorlax.cc is moving...</h1>
      <p class="text-true-gray-300 text-center text-xl my-2">
        The new location for this content is <a href={destination}
          >{destination}</a
        >
      </p>
      <p
        class="text-white text-center text-3xl my-4 transition-all
        {paused === true ? 'text-true-gray-400' : ''}"
      >
        {#if !paused}
          <span
            >Redirecting in <span class="font-mono">{remaining.toFixed(0)}</span
            > seconds.</span
          >
        {:else}
          <span>You hovered the footer, so we paused this.</span>
        {/if}
      </p>
    </div>
    <div
      class="bg-gradient-to-r from-green-400 to-purple-500 h-2 rounded-md"
      style="width: {(remaining / redirectWait) * 100}%"
      role="progressbar"
      aria-valuenow={remaining}
      aria-valuemin={0}
      aria-valuemax={redirectWait}
    />
  </div>
</div>
<footer
  on:mouseenter={() => {
    paused = true;
  }}
  on:mouseleave={() => {
    paused = false;
  }}
  class="absolute bottom-0 text-true-gray-300 bg-true-gray-800 w-full lg:flex lg:items-center lg:justify-between p-4"
>
  <p>fun fact: tiny text makes any footer look better.</p>
  <a>source code</a>
</footer>

<slot />
