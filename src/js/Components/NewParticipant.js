import React, { Component } from 'react';
import ParticipantInput from './ParticipantInput';

class NewParticipant extends Component {

    constructor() {
        super();
        this.state = {
            name : "",
            email : "",
            number : "",
            errors: [0, 0, 0]
        }
    }

    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    lowerCase(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    createNewParticipant(e) {
        console.log(this.state);
        e.preventDefault();
        var errors = this.state.errors;
        if (errors[0] + errors[1] + errors[2] === 6) {
            this.state.name = this.capitalize(this.state.name);
            this.state.email = this.lowerCase(this.state.email);
            this.props.addnew(this.state);
            this.setState({name: "", email: "", number: "", errors: [0, 0, 0]});
        } else {
            var errors = this.state.errors;
            for (var i = 0; i < 3; i++) {
                if (this.state.errors[i] === 0) {
                    errors[i] = 1;
                }
            }
            this.setState({errors});
        }
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
        const style = {
            backgroundColor: 'white',
            width: '96.7%'
        };
        return (
            <div style={style}>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-md-12">
                            <div className="form-group row">
                                <div style={{paddingTop:'16px',
                                    paddingLeft:'32px'}}>
                                    <ParticipantInput values={this.state}
                                                      updateName={this.updateName.bind(this)}
                                                      updateError={this.updateError.bind(this)}
                                                      updateEmail={this.updateEmail.bind(this)}
                                                      updateNumber={this.updateNumber.bind(this)}/>
                                    <button style={{float:'right', marginRight: '32px'}}
                                            onSubmit={this.createNewParticipant.bind(this)}
                                            onClick={this.createNewParticipant.bind(this)}
                                            className="btn btn-default">Add new</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewParticipant;
