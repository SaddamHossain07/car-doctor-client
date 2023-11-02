import { useEffect, useState } from "react";
import Card from "./Card/Card";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center space-y-5">
                <h3 className='text-3xl font-bold text-orange-500'>About Us</h3><h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {
                    services.map(service => <Card key={service._id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default Services;