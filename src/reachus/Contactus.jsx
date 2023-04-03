import { Link } from 'react-router-dom';
import Navigation from './Navigation';
export default function Contactus(){
    return(
        <>
        <div className="contactusbanner">
            <img src="https://cdn.pixabay.com/photo/2019/08/30/06/03/telephone-4440525__340.jpg" alt="" />
            <div className="details">
            <h1>Do you have any questions </h1>
           <p>you can reach us through our email provided down below.
            We are open to talking and clarifying your problems
             </p>
             <h3>Email:contactus@kodesfusion.com</h3>
            <Navigation/>
            </div>
          
        </div>
       
        </>
    )
}