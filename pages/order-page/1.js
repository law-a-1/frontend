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
            <div class ="container">
            <Link href="/order">
                        <a> Back to before</a>
            </Link>
                <div class="row">
                    <div class="col">
                        <h1 class="text-center">Order 23412</h1>
                        <h5 class="text-center"> Jonathan Doe :johndoe@test.com</h5>
                        <h5 class="text-center"> <b>Status : Waiting</b> </h5>
                        <h5 class="text-center"> <b>Order Total</b> : Rp.150.000</h5>
                    <div class="card" styles="width: 18rem;">
                    <div class="card-body">
                        <MyImage />
                        <h5 class="card-title">Sepatu Merah Nike</h5>
                        <p class="card-text">Jumlah : 1</p>
                        <p class="card-text"> Harga : Rp.250.000</p>
                    </div>
                </div>
                    </div>
                    <p class="card-text text-center">Change Status</p>
                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" class="btn btn-outline-primary">Waiting</button>
                      <button type="button" class="btn btn-outline-primary">Rejected</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default one;