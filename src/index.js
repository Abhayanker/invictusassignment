import React from 'react';
import ReactDOM from 'react-dom';


const findMostFrequent = (str = '', num = 1) => {
  const strArr = str.split(' ');
  const map = {};
  strArr.forEach(word => {
     if(map.hasOwnProperty(word)){
        map[word]++;
     }else{
        map[word] = 1;
     }
  });
  const frequencyArr = Object.keys(map).map(key => [key, map[key]]);
  frequencyArr.sort((a, b) => b[1] - a[1]);
  return frequencyArr.slice(0,num);
  
};


function handleClick() {
  fetch('https://raw.githubusercontent.com/invictustech/test/main/README.md')
  .then(response => response.text())
  .then(data => {
      console.log(data);
      const num=document.getElementById("myInput").value;
      const array=findMostFrequent(data, num);
      const renderwords=(c,d)=>{
          return(
            <tr key={d}>
            <td>{c[0]}</td>
            <td>{c[1]}</td>
            </tr>
           )
        };
      ReactDOM.render(<div>
        <table border="1" >
        <thead><tr>
          <th>Words</th>
          <th>count</th>
          </tr></thead>
          <tbody>
            {array.map(renderwords)}
          </tbody>
        </table>
      </div>
      
      ,document.getElementById('root'));
  });
  

}


ReactDOM.render(
  
  
<div>
      <input type="text" placeholder="Enter Number" id="myInput"></input>
      <br></br>
      <button onClick={handleClick} id="btn">Submit</button>
     
      
</div>,
  document.getElementById('root')
);
