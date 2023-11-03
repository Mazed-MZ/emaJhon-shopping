import React from 'react';
import './Product.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function Products(props) {

  const { img, name, seller, category, id, price, ratings, stock } = props.items;
  const handleAddToCart = props.handleAddToCart;

  const color = orange['700'];

  const [value, setValue] = React.useState(ratings);

  return (
    <div>
      {/* <Sneaker></Sneaker>
      <Pant></Pant>
      <Other></Other>
      <Hat></Hat>
      <Backpack></Backpack>
      <Adidas></Adidas> */}

      <Card sx={{ maxWidth: 345, m: 1 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brand name: {seller}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Category: {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            In Stock: {stock}
          </Typography>
          <Typography variant="h4" color={color}>
            ${price}
          </Typography>
          <Box
            sx={{
              '& > legend': { mt: 2 },
            }}
          >
            <Rating name="read-only" value={value} readOnly />
          </Box>
        </CardContent>
        <CardActions sx={{ maxWidth: 394, ml: 10 }}>
          <Button variant="contained" color="success" onClick={() => handleAddToCart(props.items)}>Add to Cart</Button>
        </CardActions>
      </Card>


      {/* <div className="product-cart rounded-b-lg">
        <img src={img} className="card-img-top rounded-b-lg" alt="product-image" />
        <div className="m-3">
          <h5 className="card-title text-xl font-bold">{name}</h5>
          <p>{seller}</p>
          <h3 className="text-3xl text-green-600">${price}</h3>
          <button className="card-btn bg-orange-400 p-2 rounded-md text-white font-bold hover:bg-blue-900" onClick={() => handleAddToCart(props.items)}>Add to Cart</button>
        </div>
      </div> */}
    </div>
  )
}
