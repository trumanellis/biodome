# BioDome

> **Turn Invasive Trees Into Fire-Resistant Homes**
> Open-source architecture for building with eucalyptus in Portugal.

This folder is the source for **biodome.agualila.earth**, an open-source build guide for turning invasive *Eucalyptus globulus* into fire-resistant homes and food-growing greenhouses. Eucalyptus covers about a quarter of Portugal's forests. It drinks the watershed and feeds the wildfires. The idea is that removing it should *create* value: every pole pulled out makes room for native forest and becomes the frame of a shelter.

The first test site is **Água Lila** in central Portugal. The design is still a concept that is now beginning to be built.

*Build the forest you want to see. Start with a home made from the trees that shouldn't be there.*

---

## The guide

The guide is an **Astro 5 + Starlight** documentation site. All the content lives in `src/content/docs/`:

| Section | What it covers |
|---|---|
| `index.mdx` | The story: the silent invasion, two problems and one dome, and how the design was born |
| `fundamentals/` | Harvesting, materials, treatment and walls |
| `start-here/` | Choosing a design and comparing the variants |
| `gothic-greenhouse/` | **Gothic Tunnel Greenhouse**: 30 m² and 6.5 m tall, for citrus, banana and papaya. *The place to start.* |
| `greenhouse/` | Greenhouse BioDome (28 m²) |
| `standard-biodome/` | Standard BioDome (28 m²): 11 pages covering everything from foundation and frame to bill of materials and floor plan |
| `earth-sheltered/` | Earth Sheltered SolarPod (35 m²). **Work in progress** |
| `reference/` | Living roof, finishing, fire safety, moisture and maintenance |

Other places:

- **`src/components/Hero.astro`** and **`src/styles/custom.css`** hold the landing hero and the theme.
- **`src/assets/`** holds images used in the docs.
- **`public/`** holds static files, the `CNAME`, and `viewers/`, which contains the interactive Three.js 3D models of the dome and the SolarPod.
- **`articles/gothic-arch-greenhouse/`** holds a long-form article with renders and diagrams.

## Research notes

| File | What it is |
|---|---|
| `IMPROVEMENTS.md` | A critical review of the guide: build-failure issues first, then a Top 10 priority list. **Read this before editing a build guide.** |
| `Corkcrete.md` | Cork, hemp and lime insulation: mixes, performance and Portuguese sourcing |
| `WOOL.md` | Waste Portuguese sheep's wool as insulation, compared with corkcrete |
| `IMAGE_GEN.md` | Image-generation prompts for Greenhouse BioDome renders |
| `archive/` | Earlier generations of the project: standalone HTML guides, terraced and SolarDome designs, old 3D viewers and models, and concept renders. It is kept for reference, but it is not part of the live site |

## Working on it

```
npm install
npm run dev       # local preview with live reload
npm run build     # builds the static site into dist/
npm run preview   # serves the built site
```

Your edits stay **drafts** on your own device until you seal them with **⌘S**. Sealing shares them with the other peers on this project.

Unlike the other sites, this project is *source*, so the app's **Site** view can't render it: there is no `index.html` at the root. Preview with `npm run dev`.

### Going live

**Sealing is publishing.** The Temples server runs a SyncEngine peer that holds this project. When a sealed change reaches it, the server peer runs `npm run build` and serves the resulting `dist/` as biodome.agualila.earth. Drafts never go live, so check `npm run build` passes on your machine before you seal.

*Status: the server peer that publishes is still being set up. Until it's running, the live site is still the old GitHub Pages build from `github.com/trumanellis/biodome`. DNS for `biodome` still points to Pages, and has to move to the Temples server when the server peer takes over.*

## Known loose ends

- **`README.md` is stale.** It describes the old plain-HTML version, not this Astro site. The licence it states is still right: **CC BY-SA 4.0**.
- The GitHub link in `astro.config.mjs` points to `truman369/biodome` rather than `trumanellis/biodome`.
- `IMPROVEMENTS.md` lists critical issues that have not all been fixed yet, including wall-thickness consistency, the R-value, rain protection while walls dry, and wattle treatment.

## Voice

Practical and generous, like a good build manual. Give real dimensions, real materials and honest caveats about what hasn't been tested yet. The *why* (fire, water, forest recovery) belongs in the story pages. The build pages should be steps someone can follow with their hands.
