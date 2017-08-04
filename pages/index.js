export default class extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      num:'server side rendering'
    }

  }
  componentDidMount(){
    this.interval = setInterval(()=>this.setState({ num:Math.random() }), 500);
  }
  componentWillUnmount(){
    clearInterval(this.inverval)
  }
  render() {
    return <h1>Random: {this.state.num}</h1>;
  }
}
