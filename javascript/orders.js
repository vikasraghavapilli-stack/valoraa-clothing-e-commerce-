// =============================
// LOAD ORDERS
// =============================

function loadOrders(){

    fetch("http://localhost:8080/api/orders")

    .then(response => response.json())

    .then(orders => {

        let rows = "";

        orders.forEach(order => {

            rows += `

            <div class="order-card">

                <h2>${order.productName}</h2>

                <p>
                    Customer:
                    ${order.customerName}
                </p>

                <h3>₹${order.price}</h3>

                <span class="status">
                    ${order.status}
                </span>

                <div class="order-actions">

                    <button onclick="deleteOrder(${order.id})">
                        Delete
                    </button>

                </div>

            </div>

            `;

        });

        document.getElementById("ordersContainer")
        .innerHTML = rows;

    })

    .catch(error => {

        console.error("Error Loading Orders:", error);

    });

}



// =============================
// DELETE ORDER
// =============================

function deleteOrder(id){

    const confirmDelete =
    confirm("Delete this order?");

    if(confirmDelete){

        fetch(`http://localhost:8080/api/orders/${id}`, {

            method:"DELETE"

        })

        .then(response => response.text())

        .then(data => {

            alert("Order Deleted Successfully");

            loadOrders();

        })

        .catch(error => {

            console.error("Delete Error:", error);

        });

    }

}



// AUTO LOAD

loadOrders();