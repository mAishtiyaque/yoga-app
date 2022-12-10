import React, { useEffect, useState } from 'react';
import { useAuthValue } from './AuthContext'

import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase'
import { useNavigate } from 'react-router-dom';
const slots = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];
const initialState={
    firstName: '',
    lastName: '',
    email: '',
    pslot: slots[1],
    fee: 500,
    age:18
};
function PurchaseForm({fetchPost}) {
    const { currentUser } = useAuthValue()
    const navigate = useNavigate();
    const [formValue, setFormVlaue] = useState(initialState)
    const { firstName, lastName, email, pslot, fee,age } = formValue;
    const [status, setStatus] = useState('')
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormVlaue(state => { return { ...state, [name]: value }; })
    }

    useEffect(()=>{
        setTimeout(()=>{
            setStatus('')
        },3000)
    },[status?.type])
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (currentUser?.email === undefined) navigate('/login')
        else {
            //CompletePayment Here
            // redirect to payment gateway and according to gateway reponse add data into database

            try {
                const docRef = await addDoc(collection(db, "purchases"), {
                    formValue:{...formValue,regEmail:currentUser.email},
                });
                console.log("Document written with ID: ", docRef.id);
                setStatus({type:'success',msg:'Purchased Success'})
                setFormVlaue({...initialState,pslot})
                fetchPost();
                //navigate where you want after success purchase
                //navigate('/profile')
            } catch (e) {
                setStatus({type:'error',msg:'Something going wrong'})
                console.error("Error adding document: ", e);
            }
        }
        //console.log(formValue);
    }
    return (
        <div className="p_form">
            {status && <div className={"status_text "+ status.type}>{status.msg}</div>}
            <form onSubmit={handleSubmit} name='login_form'>
                <h1>CHOOSE a Plan</h1>
                <input
                    type='text'
                    name='firstName'
                    value={firstName}
                    required
                    placeholder="Enter your First Name"
                    onChange={handleInputChange} />
                <input
                    type='text'
                    name='lastName'
                    value={lastName}
                    required
                    placeholder="Enter your Last Name"
                    onChange={handleInputChange} />
                <input
                    type='number'
                    name='age'
                    value={age}
                    min='18' 
                    max='65'
                    required
                    placeholder="Enter your age"
                    onChange={handleInputChange} />
                <input
                    type='email'
                    name='email'
                    value={email}
                    min={18}
                    max={65}
                    required
                    placeholder="Enter your email"
                    onChange={handleInputChange} />
                
                <div className='slots'>
                    {
                        slots.map((slot, idx) => {
                            return (
                                <label className="labl" key={idx} >
                                    <input type="radio" name="pslot" value={slot} onClick={handleInputChange} checked={slot == pslot} readOnly />
                                    <div>{slot}</div>
                                </label>
                            )
                        })
                    }
                </div>
                <div className='price'>
                    <span>Total</span>
                    <span>{fee}/- Rs INR</span>
                </div>
                <button type='submit'>Check Out</button>
            </form>
        </div>

    )
}

export default PurchaseForm;
