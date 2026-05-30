// =============================
// LOAD REPORTS
// =============================

async function loadReports(){

    try{

        // PRODUCTS

        const productsResponse =
        await fetch("http://localhost:8080/api/products");

        const products =
        await productsResponse.json();



        // USERS

        const usersResponse =
        await fetch("http://localhost:8080/api/users");

        const users =
        await usersResponse.json();



        // ORDERS

        const ordersResponse =
        await fetch("http://localhost:8080/api/orders");

        const orders =
        await ordersResponse.json();



        // COUNTS

        document.getElementById("totalProducts")
        .innerText = products.length;

        document.getElementById("totalUsers")
        .innerText = users.length;

        document.getElementById("totalOrders")
        .innerText = orders.length;



        // TOTAL REVENUE

        let revenue = 0;

        orders.forEach(order => {

            revenue += order.price;

        });

        document.getElementById("totalRevenue")
        .innerText = "₹" + revenue;



    }

    catch(error){

        console.error("Error Loading Reports:",
        error);

    }

}


// AUTO LOAD

loadReports();