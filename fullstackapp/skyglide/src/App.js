import "./App.css";

import Routers from "./Routers";
function App() {
  // const [data,setData]= useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8080/getstudent").then((res)=>{
  //     console.log(res.data);
  //     setData(data)
  //   })
  // }, [])
  return (
    <div className="App">
     
        {/* <Landingpage /> */}
      <Routers/>
 
    </div>
  );
}

export default App;

// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next'

// // Contains the value and text for the options
// const languages = [
// 	{ value: '', text: "Options" },
// 	{ value: 'en', text: "English" },
// 	{ value: 'hi', text: "Hindi" },
// 	{ value: 'te', text: "Telugu" },
//   { value: 'ml', text: "Malayalam" },
//   { value: 'ta', text: "Tamil" }
// ]

// function App() {

// 	// It is a hook imported from 'react-i18next'
// 	const { t } = useTranslation();

// 	const [lang, setLang] = useState('en');

// 	// This function put query that helps to
// 	// change the language
// 	const handleChange = e => {
// 		setLang(e.target.value);
// 		let loc = "http://localhost:3001/";
// 		window.location.replace(loc + "?lng=" + e.target.value);
// 	}

// 	return (
// 		<div className="App">

// 			<h1>{t('Welcome')}</h1>
// 			<label>{t('Choose')}</label>

// 			<select value={lang} onChange={handleChange}>
// 				{languages.map(item => {
// 					return (<option key={item.value}
// 					value={item.value}>{item.text}</option>);
// 				})}
// 			</select>
// 		</div>
// 	);
// }

// export default App;
