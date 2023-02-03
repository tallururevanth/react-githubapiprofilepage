import React, { useEffect, useState } from 'react';

const Githubprofile = () => {
  const [response, setResponse] = useState('');
  const [userdata, setUserdata] = useState('');
  const [login, setLogin] = useState('');

  useEffect(() => {
    Apicall();
  }, []);
  const Apicall = () => {
    fetch('https://api.github.com/users/'+login)
      .then((data) => data.json())
      .then((e) => {
        setUserdata(e);
        console.log('All User Data Fetched');
      });
  };

  if (userdata == '') {
    return <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <input type='text'>
      {()}  
    </React.Fragment>
  );
};

export default Githubprofile;
