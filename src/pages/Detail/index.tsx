import * as Styled from "./Detail.styles.ts";
import ProductGallery from "../../components/Detail/ProductGallery";
import ProductDetails from "../../components/Detail/ProductDetails";
import QuantitySelector from "../../components/Detail/QuantitySelector";
import PriceDisplay from "../../components/Detail/PriceDisplay";
import ActionButtonGroup from "../../components/Detail/ActionButtonGroup";
import Calendar from "../../components/Detail/Calendar";
import StockStatusBanner from "../../components/Detail/StockStatusBaner";
const productData = {
  // images: [
  //   "https://github.com/Yanolza-Miniproject/frontend/assets/92326949/fd904255-0d68-46df-a091-18d6efc6427f",
  // ],
  images: [
    // "https://github.com/Yanolza-Miniproject/frontend/assets/92326949/27596864-e5a9-4c79-9dea-f45b77a4a6d8",
    "https://github.com/Yanolza-Miniproject/frontend/assets/92326949/2c0134f2-6ba3-434c-8dca-6d5831bf6e24",
    "https://github.com/Yanolza-Miniproject/frontend/assets/92326949/fd904255-0d68-46df-a091-18d6efc6427f",
  ],
  name: "그랜드 하얏트 제주",
  roomName: "디럭스룸",
  price: "239,000원",
  quantity: 1,
};

const Detail = () => {
  return (
    <Styled.container>
      <Styled.Layout>
        <ProductGallery images={productData.images} />
        <Styled.DetailsContainer>
          <Styled.HorizontalContainer>
            <ProductDetails
              roomName={productData.roomName}
              name={productData.name}
              price={productData.price}
            />
            <StockStatusBanner />
          </Styled.HorizontalContainer>
          <Calendar price={productData.price} />
          <QuantitySelector
            initialQuantity={productData.quantity}
            onQuantityChange={(newQuantity) => console.log(newQuantity)}
            price={productData.price}
          />
          <PriceDisplay price={productData.price} />
          <ActionButtonGroup
            onAddToCart={() => console.log("Add to Cart clicked")}
          />
        </Styled.DetailsContainer>
      </Styled.Layout>
    </Styled.container>
  );
};

export default Detail;
