import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, Stack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Blog</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 4 }}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <Heading as="h3" size="md">Recent Posts</Heading>
            <Divider />
            <Text>Recent Post 1</Text>
            <Text>Recent Post 2</Text>
            <Text>Recent Post 3</Text>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaFacebook /></Link>
              <Link href="#"><FaInstagram /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;