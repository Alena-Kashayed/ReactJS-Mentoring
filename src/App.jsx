import React from 'react';
import Search from './Search/Search';
import Details from './Details/Details';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch: true
        };
    }
    render() {
        return <div>{this.state.showSearch ? <Search /> : <Details />}</div>;
    }
}

export default App;
