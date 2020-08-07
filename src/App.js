// create your App component here
import React from 'react'

class App extends React.Component {
    state = {
        peopleInSpace: []
    }

    render(){
        return(
            <div>
            <h1>in da app</h1>
                {this.state.peopleInSpace.map((person, id) => <p key={id}>{person.name}</p>)}
            </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({peopleInSpace: data.people})
        })
    }
}

export default App