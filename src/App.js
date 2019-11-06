import React, { Component }  from 'react';
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

    const revenue = () => brandDate.map((one)=>{
      let llaves = one.revenue
      let valores = Object.values(llaves)
      let todos = valores.map((valor)=>{
        return valor    
      })
      let suma = todos.reduce(function(a, b){return a + b})
      return suma.toFixed(2)
    })

    const items = () => brandDate.map((one)=>{
      let llaves = one.items
      let valores = Object.values(llaves)
      let todos = valores.map((valor)=>{
        return valor    
      })
      let suma = todos.reduce(function(a, b){return a + b})
      return suma
    })

    const permanence = () => brandDate.map((one)=>{
      let llaves = one.permanence
      let valores = Object.values(llaves)
      let todos = valores.map((valor)=>{
        return valor    
      })
      let suma = todos.reduce(function(a, b){return a + b})
      return suma
    })

    const permanenceCount = () => brandDate.map((one)=>{
      let llaves = one.permanenceCount
      let valores = Object.values(llaves)
      let todos = valores.map((valor)=>{
        return valor    
      })
      let suma = todos.reduce(function(a, b){return a + b})
      return suma
    })

    const upTime = () => brandDate.map((one)=>{
      let llaves = one.uptime
      let llaves2 = Object.keys(llaves)
      let valores = Object.values(llaves)
     let diasApagados = []
      for (let i=0; i<=valores.length;i++){
      if (valores[i] === 0){ diasApagados.push(llaves2[i]) }
      }
      return diasApagados
      
    })

    const promedios = (columna) =>{
     let suma = columna.reduce((a,b)=>a + b)
     let promedio = suma/columna.length
     return promedio
    }

    const promediosString = (notNum)=>{
     const one = notNum.map((one)=>{return parseFloat(one)})
      let suma = one.reduce((a,b)=>a + b)
     let promedio = suma/notNum.length
     return promedio.toFixed(2)
    }

    const totales = (columna) =>{
      let suma = columna.reduce((a,b)=>a + b)
      return suma
     }
 
     const totalesString = (notNum)=>{
      const one = notNum.map((one)=>{return parseFloat(one)})
       let suma = one.reduce((a,b)=>a + b)
      return suma.toFixed(2)
     }

   let attraction = []

      for (let i=0; i<=visitors().length-1;i++){
        let promedio = visitors()[i]/peasants()[i]
        attraction.push(promedio.toFixed(2))
      }
    
    let persuasion = []
      
    for (let i=0; i<=visitors().length-1;i++){
      let promedio = tickets()[i]/visitors()[i]
      persuasion.push(promedio.toFixed(2))
    }
    
    let averageTicket = []

    for (let i=0; i<=revenue().length-1;i++){
      let promedio = revenue()[i]/tickets()[i]
      averageTicket.push(promedio.toFixed(2))
    }

    let itemPerTicket = []

    for (let i=0; i<=items().length-1;i++){
      let promedio = (items()[i]/tickets()[i])/100
      itemPerTicket.push(promedio.toFixed(3))
    }
    
    let averagePermanence = []

    for (let i=0; i<=items().length-1;i++){
      let promedio = (((permanence()[i]*100)/permanenceCount()[i])/6000000)
      averagePermanence.push(promedio.toFixed(2))
    }
    
  

    console.log('asuptimeasas',attraction.map((one)=>{return parseFloat(one)}))
    console.log(tickets().length)
    console.log('brandDate', brandDate)
    console.log('store', store.data)
    return (
      <div className="App">
      <table style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Tienda</strong></td>
      {store.data.map((oneStore, key)=>(
        <tr key={key}>{oneStore.name}</tr>
      ))}
      <tr>Totales</tr>
      <tr>Promedios</tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Paseantes</strong></td>
      {peasants().map((one)=>(
        <tr>{one}</tr>
      ))}
      <tr>{totales(peasants())}</tr>
      <tr>
          {promedios(peasants())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Visitas</strong></td>
      {visitors().map((one)=>(
        <tr>{one}</tr>
      ))}
      <tr>{totales(visitors())}</tr>
      <tr>
          {promedios(visitors())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Cabinet</strong></td>
      {cabinet().map((one)=>(
        <tr>{one}</tr>
      ))}
      <tr>{totales(cabinet())}</tr>
      <tr>
          {promedios(cabinet())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Tickets</strong></td>
      {tickets().map((one)=>(
        <tr>{one}</tr>
      ))}
      <tr>{totales(tickets())}</tr>
      <tr>
          {promedios(tickets())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Atraccion</strong></td>
      {attraction.map((one)=>(
        <tr>{one}%</tr>
      ))}
      <tr>{totalesString(attraction)}</tr>
      <tr>
          {promediosString(attraction)}%
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Persuasion</strong></td>
      {persuasion.map((one)=>(
        <tr>{one}%</tr>
      ))}
      <tr>{totalesString(persuasion)}%</tr>
      <tr>
          {promediosString(persuasion)}%
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Revenue</strong></td>
      {revenue().map((one)=>(
        <tr>{one}</tr>
      ))}
      <tr>{totalesString(revenue())}</tr>
      <tr>
          {promediosString(revenue())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Average Ticket</strong></td>
      {averageTicket.map((one)=>(
        <tr>{one}</tr>
      ))}
      <tr>{totalesString(averageTicket)}</tr>
      <tr>
          {promediosString(averageTicket)}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Items</strong></td>
      {items().map((one)=>(
        <tr>{one}</tr>
      ))}
      <tr>{totales(items())}</tr>
      <tr>
          {promedios(items())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Item Per Ticket</strong></td>
      {itemPerTicket.map((one)=>(
        <tr>{one}</tr>
      ))}
      <tr>{totalesString(itemPerTicket)}</tr>
      <tr>
          {promediosString(itemPerTicket)}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Average permanence</strong></td>
      {averagePermanence.map((one)=>(
        <tr>{one} min</tr>
      ))}
      <tr>{totalesString(averagePermanence)} min</tr> 
      <tr>
          {promediosString(averagePermanence)} min
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td><strong>Dias Apagados</strong></td>
      {upTime().map((one)=>(
        <tr>{one} </tr>
      ))}
      </div>
      </table>
      
    </div>
    )
  }
}


