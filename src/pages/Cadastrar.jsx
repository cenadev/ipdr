import React from 'react'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Cadastrar() {
    return (
        <div className="Cadastrar">
            <h2>Ficha de Membro</h2>
            <form action="" className="form-member">
                <FormControl>
                    <TextField label="Nome Completo" margin="normal" variant="outlined" />
                </FormControl>
                <FormControl component="fieldset" >
                    <FormLabel component="legend">Gênero</FormLabel>
                    <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>

                <TextField label="Natalidade" margin="normal" variant="outlined" />
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
                <TextField label="Nacionalidade" margin="normal" variant="outlined" />
                <TextField label="Nome Completo" margin="normal" variant="outlined" />

            </form>
        </div>
    );
}