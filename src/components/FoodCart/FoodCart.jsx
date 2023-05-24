const FoodCart = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-80 w-96" src={image} /></figure>
                    <p className="absolute right-0 bg-slate-900 mt-4 px-3 text-white">${price}</p>
                    <div className="card-body text-center items-center">
                        <h2 className="card-title ">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning border-0 bg-slate-100 border-b-4 mt-4">ADD TO CART</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default FoodCart;