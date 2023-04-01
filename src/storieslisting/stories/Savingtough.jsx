
import {useNavigate} from "react-router-dom";

import Suggestion from "../../home/Suggestion";
window.scrollTo(0, 0);

export default function Savingtough(){
    
    return(
        <>
          <div className="storyBox">
            {/* START OF BLOGPOST */}

            <div className="heading">
                <h1>How to Save Money on a Tight Budget: Tips and Tricks for Living Frugally</h1>
            </div>
            <div className="content">

            <img src="https://cdn.pixabay.com/photo/2017/08/30/07/52/money-2696219_960_720.jpg" alt="idea bulb" />
            
            Living on a tight budget can be a challenge, but it's not impossible. With some smart strategies and a bit of discipline, you can save money even when your income is limited. Here are some tips and tricks for living frugally:

           <h3>Cut back on eating out</h3>
           One of the biggest expenses for many people is eating out. By cooking at home more often, you can save a lot of money on food expenses. Consider meal prepping for the week, and make your own coffee instead of buying it at a cafe.

           <h3>Use coupons and discount codes</h3>
           Before you make a purchase, check online for coupons and discount codes. You can often find great deals on everything from groceries to clothing and electronics.
                
                <img src="https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696229__340.jpg.jpg" alt="idea bulb" />

                <h3>Shop secondhand</h3>
                Buying secondhand items (mitumba) can save you a lot of money, especially for things like clothing and furniture. Check out thrift stores, consignment shops, and online marketplaces like Craigslist or Facebook Marketplace.

            <h3>Cancel subscriptions and memberships you don't use</h3>
            If you're not using a subscription or membership, cancel it. This includes things like gym memberships, magazine subscriptions, and streaming services.


             <h3>Find free or low-cost activities</h3>
             Look for free or low-cost activities in your area, such as hiking, visiting a park, or attending a community event. These can be great ways to have fun without spending a lot of money.

                <h3>supplimentary video</h3>
                <iframe width="560" height="315" src="//www.youtube.com/embed/ezb88kWjRYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
            </div>

            {/* END OF BLOG POST */}

            <hr />
            <h3 id="moreHeading">more from us</h3>
            <Suggestion/>
          </div>
        </>
    )
}