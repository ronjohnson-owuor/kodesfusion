import {useNavigate} from "react-router-dom";
import users from "../storyjson/storiesdetails.json";

export default function Love(){
    const navigate = useNavigate();
    return(
        <>
          <div className="storyBox">
            <div className="heading">
                <h1>How to improve your productivity</h1>
            </div>
            <div className="content">

            <img src="https://cdn.pixabay.com/photo/2020/11/20/22/11/woman-5762754_960_720.png" alt="productivity heading" />

               <h3>Introduction:</h3>
               <br />
               As professionals, we all want to be productive and efficient in our work. However, it can be challenging to stay focused and motivated throughout the day. Here are some tips to help you increase your productivity and get more done in less time.

               <h3>1)Eliminate Distractions</h3>
               Distractions are one of the biggest productivity killers. Whether it's your phone buzzing, social media notifications, or co-workers chatting, distractions can disrupt your focus and make it challenging to get work done. To eliminate distractions, try turning off your phone notifications, closing unnecessary tabs on your computer, or using noise-canceling headphones to block out external noise.
                
                <img src="https://cdn.pixabay.com/photo/2022/03/03/08/15/time-7044852__340.png" alt="image was suppose to be here" />

                <h3>2)Prioritize Tasks</h3>
                Another way to improve productivity is to prioritize tasks. Make a to-do list at the beginning of each day and rank your tasks in order of importance. This will help you focus on the most critical tasks first and avoid wasting time on less critical ones.

                <h3>3)Take Breaks</h3>
                It might seem counterintuitive, but taking regular breaks can actually help you be more productive. Studies have shown that taking short breaks can increase focus and reduce stress. Try taking a 5-10 minute break every hour or so to stretch, walk around, or just relax.

                <h3>supplimentary video</h3>
                <iframe src="https://www.youtube.com/embed/T4CB5RPbtCk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                
               <h3>3)Collaboration:</h3> 
             Ideas can also be born from collaboration. When people with different perspectives and expertise come together, they can generate ideas that none of them could have thought of on their own. Collaborative brainstorming sessions, hackathons, and design sprints are all great examples of how collaboration can lead to innovation. One of the most well-known examples of collaboration in innovation is the development of the  first Apple computer. Steve Jobs and Steve Wozniak were working together to create a personal computer that would be accessible to everyone.If you look closely you will find that some of the thing s we use were mostly not made by a one-man -army except for few , ie google,pintrest , openAI , youtube etc .Collaboration is key in many aspects

              <h3>4)Get Enough Sleep</h3>
              Getting enough sleep is crucial for productivity. If you're tired, you'll have a harder time focusing and being productive. Aim for 7-8 hours of sleep each night to ensure that you're well-rested and ready to tackle the day ahead.

              <h3>Use Productivity Tools</h3>
              There are many productivity tools available that can help you manage your time and stay organized. From task managers to time-tracking software, find tools that work for you and help you stay on top of your work.

              <h3>Set Goals</h3>
              Setting goals can help you stay focused and motivated. Whether it's a daily, weekly, or monthly goal, having something to work towards can help you stay on track and avoid procrastination.

              <h3>Delegate Tasks</h3>
              If you're overwhelmed with work, don't be afraid to delegate tasks. This can help you focus on your most critical tasks and reduce stress.

              In conclusion, improving productivity takes effort, but it's worth it in the end. By eliminating distractions, prioritizing tasks, taking breaks, getting enough sleep, using productivity tools, setting goals, using the Pomodoro Technique, and delegating tasks, you can increase your productivity and get more done in less time.
            </div>
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