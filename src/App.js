
import './App.css';

import { useState } from 'react';
import Amazon from './components/Amazon';
import Apple from './components/Apple';


function App () 
{

const [toggle,setToggle] = useState(false)
const data= [

{
  date: "28/10/2020",
  logo: "https://www.askgalore.com/wp-content/uploads/2020/08/amazon-icon-amazon-logo-png-icon.png",
  heading: "Amazon Gift",
  subheading: "Pay",
  devices: "Desktop - Mobile",
  color: "#ffa500",

},
{
  date:"17 Sep 2020",
  logo:"https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png",
  heading: "Apple Gift",
  subheading: "Payment",
  devices: "macOS - Mobile",
  color: "#f5f5f5",

}

]




  
   
     return (
       <div className="App">
         <button className='btntgl' onClick={()=> setToggle(!toggle)}>{toggle?"Show Amazon Gift card":"Show Apple Gift Card"}</button>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         {toggle?<Apple data={data[1]}/>:<Amazon data={data[0]}/>}
        
       </div>
   
   
   
        
     );


     }





export default App