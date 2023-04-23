import Profile from "../profile/profile";
const Organisers = ({organisers}) => {
    return ( <div>
        <div className="container mt-4" id="mainbox">
            <div className="row">
                <h3 className="text-light">Profiles of Organisers</h3>
            </div>
            <div className="card-group">
                {organisers.map((p)=><Profile userData={p}/>)}
              
            </div>
        </div>
        </div> );
}
 
export default Organisers;