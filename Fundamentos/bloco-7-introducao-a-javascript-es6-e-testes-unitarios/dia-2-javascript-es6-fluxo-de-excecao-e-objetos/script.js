const check = (param1, param2) => {
    if (!param1 || !param2){
        throw new Error('Erro: Somente um  número digitado.')
    }
};
const checkNumber = (coisa1, coisa2) =>{
    if(isNaN(coisa1) || isNaN(coisa2)){
        throw new Error('Erro: Isso não é uma número.')
    }
}           

function sum() {
    try {
        const value1 = document.getElementById('value1').value;
        const value2 = document.getElementById('value2').value;
        checkNumber(value1, value2);
        check(value1, value2);
        const result = parseInt(value1) + parseInt(value2);
        document.getElementById('result').innerHTML = `Resultado: ${result}`;
    } catch (error) {
        result.innerHTML = error.message;
    }
    finally{
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
}
window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}


// Parte 02
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (coisa) => {
    return `Olá ${coisa.order.delivery.deliveryPerson}, entrega para: ${coisa.name}, Telefone: ${coisa.phoneNumber},
     R ${coisa.address.street}, Nº ${coisa.address.number}, AP ${coisa.address.apartment}`
  }

 console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    order.payment.total = 50;
    order.name = 'Luiz Silva'
    return `Olá ${order.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ ${order.payment.total}`;
  }
  
  console.log(orderModifier(order));
