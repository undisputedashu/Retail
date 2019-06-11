import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

axios.defaults.headers.common['Authorization'] = 'Basic YTFAZ21haWwuY29tOnAx';

global.fetchProduct = function() {

	// Make a request for a user with a given ID
	axios.get('http://127.0.0.1:8080/product')
	  .then(function (response) {
	    console.log(response);
	  })
	  .catch(function (error) {
	    console.err(error);
	  })
	  .finally(function () {
		 console.log('done');
	  });
}

export default class App extends React.Component { 
	
	constructor() {
	    super();
	    this.state = {products:''};
	    this.fetchProducts();
	}

	render() {
		if (this.state.products === '') return  <Button >Loading...</Button>;
		return <Table>
		<thead>Products</thead>
		<tbody><tr>{
			this.state.products.data.map(function(key) {
                return <td>{key.description}</td>
              }.bind(this))
            }</tr></tbody>
		</Table>;
	}
	
	async fetchProducts() {
		try {
		       let res =  await axios({
		            url: 'http://127.0.0.1:8080/product',
		            method: 'get',
		            timeout: 8000,
		            headers: {
		                'Content-Type': 'application/json',
		            }
		        });
		        this.setState({
		        	products : res
		        });
		        return res;
		    }
		    catch (err) {
		        console.error(err);
		        return err;
		    }
	}
  
}
