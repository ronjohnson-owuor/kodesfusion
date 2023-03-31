import {useNavigate} from "react-router-dom";
import users from "../storyjson/storiesdetails.json";

export default function Farm(){
    const navigate = useNavigate();
    return(
        <>
          <div className="storyBox">
            <div className="heading">
                <h1>How great ideas are born</h1>
            </div>
            <div className="content">

            <img src="https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_960_720.jpg" alt="idea bulb" />

               <h3>Introduction:</h3>
               <br />
               Introduction: Ideas are the foundation of progress, and the spark of creativity is what ignites that foundation. But how do ideas come to life? In this article, we will explore the different ways ideas are born, including problem-solving, inspiration, collaboration, and experience.

               <h3>1)Problem-solving:</h3>
               Some of the most innovative ideas come from trying to solve a problem. It could be a personal problem, a societal issue, or a business challenge. When we face a problem, our brains automatically start looking for solutions. This search process can lead to some amazing ideas. One classic example is the invention of the Post-it note. A 3M engineer was trying to create a super-strong adhesive, but ended up with a weak one instead. However, he noticed that the weak adhesive was perfect for sticking notes without leaving a residue. This accidental discovery led to the birth of the Post-it note.Remember ideas are born when someone tries to solve a challenge that is facing him /her or even other people what are the challenges facing you
               and how can you solve them ?
                
                <img src="https://cdn.pixabay.com/photo/2014/10/11/21/18/sunset-485016__340.png" alt="idea bulb" />

                <h3>2)Inspiration:</h3>
                
                Sometimes, ideas come from a moment of inspiration. It could be a flash of insight or a sudden realization. Inspiration can come from anywhere – a book, a movie, a conversation, or even a dream. One famous example is the story of how J.K. Rowling came up with the idea for Harry Potter. She was on a train, staring out the window, when she suddenly had the image of a boy who didn't know he was a wizard. That one moment of inspiration led to the creation of one of the most beloved book series of all time.
                <h3>3)being alert</h3>
                sometimes beign alert is the only thing we need to born great ideas.Be observant use your eyes to observe the world around you use your ears to listen to people's problems you might get a eureka moment from that. Be sensitive to what people say and how they act you can get great ideas from the situation.

                <h3>supplimentary video</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NugRZGDbPFU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                
               <h3>3)Collaboration:</h3> 
             Ideas can also be born from collaboration. When people with different perspectives and expertise come together, they can generate ideas that none of them could have thought of on their own. Collaborative brainstorming sessions, hackathons, and design sprints are all great examples of how collaboration can lead to innovation. One of the most well-known examples of collaboration in innovation is the development of the  first Apple computer. Steve Jobs and Steve Wozniak were working together to create a personal computer that would be accessible to everyone.If you look closely you will find that some of the thing s we use were mostly not made by a one-man -army except for few , ie google,pintrest , openAI , youtube etc .Collaboration is key in many aspects

              <h3>4)Experience:</h3>
             Finally, ideas can come from experience. When we go through something, we often come out on the other side with a new perspective or idea. This is especially true for creative endeavors like writing, art, and music. Many artists draw inspiration from their own lives and experiences. For example, Taylor Swift's songwriting is often inspired by her personal experiences and relationships.Remember to keep on reading because the more you read the better you can view the world from a different angle.Compare yourself vs your kid or any person there is something that you know that they dont know and that give you advantage over him or her.

              <h3>Conclusion:</h3>
             Ideas are the lifeblood of innovation, and they can come from many different sources. Whether it's problem-solving, inspiration, collaboration, or experience, the creative spark can strike at any moment. By embracing these different avenues for idea generation, we can unlock our full potential and make the world a better place.
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