import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Card = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions text-orange-500 font-bold flex justify-between items-center">
                    <p>Price : ${price}</p>
                    <Link to={`/checkout/${_id}`} className='text-2xl'>
                        <AiOutlineArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;