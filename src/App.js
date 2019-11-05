import React, { Component }  from 'react';
import { Table, Divider, Tag } from 'antd';
import './App.css';
import brandDate from './brandDateData.json'
import store from './assignedStore.json'


export default class App extends Component {
  store = store.data
  state = {
    brandDate: {},
    store: {}
  }

  render() {
   const peasants = () => brandDate.map((one)=>{
      let llaves = one.peasants
      let valores = Object.values(llaves)
      let todos = valores.map((valor)=>{
        return valor    
      })
      let suma = todos.reduce(function(a, b){return a + b})
      return suma
    })

    const cabinet = () => brandDate.map((one)=>{
      let llaves = one.cabinet
      let valores = Object.values(llaves)
      let todos = valores.map((valor)=>{
        return valor    
      })
      let suma = todos.reduce(function(a, b){return a + b})
      return suma
    })

    const visitors = () => brandDate.map((one)=>{
      let llaves = one.visitors
      let valores = Object.values(llaves)
      let todos = valores.map((valor)=>{
        return valor    
      })
      let suma = todos.reduce(function(a, b){return a + b})
      return suma
    })

    const tickets = () => brandDate.map((one)=>{
      let llaves = one.tickets
      let valores = Object.values(llaves)
      let todos = valores.map((valor)=>{
        return valor    
      })
      let suma = todos.reduce(function(a, b){return a + b})
      return suma
    })

    const attraction = () => {
      const division = visitors()/peasants()
      console.log(division)
    }
    
    
    console.log(tickets().length)
    console.log('brandDate', brandDate)
    console.log('store', store.data)
    return (
      <div className="App">
      <table>
      <td><strong>Tienda</strong></td>
      {store.data.map((oneStore, key)=>(
        <tr key={key}>{oneStore.name}</tr>
      ))}
      <td><strong>Paseantes</strong></td>
      {peasants().map((one)=>(
        <tr>{one}</tr>
      ))}
      <td><strong>Visitas</strong></td>
      {visitors().map((one)=>(
        <tr>{one}</tr>
      ))}
      <td><strong>Cabinet</strong></td>
      {cabinet().map((one)=>(
        <tr>{one}</tr>
      ))}
      <td><strong>Tickets</strong></td>
      {tickets().map((one)=>(
        <tr>{one}</tr>
      ))}
      
      <td><strong>Articulos</strong></td>
      <td><strong>Articulos x Ticket</strong></td>
      <td><strong>Permanencia Promedio</strong></td>
      <td><strong>Dias Apagados</strong></td>
     
      </table>
    </div>
    )
  }
}


