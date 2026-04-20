# Vampirism Website
## https://vampirism.dev

Official project site with links to related official and non-official mods and the official Vampirism server.

---

## Adding an Addon

The addon list is defined in [`src/data/addons.ts`](src/data/addons.ts) as a typed TypeScript array. To add a new entry, append an object to the `addons` array.

### Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | ✅ | Display name of the addon |
| `description` | `string` | ✅ | Short description (3–4 sentences max) |
| `category` | `'Official' \| '3rd Party' \| 'Older/Outdated'` | ✅ | Controls which filter tab the card appears under |
| `image` | `string` | — | Path to the image in `public/assets/img/mods/` |
| `imageStyle` | `'banner' \| 'icon'` | — | `banner` = full-width image; `icon` = centered with padding |
| `curseforge` | `string` | — | Full CurseForge mod URL |
| `modrinth` | `string` | — | Full Modrinth mod URL |
| `wiki` | `string` | — | Wiki or GitHub wiki URL |

At least one of `curseforge`, `modrinth`, or `wiki` should be provided so the card has a download button.

### Image assets

Place the image in `public/assets/img/mods/`. Banners work best at roughly 16:9 or wider; icons can be square. Both display at a fixed height of `224px` in the card — use `imageStyle: 'banner'` for wide artwork and `imageStyle: 'icon'` for square/portrait images.

### Example

```ts
{
  name: 'My Vampirism Addon',
  description: 'A short description of what the addon does and why someone would want it.',
  category: '3rd Party',
  image: '/assets/img/mods/my-addon-banner.png',
  imageStyle: 'banner',
  curseforge: 'https://www.curseforge.com/minecraft/mc-mods/my-addon',
  modrinth: 'https://modrinth.com/mod/my-addon',
},
```

### Category guide

- **Official** — maintained by TeamLapen (Vampirism Integrations, Werewolves, Godly Vampirism)
- **3rd Party** — actively maintained community mods
- **Older/Outdated** — unmaintained or legacy mods kept for historical reference
