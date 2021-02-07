import React, { useState, useEffect } from 'react';
import './App.css';
import { getData } from './Services/APIService';

function App() {
  const urls = ['https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1', 'https://geek-jokes.sameerkumar.website/api?format=json', 'https://api.thedogapi.com/v1/images/search'];
  const [dataArray, setDataArray] = useState<any>([]);
  
  useEffect(
    () => {
      getData(urls)
      .then(data => {
        setDataArray(data)
      })
      
    }, []
  )
  
  return (
    <>
     <table className='table'>
        <thead className='thead'>
          <tr>
            <th>URL</th>
            <th>Response</th>
          </tr>
        </thead>
      
        <tbody className='tbody'>
          {urls.map((url, index) => {
            return(
              <tr key={index}>
                <td>{url}</td>
                <td>{JSON.stringify(dataArray[index])}</td>
              </tr>
            )
          })}
        </tbody>
     </table>
    </>
  );
}

export default App;
