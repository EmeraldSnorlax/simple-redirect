# simple-redirect


A client side redirect service.

## Adapting for your domain

Edit `app.html` to change the text shown to users with JavaScript disabled.

Edit `src/routes/__layout.svelte` to change the destination and text:

```ts
// ...
if (browser) {
  // Replace snorlax.cc with your old domain, and snorlax.sh with your new domain.
  destination = window.location.href.replace("snorlax.cc", "snorlax.sh");
  const tick = setInterval(() => {
// ...
```

```html
<!-- ... -->
<h1 class="text-white text-5xl text-center">snorlax.cc is moving...</h1>
<p class="text-true-gray-300 text-center text-xl my-2">
  The new location for this content is <a href={destination}
    >{destination}</a
  >
</p>
<!-- ... -->
```

This can be hosted on any static content host, eg Cloudflare Pages.

## Scripts

```bash
yarn dev
```

```bash
yarn build # --> ./dist
```

```bash
yarn preview # Don't use in prod.
```

## Licence

BSD-3-Clause

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
