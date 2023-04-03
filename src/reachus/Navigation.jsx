import { Link } from 'react-router-dom';
export default function Navigation(){
    const linkStyle = {
        marginLeft:"0.5rem",
        marginRight:'0.5rem'
    }
    return(
        <>
             <div className="navigation">
              <Link to="/contactus" style={linkStyle}>contacts</Link>
              <Link to="/storylist"  style={linkStyle}>articles</Link>
              <Link to="/about"  style={linkStyle}>about</Link>
              <Link to="/terms"  style={linkStyle}>terms</Link>
              <Link to="/policy"  style={linkStyle}>policy</Link>
            </div>
       
        </>
    )
}