import React, { Component }  from 'react';
import './App.css';
import brandDate from './brandDateData.json'
import store from './assignedStore.json'



export default class App extends Component {
  store = store.data
  state = {
    brandDate: {},
    store: {},
    checked: false
  }

  
  isChecked(e){
   
    let checked = this.state.checked
    checked = e.target.checked
    this.setState({checked})
    console.log(checked)
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

   
    
    const {checked} = this.state
  

    
    return (
      <div className="App" style={{background: 'black', color: 'white'}}>
      <table style={{height: '60vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '1px solid turquoise'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{ width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Tienda</strong></td>
      {store.data.map((oneStore, key)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} key={key}>{oneStore.name}</tr>
      ))}
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >Totales</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >Promedios</tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Paseantes</strong></td>
       {checked ?  peasants().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{one/5}</tr>
      )):peasants().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}</tr>
      ))} 

        
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totales(peasants())}</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promedios(peasants())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}} ><strong>Visitas</strong></td>
      {checked ?  visitors().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{one/5}</tr>
      )):visitors().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}</tr>
      ))} 

      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totales(visitors())}</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promedios(visitors())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Cabinet</strong></td>
      {checked ?  cabinet().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{one/5}</tr>
      )):cabinet().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}</tr>
      ))} 

      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totales(cabinet())}</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promedios(cabinet())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Tickets</strong></td>
      {checked ?  tickets().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{one/5}</tr>
      )):tickets().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}</tr>
      ))} 

      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totales(tickets())}</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promedios(tickets())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Atraccion</strong></td>
      {checked ?  attraction.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{one/5}%</tr>
      )):attraction.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}%</tr>
      ))} 

      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totalesString(attraction)}</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promediosString(attraction)}%
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Persuasion</strong></td>
      {checked ?  persuasion.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{(one/5).toFixed(2)}%</tr>
      )):persuasion.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}%</tr>
      ))} 

      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totalesString(persuasion)}%</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promediosString(persuasion)}%
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw',color: 'black', background: 'turquoise'}}><strong>Revenue</strong></td>
      {checked ?  revenue().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{(one/5).toFixed(2)}</tr>
      )):revenue().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}</tr>
      ))} 
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totalesString(revenue())}</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promediosString(revenue())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Tickets P.</strong></td>
      {checked ?  averageTicket.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{(one/5).toFixed(2)}</tr>
      )):averageTicket.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}</tr>
      ))} 

      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totalesString(averageTicket)}</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promediosString(averageTicket)}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Items</strong></td>
      {checked ?  items().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{(one/5).toFixed(2)}</tr>
      )):items().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}</tr>
      ))} 

      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totales(items())}</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promedios(items())}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Item Por Ticket</strong></td>
      {checked ?  itemPerTicket.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{(one/5).toFixed(5)}</tr>
      )):itemPerTicket.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}</tr>
      ))} 
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totalesString(itemPerTicket)}</tr>
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promediosString(itemPerTicket)}
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', color: 'black', background: 'turquoise'}}><strong>Permanencia P.</strong></td>
      {checked ?  averagePermanence.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid green'}} >{(one/5).toFixed(2)}min</tr>
      )):averagePermanence.map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one}min</tr>
      ))} 

      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{totalesString(averagePermanence)} min</tr> 
      <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >
          {promediosString(averagePermanence)} min
        </tr>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
      <td style={{width: '7.6vw', background: 'turquoise', color: 'black'}}><strong>Dias Apagados</strong></td>
      {upTime().map((one)=>(
        <tr style={{width: '7.6vw', border: '1px solid turquoise'}} >{one} </tr>
      ))}
      </div>
      </table>
      <div style={{height: '40vh', width: '100vw',float: 'left', background: 'black', paddingTop: '10vh', border: '1px solid turquoise'}}>
      <input type="checkbox" style={{width: '7.6vw', border: '1px solid turquoise'}}  onChange={(e)=>{this.isChecked(e)}} defaultChecked={this.state.checked} />
	 <p >Ver datos promediados por dia </p>
    </div>
    </div>
    )
  }
}


