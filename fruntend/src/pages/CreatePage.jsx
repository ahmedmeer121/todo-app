import { Box, Center, Container, Heading, useColorModeValue, Button, VStack, useToast} from '@chakra-ui/react';
import React from 'react'
import { useProductStore } from '../../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: "",
    image: "",
  });

const toast = useToast()
  const {createProduct} = useProductStore()

  const handleAddProduct = async() =>{
    const {success,message} = createProduct(newProduct)
    // console.log("success:",success);
    // console.log("message:",message);
    if(!success){
      toast({
        title: "Error",
        description: message,
        status: "error" ,
        // duration: 5000,
        isClosable: true,
      });
    } else{
      toast({
        title: "Success",
        description: message,
        status: "success",
        // duration: 5000,
          isClosable: true,
        });
    }

  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={'Center'}>Create New Product</Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")}
          p={6} rounded={"lg"} shadow={"md"}>

          <VStack spacing={4}>

            <input
              placeholder='Product Name'
              name='name'
              value={newProduct.name} 
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}/>
            
            <input
              placeholder='Price'
              name='name'
              value={newProduct.Price} 
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}/>

            <input
              placeholder='Image URL'
              name='image'
              value={newProduct.image} 
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}/>

              <Button colorscheem='blue' onClick={handleAddProduct} w='full'>
                Add Product 
              </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage