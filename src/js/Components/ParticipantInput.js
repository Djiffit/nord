import React, { Component } from 'react';

class ParticipantInput extends Component {

    handleName(e) {
        if ((e.target.value.length < 25) && (/^[a-zA-ZäÄöÖåÅ '\-]+$/.test(e.target.value) || e.target.value.length === 0)) {
            this.props.updateName(e.target.value);
        }
        if (e.target.value.length < 3) {
            this.props.updateError(0, 1);
        } else {
            this.props.updateError(0, 2);
        }
    }

    handleEmail(e) {
        var regex = /^[0-9a-zA-Z.\-]+[@][0-9a-zA-Z.\-]+[.][a-zA-Z]+$/;
        this.props.updateEmail(e.target.value);
        if (e.target.value.length < 3 || !regex.test(e.target.value)) {
            this.props.updateError(1, 1);
        } else if (regex.test(e.target.value)) {
            this.props.updateError(1, 2);
        }
    }

    handleNumber(e) {
        if ((e.target.value.length < 15) && (/^[0-9]+$/.test(e.target.value) || e.target.value.length === 0)) {
            this.props.updateNumber(e.target.value);
        }
        if (e.target.value.length < 7) {
            this.props.updateError(2, 1);
        } else {
            this.props.updateError(2, 2);
        }
    }

    createFields(i, fields) {
        var inputStyle = {
            backgroundColor:'#f0f0f0',
            height:'40px',
            width:'190px',
            marginRight:'16px',
            float:'left',
            borderColor: '',
            outlineColor: ''
        };
        var change, placeholder, value;
        if (i === 1) {
            inputStyle.width = '280px';
            change = this.handleEmail.bind(this);
            placeholder = "E-mail address";
            value = this.props.values.email;
        } else {
            if (i === 0) {
                change = this.handleName.bind(this);;
                placeholder = "Full name";
                value = this.props.values.name;
            } else {
                change = this.handleNumber.bind(this);;
                placeholder = "Phone number";
                inputStyle.width = '150px';
                value = this.props.values.number;
            }
        }
        if (this.props.values.errors[i] == 2) {
            inputStyle.borderColor = 'green';
            inputStyle.outlineColor = 'green';
        } else if (this.props.values.errors[i] == 1) {
            inputStyle.borderColor = 'red';
            inputStyle.outlineColor = 'red';
        }
        return (
            <input type="text" className="form-control" style={inputStyle} onChange={change} value={value} placeholder={placeholder}/>
        )
    }

    render() {
        var fields = [];
        for (var i = 0; i < 3; i++) {
            fields.push(this.createFields(i, fields));
        }
        return (
            <div>
                {fields}
            </div>
        );
    }
}

export default ParticipantInput;
