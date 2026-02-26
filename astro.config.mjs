import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom';

export default defineConfig({
  site: 'https://biodome.github.io',
  integrations: [
    starlight({
      title: 'BioDome',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/truman369/biodome' },
      ],
      customCss: ['./src/styles/custom.css'],
      tableOfContents: false,
      plugins: [starlightImageZoom()],
      components: {
        Hero: './src/components/Hero.astro',
      },
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
          label: 'Standard BioDome (28m²)',
          collapsed: true,
          autogenerate: { directory: 'standard-biodome' },
        },
        {
          label: 'Earth Sheltered SolarPod (30m²)',
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
