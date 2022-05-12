import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({treatment, date, setTreatment}) => {
    const {name, slots} = treatment;

    const handleBooking = (e)=> {
        e.preventDefault();
        console.log(e.target.slot.value);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-y-5 ">
                        <input type="text" value={format(date , "PP")} disabled className="input input-bordered w-full max-w-lg" />
                        <select name='slot' class="select select-bordered w-full max-w-lg">
                            {
                                slots.map( slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-lg" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-lg" />
                        <input type="submit" value="Submit" className="btn btn-accent text-white w-full max-w-lg" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;