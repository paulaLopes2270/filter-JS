import { useState, useEffect } from "react";
import "./styles.css";

// styles
import {
  CategoryFilterContainer,
  CategoryButton,
  ProductContainer
} from "./style";

// components
import { ProductCard, Loading } from "./components";

// services
import {
  getProducts,
  filterProductsByCategory,
  delay,
  createProduct
} from "./services";

export default function App() {
  const [producContainerIsLoading, setProductContainerIsLoading] = useState(
    false
  );
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [productList, setProductList] = useState([]);
  const listFilterdByCategory = filterProductsByCategory(productList);
  const categoryNameList = Object.keys(listFilterdByCategory);
  const productListBySelectedCategoryList =
    listFilterdByCategory[categoryNameList[selectedCategory]] || [];

  const buttonHaldlerClick = async (categoryIndex) => {
    const isSameCategory = categoryIndex === selectedCategory;
    if (isSameCategory) {
      return;
    }
    setProductContainerIsLoading(true);
    await delay(500);
    setSelectedCategory(categoryIndex);
    setProductContainerIsLoading(false);
  };

  useEffect(() => {
    const newProduct = createProduct("Thiago", "Categoria3", "", "");
    console.log(newProduct);
    const updateProductList = async () => {
      const productList = await getProducts();
      setProductList(productList);
    };
    updateProductList();
  }, []);

  return (
    <div className="App">
      <CategoryFilterContainer>
        {categoryNameList.map((currentCategory, index) => {
          const categoryIsSelected = index === selectedCategory;
          return (
            <CategoryButton
              key={currentCategory + index}
              onClick={() => buttonHaldlerClick(index)}
              selected={categoryIsSelected}
            >
              {currentCategory}
            </CategoryButton>
          );
        })}
      </CategoryFilterContainer>
      {producContainerIsLoading ? (
        <Loading />
      ) : (
        <ProductContainer>
          {productListBySelectedCategoryList.map((currentProduct, index) => (
            <ProductCard
              {...currentProduct}
              key={currentProduct.name + index}
            />
          ))}
        </ProductContainer>
      )}
    </div>
  );
}
