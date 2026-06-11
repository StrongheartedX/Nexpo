import { defaultConfig } from '@tamagui/config/v5'
import { animationsReanimated } from '@tamagui/config/v5-reanimated'
import { createTamagui } from 'tamagui'

export const config = createTamagui({
  ...defaultConfig,
  animations: animationsReanimated,
  media: {
    ...defaultConfig.media,
  },
  settings: {
    ...defaultConfig.settings,
    styleCompat: 'legacy',
    defaultPosition: 'relative',
    onlyAllowShorthands: false,
  },
})

type OurConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends OurConfig {}
}
