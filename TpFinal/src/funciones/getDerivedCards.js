export const getDerivedCards = (compra) => {
    const derivedCart = {};
    compra.forEach((item) => {
      if (derivedCart[item.id]) {
        derivedCart[item.id].cantidad++;
        derivedCart[item.id].precioTotal += item.price;
      } else {
        derivedCart[item.id] = {
          id: item.id,
          image: item.image,
          title: item.title,
          cantidad: 1,
          precioTotal: item.price,
        };
      }
    });
    return Object.values(derivedCart);
  };