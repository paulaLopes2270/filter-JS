export const filterProductsByCategory = (productList = []) =>
  productList.reduce((filteredList, currentProduct) => {
    const { category } = currentProduct;
    filteredList[category] = filteredList[category] || [];
    filteredList[category].push(currentProduct);
    return filteredList;
  }, {});
