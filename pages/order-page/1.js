import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
  
  const MyImage = (props) => {
    return (
      <Image
        loader={myLoader}
        src="../assets/img/nike-merah.jpeg"
        alt="Picture of the author"
        width={200}
        height={200}
      />
    )
  }

function one(){
    return(
        <main>
            <div className ="container">
            <Link href="/order">
                        <a> Back to before</a>
            </Link>
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Order 23412</h1>
                        <h5 className="text-center"> Jonathan Doe :johndoe@test.com</h5>
                        <h5 className="text-center"> <b>Status : Waiting</b> </h5>
                        <h5 className="text-center"> <b>Order Total</b> : Rp.150.000</h5>
                    <div className="card" styles="width: 18rem;">
                    <div className="card-body">
                        <MyImage />
                        <h5 className="card-title">Sepatu Merah Nike</h5>
                        <p className="card-text">Jumlah : 1</p>
                        <p className="card-text"> Harga : Rp.250.000</p>
                    </div>
                </div>
                    </div>
                    <p className="card-text text-center">Change Status</p>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary">Waiting</button>
                      <button type="button" className="btn btn-outline-primary">Rejected</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default one;