import React  from 'react'
import Card from '../Cards'
import RightSidebar from '../RightSidebar';

export function Home() {
  
    return (
      <div className="px-2 py-4">
        <RightSidebar/>
        <div className="flex flex-wrap">
          <Card/>
          <Card/>
          <Card/>
          <Card/>  
        </div> 
      </div>
    )
}

export default Home;
