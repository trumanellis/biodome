import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
  site: 'https://biodome.agualila.earth',
  integrations: [
    starlight({
      title: 'BioDome',
      description: 'Open-source architecture for building with invasive eucalyptus in Portugal. Turn fire-fuel trees into fire-resistant homes and food-growing greenhouses.',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/truman369/biodome' },
      ],
      customCss: ['./src/styles/custom.css'],
      tableOfContents: false,
      plugins: [starlightImageZoom()],
      components: {
        Hero: './src/components/Hero.astro',
      },
      head: [
        // Open Graph image — fallback for every page that doesn't override
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://biodome.agualila.earth/assets/gothic-greenhouse-long-exterior.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1535' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '1024' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'A tall gothic-arched eucalyptus-pole greenhouse on a Portuguese hillside at golden hour' } },
        // Twitter / X large preview card
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://biodome.agualila.earth/assets/gothic-greenhouse-long-exterior.png' } },
        { tag: 'meta', attrs: { name: 'twitter:title', content: 'BioDome — Turn Invasive Trees Into Fire-Resistant Homes' } },
        { tag: 'meta', attrs: { name: 'twitter:description', content: 'Open-source architecture for building with eucalyptus in Portugal.' } },
      ],
      sidebar: [
        {
          label: 'The Story',
          items: [
            { label: 'The Silent Invasion', link: '/#the-silent-invasion' },
            { label: 'Two Problems, One Dome', link: '/#two-problems-one-dome' },
            { label: 'What If Removal Created Value?', link: '/#what-if-removal-created-value' },
            { label: 'How This Design Was Born', link: '/#how-this-design-was-born' },
          ],
        },
        {
          label: 'Fundamentals',
          autogenerate: { directory: 'fundamentals' },
        },
        {
          label: 'Designs',
          items: [
            { label: 'Choose Your Design', link: '/start-here/03-choose-your-design/' },
            { label: 'Design Variants', link: '/start-here/04-design-variants/' },
          ],
        },
        {
          label: 'Gothic Tunnel Greenhouse (30m², 6.5m tall)',
          badge: { text: 'Start Here', variant: 'success' },
          autogenerate: { directory: 'gothic-greenhouse' },
        },
        {
          label: 'Greenhouse BioDome (28m²)',
          collapsed: true,
          autogenerate: { directory: 'greenhouse' },
        },
        {
          label: 'Standard BioDome (28m²)',
          collapsed: true,
          autogenerate: { directory: 'standard-biodome' },
        },
        {
          label: 'Earth Sheltered SolarPod (35m²)',
          collapsed: true,
          badge: { text: 'WIP', variant: 'caution' },
          autogenerate: { directory: 'earth-sheltered' },
        },
        {
          label: 'Reference',
          items: [
            'reference/01-living-roof',
            'reference/02-finishing',
            'reference/03-fire-safety',
            'reference/04-moisture',
            'reference/05-maintenance',
          ],
        },
      ],
    }),
  ],
});
