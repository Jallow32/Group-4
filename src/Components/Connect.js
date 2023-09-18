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
          <h2>First Name:</h2>
          <p>{response[0].firstName}</p>

          <h2>Last Name:</h2>
          <p>{response[1].lastName}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FirebaseFunctionTest;
