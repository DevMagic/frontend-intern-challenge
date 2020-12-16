import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import data from '../../assets/urls.json'
import { BigDiv, Button, DivForm, DivText, H2, Input, Paragraphy } from './Styled';

const FormHomePage = () =>{
    const {form, handleInputChange, resetState} = useForm({url: ''});
    const [nameButton, setNameButton] = useState("ENCURTAR");
    const [formShortUrl, setFormShortUrl] = useState()
    const urls = data;

    const value = nameButton === "ENCURTAR" ? form.url : formShortUrl;

    const clickButtonShorten = (event) =>{
        event.preventDefault();
        const shortUrl = urls.filter((item) =>{
            return item.url === value
        })
        if(shortUrl.length === 0){
            alert("Ocorreu um erro. Tente novamente mais tarde")
            resetState();
        }
        shortUrl && setFormShortUrl(shortUrl[0].shortUrl);
        setNameButton("COPIAR");
    };

    const clickButtonCopy = (event) =>{
        event.preventDefault();
        value && document.getElementById("button").addEventListener("click", () =>{
            document.getElementById("text").select();
            document.execCommand("copy");
        })
        setNameButton("ENCURTAR");
        resetState();
    };

    const functionButton = nameButton === "ENCURTAR" ? clickButtonShorten : clickButtonCopy

    return (
        <BigDiv>
            <DivForm>
                <DivText>
                    <H2>Encurte seus links</H2>
                    <Paragraphy>
                        Links são longos. Encurte os links que você deseja compartilhar, 
                        <br/>
                        e acompanhe enquanto viajam através da internet
                    </Paragraphy>
                </DivText>
                <form onSubmit= {functionButton} >
                    <Input name={nameButton}
                        id="text"
                        type="url"
                        value={value}
                        name="url"
                        onChange={handleInputChange}
                        required
                        placeholder="Cole o seu link aqui"
                    />
                    <Button id="button" data-testid="button">{nameButton}</Button>
                </form>
            </DivForm>
        </BigDiv>
    );
}

export default FormHomePage