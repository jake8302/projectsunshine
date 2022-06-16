import React from 'react';
import { Container, Box, ToggleButtonGroup, ToggleButton, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';

import { FhxTitle, FhxNavButtons } from '../common/FhxContentComponents';

export const FhxSelectOne = (props) => {
    const { title } = props;
    const [state, setState] = React.useState(() => { return props });
    const [choice, setChoice] = React.useState(() => { });
    const [open, setOpen] = React.useState(() => { return false });
    const handleClickOpen = () => {
        setOpen(true); // for the purpose of testing demo, on click will open diaglog popup.
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChoiceChange = (event, newChoice) => {
        setChoice(newChoice);
        setState(prevState => { return { ...prevState, continueButton: !!newChoice } });
    };
    return (
        <main>
            <div>
                <Container maxWidth='md' sx={{ paddingTop: 2, paddingBottom: 2 }}>
                    <FhxTitle title={title} />
                    <Box component="span" m={1} display="flex" justifyContent="center" alignItems="center">
                        <ToggleButtonGroup
                            fullWidth={true}
                            orientation="vertical"
                            color="primary"
                            value={choice}
                            exclusive
                            onChange={handleChoiceChange}
                        >
                            <ToggleButton value="0">Male</ToggleButton>
                            <ToggleButton value="1">Female</ToggleButton>
                            <ToggleButton value="2">Other Options</ToggleButton>

                        </ToggleButtonGroup>
                    </Box>
                </Container>
                <FhxNavButtons
                    backButton={state.backButton}
                    continueButton={state.continueButton}
                    continueButtonCallback={handleClickOpen}
                    backButtonCallback={handleClickOpen}
                />
                <Dialog // for the purpose of demo this is include, but Dialog should be replace with http request.
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"This is just a demo!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This is just a demo of what Material UI can accomplish.  😃
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        </main>
    );
}