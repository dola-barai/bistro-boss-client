import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8 mb-5">
            {title && <Cover 
               img={img}
               title={title}
               details={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quaerat eligendi similique obcaecati nam dicta illum amet quasi tempora quibusdam.'}
            ></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
           <div className="text-center">
           <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order your favorite food</button></Link>
           </div>
        </div>
    );
};

export default MenuCategory;