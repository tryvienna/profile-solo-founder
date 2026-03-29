import { definePlugin } from '@tryvienna/sdk';
import { ProfileMenuBarIcon } from './ui/MenuBarIcon';
import { ProfileMenuBarContent } from './ui/MenuBarContent';

export const profilePlugin = definePlugin({
  id: 'founder_badge',
  name: 'Solo Technical Founder',
  description: 'Quick actions and tools for solo founders',
  icon: { text: '🚀' },

  integrations: [],
  entities: [],

  canvases: {
    'menu-bar': {
      icon: ProfileMenuBarIcon,
      component: ProfileMenuBarContent,
      label: 'Solo Technical Founder',
      priority: 50,
    },
  },
});
