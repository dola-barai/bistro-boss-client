import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    },[])
    return (
        <section className="my-20 mx-32">
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                    {
                        reviews.map(review => <SwiperSlide
                        key={review._id}

                        >
                            <div className="flex flex-col items-center  mx-32">
                                <Rating className="mb-4" style={{maxWidth: 100}} value={review.rating} readOnly />
                                <p className="text-center mb-2">{review.details}</p>
                                <h3 className="text-2xl text-yellow-600">{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;