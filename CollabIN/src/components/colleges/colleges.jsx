import Profile from "../profile/profile";
const Colleges = ({colleges}) => {
    return ( <div>
        <div className="container mt-4" id="mainbox">
            <div className="row">
                <h3 className="text-light">Profiles of Colleges</h3>
            </div>
            <div className="card-group">
                {colleges.map((p)=><Profile userData={p}/>)}
              
            </div>
        </div>
        </div> );
}
 
export default Colleges;