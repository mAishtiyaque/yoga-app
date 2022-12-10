import './profile.css'
import { useAuthValue } from './AuthContext'
import PurchaseForm from './PurchaseForm'
import { db } from './firebase'
import { collection, getDocs,where,query } from "firebase/firestore";
import { useState, useEffect } from 'react';

function Profile() {
    const { currentUser } = useAuthValue()
    const [userPurchased, setUserPurchase] = useState([]);
    const fetchPost = async () => {
        if(currentUser?.email!==undefined)
        {
            const q = query(collection(db, "purchases"), where("formValue.regEmail", "==", currentUser?.email));
            const querySnapshot =await getDocs(q);
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data().formValue, id: doc.id }));
                setUserPurchase(newData);
               //console.log(newData);
        }
        else return
    }
    useEffect(() => {
        fetchPost();
    }, [])

    return (
        <div className='center'>
            <div className='profile'>
                <div>
                    <div className='profile_text'>
                        <div>Profile </div>
                        [ <div> {currentUser?.email} </div> ]
                    </div>
                    <Table2
                        data={userPurchased}
                    />
                </div>
                <div>
                    <PurchaseForm fetchPost={fetchPost} />
                </div>

            </div>
        </div>
    )
}
export default Profile

const Table2 = ({ data }) => {
    return (
        <ul className="responsive-table">
            <li className="table-header">
                <div className="col">Name</div>
                <div className="col">Slot</div>
                <div className="col">Paid</div>
                <div className="col">Email</div>
            </li>
            {data.map((item, idx) =>
                <li className="table-row" key={idx}>
                    <div className="col" data-label="Name">{item.firstName} {item.lastName}</div>
                    <div className="col" data-label="Slot">{item.pslot}</div>
                    <div className="col" data-label="Paid">{item.fee}/- INR</div>
                    <div className="col" data-label="Email">{item.email}</div>
                </li>
            )}
        </ul>)
}
