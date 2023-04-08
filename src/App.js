import './App.css';
import './ProfileIcon.css';
import { FaUser, FaPencilAlt } from 'react-icons/fa'; 
import React, { useState } from "react"; 

function App() {
  const [isDivOpen, setIsDivOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  function toggleDiv() {
    setIsDivOpen(true); 
  }
  const handleCloseClick = () => {
    setIsDivOpen(false); 
  };
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };
  const handleSaveClick = () => {
    // do something with firstName and lastName, such as update a database
    console.log(`First name: ${firstName}, Last name: ${lastName}`);
    const updatedFirstName = document.getElementById('firstName').value;
    const updatedLastName = document.getElementById('lastName').value;
    setFirstName(updatedFirstName);
    setLastName(updatedLastName);
    setIsDivOpen(false);
  };
  return (
    <div style={{ backgroundColor: isDivOpen ? "black" : 'none' }}>
      
      <div id='profile' className='prfl'>
          <div className="profile-icon">
            <div className="profile-icon__circle">
              <FaUser className="profile-icon__user" />
            </div>
            <div className="profile-icon__edit-container" onClick={toggleDiv}>
              <FaPencilAlt className="profile-icon__edit" />
            </div>
            {isDivOpen && (
              <div className="new-div"   style={{ backgroundColor: !isDivOpen ? 'blur(0px)' : 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style={{marginLeft:"45rem",marginTop:"-3rem"}} onClick={handleCloseClick}>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>  
                <div style={{marginLeft:"20rem"}}>
                <h3 className='hello' style={{marginTop:".7rem",fontSize:"15px"}}>First Name</h3>
                <input style={{marginLeft:"0rem",color:"grey",borderColor:"white",borderRadius:".3rem",backgroundColor:"white",width:"25rem" ,height:"2.3rem"}} id="firstName" placeholder='First Name' value={firstName} onChange={handleFirstNameChange} defaultValue={firstName}/>    
                <h3 className='hello' style={{marginTop:"0.7rem",fontSize:"15px"}}>Last Name</h3>
                <input style={{marginLeft:"0rem",color:"grey",borderColor:"white",borderRadius:".3rem",backgroundColor:"white",width:"25rem" ,height:"2.3rem"}} placeholder='Last Name' value={lastName} onChange={handleLastNameChange}/>
                <h3 className='hello' style={{marginTop:".7rem",fontSize:"15px"}}>Email Address</h3>
                <input style={{marginLeft:"0rem",color:"grey",borderColor:"white",borderRadius:".3rem",backgroundColor:"white",width:"25rem" ,height:"2.3rem"}} placeholder='Email Address' value={email} onChange={handleEmailChange}/>
                <h3 className='hello' style={{marginTop:"0.7rem",fontSize:"15px"}}>Mobile Number</h3>    
                <input style={{marginLeft:"0rem",color:"grey",borderColor:"white",borderRadius:".3rem",backgroundColor:"white",width:"25rem" ,height:"2.3rem"}} placeholder='Mobile Number' value={mobileNumber} onChange={handleMobileNumberChange}/>  
                <button className='edit_btn' style={{marginLeft:"5rem",backgroundColor:"black"}} onClick={handleCloseClick}>Cancel</button>
                <button className='edit_btn' style={{marginLeft:"10rem"}} onClick={handleSaveClick}>Save</button>  
                </div>
              </div>
            )}
          </div> 
          <div id='name' className='name_desc'> 
              <h4 className='hello'>Hello,</h4>
              <h3 className='u'>Unnimaya T</h3>
              <h4 className='hello' style={{marginTop:"-0.7rem",fontSize:"13px"}}>unnimayat01@gmail.com</h4>
          </div>
          <div id='followers' className='btn'>
            <button className='btn'>0 Followers</button>
          </div>
      </div>

      <div id='about' className='about'>
        <button className='edit_btn' style={{marginLeft:"74rem",width:"4.5rem"}}>Edit</button>
        <h3 className='u' style={{marginLeft:"-4rem",fontSize:"13px",width:"7rem"}}>ABOUT ME</h3>   
        <textarea className='description'  ></textarea>
      </div>     
      <div style={{backgroundColor:"grey",height:".5px"}}></div>

      <div id='map' className='map'>
        <h3 className='u' style={{ fontSize:"13px",width:"7rem" ,marginLeft:"-4rem"}}>CIPHER MAP</h3>   
      </div>

      
      <div style={{backgroundColor:"grey",height:"1px"}}></div>
      <div id='on_web' className='on_web'>
        <div className='web_x' style={{marginLeft:"-4rem" ,marginTop:"-5.5rem"}}>
          <button className='edit_btn' >Change</button>
          <h3 className='u' style={{fontSize:"13px",width:"6rem"}}>ON THE WEB</h3>             
        </div>
        <br></br>
        <div className='grid'> 
          <div  style={{marginLeft:"-4rem"}}>
            <h3  className='hello' style={{marginTop:"-0.7rem",fontSize:"15px"}}>Linkedin</h3>
            <div style={{borderColor:"black",borderRadius:".3rem",backgroundColor:"white" ,width:"25rem" ,height:"2.3rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" style={{backgroundColor:"white",borderRadius:"2rem",color:"grey",marginLeft:".5rem",marginTop:".3rem"}}>
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
            <label style={{marginLeft:"1rem",marginTop:"2rem",color:"grey"}} placeholder='Linkedin'>
            Linkedin
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" style={{color:"grey",marginLeft:"15rem",marginTop:".3rem"}}>
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
            </div>
          </div>

          <div  style={{marginLeft:"-4rem"}}>
            <h3  className='hello' style={{marginTop:"-0.7rem",fontSize:"15px"}}>Github</h3>
            <div style={{borderColor:"black",borderRadius:".3rem",backgroundColor:"white" ,width:"25rem" ,height:"2.3rem"}}>           
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" style={{backgroundColor:"white",borderRadius:"2rem",color:"grey",marginLeft:".5rem",marginTop:".3rem"}}>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <label style={{marginLeft:"1rem",marginTop:"2rem",color:"grey"}} placeholder='Linkedin'>
            Github
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" style={{color:"grey",marginLeft:"15rem",marginTop:".3rem"}}>
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
            </div>
          </div>

          <div  style={{marginLeft:"-4rem"}}>
            <h3  className='hello' style={{marginTop:"-0.7rem",fontSize:"15px"}}>Facebook</h3>
            <div style={{borderColor:"black",borderRadius:".3rem",backgroundColor:"white" ,width:"25rem" ,height:"2.3rem"}}>           
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" style={{backgroundColor:"white",borderRadius:"2rem",color:"grey",marginLeft:".5rem",marginTop:".3rem"}}>
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
            <label style={{marginLeft:"1rem",marginTop:"2rem",color:"grey"}} placeholder='Linkedin'>
            Facebook
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" style={{color:"grey",marginLeft:"15rem",marginTop:".3rem"}}>
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
            </div>
          </div>

          <div  style={{marginLeft:"-4rem"}}>
            <h3  className='hello' style={{marginTop:"-0.7rem",fontSize:"15px"}}>Twitter</h3>
            <div style={{borderColor:"black",borderRadius:".3rem",backgroundColor:"white" ,width:"25rem" ,height:"2.3rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" style={{backgroundColor:"white",borderRadius:"2rem",color:"grey",marginLeft:".5rem",marginTop:".3rem"}}>
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
            <label style={{marginLeft:"1rem",marginTop:"2rem",color:"grey"}} placeholder='Linkedin'>
            Twitter
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" style={{color:"grey",marginLeft:"15rem",marginTop:".3rem"}}>
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
            </div>
          </div>

          <div  style={{marginLeft:"-4rem"}}>
            <h3  className='hello' style={{marginTop:"-0.7rem",fontSize:"15px"}}>Instagram</h3>
            <div style={{borderColor:"black",borderRadius:".3rem",backgroundColor:"white" ,width:"25rem" ,height:"2.3rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" style={{backgroundColor:"white",borderRadius:"2rem",color:"grey",marginLeft:".5rem",marginTop:".3rem"}}>
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
            <label style={{marginLeft:"1rem",marginTop:"2rem",color:"grey"}} placeholder='Linkedin'>
            Instagram
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" style={{color:"grey",marginLeft:"15rem",marginTop:".3rem"}}>
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
            </div>
          </div>

          <div  style={{marginLeft:"-4rem"}}>
            <h3  className='hello' style={{marginTop:"-0.7rem",fontSize:"15px"}}>Website</h3>
            <div style={{borderColor:"black",borderRadius:".3rem",backgroundColor:"white" ,width:"25rem" ,height:"2.3rem"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16" style={{backgroundColor:"white",borderRadius:"2rem",color:"grey",marginLeft:".5rem",marginTop:".3rem"}}>
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
            </svg>
            <label style={{marginLeft:"1rem",marginTop:"2rem",color:"grey"}} placeholder='Linkedin'>
            Website
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16" style={{color:"grey",marginLeft:"15rem",marginTop:".3rem"}}>
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
            </div>
          </div>
        </div>
      </div>

      
      <div style={{backgroundColor:"grey",height:".5px"}}></div>
      <div id='prof_info' className='prof_info'>
        <div className='web_x'>
          <button className='edit_btn'>Change</button>
          <h3 className='u' style={{fontSize:"13px",width:"15rem" }}>PROFESSIONAL INFORMATION</h3>    
        </div>
        <br></br>
        <div className='grid'>
        <div  style={{marginLeft:"-1rem"}}>
            <h3  className='hello' style={{marginTop:"-0.7rem",fontSize:"15px"}}>Highest Education</h3>
            <div style={{borderColor:"black",borderRadius:".3rem",backgroundColor:"white" ,width:"25rem" ,height:"2.3rem"}}>
            <label style={{marginLeft:"1rem",marginTop:"2rem",color:"grey"}} placeholder='Linkedin'>
            Graduation
            </label> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" style={{color:"grey",marginLeft:"15rem",marginTop:".3rem"}}>
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div>
        </div>
        <div  style={{marginLeft:"-4rem"}}>
            <h3  className='hello' style={{marginTop:"-0.7rem",fontSize:"15px"}}>What do you do currently ?</h3>
            <div style={{borderColor:"black",borderRadius:".3rem",backgroundColor:"white" ,width:"25rem" ,height:"2.3rem"}}>
            <label style={{marginLeft:"1rem",marginTop:"2rem",color:"grey"}} placeholder='Linkedin'>
            student
            </label> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16" style={{color:"grey",marginLeft:"15rem",marginTop:".3rem"}}>
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div>
        </div>          
          </div>
          <br></br>
      </div>

      
      <div style={{backgroundColor:"grey",height:"1px"}}></div>
      <div id='password' className='password'>
        <div className='web_x'>
          <button className='edit_btn'>Change</button>
          <h3 className='u' style={{ fontSize:"13px",width:"15rem" }}>PASSWORD & SECURITY</h3>    
        </div>
        <br></br>
        <div  style={{marginLeft:"-1rem"}}>
            <h3  className='hello' style={{marginTop:"-0.7rem",fontSize:"15px"}}>Password</h3>
            <div style={{borderColor:"black",borderRadius:".3rem",backgroundColor:"white" ,width:"25rem" ,height:"2.3rem"}}>
            <label style={{marginLeft:"1rem",marginTop:"2rem",color:"grey"}} placeholder='Linkedin'>
             
            </label> 
             
            </div>
        </div>
      </div> 
      <div style={{backgroundColor:"grey",height:"1px"}}></div>
      <div id='interest' className='interest'>
        <div className='web_x'>
          <button className='edit_btn'>Edit</button>
          <h3 className='u' style={{fontSize:"13px",width:"15rem"}}>INTERESTS</h3>    
        </div>
      </div>
    
    </div>
  );
}

export default App;
