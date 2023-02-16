import {Link} from "react-router-dom";


const Missing = () => {
  return (
    <main className="Missing">
                    
              <h2>Post Not Found</h2>
              <p>Well that is, dissapointing </p>
              <p>
                <Link to="/">Visit our home Page</Link>
              </p>
           
    </main>
  )
}

export default Missing