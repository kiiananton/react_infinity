import React, { Component } from 'react';
import Personage from './personage';

class PersonageList extends Component {

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        console.log('onScroll')
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
            this.props.data.length
        ) {
            this.props.onPaginatedSearch();
        }
    }

    render() {
        const personageList = this.props.data.map( (element, i) => {
            return(
                <Personage {...element}/>
            )})

        return(
            <div className='personage-list'>
                {personageList}
            </div>
        )
    }
}

export default PersonageList;
