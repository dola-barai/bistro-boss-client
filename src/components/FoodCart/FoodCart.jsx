import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCart = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart()

    const handleAddToCart = (item) => {
        console.log(item);
        if(user){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('https://bistro-boss-server-dibanishi81-gmailcom.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Food added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-80 w-96" src={image} /></figure>
                    <p className="absolute right-0 bg-slate-900 mt-4 px-3 text-white">${price}</p>
                    <div className="card-body text-center items-center">
                        <h2 className="card-title ">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-end">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline btn-warning border-0 bg-slate-100 border-b-4 mt-4">ADD TO CART</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default FoodCart;