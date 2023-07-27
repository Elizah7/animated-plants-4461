import React, { useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const ProductForm = () => {
  const [product, setProduct] = useState({
    title: '',
    images: {
      image1: '',
      image2: '',
      image3: '',
      image4: '',
    },
    rating: 0,
    count: 0,
    description: '',
    discount: '',
    off_price: 0,
    brand: '',
    color: '',
    sizes: [],
    gender: '',
    price: '',
    size: '',
    categories: '',
    qty: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send product data to the backend
    console.log(product);
    // You can make an API request to send the product data to your backend endpoint here
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <Flex direction="column">
          <FormControl mb={4}>
            <FormLabel>Title</FormLabel>
            <Input type="text" name="title" value={product.title} onChange={handleChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Image 1</FormLabel>
            <Input type="text" name="images.image1" value={product.images.image1} onChange={handleChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Image 2</FormLabel>
            <Input type="text" name="images.image2" value={product.images.image2} onChange={handleChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Image 3</FormLabel>
            <Input type="text" name="images.image3" value={product.images.image3} onChange={handleChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Image 4</FormLabel>
            <Input type="text" name="images.image4" value={product.images.image4} onChange={handleChange} />
          </FormControl>
          {/* Rest of the form fields */}
          {/* Add more FormControl components for the remaining product properties */}
          {/* Example: Rating, Description, Discount, etc. */}
          <Button type="submit" colorScheme="blue" mt={4}>
            Create Product
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default ProductForm;
