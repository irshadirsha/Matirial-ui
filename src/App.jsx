import React from 'react'
import Sample from './components/sample';
import CustomsAppbar from './components/CustomsAppbar';
import Cards from './components/cards';
import Lists from './components/Lists';
import Fonawesom from './components/Fonawesom';


function App() {
  

  return (
    <>
    <div>
   <CustomsAppbar/>
     <Sample/>
     <Cards/>
     <Lists/>
     <Fonawesom/>
    </div>
    </>
  )
}

export default App
