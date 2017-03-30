import React, { Component } from 'react';
import ParticipantInput from './ParticipantInput';

class EditableRow extends Component {

    constructor() {
        super();
        this.state = {
            name:"",
            email:"",
            number:"",
            proper:true,
            errors:[0,0,0]
        }
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    lowerCase(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    componentDidMount() {
        this.setState({name: this.props.name, email:this.props.email, number:this.props.number, proper:true});
    }

    saveElement(e) {
        e.preventDefault();
        var error = false;
        for (var i = 0; i < 3; i++) if (this.state.errors[i] === 1) error = true;
        if (!error) {
            this.state.name = this.capitalize(this.state.name);
            this.state.email = this.lowerCase(this.state.email);
            this.props.saveParticipant(this.props.elem, this.state);
        }
    }

    updateElement(e) {
        e.preventDefault();
        this.props.updateParticipant(this.props.elem);
    }

    updateError(index, error) {
        var err = this.state.errors;
        err[index] = error;
        this.setState({errors : err});
    }

    updateName(name) {
        this.setState({name});
    }

    updateEmail(email) {
        this.setState({email});
    }

    updateNumber(number) {
        this.setState({number});
    }

    render() {
        return (
            <div style={{ borderTopStyle: 'solid', borderWidth:'1px', borderColor: '#f1f1f1'}}>
                <div style={{backgroundColor: 'white'}}>
                    <div style={{paddingLeft: '24px',
                        paddingTop: '16px',
                        height:'72px'}}>
                        <form className="form-horizontal">
                            <ParticipantInput values={this.state}
                                              updateName={this.updateName.bind(this)}
                                              updateError={this.updateError.bind(this)}
                                              updateEmail={this.updateEmail.bind(this)}
                                              updateNumber={this.updateNumber.bind(this)}/>
                            <button style={{float:'right',
                                width:'8%',
                                backgroundColor:'#07f',
                                marginRight: '16px',
                                color:'#ffffff'}}
                                    onSubmit={this.saveElement.bind(this)}
                                    onClick={this.saveElement.bind(this)}
                                    className="btn btn-default">Save</button>
                            <button style={{float:'right',
                                color:'#07f',
                                width:'10%',
                                marginRight: '16px'}}
                                    onSubmit={this.updateElement.bind(this)}
                                    onClick={this.updateElement.bind(this)}
                                    className="btn btn-default">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditableRow;
