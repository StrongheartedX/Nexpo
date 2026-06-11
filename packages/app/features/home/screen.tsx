import { Trans } from '@lingui/react/macro'
import logo from 'app/assets/logo.png'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area'
import { useTheme } from 'app/provider/theme'
import { Image as RNImage } from 'react-native'
import { Button, Card, H2, H3, Image, ScrollView, Separator, Text, XStack, YStack } from 'tamagui'
import { AuthTestButton } from './auth-test-button'
import { LocaleDemo } from './locale-demo'
import { LoginTest } from './login-test'

const TECHNOLOGIES = [
  { name: 'Next.js 16', icon: '⚡' },
  { name: 'Expo SDK 56', icon: '📱' },
  { name: 'React 19', icon: '⚛️' },
  { name: 'tRPC', icon: '🔌' },
  { name: 'Supabase', icon: '🗄️' },
  { name: 'Tamagui', icon: '🎨' },
  { name: 'Lingui', icon: '🌍' },
  { name: 'Sentry', icon: '📊' },
] as const

export function HomeScreen() {
  const { resolvedTheme, setTheme } = useTheme()
  const { top, bottom, left, right } = useSafeArea()

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <YStack bg="$background" flex={1} pt={top} pb={bottom} pl={left} pr={right}>
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: bottom + 32,
        }}
      >
        <YStack
          padding="$6"
          gap="$8"
          alignItems="center"
          maxWidth={900}
          width="100%"
          alignSelf="center"
        >
          {/* Header Section */}
          <YStack width="100%" alignItems="center" gap="$6">
            {/* Theme Toggle */}
            <XStack width="100%" justifyContent="flex-end">
              <Button onPress={toggleTheme} size="$3" circular testID="theme-toggle-button">
                <Text color="white" fontWeight="600">
                  {resolvedTheme === 'dark' ? '☀️' : '🌙'}
                </Text>
              </Button>
            </XStack>

            {/* Logo and Title */}
            <XStack alignItems="center" justifyContent="center" gap="$4">
              <YStack
                width={96}
                height={96}
                borderRadius="$4"
                bg="#111111"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
              >
                {typeof logo === 'number' ? (
                  <RNImage source={logo} style={{ width: 80, height: 80 }} resizeMode="contain" />
                ) : (
                  <Image
                    src={logo.src}
                    width={80}
                    height={80}
                    objectFit="contain"
                    alt="NEXPO Logo"
                  />
                )}
              </YStack>
              <YStack gap="$1">
                <H2 fontSize={42} lineHeight={48} fontWeight="800" letterSpacing={1}>
                  NEXPO
                </H2>
                <Text fontSize={14} opacity={0.7} color="$color">
                  <Trans>Cross-platform monorepo template</Trans>
                </Text>
              </YStack>
            </XStack>
          </YStack>

          {/* Description */}
          <Text
            fontSize={18}
            textAlign="center"
            lineHeight={28}
            maxWidth={600}
            color="$color"
            opacity={0.9}
          >
            <Trans>
              A production-ready monorepo template for building cross-platform applications with
              Next.js and React Native (Expo)
            </Trans>
          </Text>

          <Separator />

          {/* Key Features */}
          <YStack width="100%" gap="$4">
            <H3 textAlign="center" marginBottom="$2">
              <Trans>What's Included</Trans>
            </H3>
            <XStack flexWrap="wrap" gap="$3" justifyContent="center">
              {TECHNOLOGIES.map((tech) => (
                <Card
                  key={tech.name}
                  elevation={1}
                  size="$4"
                  borderWidth={1}
                  borderColor="$borderColor"
                  paddingHorizontal="$3"
                  paddingVertical="$5"
                  width={100}
                  minHeight={100}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize={28} lineHeight={36} marginBottom="$2">
                    {tech.icon}
                  </Text>
                  <Text fontSize={12} fontWeight="600" textAlign="center" color="$color">
                    {tech.name}
                  </Text>
                </Card>
              ))}
            </XStack>
          </YStack>

          <Separator />

          {/* Demo Section */}
          <YStack width="100%" gap="$6" maxWidth={600}>
            <YStack gap="$2" alignItems="center">
              <H3>
                <Trans>Demo Features</Trans>
              </H3>
              <Text fontSize={14} textAlign="center" color="$color" opacity={0.7}>
                <Trans>
                  Try out authentication and protected API endpoints to see the template in action
                </Trans>
              </Text>
            </YStack>

            <YStack gap="$5">
              <LoginTest />
              <AuthTestButton />
            </YStack>
          </YStack>

          <Separator />

          {/* Locale Demo Section */}
          <YStack width="100%" gap="$6" maxWidth={600}>
            <YStack gap="$2" alignItems="center">
              <H3>
                <Trans>Internationalization (i18n)</Trans>
              </H3>
              <Text fontSize={14} textAlign="center" color="$color" opacity={0.7}>
                <Trans>
                  Test the useLocale hook to switch languages and see how translations work in
                  real-time
                </Trans>
              </Text>
            </YStack>

            <LocaleDemo />
          </YStack>

          {/* Quick Links */}
          <YStack width="100%" gap="$3" maxWidth={500} paddingTop="$2">
            <Text fontSize={14} textAlign="center" opacity={0.6} color="$color">
              <Trans>Check the README.md for setup instructions and documentation</Trans>
            </Text>
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  )
}
