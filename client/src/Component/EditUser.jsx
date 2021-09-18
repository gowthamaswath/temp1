import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    name: '',
    projectname: '',
    email: '',
    phone: '',
    salesbill: '',
    purchasebill: '',
    datesent:'',
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

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, projectname, email, phone, salesbill, purchasebill, datesent, datereceived, paymentreceived, paymentdone } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Project name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='projectname' value={projectname} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">salesbill</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='salesbill' value={salesbill} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Purchase bill</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='purchasebill' value={purchasebill} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date sent</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='datesent' value={datesent} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date received</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='datereceived' value={datereceived} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Payment received</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='paymentreceived' value={paymentreceived} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Payment received</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='paymentdone' value={paymentdone} id="my-input" aria-describedby="my-helper-text"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;