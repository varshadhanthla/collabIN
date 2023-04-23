import Profile from "../profile/profile";
const Sponsors = ({sponsors}) => {
    console.log(sponsors);
    return ( <div className="container mt-4" id="mainbox">
    <div className="row">
        <h3 className="text-light">Profiles of Sponsors</h3>
    </div>
    <div className="card-group">
        {sponsors.map((p)=><Profile userData={p}/>)}
      
    </div>
</div>  );
}
 
export default Sponsors;