import React from 'react'
import Mock from '../mock/data.json'
import {Link, Redirect} from 'react-router-dom'


class Home extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            data: Mock,
            redirect: false
        }

    }
    
    componentDidMount(){
    }

    filterData(name){
        let data =  Mock.filter((person) => {
            return person.name.toLowerCase().includes(name.toLowerCase())
          })
          
        this.setState({ data })
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/" />
          }
        return(
            <div className='homeBackground'>
                <div className='container border home'>
                    <div className='searchBody'>
                        <input placeholder='Search by name...' className='searchInput' onChange={(e)=>{this.filterData(e.target.value)}} />
                            {
                                this.state.data.map((person, index)=>{
                                    return(
                                        <div className='card' key={index}>
                                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                                <div style={{color: 'gray', marginRight: 5}}>Name: </div>  {person.name}
                                            </div>
                                            <div style={{display: 'flex', flexDirection: 'row'}}> 
                                                <div style={{color: 'gray', marginRight: 5}}>Gender: </div>  {person.gender}
                                                <div style={{color: 'gray', marginLeft: 15, marginRight: 5}}>Age: </div> {person.age}
                                            </div>
                                                
                                        </div>
                                    )
                                })
                            }
                        <div onClick={()=>{this.setState({redirect: true})}} className='exitButton'>
                            Exit
                        </div>
                    </div>
                </div>
            </div>
        )
    }}

export default Home