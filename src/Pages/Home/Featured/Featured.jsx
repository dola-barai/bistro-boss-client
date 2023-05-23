import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading = {"Check it out"}
                heading = {"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>May 23, 2023</p>
                    <p>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, temporibus fuga provident odio amet perferendis ipsum sit animi alias eius minus incidunt laboriosam numquam aut voluptatem deleniti mollitia ex molestiae sequi, maiores fugiat officia nam et quasi. Pariatur, mollitia. Nobis magni expedita consectetur quam eveniet laudantium quae labore blanditiis exercitationem!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;