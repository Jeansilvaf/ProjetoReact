import { Button, Container, TextFild, Typography } from "@mui/material"
import React, {useState} from "react";




const Cadastro = () => {
    // variaveis de estado
    const [userData, setUserData] = useState ({email:'',password:''});
    //func envio de dados
    const handleSubmit = async () => {
        try {
                // envia os dados
                await AuthStore.register(userData);
                //limpar dados do form
                setUserData({email: "", password: ""})

        } catch (error){

            console.error(error)
        }
    }

    return (
        <Container maxWidth="xs">
           <Typography variant="h4" gutterBottom>
               Login
           </Typography>
           <TextFild
               label="E-mail"
               fullWidth
               margin="normal"
               variant="outlined"
               value={userData.email}
               onChange={(e)=>setUserData({...userData, email: e.target.value})}
               />
               <TextFild
               label="Senha"
               fullWidth
               margin="normal"
               variant="outlined"
               value={userData.password}
               onChange={(e)=>setUserData({...userData, password: e.target.value})}
               />
           <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>
               Entrar
           </Button>
        </Container>
       );
       
       }
    
    export default Cadastro