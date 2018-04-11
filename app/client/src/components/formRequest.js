import React, {Component} from 'react';
import axios from 'axios';

import {URL} from '../config';

import PersonageList from './personage/personageList';

class FormRequest extends Component {

    state = {
        name: '',
        data: [],
        isRequestProcess: false
    };

    componentWillMount() {
        this.getPersonageDate();
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    onPaginatedSearch = (event) => {
        if (this.state.isRequestProcess) return;
        this.setState({isRequestProcess: true });
        this.getPersonageDate()
        this.setState({isRequestProcess: false });
    }

    getPersonageDate = () => {
        let id = 1 + (this.state.data.length === 0 ? 0 : this.state.data[this.state.data.length -1].id)
        axios.get(`${URL}/query?last_id=${id}`)
            .then(response => {
                this.setState({
                    data: [...this.state.data,...response.data]
                });
            });
    }

    render() {
        let data;
        const name = this.state.name;
        console.log(name);
        if (name.trim() !==''){
            console.log('test')
            data = this.state.data.filter( item => item.name.includes(name) )
        } else {
            data = this.state.data
        }

        return (
            <div>
                <input type="text" id="username-input" onChange={this.updateName} value = {this.state.name}/>
                <PersonageList data={data} onPaginatedSearch = {this.onPaginatedSearch}/>
            </div>
        )
    };
}

export default FormRequest;