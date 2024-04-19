import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="Porsche 911 GT3 R 2018" subheader="April 20, 2024" />
      <CardMedia
        component="img"
        height="194"
        image="src\assets\porsche-911-gt3-r-2018-rear-p5.jpg"
        alt="Porsche 911"
      />
      <CardContent>
        <RemoveIcon />

        <Button variant="contained" color="success">
          Contained
        </Button>

        <AddIcon />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
