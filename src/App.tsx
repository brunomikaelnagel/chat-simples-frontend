import { useAppContext } from './hooks/useAppContext';
import { FormEvent } from 'react';
import { exitIcon } from './icons';
import MessagesDisplay from './components/messagesDisplay';
import styles from "./App.module.css"
import Button from './components/button';
import Input from './components/input';

function App() {

  const { chat, connectChat, leftChat } = useAppContext()

  function joinChat(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    const nome = e.currentTarget.nome.value
    if(typeof nome === "string"){
      connectChat(nome)
    }
  }

  return (
    <>
      {
        !chat && (
          <div className={styles.form_area}>
            <h1>Chat simples</h1>
            <form onSubmit={joinChat} className={styles.form}>
              <Input placeholder='Username' type='text' name='nome' />
              <Button type='submit' >Entrar</Button>
            </form>
          </div>
        )
      }

      {
        chat && (
          <div className={styles.message_area}>
            <header className={styles.header} >
              <h5>{chat.username}</h5>
              <button onClick={leftChat} className={styles.exit_button} >{exitIcon}</button>
            </header>
            <MessagesDisplay chat={chat} />
          </div>
        )
      }
    </>
  );
}

export default App;
