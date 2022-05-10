import React from 'react';
import whitening from "../../assets/images/whitening.png";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import ServiceCard from './ServiceCard';


const Services = () => {

    const serviceInfo = [
        {
            _id: 1,
            img: fluoride,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 2,
            img: cavity,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 1,
            img: whitening,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ];

    return (
        <section className='pb-40'>
            <h4 className='text-center text-xl font-bold text-secondary uppercase mb-4'>Our Services</h4>
            <h1 className='text-center text-4xl mb-14'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    serviceInfo.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>


        </section>
    );
};

export default Services;