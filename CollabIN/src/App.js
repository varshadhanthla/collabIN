import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/header';
import { useState,useEffect } from 'react';
import Home from './components/home/home';
import About from './components/about/about';
import Colleges from './components/colleges/colleges';
import Contact from './components/contact/contact';
import Login from './components/login/login';
import Sponsors from './components/sponsors/sponsors';
import Organisers from './components/organisers/organisers';
import Artists from './components/artists/artists';
import SignUp from './components/signup/signup';
import UserDetails from './components/userDetails';
import "react-toastify/dist/ReactToastify.css"
import MyProfile from './components/myProfile/myProfile';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import ExpandProfile from './components/expandProfile/expandProfile';
import React from 'react';
import axios from "axios";
import Chat from './components/chat/chat';
// import socketIO from 'socket.io-client';

// const socket = socketIO.connect('http://localhost:5000');


const App= ()=> {
  const [loginData,setLoginData]=useState({});
  const [loginstatus,setLoginstatus]=useState(false)
    const [profiles,setProfiles]=useState([]);
    const [artistsProf,setArtistsProf]=useState([]);
    const [organisersProf,setOrganisersProf]=useState([]);
    const [collegesProf,setCollegesProf]=useState([]);
    const [sponsorsProf,setSponsorsProf]=useState([]);
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname, setFname] = useState("");
    const [collaborations,setCollaborations]=useState("");
    const [signupemail, setsignupEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [signuppassword, setsignupPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [secretKey, setSecretKey] = useState("");
    // const handleDeleteUser=(userid,collaborations)=> {
      
    //   fetch("http://localhost:5000/deleteUser", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify({
    //       userid,
    //       collaborations
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data, "userRegister");
    //       if (data.status == "ok") {
    //         alert("Change successful");
    //         window.localStorage.setItem("token", data.data);
  
    //         navigate("/")
    //       }
    //     });
    // }
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
  
        console.log(fname, signupemail,phone, signuppassword,collaborations);
        fetch("http://localhost:5000/register", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            fname,
            signupemail,
            phone,
            signuppassword,
            userType,
            collaborations
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            if (data.status == "ok") {
              alert("Registration Successful");
              if(collaborations!==""){
                console.log(collaborations,"colaberations");
                let collabs=collaborations.split(',');
                console.log(collabs,"collabs");
                collabs.forEach(collab => {
                  let index=profiles.findIndex(p=>p.email===collab);
                  console.log(index,"index")
                  if(index!=-1){
                    let p=profiles;
                  console.log(p,"p");
                  console.log(p[index],"p[index]");
                  // handleDeleteUser(p[index]._id,collaborations);
                    let s=p[index].collaborations? p[index].collaborations:""
                    s+=("/"+signupemail);
                    console.log(s,"s");
                    p[index].collaborations=s;
                    console.log(p[index].collaborations,"pc");
                    console.log(p,"p");
                    setProfiles(p);
                    console.log(profiles,"profiles")
                  }
                });
                
              }
              navigate("/login")
            } else {
              alert("Something went wrong");
            }
          });
    };
    const handleSubmit=(e)=> {
      e.preventDefault();
      console.log(email, password);
      
      fetch("http://localhost:5000/login-user", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Login successful");
            window.localStorage.setItem("token", data.data);
            let login=profiles.find(p=>p.email===email);
            setLoginData(login);setLoginstatus(true);
            console.log(loginData,loginstatus);
            
            window.localStorage.setItem("loggedIn", true);
  
            navigate("/")
          }
        });
    }
    useEffect(()=>{
        fetch("http://localhost:5000/getAllUser")
          .then((res) => res.json())
          .then((data) => {
            setProfiles(data.data);
            setArtistsProf(data.data.filter(p=>p.userType=="Artist"));
            setCollegesProf(data.data.filter(p=>p.userType=="College"));
            setOrganisersProf(data.data.filter(p=>p.userType=="Organiser"));
            setSponsorsProf(data.data.filter(p=>p.userType=="Sponsor"))
             
            }
          )});
    const logOut = () => {
      window.localStorage.clear();
      navigate('/')
      setLoginData({});
      setLoginstatus(false);
    };
    
    
    return (
      <div className='App'>
        <ToastContainer/>
        <Header profs={profiles} loginstatus={loginstatus} collaborations={loginData.collaborations}/>
        <Routes>
        <Route path="/myprofile" element={(loginstatus) ? <MyProfile loginData={loginData} logout={logOut}/> : <Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/artists/*" element={(loginstatus) ?<Artists artists={artistsProf}/> : <Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/organisers/*" element={(loginstatus) ?<Organisers organisers={organisersProf}/> : <Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/sponsors/*" element={(loginstatus) ?<Sponsors sponsors={sponsorsProf}/> : <Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/colleges/*" element={(loginstatus) ?<Colleges colleges={collegesProf}/> : <Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/login" element={<Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/signup" element={<SignUp setFname={setFname} doSubmit={handleSignUpSubmit} setPhone={setPhone} setsignupEmail={setsignupEmail} setsignupPassword={setsignupPassword} setCollaborations={setCollaborations} setUserType={setUserType} setSecretKey={setSecretKey}/>} />
          <Route path="/contact" element={(loginstatus) ?<Contact /> : <Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/about" element={(loginstatus) ?<About /> : <Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/*" element={<Home />} />
          <Route path="/:name" element={(loginstatus) ?<ExpandProfile prof={profiles}/> : <Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
          <Route path="/:name/chat" element={(loginstatus) ?<Chat prof={profiles}/> : <Login doSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword}/>} />
        </Routes>
        
      </div>
    );
    class App extends React.Component {
      constructor(props){
        super(props);
        this.state={
          amount:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.openPayModal = this.openPayModal.bind(this);
      }
    componentDidMount () {
        const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
    document.body.appendChild(script);
    }
    handleChange(evt){
        console.log(evt.target.value)
        this.setState({
          amount:evt.target.value
        })
      }
    openPayModal(amt){
        var amount = amt * 100; //Razorpay consider the amount in paise
    var options = {
          "key": process.env.REACT_APP_razorpaytest_id,
          "amount": 0, // 2000 paise = INR 20, amount in paisa
          "name": "",
          "description": "",
          'order_id':"",
          "handler": function(response) {
              console.log(response);
              var values ={
                  razorpay_signature : response.razorpay_signature,
                  razorpay_order_id : response.razorpay_order_id,
                  transactionid : response.razorpay_payment_id,
                  transactionamount : amount,
                }
              axios.post('http://localhost:5000/upgrade/payment',values)
              .then(res=>{alert("Success")})
              .catch(e=>console.log(e))
          },
          "prefill":{
              "name":'Sanjana Kumari',
              "email":'sanjana@gmail.com',
              "contact":'1234567890',
          },
          "notes": {
            "address": "Hello World"
          },
          "theme": {
            "color": "#528ff0"
          }
        };
    axios.post('http://localhost:5000/upgrade/order',{amount:amount})
        .then(res=>{
            options.order_id = res.data.id;
            options.amount = res.data.amount;
            console.log(options)
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        })
        .catch(e=>console.log(e))
        
    };
    render(){
        return (
        <div>
          Enter the amount:<input type="number" name="amount" onChange={this.handleChange}/>
          <button onClick={(e)=>{this.openPayModal(this.state.amount)}}>Upgrade</button>
        </div>
      );
    }
      
    }
}



export default App;
