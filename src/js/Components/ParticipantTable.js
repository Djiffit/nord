import React, { Component } from 'react';
import TableRow from './TableRow';
import EditableRow from './EditableRow';

class ParticipantTable extends Component {

    renderPart(i) {
        const element = this.props.participants[i];
        if (element.edit) {
            return (
                <div>
                    <EditableRow saveParticipant={this.props.saveParticipant}
                                 updateParticipant={this.props.updateParticipant}
                                 elem={i}
                                 name={element.name}
                                 email={element.email}
                                 number={element.number}/>
                </div>
            );
        } else {
            return (
                <div>
                    <TableRow removeParticipant={this.props.removeParticipant}
                              updateParticipant={this.props.updateParticipant}
                              elem={i}
                              name={element.name}
                              email={element.email}
                              number={element.number}/>
                </div>
            );
        }
    }

    renderColumn(i) {
        const style = {
            height: '16px',
            cursor: 'pointer',
            float:'left',
            width:i===1? '290px' : '220px',
            color:'#757575',
            fontSize:'14px',
            fontWeight:'bold'
        };
        var text;
        if (i === 0) text = "Name";
        if (i === 1) text = "E-mail Address";
        if (i === 2) text = "Phone Number";
        if (this.props.sorted[i] === 1) text += " ▲";
        if (this.props.sorted[i] === 2) text += " ▼";
        return (
            <div>
                <p onClick={() => this.props.toggleSort(i)} style={style}>{text}</p>
            </div>
        );
    }

    render() {
        const parts = [];
        for (let i = 0; i < this.props.participants.length; i++) {
            parts.push(this.renderPart(i));

        }
        const columns = [];
        for (let i = 0; i < 3; i++) {
            columns.push(this.renderColumn(i));
        }
        return (
            <div style={{backgroundColor: 'white', width: '96.7%'}}>
                <div style={{paddingLeft: '24px', paddingTop: '16px', height:'48px'}}>
                    {columns}
                </div>
                {parts}
            </div>
        );
    }
}

export default ParticipantTable;
