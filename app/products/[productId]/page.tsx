import { Grid, Typography } from "@mui/material";
import getProduct from "./get-product";
import Image from "next/image";
import { getProductImage } from "../product-image";

interface SingleProduct {
  params: { productId: string };
}

export default async function SingleProduct({ params }: SingleProduct) {
  const { productId } = await params;
  const product = await getProduct(productId);

  if (!product) {
    return (
      <Typography variant="h5" color="error">
        Product not found.
      </Typography>
    );
  }

  return (
    <Grid container marginBottom={"2rem"} rowGap={3}>
      <Grid size={{ md: 6, xs: 12 }}>
        {product.imageExists && (
          <Image
            src={getProductImage(product._id as string)}
            width="0"
            height="0"
            className="w-full sm:w-3/4 h-auto"
            sizes="100vw"
            alt="Product Image"
          ></Image>
        )}
      </Grid>
      <Grid></Grid>
      <Typography variant="h2">{product.name}</Typography>

      <Typography>{product.description}</Typography>
      <Typography>${product.price}</Typography>
    </Grid>
  );
}
