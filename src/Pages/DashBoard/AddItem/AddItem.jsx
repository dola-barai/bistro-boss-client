import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const image_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_token}`
    
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
        })
    };
    console.log(errors);
    console.log(image_hosting_token);
    return (
        <div className="w-full px-10">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <SectionTitle
                subHeading={"What's new"}
                heading={'Add an Item'}
            ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>                    </label>
                    <input type="text" placeholder="Recipe Name"
                    {...register("name", {required: true, maxLength: 80})}
                    className="input input-bordered w-full " />
                </div>
                <div className="grid grid-cols-2 gap-2 my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick one</option>
                            <option>Salad</option>
                            <option>Soup</option>
                            <option>Drinks</option>
                            <option>Pizza</option>
                            <option>Desserts</option>
                        </select>
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>                    </label>
                        <input type="number" {...register("price", { required: true })} placeholder="price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;