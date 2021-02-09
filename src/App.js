import React from 'react'

export default class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    render(){
        return (
        <div>{this.state.peopleInSpace.map(x=>x.name)}</div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response=>response.json())
        .then(data => {
            this.setState({
            peopleInSpace: data.people
        })
        })        
    }   

}