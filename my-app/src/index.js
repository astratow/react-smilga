import React from 'react'; // deprecated
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
function Greetings(){
  return(
    <section>
      <Book />
      <Image />
      <Author/>
      <Title/>
    </section>
  );
}
const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/41wLQIOffxL._SX411_BO1,204,203,200_.jpg" alt="book"/>;
};
const Book = () =>{
  return <article>this is a book</article>;
};
const Author = () => {
  return <h1>James Norbury </h1>;
};

const Title = () => {
  return <article>Big Panda and Tiny Dragon</article>
}


ReactDOM.render(
  <Greetings/>,
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
