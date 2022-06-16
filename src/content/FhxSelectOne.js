import React, { useEffect } from 'react';
import { Container, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

import { FhxTitle, FhxNavButtons } from '../common/FhxContentComponents';

export const FhxSelectOne = (props) => {
    const [state, setState] = React.useState(() => { return props });
    const [choice, setChoice] = React.useState(() => { });
    const handleContinueClick = () => { state.callback(state.options[choice].fieldName) };
    const handleBackClick = () => { state.callback() };


    useEffect(() => {
        setState(props);
        console.log("mounting FhxSelectOne...");
        return () => console.log("unmounting FhxSelectOne....");
    }, [props]);

    const handleChoiceChange = (event, newChoice) => {
        setChoice(newChoice);
        let selected = newChoice !== null && newChoice !== undefined;
        setState(prevState => { return { ...prevState, continueButton: selected } });
    };
    return (
        <div>
            <Container maxWidth='md' sx={{ paddingTop: 2, paddingBottom: 2 }}>
                <FhxTitle title={state.title} />
                <Box component="span" m={1} display="flex" justifyContent="center" alignItems="center">
                    <ToggleButtonGroup
                        fullWidth={true}
                        orientation="vertical"
                        color="primary"
                        value={choice}
                        exclusive
                        onChange={handleChoiceChange}
                    >
                        {state.options.map(
                            item => <ToggleButton key={item.index} value={item.index}>{item.fieldName}</ToggleButton>)}
                    </ToggleButtonGroup>
                </Box>
            </Container>
            <FhxNavButtons
                backButton={state.backButton}
                continueButton={state.continueButton}
                continueButtonCallback={handleContinueClick}
                backButtonCallback={handleBackClick}
            />

        </div>
    );
}