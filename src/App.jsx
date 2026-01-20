import { useState } from 'react'
import './styles/App.css'
import {InputScreen} from './components/input-screen';
import {PreviewScreen} from './components/preview-screen';
import { getSectionsData } from './components/input-screen-components/sectionsConfig';

function App() {
  const [allEntriesData, manageAllEntriesData] = useState(getAllEntriesDataObject());
 

  return (
    <>
        <InputScreen manageAllEntriesData={manageAllEntriesData}/>   
        <PreviewScreen/>
    </>
  )
}

export default App

//define content of all section in seperate file
//create allEntriesData object dynamically and use id of section as its keys
// use allEntriesData object as initial value of allEntriesData state
// use central file to dynamically create sections in input-screen.jsx
// pass setAllEntriesData object down to form and permanent-form

function getAllEntriesDataObject(){
  const sectionsData = getSectionsData();
  let allEntriesData = {};

  sectionsData.forEach(section=>{
    allEntriesData[section.id] = [];
  })

  return allEntriesData;
}