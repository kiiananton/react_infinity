import React, {Component} from 'react';
import axios from 'axios';

import {URL} from '../config';

import PersonageList from './personage/personageList';

class FormRequest extends Component {

    state = {
        name: '',
        data: [],
        isDone: false
    }

    componentWillMount() {
        setInterval(() => {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50) && !this.state.isDone) {
                this.getPersonageDate();
            }
        }, 500);
    }

    updateName = (event) => {
        this.setState({
            name: event.target.value
        })
    };

    getPersonageDate = () => {
        this.setState({isDone: true});
        let id = 1 + (this.state.data.length === 0 ? 0 : this.state.data[this.state.data.length - 1].id)
        // axios.get(`${URL}/?query={personage(id:${id}){id,name, weight, height, image,types}}`)
        axios.get(`${URL}/query?last_id=${id}`)
            .then((response) => {
                this.setState({
                    isDone: response.data.length === 0,
                    data: [...this.state.data, ...response.data]
                });
            });
    }

    render() {
        let data;
        const name = this.state.name.trim();
        if (name !== '') {
            data = this.state.data.filter((item) => item.name.includes(name))
        } else {
            data = this.state.data
        }

        return (
            <div>
                <input type="text" id="username-input" onChange={this.updateName}/>
                <PersonageList data={data}/>
            </div>
        )
    };
}

export default FormRequest;