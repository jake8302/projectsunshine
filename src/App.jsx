import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, Dialog, DialogTitle, DialogContent, DialogContentText, Box, Slider, Container } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ThemeProvider, createTheme, } from '@mui/material/styles';
import { FhxThemeSelector } from './common/FhxContentComponents';
import { FhxSelectOne } from './content/FhxSelectOne';
import { styled } from "@mui/material/styles";


function valuetext(value) {
    return `${value}°C`;
}

const App = () => {
    const data = {
        hxId: 1234,
        mkey: "bvgy02pskn",
        theme: "blue_01",
        localization: "en",
        content: {
            type: "selectOne",
            title: "What is your biological sex?",
            backButton: true,
            continueButton: false,
            options: [
                {
                    index: 0,
                    fieldName: "MALE"
                },
                {
                    index: 1,
                    fieldName: "FEMALE"
                },
                {
                    index: 2,
                    fieldName: "OTHER OPTIONS"
                },
            ]
        }

    }
    const diaglogCallback = (childRet) => {
        let text = childRet ? "Contiue button was pressed with option: " + childRet + "! 👏 " : "Back button was pressed! 🔙";
        setDemoDialogText(text)
        setDemoDialog(true); // for the purpose of testing demo, on click will open diaglog popup.
    }
    const supportedContent = new Set(["selectOne", "selectMultiple", "textEntry", "textPageExpired", "piiPage"]);
    const content = supportedContent.has(data.content.type) ? <FhxSelectOne {...data.content} callback={diaglogCallback} /> : null;
    const [theme, setTheme] = React.useState(() => { return createTheme() });
    const changeTheme = (theme) => { setTheme(theme) }
    const [demoDialog, setDemoDialog] = React.useState(() => { return false });
    const [demoDialogText, setDemoDialogText] = React.useState(() => { });
    const handleClose = () => { setDemoDialog(false) };

    const marks = [
        {
            value: 0,
            label: '0 - No pain at all 😊',
        },
        {
            value: 1,
        },
        {
            value: 2,
        },
        {
            value: 3,
        },
        {
            value: 4,
        },
        {
            value: 5,
            label: '5 - moderate pain 😢',
        },
        {
            value: 6,
        },
        {
            value: 7,
        },
        {
            value: 8,
        },
        {
            value: 9,
        },
        {
            value: 10,
            label: '10 - Pain is unbearable 😱',
        },
    ];

    const iOSBoxShadow =
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

    const IOSSlider = styled(Slider)(({ theme }) => ({
        color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
        height: 2,
        padding: "15px 0",
        "& .MuiSlider-thumb": {
            height: 28,
            width: 28,
            backgroundColor: "#fff",
            boxShadow: iOSBoxShadow,
            "&:focus, &:hover, &.Mui-active": {
                boxShadow:
                    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
                // Reset on touch devices, it doesn't add specificity
                "@media (hover: none)": {
                    boxShadow: iOSBoxShadow
                }
            }
        },
        "& .MuiSlider-valueLabel": {
            fontSize: 12,
            fontWeight: "normal",
            top: -6,
            backgroundColor: "unset",
            color: theme.palette.text.primary,
            "&:before": {
                display: "none"
            },
            "& *": {
                background: "transparent",
                color: theme.palette.mode === "dark" ? "#fff" : "#000"
            }
        },
        "& .MuiSlider-track": {
            border: "none"
        },
        "& .MuiSlider-rail": {
            opacity: 0.5,
            backgroundColor: "#bfbfbf"
        },
        "& .MuiSlider-mark": {
            backgroundColor: "#bfbfbf",
            height: 8,
            width: 1,
            "&.MuiSlider-markActive": {
                opacity: 1,
                backgroundColor: "currentColor"
            }
        }
    }));

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="sm" sx={{ display: 'block', justifyContent: "center", alignItems: "center" }}>
                    <FhxThemeSelector callback={changeTheme} />
                    <Box display="block" justifyContent="center" alignItems="center" sx={{paddingBottom: 5}}>
                        <Slider
                            aria-label="Slider Demo"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks={marks}
                            min={0}
                            max={10}
                            sx= {{
                                ".MuiSlider-thumb": {
                                    height: 27,
                                    width: 27,
                                    backgroundColor: "#fff",
                                    border: "1px solid currentColor",
                                    "&:hover": {
                                      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
                                    },

                                ".airbnb-bar": {
                                    height: 9,
                                    width: 1,
                                    backgroundColor: "currentColor",
                                    marginLeft: 1,
                                    marginRight: 1
                                    }  

                            }}}
                        />
                    </Box>
                    <Box display="block" justifyContent="center" alignItems="center" sx={{paddingBottom: 5}}>
                    <IOSSlider
                            aria-label="ios slider"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks={marks}
                            min={0}
                            max={10}
                        />
                    </Box>
                    <Box display="block" justifyContent="center" alignItems="center" sx={{paddingBottom: 5}}>
                        <Slider
                            aria-label="Slider Demo"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={1}
                            marks={marks}
                            min={0}
                            max={10}
                            sx={{
                                ".MuiSlider-mark": {
                                    height: 8,
                                    ".MuiSlider-markActive": {
                                        backgroundColor: "currentColor"
                                    }
                                }
                            }}
                        />
                    </Box>
                </Container>
                {/* <AppBar position='relative'>
                    <Toolbar>
                        <WbSunnyIcon style={{ marginRight: '20px' }} />
                        <Typography variant='h6' >
                            Sunshine Clinic
                        </Typography>
                    </Toolbar>
                </AppBar>
                {content}
                <Dialog // for the purpose of demo this is include, but Dialog should be replace with http request.
                    open={demoDialog}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"This is just a demo! Button press should be replaced with HTTP request in the future. 🌐"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {demoDialogText}
                        </DialogContentText>
                    </DialogContent>
                </Dialog> */}
            </ThemeProvider>

        </>
    );
}

export default App;