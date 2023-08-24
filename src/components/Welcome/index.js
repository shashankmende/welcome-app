import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {content: 'Subscribe'}

  change = () => {
    const {content} = this.state
    if (content === 'Subscribe') {
      this.setState(() => ({content: 'Subscribed'}))
    } else {
      this.setState(() => ({content: 'Subscribe'}))
    }
  }

  render() {
    const {content} = this.state
    return (
      <div className="bg_container">
        <h1 className="heading">Welcome</h1>
        <h1 className="heading2">Thank you! Happy Learning</h1>
        <button className="button" onClick={this.change} type="button">
          {content}
        </button>
      </div>
    )
  }
}

export default Welcome
