import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData()
    const { _id, title, img, price } = service
    const { user } = useContext(AuthContext)

    const handleBookService = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const date = form.date.value

        const booking = {
            CustomerName: name,
            email,
            date,
            img: img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('booked successfully!')
                }
            })

    }
    return (
        <div>
            This is checkout page : {title}

            <form className="card-body" onSubmit={handleBookService}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Dew Amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="bg-orange-600 text-white font-semibold rounded-xl py-4" type="submit" value="Check Out" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;