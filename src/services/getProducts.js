const productList = [
  {
    name: "Produto 1",
    category: "categoria1",
    imgPath:
      "https://pilotandofogao.com.br/wp-content/uploads/2021/05/Sushi.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eligendi eos dignissimos,"
  },
  {
    name: "Produto 2",
    category: "categoria1",
    imgPath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/800px-Sushi_platter.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eligendi eos dignissimos,"
  },
  {
    name: "Produto 3",
    category: "categoria2",
    imgPath:
      "https://t2.uc.ltmcdn.com/pt/posts/8/5/3/como_fazer_sushi_8358_orig.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eligendi eos dignissimos,"
  },
  {
    name: "Produto 4",
    category: "categoria1",
    imgPath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQrqALBn2W7v_FJzzQ4kukaboZ0ujsAgXsA&usqp=CAU",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eligendi eos dignissimos,"
  },
  {
    name: "Produto 5",
    category: "categoria3",
    imgPath:
      "https://www.saboravida.com.br/wp-content/uploads/2020/12/sushi-principais-tipos-e-suas-caracteristicas.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eligendi eos dignissimos,"
  }
];

export const getProducts = () =>
  new Promise((resolve) => setTimeout(() => resolve(productList), 2000));
