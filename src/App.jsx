import { useState } from 'react'
import './styles/App.css'
import {InputScreen} from './components/input-screen';
import {PreviewScreen} from './components/preview-screen';
import { getSectionsData } from './components/input-screen-components/sectionsConfig';

function App() {
  const [allEntriesData, manageAllEntriesData] = useState(getAllEntriesDataObject());
  console.log(allEntriesData);
 

  return (
    <>
        <InputScreen manageAllEntriesData={manageAllEntriesData}/>   
        <PreviewScreen/>
    </>
  )
}

export default App

function getAllEntriesDataObject(){
  const sectionsData = getSectionsData();
  let allEntriesData = {};

  sectionsData.forEach(section=>{
    allEntriesData[section.id] = [];
  })

  return allEntriesData;
}