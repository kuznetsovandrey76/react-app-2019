import React, {Component} from 'react';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
              {
                id: 1,
                text: 'first'
              },
              {
                id: 2,
                text: 'SECOND'
              }
            ]
        }
    }

    render() {
        return this.state.items.map((item) => {
            return <div>{item.text}</div>
        })
    }

}
export default About;

