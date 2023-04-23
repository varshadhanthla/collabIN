import { Route,Routes, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Chat from "../chat/chat";
const ExpandProfile = ({prof}) => {
    const {name} =useParams()
    let userData={};
    console.log(prof[1].fname+"Profiles")
    if(prof.find(p=>p.fname.trim()===name)){
        userData=prof.find(p=>p.fname.trim()===name);
    }
    return ( 
        <div className="container bg-light">
    <div className="row" style={{marginTop: 30,border: '2px solid rgb(0, 149, 255)'}}>
        <div className="col-sm-4"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" style={{maxHeight: 400}} className="card-img" alt="..."/>
        </div>
        <div className="col-sm-8" style={{paddingLeft:90}}>
            <div className="row" style={{margin:40}}>
                <div className="col">
                    <div style={{height: 100}}>
                        <div className="row">
                            <div className="col-sm-3"><strong>Name:</strong></div>
                             {userData.fname}
                        </div>
                    </div>
                    <div style={{height: 100}}>
                        <div className="row">
                            <div className="col-sm-3"><strong>Email:</strong></div>
                            {userData.email}
                        </div>
                    </div>
                    <div style={{height: 100}}>
                        <div className="row">
                            <div className="col-sm-3"><strong>Phone:</strong></div>
                            {userData.phone}
                        </div>
                    </div>
                    <div style={{height: 100}}>
                        <div className="row">
                            <div className="col-sm-3"><strong>Collaborations:</strong></div>
                            {userData.collaborations}
                        </div>
                    </div>
                    <Link className="btn btn-lg btn-outline-primary ml-0 mr-auto" to={'/'+name+'/chat'}><i class="bi bi-chat"></i> &nbsp;Chat</Link>
                    <Routes>
                        <Route path="/chat" element={<Chat userData={userData}/>}></Route>
                    </Routes>
                    </div>
        </div>
    </div>
</div>
</div>
    );
}
 
export default ExpandProfile;