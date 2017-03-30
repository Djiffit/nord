import React, { Component } from 'react';
import Header from './js/Components/Header';
import Body from './js/Components/Body';

class App extends Component {
    render() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w > 976) {
            w = (w - 976) / 2;
        } else w = 0;
        if (document.documentElement.clientWidth < 976) w = 0;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-offset-1 col-sm-6" style={{
                        width: '976px',}} >
                        <div style={{width: '100%',
                            height: '96px',}}>
                            <Header/>
                        </div>
                    </div>

                    <div className="col-sm-offset-1 col-sm-6" style={{
                        height: '100%',
                        width: '976px',
                    }}>
                        <div style={{width: '100%'}}>
                            <Body/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
