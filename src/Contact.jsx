import React, { useState } from 'react'


function Contact() {
    const [user,setUser] =useState({
        name:'',
        email:'',
        phone: '',
        password:''
    });
    

const postData= async(e)=>{
      e.preventDefault()


      const {name,email,phone,password,}=user;
      let result= await fetch("https://react-app-baaa6-default-rtdb.firebaseio.com/reactData.json",
      {
        method:'POST',
        headers:{
          "Content-Type": "application/json" ,
        },
        body:JSON.stringify({
          name,
          email,
          phone,
          password,
        }),
      }
   
      
      );
      if(result){
        setUser({
          name:"",email:"",phone:"",password:""
        })
      }


}
    let name,value;
 const handleInput=(e)=>{
    // console.log(e);
    name= e.target.name;
    value= e.target.value;
    console.log(name);
    console.log(value);
    setUser({...user, [name]:value})


 }

  return (
    <>

        <form method='POST'><br /><br />
            <input type="text" name="name" placeholder="Name"  value={user.name} onChange={handleInput} /><br /><br />
            <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleInput} /><br /><br />
            <input type="tel" name="phone" placeholder="phone no" value={user.phone} onChange={handleInput} /><br /><br />
            <input type="password" name="password" placeholder="password" value={user.password}  onChange={handleInput} />
           <br /><br /><button type="submit" onClick={postData}>Submit</button>
        </form>
    </>
  )
}

export default Contact