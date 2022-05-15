import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AppointmentModal = ({treatment, date, setTreatment}) => {
    const [user] = useAuthState(auth);
    const {_id, name, slots} = treatment;

    

    const handleBooking = (e)=> {
        e.preventDefault();
        const selectedSlot = (e.target.slot.value);

        const appointmentDetails = {
            treatmentId : _id,
            treatmentName: name,
            date: format(date , "PP"),
            slot: selectedSlot,
            patientName: user.displayName,
            patientEmail: user.email,
            phone: e.target.phone.value
        }

        fetch("http://localhost:5000/appointment",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(appointmentDetails)
        })
        .then( res=> res.json())
        .then( data => {
            console.log(data);
            setTreatment(null);
        })

        
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold mb-8">{name}</h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-y-5 ">
                        <input type="text" value={format(date , "PP")} disabled className="input input-bordered w-full max-w-lg" />
                        <select name="slot" className="select select-accent w-full max-w-lg">
                            {
                                slots.map( (slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName} disabled className="input input-accent w-full max-w-lg" />
                        <input type="text" value={user?.email} disabled className="input input-accent w-full max-w-lg" />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-accent w-full max-w-lg" />
                        <input type="submit" value="Submit" className="btn btn-accent text-white w-full max-w-lg" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;