import React from 'react'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';

export default function Cadastrar() {
    return (
        <div className="Cadastrar">
            <h2>Ficha de Membro</h2>
            <form action="" className="form-member">
                <Grid container spacing={24}>
                    <Grid item xs={8}>
                        <TextField fullWidth={true} label="Nome Completo" margin="normal" variant="outlined" />

                    </Grid>
                    <Grid item xs={4}>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Gênero</FormLabel>
                            <RadioGroup
                                aria-label="Gender"
                                name="gender1"

                            >
                                <FormControlLabel value="female" control={<Radio />} label="F" />
                                <FormControlLabel value="male" control={<Radio />} label="M" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField fullWidth={true} label="Natalidade" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="date"
                            label="Data de Nascimento"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField fullWidth={true} label="Nacionalidade" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Identidade" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Orgão expeditor" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="CPF" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Telefone Residencial" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Telefone Celular" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Telefone Comercial" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={7}>
                        <TextField fullWidth={true} label="Endereço Residencal" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={1}>
                        <TextField label="nº" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Bairro" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField fullWidth={true} label="Ap" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="Bloco" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="CEP" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Cidade" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={2}>
                        <TextField label="UF" margin="normal" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Email" margin="normal" variant="outlined" />
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}