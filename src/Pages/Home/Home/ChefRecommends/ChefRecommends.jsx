import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import img from '../../../../assets/home/slide1.jpg'
const ChefRecommends = () => {
    return (
        <div className="my-28">
            <SectionTitle
                subHeading={"Snacks Try"}
                heading={"Chef Recommends"}
            ></SectionTitle>
            <div className="grid grid-cols-3 gap-4">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-80 w-96" src={img} /></figure>
                    <div className="card-body text-center items-center">
                        <h2 className="card-title ">Vegetable Salad</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, amet?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning border-0 bg-slate-100 border-b-4 mt-4">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-80 w-96" src={img} /></figure>
                    <div className="card-body text-center items-center">
                        <h2 className="card-title ">Vegetable Salad</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, amet?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning  border-0 bg-black border-b-4 mt-4">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-80 w-96" src={img} /></figure>
                    <div className="card-body text-center items-center">
                        <h2 className="card-title ">Vegetable Salad</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, amet?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-warning border-0 bg-slate-100 border-b-4 mt-4">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;