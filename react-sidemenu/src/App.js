import React, { Component } from 'react'
import { Switch , Route } from 'react-router-dom'

import Home from './Components/Home'
import Contact from './Components/Contact'
import FeedbackForm from './Components/FeedbackForm'
import Topbar from './Components/Topbar'

export class App extends Component {
  render() {
    return (
      <div className="w-full bg-blue-200">
        <Topbar />
        <div className="max-w-6xl w-full mx-auto bg-blue-100 mt-16 bg-white min-h-screen relative">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/feedback" component={FeedbackForm}/>
        </Switch>
        </div>


      </div>
    )
  }
}

export default App