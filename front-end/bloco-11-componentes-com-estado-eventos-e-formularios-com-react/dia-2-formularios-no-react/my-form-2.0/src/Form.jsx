import React from 'react';

const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espirito Santos', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio rande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']

class Form extends React.Component {
    constructor() {
        super()

        this.state ={
        name: '',
        adress: '',
        city: '',
        email:'',
        cpf:'',
        coutryState:'',
        adressType:'',
        }
    }

    handleChange = (event) => {
        const {name} = event.target;
        let {value} = event.target;
        if(name === 'name') value = value.toUpperCase();
        if(name === 'adress') value = value.replace(/[^a-zA-Z ]/g, "")
        this.setState({
            [name]: value 
        })
    }
    handleBlur = (event) => {
        const {name} = event.target;
        let {value} = event.target;
        if(name === 'city') value = value.match(/^\d/) ? '' : value;
        this.setState({
            [name]: value,
        })
    }


  render() {
    const {name, adress} = this.state;
   return <form>
      <fieldset>
        <label htmlFor="name">
        Name:
        <input 
        type='text' 
        maxLength={40} 
        onChange={this.handleChange}
        name="name"
        value={name}
        required
        id='name'
        />
        </label>
        <label htmlFor='email'>
            Email:
            <input 
            type="text"
            name='email'
            maxLength={50}
            required
            id='email'
         />
        </label>
        <label htmlFor="">
            CPF:
            <input 
            type="text"
            name='cpf'
            required
            maxLength={11}
             />
        </label>
        <label htmlFor="adress">
            Endereço:
            <input 
            type="text"
            maxLength={200}
            name="adress"
            onChange={this.handleChange}
            value={adress}
            required
            id="adress"
             />
        </label>
        <label htmlFor="city">
            Cidade:
            <input 
            name='city'
            type="text"
            maxLength={28}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            id='city' 
            />
        </label>
        <label htmlFor="estado">
            Estado:
            <select 
            name="" 
            id="estado"
            required
            >
                <option value=""> Selecione</option>
                {estados.map((elem, index) => {
                  return  <option key={index}>{elem}</option>
                })}
            </select>
        </label>
        <div>
        <label htmlFor="house">
            <input type="radio" id='house' name='adressType' />
            Casa
        </label>
        <label htmlFor="ap">
            <input type="radio" name='adressType' id='ap' />
            Apartamento
        </label>
        </div>
      </fieldset>
    </form>;
  }
}

export default Form;