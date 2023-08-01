import { Button, Card, CardContent } from '@mui/material'
import './ProductListItem.scss'

type Props = {
    title: string
    description: string
    type: string
    capacity: string
    price: number
    images: string
}

const ProductListItem = ({
    title,
    description,
    type,
    capacity,
    price,
    images,
}: Props) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <div className="product-img">
                    <img src={images} alt="img" />
                </div>
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-price">
                    Price: <span>{price}</span>
                </div>
                <div className="btns-wrap">
                    <Button variant="outlined">Add to cart</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
