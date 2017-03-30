import React, { Component } from 'react';
import nord from '../../../public/nord.png'

class Header extends Component {
    render() {

        return (
            <div style={{
                backgroundColor: '#a7aeb5',
                height: '96px',
                color:'white',
                paddingTop: '32px',
                paddingLeft: '32px',}}>
                <div style={{float:'left', height:'32px', paddingRight:'25px', lineHeight:'32px', textAlign:'center', fontSize: '27px'}}>
                    <img alt="logo" style={{height:'36px', width:'36px', filter:'grayscale(100%)'}} src={nord}></img>
                </div>
                <div style={{float:'left', height:'32px', fontWeight:'500', lineHeight:'32px', textAlign:'center', fontSize: '25px'}}>
                    <p>Nord Software</p>
                </div>
            </div>
        );
    }
}

export default Header;
