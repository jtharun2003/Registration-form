import React, { useState } from 'react';
import './App.css';

function App() {
  let [details,setdetails]=useState({
    name:"",
    email:"",
    imagelink:"",
    gender:"",
    skills:""
  })
  let [s,setskills]=useState([])
  let [card,setcard]=useState([])
  function handleinput(e){
    let name=e.target.name;
    setdetails({...details,[name]:e.target.value})
  }
  function handleskills(e){
   const value=e.target.value
     setskills([...s,value])
  }
  function submit(e){
    e.preventDefault()
    if(s.length===1){
      details.skills=s[0]
    }else if(s.length===2){
      details.skills=s[0]+" and "+s[1]
    }else if(s.length===3){
      details.skills=s[0]+','+s[1]+" and "+s[2]
    }
    console.log(s.length)
    let det=Object.values(details)
    let val=false;
    for(let t of det){
     if(t===""){
      val=true;
     }
    }
    if(val){
     alert("Please enter details")
    }
     else{
      setcard([...card,details])
     }
  }
  function clear(e){
   e.preventDefault()
   setdetails({
    name:"",
    email:"",
    imagelink:"",
    gender:"",
    skills:""
    })
  
    setskills([])
    let x=document.getElementsByClassName('skill');
    x[0].checked=false;
    x[1].checked=false;
    x[2].checked=false;
    document.querySelector('input[name ="imagelink"]').value='';
    if(details.gender===''){console.log('cleared')}
    else{
    document.querySelector('input[name ="gender"]:checked').checked=false;}
  }
  function handleimage(e){
    let link=URL.createObjectURL(e.target.files[0])
    setdetails({...details,"imagelink":link})
    console.log(link)
    
  }
  return (
    <>
    <h1>Student Enrollement Form</h1>
    <div className='cont'>
      <form>
       <p><span>Name</span><input className='input' type="text" name='name' required value={details.name} onChange={handleinput} /></p>
       <p><span>Email</span><input className='input' type="email" name='email' required value={details.email} onChange={handleinput}/></p>
       <p><span>Image</span><input type="file" name='imagelink' required onChange={handleimage} /></ p>
       <p id='sp'><span>Gender</span>
          <span>
            <input type="radio" name='gender' value='Male'  onChange={handleinput}/>Male<br/>
            <input type="radio" name='gender' value='Female'  onChange={handleinput}/>Female
          </span>
       </p>
       <p>Skills<span>
                 <input type="checkbox" onChange={handleskills} value="JAVA" name='skill' className='skill'/> JAVA 
                 <input type='checkbox' onChange={handleskills} value="HTML" name='skill' className='skill'/> HTML 
                 <input type='checkbox'onChange={handleskills} value="CSS" name='skill' className='skill'/> CSS 
                </span>
        </p>
       <p id='but'><button onClick={submit} className='submit'>Enroll Student</button>  <button onClick={clear} className='cl'>Clear</button></p>
      </form>
      <div className='vert'></div>
      <div className='enr'>
        <h2>Enrolled Students</h2>
        <table>
          <tr>
            <th className='wd'>Description</th>
            <th className='img'>Image</th>
          </tr>
          {
           card.map((card)=>{
            return <tr>
                     <td className='wd'>
                      <span id='st'>Name : {card['name']}<br/>
                        Email : {card['email']}<br/>Gender : {card['gender']}
                        <br/>Skills : {card['skills']}
                        </span>
                     </td>
                     <td className='img'>
                      <img src={card['imagelink']} alt='error'  />
                     </td>
                  </tr>
           })
          }

        </table>
      </div>
    </div>
    </>
  )
}

export default App;
