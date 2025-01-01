const orders = [
  {
    orderId: 101,
    customer: "Alice",
    items: [
      { product: "Laptop", price: 1200, quantity: 1 },
      { product: "Mouse", price: 25, quantity: 2 },
    ],
    status: "shipped",
    date: "2023-12-01",
    location: "New York",
  },
  {
    orderId: 102,
    customer: "Bob",
    items: [
      { product: "Phone", price: 800, quantity: 1 },
      { product: "Charger", price: 20, quantity: 2 },
    ],
    status: "delivered",
    date: "2023-11-30",
    location: "California",
  },
  {
    orderId: 103,
    customer: "Charlie",
    items: [
      { product: "Monitor", price: 300, quantity: 2 },
      { product: "HDMI Cable", price: 15, quantity: 3 },
    ],
    status: "processing",
    date: "2023-12-05",
    location: "Texas",
  },
  {
    orderId: 104,
    customer: "Diana",
    items: [
      { product: "Keyboard", price: 50, quantity: 1 },
      { product: "Mousepad", price: 10, quantity: 3 },
    ],
    status: "shipped",
    date: "2023-12-03",
    location: "Florida",
  },
];


//   Extract all customer names
const customerNames = orders.map((order) => order.customer);
console.log(customerNames);

// Create a new array with total cost for each order (sum of price × quantity for all items).

const totalCost = orders.map( order => order.items.reduce((sum,product)=>sum + product.price * product.quantity,0))
console.log(`total cost ${totalCost}`)

// Format the array to show a summary for each order: Order #101 by Alice - $1250

const formatedArray = orders.map( order => {
    const totalCost = (order.items.reduce((sum,product)=>sum + product.price * product.quantity,0))
    return ` Order ${order.orderId} by ${order.customer} - $${totalCost} `})
console.log(formatedArray)

// Filter orders that are in "shipped" status.

const shippedOrders = orders.filter((order)=> order.status==="shipped")
console.log(shippedOrders)

// Find orders where the total cost exceeds $1000

const moreThan = orders.filter(order=> {
    const totalCost = order.items.reduce((sum,product) => sum + product.price*product.quantity,0)
    return totalCost > 1000
})

console.log(moreThan)

// Get all orders delivered to "California"

const California = orders.filter(order=>order.location === "California")
console.log(California)

// Calculate the total revenue generated from all orders

const allCost = 
    (orders.map(order => order.items.reduce((sum,product)=>sum+product.price * product.quantity,0))).reduce((sum,total)=>sum+total,0)

console.log(allCost)

// Count the total number of items sold across all orders

const totalItemms = orders.map(order=>order.items.reduce((sum,prod) =>sum +prod.quantity,0)).reduce((sum,totalProd)=>sum+totalProd,0)
console.log(totalItemms);

// const groups = {}

const shipped = orders.filter(order=> order.status==="shipped")
const map = new Set(orders.map(order => order.status))
const delivered = orders.filter(order=> order.status==="delivered")
const processing = orders.filter(order=> order.status==="processing")
const groups = {
    "shipped" :shipped,
    "delivered": delivered,
    "processing":processing
}
console.log(groups)
