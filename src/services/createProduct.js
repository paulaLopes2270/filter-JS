export const createProduct = (
  name = "",
  category = "",
  imgPath = "",
  description = ""
) => {
  return {
    name,
    category,
    imgPath,
    description,
    createDate: new Date()
  };
};
