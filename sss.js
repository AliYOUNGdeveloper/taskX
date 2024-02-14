const customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } }
  ];
  
  const orders = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
  ];//didn't write more customers because it would be taken more time for that :)

  const customerMails = customers.map(customer => customer.email);
    console.log("Customer Email List:", customerMails);
  
  const highValueOrders = orders.filter(order => order.quantity * order.price > 1000);
    console.log("High-Value Orders:", highValueOrders);
  
  const aliceCustomer = customers.find(customer => customer.name === "Alice");
    console.log("Customer named Alice:", aliceCustomer);
  const order102Index = orders.findIndex(order => order.orderId === 102);
    console.log("Index of Order 102:", order102Index);
  
  const ordersFromUSA = orders.some(order => customers.find(customer => customer.id === order.customerId).location.country === "America");
    console.log("Orders from America:", ordersFromUSA);
  
  orders.forEach(order => {
    const customerName = customers.find(customer => customer.id === order.customerId).name;
      console.log(`Order ${order.orderId} from ${customerName}: ${order.quantity} devices ${order.product}  for${order.price} every single device.`);
  });
  
  const sortedCustomers = [...customers].sort((a, b) => a.name.localeCompare(b.name));
    console.log("Sorted Customers:", sortedCustomers);


