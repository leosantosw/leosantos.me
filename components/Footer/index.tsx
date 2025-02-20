import Link from 'next/link'
import { Flex, Text, useColorMode } from '@chakra-ui/react'
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'

import { GradientLine } from '../GradientLine'

interface FooterProps {
  fixed?: boolean
}
export function Footer({ fixed = false }: FooterProps) {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'
  return (
    <Flex
      borderTopWidth={2}
      width="full"
      marginTop="auto"
      direction="column"
      mt="6"
      position={fixed ? 'fixed' : 'relative'}
      bottom={0}
    >
      <Flex justifyContent="center" py="2">
        <Flex pt="2">
          <Text
            fontWeight="bold"
            fontSize={['medium', 'large']}
            mr="2"
            color={isDarkMode ? 'gray.50' : 'gray.800'}
          >
            Conecte-se comigo
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" py="2">
        <Flex flexDir="row">
          <Link href="https://github.com/leosantosw" target="_blank" passHref>
            <GithubLogo size="30" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/leosantos02"
            target="_blank"
            passHref
          >
            <LinkedinLogo size="30" />
          </Link>
          <Link href="#" target="_blank" passHref>
            <TwitterLogo size="30" />
          </Link>
        </Flex>
      </Flex>
      <GradientLine />
    </Flex>
  )
}
