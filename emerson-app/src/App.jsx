import { useState } from 'react';
import './App.css';
import MyButtondois from './componentes/MyButtondois';
// import MyButtonMenor from './componentes/MyButtonMenor';

function App() {
  const [count, setCount] = useState(0);

  const buttonStyles = {
    width: '150px',  // Define uma largura para os botões
    height: '50px',  // Define uma altura para os botões
  };

  const buttonStylesdois= {
     width: '94px',
     height: '20px',

  };

  return (
    <>
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        justifyContent: 'space-between', 
        borderBottom: '2px solid black',  // Linha reta abaixo de todos os botões
        paddingBottom: '10px'  // Espaçamento entre os botões e a linha
      }}>
        <MyButtondois
          text='label button'
          size='large'
          color='blue'    
          variant="contained"
          sx={buttonStyles}
        />
        <MyButtondois
          text='label button'
          size='large'
          color='white' 
          sx={{
            ...buttonStyles,
            color: 'black',  // Cor do texto para o botão branco
          }}
        />
        <MyButtondois
          text='label button'
          size='large'
          color='#90989F'  
          variant="contained"
          sx={buttonStyles}
        />
      
      </div>

      <MyButtondois
          text='label button'
          size='small'
          color='blue'    
          variant="contained"
          sx={buttonStylesdois}
        />
        <MyButtondois
          text='label button'
          size='small'
          color='white' 
          sx={{
            ...buttonStylesdois,
            color: 'black',  // Cor do texto para o botão branco
          }}
        />
          <MyButtondois
          text='label button'
          size='small'
          color='#90989F'  
          variant="contained"
          sx={buttonStylesdois}
        />

     

    </>
  );
}

export default App;
