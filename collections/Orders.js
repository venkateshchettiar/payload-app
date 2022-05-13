const Orders = {
  slug: "orders",
  admin: {
    useAsTitle: "Orders",
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => false,
    delete: () => true,
  },
  fields: [
    {
      name: "orderID",
      label: "Order ID",
      type: "number",
    },
    {
      name: "orderStatus",
      label: "Order Status",
      type: "text",
    },

    {
      name: "productName",
      label: "Product Name",
      type: "text",
    },
    {
      name: "productQty",
      label: "Product Quantity",
      type: "number",
    },
    {
      name: "productPrice",
      label: "Product Price",
      type: "number",
    },
  ],
};

export default Orders;
