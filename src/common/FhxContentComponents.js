import React, { useEffect } from 'react';
import { IconButton, Typography, Container, Box, Button, } from '@mui/material';
import { red, teal, purple, lime } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export const FhxTitle = (props) => {
    const { title } = props;
    useEffect(() => {
        console.log("mounting FhxTitle....")
        return () => console.log("unmounting FhxTitle....");
    })
    if (!title)
        return null;
    else return (
        <Container maxWidth='md' >
            <Typography variant='h6' align='left' color='textPrimary' gutterBottom>
                What is your biological sex?
            </Typography>
        </Container>
    )
}

export const FhxNavButtons = (props) => {
    const { continueButton, backButton, backButtonCallback, continueButtonCallback } = props;
    const [continueButtonState, setContinueButtonState] = React.useState(() => {
        return continueButton;
    });
    const [backButtonState, setBackButtonState] = React.useState(() => {
        return backButton;
    });

    useEffect(() => {
        setContinueButtonState(continueButton);
        setBackButtonState(backButton);
        console.log("mounting FhxPageButtons... ContinueButton:" + continueButton + ", BackButton: " + backButton);
        return () => console.log("unmounting FhxPageButtons....");

    }, [continueButton, backButton]);


    if (continueButtonState === undefined && backButtonState === undefined) {
        return null;
    } else return (
        <>
            <Container maxWidth='md'>
                <Box component="span" m={1} display="flex" justifyContent="space-between" alignItems="center">
                    {backButtonState !== undefined &&
                        <Button onClick={() => backButtonCallback()} size="large" color="primary" variant="contained" disabled={!backButtonState}>Back</Button>
                    }
                    {continueButtonState !== undefined &&
                        <Button onClick={() => continueButtonCallback()} size="large" color="success" variant="contained" disabled={!continueButtonState}>Continue</Button>
                    }
                </Box>
            </Container>

        </>
    )
}

export const FhxThemeSelector = (props) => {
    const { callback } = props;
    const [theme, setTheme] = React.useState(() => { return createTheme() });

    useEffect(() => {
        console.log("mounting FhxThemeSelector... primary colour: " +
            theme.palette.primary.main + "mode: " + theme.palette.mode);
        if (callback) callback(theme);
        return () => console.log("unmounting FhxThemeSelector....");

    }, [theme, callback]);

    const changeTheme = (newTheme) => {
        setTheme((prevTheme) => {
            if (newTheme === 'red' && prevTheme.palette.primary.main !== red[500]) {
                return createTheme(theme,
                    {
                        palette: {
                            primary: {
                                main: red[500],
                            },
                        },
                    });
            } else if (newTheme === 'dark' && prevTheme.palette.mode !== 'dark') {
                return createTheme(
                    {
                        palette: {
                            mode: "dark",
                        },
                    });
            } else if (newTheme === 'teal' && prevTheme.palette.primary.main !== teal[300]) {
                return createTheme(theme,
                    {
                        palette: {
                            primary: {
                                main: teal[300],
                            },
                        },
                    });
            } else if (newTheme === 'purple' && prevTheme.palette.primary.main !== purple[500]) {
                return createTheme(theme,
                    {
                        palette: {
                            primary: {
                                main: purple[500],
                            },
                        },
                    });
            }
            else if (newTheme === 'lime' && prevTheme.palette.primary.main !== lime[500]) {
                return createTheme(theme,
                    {
                        palette: {
                            primary: {
                                main: lime[500],
                            },
                        },
                    });
            }
            return createTheme();
        });

    };
    return (
        <Box component="span" m={1} display="flex" justifyContent="left" alignItems="center">
            <Typography variant='p15'>
                Try different themes!
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={() => changeTheme('dark')} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton onClick={() => changeTheme('red')}>
                {theme.palette.primary.main === red[500] ?
                    <KeyboardReturnIcon /> :
                    <CircleIcon sx={{ color: red[500] }} />
                }
            </IconButton>
            <IconButton onClick={() => changeTheme('teal')}>
                {theme.palette.primary.main === teal[300] ?
                    <KeyboardReturnIcon /> :
                    <CircleIcon sx={{ color: teal[300] }} />
                }
            </IconButton>
            <IconButton onClick={() => changeTheme('purple')}>
                {theme.palette.primary.main === purple[500] ?
                    <KeyboardReturnIcon /> :
                    <CircleIcon sx={{ color: purple[500] }} />
                }
            </IconButton>
            <IconButton onClick={() => changeTheme('lime')}>
                {theme.palette.primary.main === lime[500] ?
                    <KeyboardReturnIcon /> :
                    <CircleIcon sx={{ color: lime[500] }} />
                }
            </IconButton>
        </Box>
    );
}

