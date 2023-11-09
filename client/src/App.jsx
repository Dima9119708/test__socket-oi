import React, {useState, useEffect} from 'react';
import {socket} from "./socket.js";
import {
    Grid,
    Typography,
    List,
    Paper,
    ListItem,
    ListItemIcon,
    Avatar,
    ListItemText,
    Divider,
    TextField, Fab
} from "@mui/material"
import { Send } from "@mui/icons-material"
import { uniqueNamesGenerator, adjectives, colors } from 'unique-names-generator';

const customConfig = {
    dictionaries: [adjectives, colors],
    separator: '-',
    length: 2,
};

function App() {
    const [name] = useState(() => uniqueNamesGenerator(customConfig))
    const [value, setValue] = useState('');

    useEffect(() => {
        socket.on('connect', () => {
            socket.emit('new user', name)
        })
    }, [name]);

    const onSubmit = () => {
        socket.emit('message', value)
    }

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '1000px' }}>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant="h5" className="header-message">Chat</Typography>
                    </Grid>
                </Grid>
                <Grid container component={Paper}>
                    <Grid item xs={12}>
                        <List>
                            <ListItem key="1">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText align="right"  primary="Hey man, What's up ?"></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align="right" secondary="09:30"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem key="2">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align="left" secondary="09:31"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem key="3">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align="right" secondary="10:30"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem key="4">
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ListItemText align="left" primary="Cool. i am good, let's catch up!"></ListItemText>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ListItemText align="left" secondary="10:30"></ListItemText>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </List>
                        <Divider />
                        <Grid container style={{padding: '20px'}}>
                            <Grid item xs={11}>
                                <TextField value={value} onChange={(event) => setValue(event.target.value)} id="outlined-basic-email" label="Type Something" fullWidth />
                            </Grid>
                            <Grid item xs={1} align="right">
                                <Fab onClick={onSubmit} color="primary" aria-label="add"><Send /></Fab>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default App;
