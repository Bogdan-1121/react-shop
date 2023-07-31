import { Typography } from '@mui/material'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <div>
            <Typography
                variant="h4"
                component={'h1'}
                sx={{
                    marginTop: '30px',
                    textTransform: 'uppercase',
                }}
                align="center"
            >
                Product List
            </Typography>
        </div>
    )
}

export default ProductList
