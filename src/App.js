import React, { useEffect} from 'react'

function App() {

  
  

  useEffect(() => {
   // const { ZSID } = process.env;
    console.log(process.env.ZSID)
  })
  return (
   
    <div className="App">
        <h1>Home Finder App</h1>
      

    </div>
  );
}

export default App;
