
import {useNavigate} from "react-router-dom";
import users from "../storyjson/storiesdetails.json";

export default function Saving(){
    const navigate = useNavigate();
    return(
        <>
          <div className="storyBox">
            {/* START OF BLOGPOST */}

            <div className="heading">
                <h1>10 Simple Tips to Save Money Without Sacrificing Your Lifestyle</h1>
            </div>
            <div className="content">

            <img src="https://cdn.pixabay.com/photo/2017/08/30/07/52/money-2696219_960_720.jpg" alt="idea bulb" />
            
            Saving money can sometimes feel like a daunting task, but it doesn't have to be. With a few 
            simple changes to your daily routine and some mindful planning, you can easily build up your 
            savings without feeling like you're sacrificing your lifestyle. Here are 10 easy tips to get you
             started on your path to financial stability:

           <h3>Set a budget</h3>
           The first step to saving money is knowing how much you're spending. Track your expenses for 
           a few weeks, and then create a budget based on your findings. Be realistic about what you can
            afford and make sure to include all of your expenses, including bills, groceries, and leisure activities.

           <h3>Cut back on unnecessary expenses</h3>
           Once you have a budget in place, take a look at where you can cut back. For example, if you're 
           spending a lot of money on takeout, try cooking at home more often. Cancel subscriptions or memberships 
           that you don't use or need.
                
                <img src="https://cdn.pixabay.com/photo/2015/10/31/08/50/coins-1015125__340.jpg" alt="idea bulb" />

                <h3>Automate your savings</h3>
                One of the easiest ways to save money is to make it automatic. Set up automatic transfers from
                 your checking account to your savings account each month. This way, you won't even miss the money,
                  and your savings will grow without you having to think about it.

            <h3>Shop smarter</h3>
            When shopping for groceries or other items, look for deals and coupons. Compare prices between different 
            stores, and try to buy in bulk when possible. This can save you a significant amount of money over time.


             <h3>Use cash instead of credit</h3>
             Using cash instead of credit can help you stay within your budget and avoid overspending.
              When you pay with cash, you can physically see how much money you have left, which can help you make
               better spending decisions,furthermore  you dont have to spend to spend your money eg paying for transaction fee

                <h3>supplimentary video</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oVA1az90u0s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                
                <h3>Cut down on energy usage</h3>
                Saving money on your utility bills is another easy way to save money. Turn off lights and appliances when 
                you're not using them, and consider switching to energy-efficient bulbs and appliances.

               <h3>Use public transportation or carpool</h3>
               If you can, try to use public transportation or carpool to work or school. This can save you a lot of money on 
               gas and parking fees.

               <h3>Pay off debt</h3>
               Paying off debt can be a great way to free up money in your budget. Focus on paying off high-interest debt first, such as credit cards, and then work on paying off other debts.

               <h3>Find free or low-cost activities</h3>
               You don't have to spend a lot of money to have fun. Look for free or low-cost activities in your area, 
               such as hiking, picnics, or visiting museums on free days.

               <h3>Set financial goals</h3>
               Finally, set financial goals for yourself. Whether it's saving for a down payment on a house or paying off a credit card, having specific goals can help motivate you to save more money.
               Saving money doesn't have to mean sacrificing your lifestyle. By making a few simple changes to your daily routine and being mindful about your spending, you can easily build up your savings and achieve financial stability.
            </div>

            {/* END OF BLOG POST */}

            <hr />
            <h3 id="moreHeading">more from us</h3>
              <div className="reccomended">
                   {users.sort(() => Math.random() - 0.5)
                   .slice(0,3)
                   .map((items)=>(
                    <div id={items.key}>
                        <h3>{items.title}</h3>
                        <button onClick={() => navigate(`/${items.paths}`)}>read</button>
                    </div>
                   ))}
              </div>
          </div>
        </>
    )
}