import React, { Component } from 'react';

class TableRow extends Component {

    removeElement(e) {
        e.preventDefault();
        this.props.removeParticipant(this.props.elem);
    }

    updateElement(e) {
        e.preventDefault();
        this.props.updateParticipant(this.props.elem);
    }

    render() {
        return (
            <div style={{ borderTopStyle: 'solid', borderWidth:'1px', borderColor: '#f1f1f1'}}>
                <div style={{backgroundColor: 'white', width: '96.7%'}}>
                    <div style={{paddingLeft: '24px', paddingTop: '24px', height:'72px'}}>
                        <p onClick={this.updateElement.bind(this)}
                           style={{marginBottom: '24px',
                               float:'left',
                               width:'220px',
                               color:'#505050',
                               fontSize:'16px',
                               fontWeight:'normal'}}>{this.props.name}</p>

                        <p onClick={this.updateElement.bind(this)}
                           style={{float:'left',
                               width:'290px',
                               color:'#505050',
                               fontSize:'16px',
                               fontWeight:'normal'}}>{this.props.email}</p>

                        <p onClick={this.updateElement.bind(this)}
                           style={{width:'160px',
                               float:'left',
                               color:'#505050',
                               fontSize:'16px',
                               fontWeight:'normal'}}>{this.props.number}</p>

                        <span onClick={this.removeElement.bind(this)}
                              style={{color: '#909090',
                                  cursor:'pointer',
                                  height:'24',
                                  width:'24',
                                  float: 'right'}}
                              className="glyphicon glyphicon-trash"></span>

                        <span onClick={this.updateElement.bind(this)}
                              style={{color: '#909090',
                                  cursor:'pointer',
                                  height:'24',
                                  width:'24',
                                  float: 'right',
                                  marginRight: '32px'}}
                              className="glyphicon glyphicon-pencil"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TableRow;
