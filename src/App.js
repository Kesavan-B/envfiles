import { useEffect, useState } from 'react';
import './App.css';
import apiService from './service/apiService';

function App() {
  const [store, setStore] = useState()
  console.log(process.env.REACT_APP_API_KEY);
  const PROD = process.env.REACT_APP_API_KEY
  const getApi = () => {
  
    var req = {
      // listSize: 5,
      // pageNumber: 2,
      showProductImage: 1,
      // searchString: "",
      // show: "SALEAVAILABLE",
    };
    // const apiUrl = process.env.REACT_APP_API_URL;
    apiService(PROD, req, "unauthpost")
      .then((result) => {
        setStore(result.data.responseModelList);
        console.log(result, "custprod");
      })
      .catch((err) => {
        console.log(err);
      })
    
  };
  useEffect(() => {
    getApi()
  }, [])
  
  return (
    <div >
    <p>{process.env.REACT_APP_API_KEY}</p>
    </div>
  );
}

export default App;
