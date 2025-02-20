import Link from 'next/link'
import Image from 'next/image'
import {
  Text,
  Container,
  Stack,
  useColorMode,
  Box,
  Heading
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import rocketImg from '../../public/assets/rocket-launch.svg'

const MotionHeading = motion(Heading)
const MotionText = motion(Text)

export function ContentWrapper() {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  const gradientColorText = isDarkMode
    ? 'linear(to-l, gray.50, blue.800)'
    : 'linear(to-l, #253c9c, #2d3142)'

  const gradientColorLink = isDarkMode
    ? 'linear(to-l, gray.400, green.500)'
    : 'linear(to-l, gray.800, green.700)'

  return (
    <Container
      p={2}
      maxWidth="720px"
      display="flex"
      flexDir="column"
      justifyContent="center"
    >
      <Stack p={[8, 6, 0]} spacing={4} align="flex-start">
        <MotionHeading
          pt={6}
          bgGradient={gradientColorText}
          bgClip="text"
          fontSize={['3xl', '5xl']}
          fontWeight="extrabold"
          letterSpacing="8"
          textAlign="left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Olá, seja bem-vindo!
        </MotionHeading>

        <Box display="flex" gap={4} alignItems="center">
          <MotionText
            bgGradient={gradientColorText}
            bgClip="text"
            fontSize={['2xl', '4xl']}
            fontWeight="bold"
            letterSpacing="4"
            textAlign="left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Eu sou Leo Santos
          </MotionText>
          <MotionText
            as="span"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image src={rocketImg} width={40} height={40} alt="Rocket" />
          </MotionText>
        </Box>

        <MotionText
          py={2}
          fontSize={['lg', 'xl']}
          fontWeight="light"
          textAlign="left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Desenvolvedor de Software na{' '}
          <Link href="https://www.marche.com.br" target="_blank">
            <Text
              as="span"
              fontWeight="semibold"
              bgGradient={gradientColorLink}
              bgClip="text"
              textDecoration="underline"
            >
              St Marche
            </Text>
          </Link>
        </MotionText>
      </Stack>
    </Container>
  )
}
