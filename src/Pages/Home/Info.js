import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../assets/icons/clock.svg";
import mark from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-7 pb-28'>
            <InfoCard icon={clock} cardTitle={"Opening Hours"} cardText={'Sat to Thu 10AM-8PM'} background={"bg-accent"}></InfoCard>
            <InfoCard icon={mark} cardTitle={"Visit Our Location"} cardText={"Brooklyn, NY 10036, United States"} background={"bg-accent"}></InfoCard>
            <InfoCard icon={phone} cardTitle={"Opening Hours"} cardText={"+000 123 456789"} background={"bg-accent"}></InfoCard>
        </section>
    );
};

export default Info;