import { Container, Stack, Text, useColorMode } from '@chakra-ui/react'
import { ProjectCard } from '../../components/ProjectCard'

const projects = [
  {
    title: 'Go Web App',
    description:
      'Web application built with Go. It allows you to manage products',
    link: 'https://github.com/leosantosw/go-web-app'
  },
  {
    title: 'Customers Api',
    description:
      'This project is a serverless application designed to manage customer data.',
    link: 'https://github.com/leosantosw/customers-api'
  },
  {
    title: 'My portfolio website',
    description:
      'This is a Next.js portfolio built with Chakra UI and TypeScript.',
    link: 'https://github.com/leosantosw/leosantos.me'
  }
]

export function Projects() {
  const { colorMode } = useColorMode()
  const isDarkMode = colorMode === 'dark'

  return (
    <Container
      px={[8, 4, 2]}
      maxWidth="720px"
      display="flex"
      flexDir="column"
      justifyContent="center"
    >
      <Text
        fontSize={['2xl', '3xl']}
        fontWeight="extrabold"
        letterSpacing="8"
        textAlign="justify"
        py="4"
        color={isDarkMode ? 'gray.50' : 'blue.900'}
      >
        Projects
      </Text>

      <Stack spacing="4">
        {projects.map((project) => (
          <ProjectCard
            key={project.link}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </Stack>
    </Container>
  )
}
