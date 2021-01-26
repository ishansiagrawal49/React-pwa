import React, { Component } from 'react'
import {FiPlus} from 'react-icons/fi'

export class RightSidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Animate : {right:"-100%" , transition : "right 0.5s"},
             name : "Anonymous",
             question: "",
             tags: [],
             errors : {}
        }
    }

    inputHandler = (eve) => {
        this.setState({ 
            [eve.target.name]:eve.target.value
        })
    }

    tagHandler = (eve) => {
        if(eve.target.checked){
            this.setState({
                tags:[...this.state.tags , eve.target.name]
            })
        }
        else {
            this.setState({
                tags:this.state.tags.filter((item) => item!==eve.target.name)
            })
        }
    }

    submitHandler = (eve) =>{
        eve.preventDefault();
        console.log(this.state);
        let errors = {}
        if(this.state.name && this.state.question && this.state.tags.length){
            this.setState({errors});
        }
        else{
            
            if(!this.state.name) errors['name'] = true; 
            if(!this.state.question) errors['question'] = true; 
            if(!this.state.tags.length) errors['tags'] = true;
            this.setState({errors}); 
        }  
    }

    

    render() {
        return (
        <>
            { this.state.Animate.right==="0%" && <div className="w-full z-30 h-screen fixed top-0 opacity-50 left-0 bg-black" 
            onClick = {() => this.setState({Animate : {right:"-100%" , transition : "right 0.5s"}})}>
            </div> }
            <div className="max-w-xs z-40 overflow-auto h-screen fixed top-0 right-0 w-4/5 bg-white transition-all" style={this.state.Animate}>
                <div className="w-full h-16 text-center py-4 font-bold text-blue-700 bg-blue-200" > New Querry ? </div>
                <div className="px-6 py-2 w-full mx-auto mt-4">
                    <form className="w-full" onSubmit = {this.submitHandler}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="fullName">
                        Full Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" 
                            id="fullName" name="name" type="text" placeholder="Anonymous" value={this.state.name}  onChange={this.inputHandler}/>
                        { this.state.errors.name && <p className="text-red-500 font-semibold text-xs italic">Please fill out this field.</p> }
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="question">
                        Question
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-56"
                         id="question" type="text" placeholder="Your querry" name="question" value={this.state.question}  onChange={this.inputHandler} />
                         { this.state.errors.question && <p className="text-red-500 font-semibold text-xs italic">Please fill out this field.</p> }
                    </div>
                    </div>
                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-1">Tags</label>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        
                        <div className="w-full px-3">
                            <input className="w-4 h-4" type="checkbox" id="intern" name="internship" 
                            onChange={this.tagHandler}/>
                            <label className="uppercase text-gray-700 text-sm font-bold align-bottom leading-8"> Internship </label>
                        </div>
                        <div className="w-full px-3">
                            <input className="w-4 h-4" type="checkbox" id="intern" name="competitive" onChange={this.tagHandler} />
                            <label className="uppercase text-gray-700 text-sm font-bold align-bottom leading-8"> Competitive </label>
                        </div>
                        <div className="w-full px-3">
                            <input className="w-4 h-4" type="checkbox" id="intern" name="general"  onChange={this.tagHandler}/>
                            <label className="uppercase text-gray-700 text-sm font-bold align-bottom leading-8"> General </label>
                        </div>
                        { this.state.errors.tags && <p className="ml-3 text-red-500 font-semibold text-xs italic">Please select atleast one tag.</p> }
                    </div>
                    
                    <div className="w-full px-4">
                        <button className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        > Submit </button>
                    </div>
                </form>
                </div>
            </div>
            <span className="fixed bottom-0 font-bold right-0 mr-6 mb-6 text-center rounded-full bg-green-300 p-2 z-20 d-block text-4xl text-green-900"
            onClick = {() => this.setState({Animate : {right:"0%" , transition : "right 0.5s"}})}> <FiPlus/> </span>
        </>
        )
    }
}

export default RightSidebar

