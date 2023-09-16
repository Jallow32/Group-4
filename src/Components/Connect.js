import React, { useState, useEffect } from "react";

const FirebaseFunctionTest = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const firebaseFunctionUrl = "https://api-v6ywsuyy3a-uc.a.run.app";

    fetch(firebaseFunctionUrl)
      .then((response) => response.json())
      .then((data) => {
        setResponse(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data from Firebase Function:", error);
      });
  }, []);

  return (
    <div>
      <h1>Test Firebase Function from Another Project</h1>
      {response ? (
        <div>
          <h2>Message:</h2>
         <p>{response.newMessage}</p> 
         <p>{response.newMessage2}</p> 

          <h2>Array2:</h2>
          <pre>{JSON.stringify(response.data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FirebaseFunctionTest;
