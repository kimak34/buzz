'use client';

import React, { useState } from 'react';
import { IoCheckmark, IoClose } from "react-icons/io5";
import Switch from './Switch';

// Stripe Plans >> fill in your own priceId & link
export const plans = [
    {
        link: process.env.NODE_ENV === 'development' ? '********' : '',
        priceId: process.env.NODE_ENV === 'development' ? '********' : '',
        price: 19,
        pricePlus: 34,
        pricePremium: 49,
        duration: '/month'
    },
    {
        link: process.env.NODE_ENV === 'development' ? '********' : '',
        priceId: process.env.NODE_ENV === 'development' ? '********' : '',
        price: 99,
        pricePlus: 174,
        pricePremium: 249,
        duration: '/year'
    }
];

const Pricing = () => {
    const [plan, setPlan] = useState(plans[0]);
    const [num, setNum] = useState(0);

    return (
        <div>
                <div className=" py-24 px-8 max-md:hidden">
                <div className="flex items-center justify-center gap-8">
                                    <div
                                        className="flex items-center gap-2"
                                        onClick={() => setPlan(plans[0])}
                                    >
                                        {/*<input
                                            type="radio"
                                            name="monthly"
                                            className="radio"
                                            checked={plan.price === 19}
                                            onChange={() => {}}
                                        />*/}
                                        <span>Pay monthly</span>
                                    </div>
                                    <Switch checked={plan.price === 99} onChange={() => {setNum((num+1)%2); setPlan(plans[num]);}}/>
                                    <div
                                        className="flex items-center gap-2"
                                        onClick={() => setPlan(plans[1])}
                                    >
                                        {/*<input
                                            type="radio"
                                            name="yearly"
                                            className="radio"
                                            checked={plan.price === 99}
                                            onChange={() => {}}
                                        />*/}
                                        <span>Pay yearly (60% OFF 💰)</span>
                                    </div>
                                </div>
                    <div className="relative flex justify-center flex-row items-center gap-8">
                        

                            <div className="w-3/12 relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-xl">
                                <p className={`text-5xl tracking-tight text-red-400 font-semibold`}>
                                    Lite
                                </p>
                                <div className="flex gap-2">
                                    <p
                                        className={`text-5xl tracking-tight font-extrabold`}
                                    >
                                        ${plan.price}
                                    </p>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                        <p className="text-sm tracking-wide text-base-content/80 uppercase font-semibold">
                                            {plan.duration}
                                        </p>
                                    </div>
                                </div>

                                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                    {[
                                        { name: '20 entries/giveaway', available:true},
                                        { name: 'Lite discounts', available:true },
                                        { name: 'Lite giveaways', available:true },
                                        { name: 'Premium discounts', available:false },
                                        { name: 'Premium giveaways', available:false },
                                        {name: 'VIP events', available:false},
                                        { name: 'Buzz Band included', available:false },
                                        { name: '24/7 support', available:true }
                                    ].map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            {feature.available && <IoCheckmark/>}
                                            {!feature.available && <IoClose/>}
                                            
                                            <span>{feature.name} </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className= "flex bg-red-400 justify-center space-y-2 rounded-xl">
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href={
                                            plan.link +
                                            '?prefilled_email=' 
                                        }
                                    >
                                        Subscribe
                                    </a>
                                </div>
                            </div>

                            <div className="w-3/12 relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-xl">
                                <p className={`text-5xl tracking-tight text-red-400 font-semibold`}>
                                    Plus
                                </p>
                                <div className="flex gap-2">
                                    <p
                                        className={`text-5xl tracking-tight font-extrabold`}
                                    >
                                        ${plan.pricePlus}
                                    </p>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                        <p className="text-sm tracking-wide text-base-content/80 uppercase font-semibold">
                                            {plan.duration}
                                        </p>
                                    </div>
                                </div>

                                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                    {[
                                        { name: '70 entries/giveaway', available:true},
                                        { name: 'Lite discounts', available:true },
                                        { name: 'Lite giveaways', available:true },
                                        { name: 'Premium discounts', available:true },
                                        { name: 'Premium giveaways', available:false },
                                        {name: 'VIP events', available:false},
                                        { name: 'Buzz Band included', available:false },
                                        { name: '24/7 support', available:true }
                                    ].map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            {feature.available && <IoCheckmark/>}
                                            {!feature.available && <IoClose/>}
                                            
                                            <span>{feature.name} </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className= "flex bg-red-400 justify-center space-y-2 rounded-xl">
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href={
                                            plan.link +
                                            '?prefilled_email=' 
                                        }
                                    >
                                        Subscribe
                                    </a>
                                </div>
                            </div>

                            <div className="w-3/12 relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-xl">
                                <p className={`text-5xl tracking-tight text-red-400 font-semibold`}>
                                    Premium
                                </p>
                                <div className="flex gap-2">
                                    <p
                                        className={`text-5xl tracking-tight font-extrabold`}
                                    >
                                        ${plan.pricePremium}
                                    </p>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                        <p className="text-sm tracking-wide text-base-content/80 uppercase font-semibold">
                                            {plan.duration}
                                        </p>
                                    </div>
                                </div>

                                <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                                    {[
                                        { name: '200 entries/giveaway', available:true},
                                        { name: 'Lite discounts', available:true },
                                        { name: 'Lite giveaways', available:true },
                                        { name: 'Premium discounts', available:true },
                                        { name: 'Premium giveaways', available:true },
                                        {name: 'VIP events', available:true},
                                        { name: 'Buzz Band included', available:true },
                                        { name: '24/7 support', available:true }
                                    ].map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center gap-2"
                                        >
                                            {feature.available && <IoCheckmark/>}
                                            {!feature.available && <IoClose/>}
                                            
                                            <span>{feature.name} </span>
                                        </li>
                                    ))}
                                </ul>
                                <div className= "flex bg-red-400 justify-center space-y-2 rounded-xl">
                                    <a
                                        className="text-white"
                                        target="_blank"
                                        href={
                                            plan.link +
                                            '?prefilled_email=' 
                                        }
                                    >
                                        Subscribe
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>

           {/* <section className="fixed right-8 bottom-8">
                <a
                    href="https://shipfa.st?ref=stripe_pricing_viodeo"
                    className="bg-white font-medium inline-block text-sm border border-base-content/20 hover:border-base-content/40 hover:text-base-content/90 hover:scale-105 duration-200 cursor-pointer rounded text-base-content/80 px-2 py-1"
                >
                    <div className="flex gap-1 items-center">
                        <span>Built with</span>
                        <span className="font-bold text-base-content flex gap-0.5 items-center tracking-tight">
                            <Image
                                src={redcircle.src}
                                alt="ShipFast logo"
                                priority={true}
                                className="w-5 h-5"
                                width={20}
                                height={20}
                            />
                            ShipFast
                        </span>
                    </div>
                </a>
            </section>*/}
        </div>
    );
};

export default Pricing;