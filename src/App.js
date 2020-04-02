import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

import { sampleText } from './sampleText';


class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')
    if (text) {
      this.setState({text})
    } else {
      this.setState({sampleText})
    }
  }

  componentDidUpdate () {
    const {text} = this.state
    localStorage.setItem('text', text)
  }

  handleChange = event => {
    const text = event.target.value;
    this.setState({ text })
  }

  renderText = text => {
    const __html = marked(text, { sanitize: true })
    return { __html }
  }

  render() {
  return (
    <div className='container'>
      <h1
        style={{
          textAlign: 'center',
          marginTop: '50px',
          marginBottom: '50px'
        }}
      >Xiaomei Personnal Text Editor</h1>
      <div className='row'>
        <div className='col-sm-6'>
          <textarea 
            onChange={this.handleChange}
            className='form-control' 
            rows='35'
            value={ this.state.text }
            style={{
              borderRadius: '15px'
            }}
            >
          </textarea>
        </div>
        <div className='col-sm-6'
          style={{ 
            backgroundColor: 'purple',
            color: 'white',
            borderRadius: '15px',
            boxShadow: '10px 5px 5px grey'
           }}
        >
          <h1
            style={{
              textAlign: 'center',
              color: 'grey'
            }}
          >Resutat</h1>
          <div>
            <div 
              dangerouslySetInnerHTML= { this.renderText(this.state.text) } />
          </div>
        </div>  
      </div>    
    </div>
  );
  }
}

export default App;
