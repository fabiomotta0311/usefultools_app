import React, { Component } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: "JSHunt"
    };

    state = {

    };
    
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products')
        const { docs } = response.data;

    };
    render (){
        return (
            <View>
                <Text>Página Main</Text>
                {this.state.docs.map(product => (
                    <Text key={product._id}>{product.title }</Text>
                ))}
            </View>
        );
    }
}