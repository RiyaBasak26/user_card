import SearchIcon from '@mui/icons-material/Search';
import './App.css';
import Card from './components/card';
import axios from "axios";
import {React,useState,useEffect} from 'react';
import profilePic from './asset/profile_pic.png'
import CloseIcon from '@mui/icons-material/Close';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState([])
  const onChangeHandler=(event)=>{
    setInputValue(event.target.value.toLowerCase());
  }
  const filteredData = user.filter((el) => {
    if (inputValue.length===0) {
        return el;
    }
    else {
        return el.name.toLowerCase().includes(inputValue)
    }
})
const deleteCard=(i)=>{
  let array=[...user];
    array.splice(i, 1);
    setUser([...array]);
    console.log("hello",user);
}
  useEffect(() => {
    const fetchData = async () => {
      
      return  await axios.get("https://jsonplaceholder.typicode.com/users").then((response) => setUser(response.data));
     
    }
    fetchData();
  }, [])
  console.log("ffff",user)
  return (
    <div className="App">
      <header className="header">
      <div className="headerDiv"><SearchIcon className='search_Icon'/><input className="inputField" type="text" onChange={onChangeHandler} placeholder='Search With Name'/>
      </div>
      </header>
      <section className='contener'>
          {
            filteredData.map((element,index)=>{
              return <div className='card'>
              <div className='imgDiv'>
              <CloseIcon  onClick={() => deleteCard(index)} className='closeIcon'/>
              <img src={profilePic} className="profileImg" alt="" />
              </div>
              <Card userDetail={element}/>
              </div>
            })
          }
      </section>
    </div>
  );
}

export default App;
