import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/questionList.jsx';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: "What is my name?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Mike'
                        },
                        {
                            id: 'b',
                            text: 'Arun'
                        },
                        {
                            id: 'c',
                            text: 'Kinny'
                        },
                        {
                            id: 'd',
                            text: 'Bruh'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 2,
                    text: "Where do I study?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Stevens Institute of Technology'
                        },
                        {
                            id: 'b',
                            text: 'SRM University'
                        },
                        {
                            id: 'c',
                            text: 'Arizona Statue University'
                        },
                        {
                            id: 'd',
                            text: 'State University of New York'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id: 3,
                    text: "What do I study?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Software Engineering'
                        },
                        {
                            id: 'b',
                            text: 'Computer Science'
                        },
                        {
                            id: 'c',
                            text: 'Information Technology'
                        },
                        {
                            id: 'd',
                            text: 'Information System'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 4,
                    text: "Where am I from?",
                    choices: [
                        {
                            id: 'a',
                            text: 'Jersey City'
                        },
                        {
                            id: 'b',
                            text: 'New York City'
                        },
                        {
                            id: 'c',
                            text: 'New Delhi'
                        },
                        {
                            id: 'd',
                            text: 'Lincoln'
                        }
                    ],
                    correct: 'c'
                }
            ],
            score: 0,
            current: 1
        }
    }

    render(){
        return(
            <div>
                <QuestionList {...this.state} />
            </div>
        )
    }
}

export default App;