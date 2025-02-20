import {
  // Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  // useBreakpointValue,
  useColorMode
} from '@chakra-ui/react'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../screens/pattens/Header'

export default function About() {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  // const isMobileVersion = useBreakpointValue({
  //   base: true,
  //   lg: false
  // })

  const gradientColorText = isDarkMode
    ? 'linear(to-l, gray.50, blue.200)'
    : 'linear(to-l, blue.850, gray.700)'

  return (
    <>
      <Head>
        <title>Leo Santos - About Me</title>
      </Head>

      <Header />

      <Container
        p={6}
        maxWidth="800px"
        display="flex"
        flexDir="column"
        justifyContent="center"
        gap="4"
      >
        <Flex flexDir="row" alignItems="center">
          <Heading
            bgGradient={gradientColorText}
            bgClip="text"
            as="h2"
            size="lg"
            letterSpacing="8"
            textAlign="justify"
          >
            Sobre Mim
          </Heading>
          <Text pl="2" fontSize="4xl" as="span" aria-label="ilha">
            🏝️
          </Text>
        </Flex>

        <Flex flexDir="column" fontSize="22px">
          <Text textAlign="justify" py="4" pr={['0', '6']} fontSize="22px">
            Sou um engenheiro de software focado em desenvolver soluções
            escaláveis e eficientes. Trabalho com tecnologias modernas, criando
            sistemas robustos e de alto desempenho.
          </Text>

          <Text textAlign="justify">
            Sempre buscando inovação, estou explorando novas arquiteturas e
            práticas de desenvolvimento para entregar software de qualidade.
          </Text>
        </Flex>
      </Container>

      <Container
        p={6}
        maxWidth="800px"
        display="flex"
        flexDir="column"
        justifyContent="center"
      >
        <Flex flexDir="row" alignItems="center">
          <Heading
            bgGradient={gradientColorText}
            bgClip="text"
            as="h2"
            size="lg"
            letterSpacing="8"
            textAlign="justify"
          >
            Jornada na Programação
          </Heading>
          <Text pl="2" fontSize="4xl" as="span" aria-label="ilha">
            💻
          </Text>
        </Flex>

        <Flex flexDir="column" fontSize="22px">
          <Text textAlign="justify" py="4" pr={['0', '6']}>
            Nascido no interior de{' '}
            <Link
              href="https://pt.wikipedia.org/wiki/Alagoas"
              isExternal
              color="blue.700"
              fontWeight="bold"
            >
              Alagoas
            </Link>
            , minha paixão por programação começou na adolescência. Desde o
            ensino médio, eu me aventurava em aulas básicas e praticava sozinho,
            mas as oportunidades na minha cidade eram limitadas. Determinado a
            transformar esse interesse em carreira, decidi buscar novos
            horizontes. <br /> Viajei para{' '}
            <Link
              href="https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo"
              isExternal
              color="blue.700"
              fontWeight="bold"
            >
              São Paulo
            </Link>{' '}
            e iniciei um curso na Alura, onde aprendi a programar de verdade e
            desenvolvi meus primeiros projetos reais.
          </Text>

          <Text textAlign="justify" py="4">
            Em vez de focar em vestibulares, usei meu tempo livre para dominar
            os fundamentos da programação, focando em Python e JavaScript —
            linguagens com maior disponibilidade de tutoriais gratuitos. Após o
            ensino médio, com uma base sólida, comecei um curso técnico em
            Análise e Desenvolvimento de Sistemas.
          </Text>

          <Text textAlign="justify" py="4">
            Do meu primeiro emprego veio com o programa{' '}
            <Link
              href="https://www.oracle.com/br/education/oracle-next-education/"
              isExternal
              color="blue.700"
              fontWeight="bold"
            >
              Oracle ONE
            </Link>
            , da Alura. Atuei como aprendiz por seis meses e, com dedicação, fui
            efetivado como Desenvolvedor Júnior em tempo recorde. Dois anos
            depois, conquistei uma promoção a Desenvolvedor Pleno. <br />
            Hoje, com quatro anos de experiência, sigo evoluindo em um campo que
            não para de mudar, guiado por um fluxo que define minha jornada:{' '}
            <Text as="span" fontWeight="bold" color="blue.700">
              Aprender {'->'} Criar {'->'} Ensinar
            </Text>
            .
          </Text>

          <Text textAlign="justify" py="4">
            Essa trajetória reflete minha resiliência e meu compromisso com o
            aprendizado contínuo. De{' '}
            <Link
              href="https://pt.wikipedia.org/wiki/Alagoas"
              isExternal
              color="blue.700"
              fontWeight="bold"
            >
              Alagoas
            </Link>{' '}
            a{' '}
            <Link
              href="https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo"
              isExternal
              color="blue.700"
              fontWeight="bold"
            >
              São Paulo
            </Link>
            , da curiosidade adolescente à carreira consolidada, a programação
            me abriu portas — e eu sigo em busca de novos desafios.
          </Text>
        </Flex>
      </Container>

      <Footer />
    </>
  )
}
