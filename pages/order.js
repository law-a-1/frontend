import Link from "next/link";

function OrderPage(){
    return (
        <main>
          <div className="container">
            <h1 classNameName="text-center">Order page</h1>
            <a href="#" className="btn btn-light">Refresh product</a>
            <p>Product Status</p>
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary">Waiting</button>
                <button type="button" className="btn btn-outline-primary">Sending</button>
                <button type="button" className="btn btn-outline-primary">Recieved</button>
                <button type="button" className="btn btn-outline-primary">Reject</button>
              </div>
              <br />
              <br />
              <div className="card">
                <h5 className="card-header">
                  <Link href="order-page/1">
                  <a> Order 23412</a>
                  </Link>
                  </h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p>User : john.doe@test.com</p>
                      <p>Order Date : 19:30:25 05-03-2022</p>
                      <p><b>Order Total</b></p>
                      <p>Rp. 125.000</p>
                    </div>
                    <div className="col-4">
                      <p>Order Quantity : 2</p>
                      <p>Status : <b>Waiting</b></p>
                      <p>Change Status</p>
                      <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary">Waiting</button>
                      <button type="button" className="btn btn-outline-primary">Rejected</button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="card">
                <h5 className="card-header">
                  <Link href="order-page/1">
                  <a> Order 23413</a>
                  </Link>
                  </h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p>User : john.doe@test.com</p>
                      <p>Order Date : 19:30:25 05-03-2022</p>
                      <p><b>Order Total</b></p>
                      <p>Rp. 125.000</p>
                    </div>
                    <div className="col-4">
                      <p>Order Quantity : 2</p>
                      <p>Status : <b>Waiting</b></p>
                      <p>Change Status</p>
                      <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary">Waiting</button>
                      <button type="button" className="btn btn-outline-primary">Rejected</button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

        </div>
      </main>
    )
}

export default OrderPage;