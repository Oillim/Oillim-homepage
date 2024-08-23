import { Container, Box, Heading} from "@chakra-ui/react"
const Page = () => {
    return (
        <Container>
            <Box borderRadius={5} bg="red" p={3} mb={6} align="center">
                Hi, I&apos;m a small guy with huge passion in AI.
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Nguyen Minh Vu
                    </Heading>
                    <p>AI Engineer</p>
                </Box>
            
            </Box>
        </Container>
    )
}

export default Page