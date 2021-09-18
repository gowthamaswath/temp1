import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    name: '',
    projectname: '',
    email: '',
    phone: '',
    salesbill: '',
    purchasebill: '',
    datesent: '',
    datereceived: '',
    paymentreceived: '',
    paymentdone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, projectname, email, phone, salesbill, purchasebill, datesent, datereceived, paymentreceived, paymentdone } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Project name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='projectname' value={projectname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Sales bill</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='salesbill' value={salesbill} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Purchase bill</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='purchasebill' value={purchasebill} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date sent</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='datesent' value={datesent} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date received</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='datereceived' value={datereceived} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Payment received</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='paymentreceived' value={paymentreceived} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Payment done</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='paymentdone' value={paymentdone} id="my-input"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;