import React, { Component } from 'react'
import './App.css'
import words from './words'

interface IAppState {
  word: string
  usedLetters: string[]
  guesses: number
  matchedLetters: string[]
}

class App extends Component<{}, IAppState> {
  state: IAppState = {
    word: '',
    usedLetters: [],
    guesses: 0,
    matchedLetters: []
  }

  render() {
    return (
      <div className="hangman">
        <span>Hello</span>
      </div>
    )
  }
}

export default App
