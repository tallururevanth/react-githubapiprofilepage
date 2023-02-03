import React, { useEffect, useState } from 'react';

const Githubprofile = () => {
  const [userdata, setUserdata] = useState('');
  const [login, setLogin] = useState('');

  useEffect(() => {
    Apicall();
  }, [login]);
  const Apicall = () => {
    fetch(`https://api.github.com/users/`+login)
      .then((data) => data.json())
      .then((e) => {
        setUserdata(e);
        console.log('Api called and User Data Fetched');
      });
  };
  const onInput =((e)=>{setLogin(e.target.value);})

  if (userdata == '') {
    return <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <input type='text' onBlur={onInput}/>
      {(login =='')?(
        <p>Please Input the login ID to display the details</p>
      ):(
        <div>
          {(userdata.message!='Not Found')?(
            <div>
            <img src={userdata.avatar_url} id='useravatar'/>
            <h1>{userdata.name}</h1>
            <p>ID Number: <b>{userdata.id}</b></p>
            {(userdata.email="null")?(
              <p>Email: <b>Not Available</b></p>
            ):(
              <p>Email: <b>{userdata.email}</b></p>
            )}

            {(userdata.bio="null")?(
              <p>Bio: <b>Not Available</b></p>
            ):(
              <p>Bio: <b>{userdata.bio}</b></p>
            )}
            <p>Profile URL: <a href={userdata.html_url}><b>{userdata.html_url}</b></a></p>
          </div>
          ):(
            <p>User data not found/Login Invalid.</p>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Githubprofile;
