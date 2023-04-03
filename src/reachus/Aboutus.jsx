import { Link } from 'react-router-dom';
import Navigation from './Navigation';
export default function About(){
    return(
        <>
        <div className="contactusbanner">
            <img src="https://cdn.pixabay.com/photo/2014/08/15/06/16/imprint-418594__340.jpg" alt="" />
            <div className="details">
            <h1>Do you want to know who we are ? </h1>
           <p>Kodesfusion is  located in Nairobi,Kenya .We help people achieve their goals by 
            motivating them and also giving them tips on how to improve themselves.That is us in short
            but if you have any questions feel free to contact us using our <Link to="/contactus">contact us</Link> page
             </p>
             <Navigation/>
            </div>
          
        </div>
       
        </>
    )
}