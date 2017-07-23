import {Button} from 'react-bootstrap';

export default class BuyPolicyButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        <Button type="button" className="btn" onClick={() => this.props.onClick()()}>{this.props.text}</Button>
    }
}