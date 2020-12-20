
import React from 'react'
import Header from './Header'
import axios from 'axios'
import swal from 'sweetalert';

export default class Home extends React.Component {

    state = {
        contents: [],
      
    }

    componentDidMount() {
        axios.get(`https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/urls.json`)
    .then(res => {

        const contents = res.data;
        
        console.log(contents)

            this.setState({ contents })

    })

    }
    render() {
        const fat = this.state.contents.map(value => (<><p key={value.id}>{value.shortUrl}</p>
        
        </>))
        const hits = this.state.contents.map(value => (<><p key={value.id}>{value.hits}</p>
        </>))
        
       
        var total = this.state.contents.reduce(getTotal, 0);
        function getTotal(total, item) {
            return total + (item.hits);
        }
       
       
        const shorten = () => {
            const validationShortener = document.getElementById('shortenUrl').placeholder 
            if (validationShortener === 'Cole o seu link aqui' || validationShortener === 'Cole o seu link aqui' ) {
               swal({
                   title:'Erro Tente Novamente',
                   icon: "error",
                })
            }else{
                swal({
                    title: 'Sucesso',
                    icon: "success",
                })
                const closeButton = document.getElementById('close').style.visibility = 'visible'
            const shortenUrl = document.getElementById('shortenUrl')
           
            const defaultUrl = 'http://chr.dc/'
            const appear = document.getElementById("shortencopy").style.display = 'inline'
            shortenUrl.value = defaultUrl + Math.random().toString(32).substring(2, 7);
           
            const button = document.getElementById('shorten')
            button.style.display =  'none'
            button.show = buttonShow
            var buttonShow = document.getElementById('shortencopy')
            
            }
        }
      
        const inputValidation = () => { 
            
            const urlValidation = document.getElementById('shortenUrl').value
            const placeholderValidate = document.getElementById('shortenUrl').placeholder = ' ';
            if (urlValidation === null || urlValidation === ' ' ) {
            return false;
            } if (placeholderValidate === null || placeholderValidate === ' ') {
                return false;
            }
    }
        const backInput = () => {
            window.location.replace('/');
        }
      var copyText = () => {
          
            const inputCopy = document.getElementById("shortenUrl");

            inputCopy.select();
            
            document.execCommand('copy');
        };
      
    return (
        <>
            <Header/>
            <div className="shorten-links">
                <img width="100%" src="https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/background-home.jpg"></img>
                <h1>Encurte seus links</h1>
                <h6>Links são longos.Encurte os links que você deseja compartilhar,<br/>
                 e acompanhe enquanto viajam através da internet.</h6>
                <a onClick={backInput} id="close" class="close"></a>
                <input onMouseDown={inputValidation} id="shortenUrl" maxlength="60" placeholder='Cole o seu link aqui'></input>
                <button id="shorten" onClick={shorten} >ENCURTAR</button>
                <button className="shortencopy" id="shortencopy" onClick={copyText}>Copiar</button>
                
            </div>
       <div className='top-five'>
                <h1>Top5</h1>
                <ul className="five-1">{fat[0]}</ul>
                <ul>{fat[1]}</ul>
                <ul>{fat[3]}</ul>
                <ul>{fat[6]}</ul>
                <p className="no-line">{fat[7]}</p>
                <p className="hits-1">{hits[0]}</p>
                <p className="hits-2">{hits[1]}</p>
                <p className="hits-3">{hits[3]}</p>
                <p className="hits-4">{hits[6]}</p>
                <p className="hits-5">{hits[7]}</p>
        </div>
            
            <div className="background-hits">
            <h1>Hits</h1>
            <input value={total}></input>
            <h6>cliques em links</h6>
            </div>
            <p className="triangle-turn-down"></p>
            <footer className="footer-icons">
                <img className="icon-1" src="https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/icon-twitter.png"></img>
                <img className="icon-2" src="https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/icon-facebook.png"></img>
                <p>chr.dc</p>
            </footer>
            

        </>
      )
   }
}

