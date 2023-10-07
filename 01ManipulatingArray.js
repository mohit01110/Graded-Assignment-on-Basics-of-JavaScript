
const customers = [
    {
      customerID: 1,
      customerName: "Mohit",
      totalBillingAmount: 2500,
    },
    {
      customerID: 2,
      customerName: "Jatin",
      totalBillingAmount: 3500,
    },
    {
      customerID: 3,
      customerName: "Customer 3",
      totalBillingAmount: 4000,
    },
  ];
  

  function filterAndPrintCustomers(customers) {
    const filteredCustomers = customers.filter(
      (customer) => customer.totalBillingAmount > 3000
    );
  
    if (filteredCustomers.length === 0) {
      console.log("No customers with total billing amount > 3000 found.");
    } else {
      console.log("Customers with total billing amount > 3000:");
      filteredCustomers.forEach((customer) => {
        console.log(`Customer Name: ${customer.customerName}`);
        console.log(`Customer ID: ${customer.customerID}`);
        console.log(`Total Billing Amount: Rs. ${customer.totalBillingAmount}`);
        console.log("------------");
      });
    }
  }
  
  
  filterAndPrintCustomers(customers);
  