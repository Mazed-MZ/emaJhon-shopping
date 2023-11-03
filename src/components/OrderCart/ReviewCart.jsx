import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import Rating from '@mui/material/Rating';


export default function ReviewCart({ review, handleRemoveFromCart }) {

    const { img, name, price, quantity, shipping, ratings, id } = review;
    const [value, setValue] = React.useState(ratings);

    return (
        <div>
            <Card sx={{ display: 'flex', m: 1 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200 }}
                    image={img}
                    alt={name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                        <Typography component="div" variant="h5">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Quantity: {quantity}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Price: ${price}
                        </Typography>
                        <Rating name="read-only" value={value} readOnly />
                    </CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <a href="/order">
                        <IconButton onClick={() => handleRemoveFromCart(id)}>
                            <RemoveShoppingCartIcon fontSize="large" />
                        </IconButton>
                    </a>
                </Box>
            </Card>
        </div>
    )
}
