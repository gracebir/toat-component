//https://www.youtube.com/watch?v=cOJTshh56Zc
import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/button/Button';
import Toast from './components/toast/Toast';


function App() {

  const [list, setList]= useState([]);
  let toastProperties = null;
 


  const showToast = (type) => {
    switch(type){
      case 'success':
        toastProperties = {
          id:1,
          title: 'Success',
          description: 'this is success toast component',
          background: '#5cb85c'
        }
        break;
      case 'danger':
        toastProperties = {
          id:2,
          title: 'Danger',
          description: 'this is danger toast component',
          background: '#d9534f'
        }
        break;
      case 'info':
          toastProperties = {
            id:3,
            title: 'Info',
            description: 'this is danger toast component',
            background: '#5bc8de'
          }
        break;
      case 'warning':
          toastProperties = {
            id:2,
            title: 'Warning',
            description: 'this is Warning toast component',
            background: '#f8ad4e'
          }
        break;
      default:
        toastProperties = []
    }
   
    setList([...list,toastProperties])
  }
  return (
    <div className={styles.root}>
     <h1>React Toast Component</h1>
     <div className={styles.buttons}>
       <Button handleClick={()=> showToast('success')}>success</Button>
       <Button handleClick={()=> showToast('danger')}>danger</Button>
       <Button handleClick={()=> showToast('info')}>Info</Button>
       <Button handleClick={()=> showToast('warning')}>Warning</Button>
     </div>
     <Toast toastList={list} setList={setList} position='button-right'/>
    </div>
  );
}

export default App;
