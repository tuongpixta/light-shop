import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { ProductProps } from "../components/Product";
import Products from "../components/Products";

export default function Home() {
  const categories = [
    "Khuyen mai",
    "san pham moi",
    "den led",
    "den tuyt",
    "den led panel",
    "den pha led",
  ];
  const products1: ProductProps[] = Array(4).fill(null);
  const products2: ProductProps[] = Array(4).fill(null);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box textAlign="center">
        <Header categories={categories} />
        <Navbar />
        <Box maxHeight={400} overflow="hidden">
          <img src="https://picsum.photos/200/300" className="img-fluid" />
        </Box>
        <Products title="Khuyen mai" products={products1} />
        <Products title="San pham moi" products={products2} newProduct />
        <Footer />
      </Box>
    </div>
  );
}
