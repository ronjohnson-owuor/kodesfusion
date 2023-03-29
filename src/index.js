import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

function App() {
  const [email,setemail] = useState("");

  // send email function
  const sendEmail = (e) => {
    e.preventDefault();
    var fData = new FormData();
    fData.append("email",email);

    axios({
      method: "POST",
      url: "static/apis/email.php",
      data: fData
    }).then((response) => {response ? console.log(response) : console.log("email not inserted")})
    .catch((error) => {
      console.error(error);
    }); 
  }


  return (


    <div className='waitinglist'>
        <h1>Stay in the Know</h1>
        <p>Never miss a story of success again. Sign up for our mailing list and get the latest
           biographies and news.Join our waiting list</p>
           <div className="formWait">
            <form  method="post">
              <input type="email" required placeholder='example@gmail.com' onChange={(e)=>setemail(e.target.value)} />
              <input type="submit" value="submit" onClick={sendEmail} />
            </form>
           </div>
           <span>(email will be used only for notification)</span>
    </div>


  );
}

ReactDOM.render(<App />, document.getElementById('root'));
