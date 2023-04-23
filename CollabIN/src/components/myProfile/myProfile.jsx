import React from 'react';

const MyProfile = ({loginData,logout}) => {
   
    return ( <React.Fragment>
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
                             {loginData.fname}
                        </div>
                    </div>
                    <div style={{height: 100}}>
                        <div className="row">
                            <div className="col-sm-3"><strong>Email:</strong></div>
                            {loginData.email}
                        </div>
                    </div>
                    <div style={{height: 100}}>
                        <div className="row">
                            <div className="col-sm-3"><strong>Phone:</strong></div>
                            {loginData.phone}
                        </div>
                    </div>
                    <div style={{height: 100}}>
                        <div className="row">
                            <div className="col-sm-3"><strong>Collaborations:</strong></div>
                            {loginData.collaborations}
                        </div>
                    </div>
                    </div>
        </div>
    </div>
</div>
</div>
<div className="text-center mt-5"><button type="button" className="btn btn-danger" onClick={logout}>Logout</button></div>
</React.Fragment>
    );
}
 
export default MyProfile;