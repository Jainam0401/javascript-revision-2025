const data = [
    {
      orderId: 201,
      customer: { id: 1, name: "Alice", membership: "Gold", email: "alice@example.com", phone: "+1234567890" },
      items: [
        { productId: 101, name: "Laptop", price: 1200, quantity: 1, category: "Electronics", discount: 100, totalPrice: 1100 },
        { productId: 102, name: "Mouse", price: 25, quantity: 2, category: "Accessories", discount: 5, totalPrice: 45 },
        { productId: 103, name: "Wireless Keyboard", price: 70, quantity: 1, category: "Accessories", discount: 10, totalPrice: 60 },
      ],
      payment: { method: "Credit Card", status: "Paid", transactionId: "TXN12345", date: "2023-12-01" },
      shipping: { status: "Shipped", method: "Express", date: "2023-12-02", trackingNumber: "TRACK1234" },
      date: "2023-12-01",
      location: "New York",
      notes: "Please ensure fast delivery due to the gift purpose.",
      billingAddress: { street: "123 Main St", city: "New York", state: "NY", postalCode: "10001" },
      deliveryAddress: { street: "123 Main St", city: "New York", state: "NY", postalCode: "10001" },
    },
    {
      orderId: 202,
      customer: { id: 2, name: "Bob", membership: "Silver", email: "bob@example.com", phone: "+1987654321" },
      items: [
        { productId: 104, name: "Phone", price: 800, quantity: 1, category: "Electronics", discount: 50, totalPrice: 750 },
        { productId: 105, name: "Charger", price: 20, quantity: 2, category: "Accessories", discount: 5, totalPrice: 35 },
        { productId: 106, name: "Bluetooth Speaker", price: 60, quantity: 1, category: "Electronics", discount: 10, totalPrice: 54 },
      ],
      payment: { method: "PayPal", status: "Paid", transactionId: "TXN98765", date: "2023-11-30" },
      shipping: { status: "Delivered", method: "Standard", date: "2023-12-02", trackingNumber: "TRACK9876" },
      date: "2023-11-30",
      location: "California",
      notes: "Gift for a friend's birthday.",
      billingAddress: { street: "456 Oak St", city: "Los Angeles", state: "CA", postalCode: "90001" },
      deliveryAddress: { street: "789 Pine St", city: "Santa Monica", state: "CA", postalCode: "90401" },
    },
    {
      orderId: 203,
      customer: { id: 3, name: "Charlie", membership: "Platinum", email: "charlie@example.com", phone: "+1122334455" },
      items: [
        { productId: 107, name: "Monitor", price: 300, quantity: 2, category: "Electronics", discount: 20, totalPrice: 580 },
        { productId: 108, name: "HDMI Cable", price: 15, quantity: 3, category: "Accessories", discount: 5, totalPrice: 40 },
        { productId: 109, name: "External Hard Drive", price: 150, quantity: 1, category: "Electronics", discount: 30, totalPrice: 120 },
      ],
      payment: { method: "Credit Card", status: "Failed", transactionId: "TXN23456", date: "2023-12-05" },
      shipping: { status: "Processing", method: "Expedited", date: null, trackingNumber: null },
      date: "2023-12-05",
      location: "Texas",
      notes: "Please contact if payment issues arise.",
      billingAddress: { street: "789 Maple Ave", city: "Austin", state: "TX", postalCode: "73301" },
      deliveryAddress: { street: "102 Pine Ln", city: "Dallas", state: "TX", postalCode: "75201" },
    },
    {
      orderId: 204,
      customer: { id: 4, name: "Diana", membership: "Gold", email: "diana@example.com", phone: "+1122112233" },
      items: [
        { productId: 110, name: "Keyboard", price: 50, quantity: 1, category: "Accessories", discount: 10, totalPrice: 45 },
        { productId: 111, name: "Mousepad", price: 10, quantity: 3, category: "Accessories", discount: 0, totalPrice: 30 },
        { productId: 112, name: "Webcam", price: 80, quantity: 1, category: "Electronics", discount: 10, totalPrice: 72 },
      ],
      payment: { method: "Bank Transfer", status: "Pending", transactionId: null, date: null },
      shipping: { status: "Shipped", method: "Standard", date: "2023-12-03", trackingNumber: "TRACK5678" },
      date: "2023-12-03",
      location: "Florida",
      notes: "Urgent delivery needed.",
      billingAddress: { street: "456 Oak St", city: "Miami", state: "FL", postalCode: "33101" },
      deliveryAddress: { street: "789 Beach Rd", city: "Miami Beach", state: "FL", postalCode: "33109" },
    },
    {
      orderId: 205,
      customer: { id: 5, name: "Eve", membership: "Bronze", email: "eve@example.com", phone: "+9988776655" },
      items: [
        { productId: 113, name: "Headphones", price: 150, quantity: 1, category: "Electronics", discount: 20, totalPrice: 130 },
        { productId: 114, name: "Speakers", price: 200, quantity: 2, category: "Electronics", discount: 50, totalPrice: 350 },
        { productId: 115, name: "Smartwatch", price: 250, quantity: 1, category: "Electronics", discount: 0, totalPrice: 250 },
      ],
      payment: { method: "Credit Card", status: "Paid", transactionId: "TXN54321", date: "2023-12-04" },
      shipping: { status: "Delivered", method: "Express", date: "2023-12-05", trackingNumber: "TRACK6543" },
      date: "2023-12-04",
      location: "New York",
      notes: "Please wrap as a gift.",
      billingAddress: { street: "123 Fifth Ave", city: "New York", state: "NY", postalCode: "10002" },
      deliveryAddress: { street: "456 Seventh Ave", city: "Brooklyn", state: "NY", postalCode: "11201" },
    },
    {
      orderId: 206,
      customer: { id: 6, name: "Frank", membership: "Silver", email: "frank@example.com", phone: "+1222333444" },
      items: [
        { productId: 116, name: "Laptop Bag", price: 50, quantity: 2, category: "Accessories", discount: 10, totalPrice: 90 },
        { productId: 117, name: "USB Hub", price: 15, quantity: 3, category: "Accessories", discount: 0, totalPrice: 45 },
        { productId: 118, name: "Wireless Charger", price: 40, quantity: 1, category: "Electronics", discount: 5, totalPrice: 38 },
      ],
      payment: { method: "PayPal", status: "Paid", transactionId: "TXN87654", date: "2023-12-06" },
      shipping: { status: "Shipped", method: "Standard", date: "2023-12-07", trackingNumber: "TRACK8901" },
      date: "2023-12-06",
      location: "Chicago",
      notes: "Gift for office.",
      billingAddress: { street: "321 Broadway", city: "Chicago", state: "IL", postalCode: "60601" },
      deliveryAddress: { street: "432 State St", city: "Chicago", state: "IL", postalCode: "60602" },
    },
    // Add more complex data entries as needed...
  ];



//   Here are **very hard challenges** based on the provided data, designed to push you to apply `filter`, `map`, and `reduce` in real-world problem-solving scenarios. These challenges are meant to prepare you for a wide range of tasks in development, from data aggregation and reporting to handling dynamic and complex requirements.

// ---

// ### **1. Advanced Financial Reporting**
// **Challenge**: 
// You need to generate a report that breaks down the total spending for each customer across different membership tiers, and then categorize customers by their total spend.

// - **Step 1**: Calculate the total spend for each customer across all orders.
// - **Step 2**: Group customers by membership type.
// - **Step 3**: For each membership type, calculate the total spend and the average spend per order.

// ---

// ### **2. Dynamic Customer Segmentation**
// **Challenge**: 
// Implement a dynamic system to segment customers based on:
// - Total spend in the last 30 days.
// - Number of orders placed.
// - Membership level.

// Your function should return customer segments such as "High Spenders", "Frequent Buyers", "Occasional Buyers", etc.

// - **Step 1**: Calculate the total spend for each customer in the last 30 days.
// - **Step 2**: Count the number of orders for each customer.
// - **Step 3**: Segment customers based on the calculated criteria.

// ---

// ### **3. Sales Forecasting and Trend Analysis**
// **Challenge**: 
// You need to forecast sales for the next 6 months. Based on the historical data, calculate the average revenue per order per month and predict how much revenue each customer will bring in the next 6 months based on their purchasing behavior.

// - **Step 1**: Aggregate the total sales by month.
// - **Step 2**: Calculate the average sales per order for each month.
// - **Step 3**: Predict future sales based on past trends.

// ---

// ### **4. Product Sales Analysis**
// **Challenge**:
// Generate a report of the **top-selling products** across all orders, showing both the **quantity sold** and **total revenue** for each product. Also, track products that are trending based on quantity sold in the last 30 days.

// - **Step 1**: Calculate the total quantity sold for each product.
// - **Step 2**: Calculate the total revenue for each product.
// - **Step 3**: Identify products that have sold the most units in the past 30 days.

// ---

// ### **5. Multi-level Customer Insights**
// **Challenge**:
// Create a multi-level report that shows:
// - The total revenue generated from each customer.
// - The total revenue generated from each customer per product category (e.g., electronics, accessories).
// - The **average purchase frequency** for each customer.

// - **Step 1**: Group orders by customer.
// - **Step 2**: For each customer, calculate the total spend across categories.
// - **Step 3**: For each customer, calculate their average frequency of purchases.

// ---

// ### **6. Payment Method Analysis**
// **Challenge**:
// Generate a report analyzing the total revenue and the total number of orders for each payment method.

// - **Step 1**: Group orders by payment method.
// - **Step 2**: Calculate the total revenue for each payment method.
// - **Step 3**: Count the number of orders placed using each payment method.

// ---

// ### **7. Handling Payment Failures**
// **Challenge**:
// Identify customers who have had **at least one failed payment**, track how much they spent before the failure, and suggest improvements for the e-commerce platform based on these insights.

// - **Step 1**: Filter orders with failed payments.
// - **Step 2**: Track the total spend for each customer before their failed payment.
// - **Step 3**: Provide a suggestion (based on insights) to improve customer retention or payment success rate.

// ---

// ### **8. Inventory Tracking and Replenishment**
// **Challenge**:
// Implement an inventory tracking system where you calculate the total quantity of each product sold and the amount that should be restocked based on the sales frequency.

// - **Step 1**: Aggregate the total quantity sold for each product.
// - **Step 2**: Calculate the average quantity sold per day for each product.
// - **Step 3**: Suggest the restocking quantity based on sales trends and frequency.

// ---

// ### **9. Customer Retention Analysis**
// **Challenge**:
// Calculate the **churn rate** of customers who haven’t placed an order in the last 90 days and compare them with customers who ordered frequently in the last month.

// - **Step 1**: Identify customers who haven’t placed any orders in the last 90 days.
// - **Step 2**: Calculate the churn rate (percentage of customers who haven't ordered recently).
// - **Step 3**: Compare retention statistics for customers who made orders in the last month.

// ---

// ### **10. Personalized Discount Campaign**
// **Challenge**:
// Create a personalized discount system where customers who spent over $1000 last year will receive a 10% discount, and those who spent between $500–$1000 will get a 5% discount. Apply the discount to their current order if they meet the criteria.

// - **Step 1**: Calculate the total spending of each customer in the last year.
// - **Step 2**: Check which customers qualify for a discount.
// - **Step 3**: Apply the discount to their current order.

// ---

// ### **11. Complex Nested Grouping**
// **Challenge**:
// Generate a multi-level grouping for all orders:
// - First by `status` (e.g., shipped, delivered, processing).
// - Then by `location` (e.g., New York, California).
// - Inside each location, further group by `payment method`.

// - **Step 1**: Group orders by status.
// - **Step 2**: Inside each status, group by location.
// - **Step 3**: Inside each location, group by payment method.

// ---

// ### **12. Dynamic Reporting System**
// **Challenge**:
// Build a flexible report generator where you can generate different types of reports by changing the input parameters. For example, generate a report for total revenue by location, membership, and payment method.

// - **Step 1**: Create a report generator function that accepts dynamic filters.
// - **Step 2**: Build sample reports for different filters (e.g., by location, by membership, by payment method).
// - **Step 3**: Optimize the function to handle larger datasets.

// ---

// ### **Approach for Each Challenge**:
// 1. **Break down each problem** into smaller steps. Focus on achieving smaller goals using `map`, `filter`, and `reduce`.
// 2. **Optimize** your solutions by avoiding redundant loops and making your code scalable (e.g., dynamic handling of new filters or data).
// 3. **Test edge cases**: Think about potential edge cases like missing data or new members/products added.
// 4. **Focus on efficiency**: With larger datasets, consider the performance of each operation.

// ---

// ### **Next Step**
// If you'd like to start solving any of these, let me know which one interests you, and I can guide you step-by-step through the process or review your solution as you work through it.