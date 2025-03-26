<script>
  let { src, ...props } = $props();
  let url = new URL(src);
  url.search = new URLSearchParams(props);

  let iframeEl;

  function onMessage(e) {
    const prefix = 'hotelchatai-size:';
    if (!e.data.includes(prefix)) return;
    const data = JSON.parse(e.data.replace(prefix, ''));
    iframeEl.style.width = data.width;
    iframeEl.style.height = data.height;
  }

  $effect(() => {
    window.addEventListener('message', onMessage);
    return () => {
      window.removeEventListener('message', onMessage);
    }
  })
</script>

<iframe
  title="hotel-chat-ai"
  src={url.toString()}
  style="position: fixed; right: 0px; bottom: 0px; border: none; width: 0; height: 0; max-width: 100%; max-height: 100dvh; z-index: 2147483647; color-scheme: auto;"
  allowtransparency="true"
  onload={() => {
    iframeEl.width = 640;
    iframeEl.height = 720;
  }}
  bind:this={iframeEl}
></iframe>