import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `/bookings?email=${user.email}`

    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setBookings(res.data))

    }, [url, axiosSecure])

    const handleDelete = id => {
        const proceed = confirm('Are you sure want to delete this booking?')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    // updated data 
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)

                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Photo</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                handleDelete={handleDelete}
                                booking={booking}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;