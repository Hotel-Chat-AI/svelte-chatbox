# @hotelchatai/svelte-chatbox

A plugin to simplify embedding the chatbox iframe within svelte websites.

## Example
> [!IMPORTANT]  
> Place the `Bot` component in the root `+layout.svelte`, at the bottom of the file (so that `Bot` loads last).
```svelte
<Bot
  src="https://v2.hotelchatai.com"
  bot="website"
  theme="forest"
  enableTickets={false}
  displayName="Amei (阿美)"
/>
```

## Parameters
- `src` - The bot root endpoint (almost always `"https://v2.hotelchatai.com"`)
- `bot` - Bot codename corresponding to the hotel. For example, "roumei" for Roumei Boutique Hotel. "website" corresponds to our website's chatbot. Ask us for hotel codenames.
- `theme` - Any of [Daisy UI themes](https://daisyui.com/docs/themes/).
  - Recommended dark themes: "dracula", "forest", "business", "night", "sunset"
  - Recommended light themes: "nord", "autumn"
- `enableTickets` - Enables users to open tickets that hotel workers can check. Recommend leaving off to not confuse users for now.
- `displayName` - Robot's visible chatbox name
