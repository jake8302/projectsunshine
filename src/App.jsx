import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ThemeProvider, createTheme, } from '@mui/material/styles';
import { FhxThemeSelector } from './common/FhxContentComponents';
import { FhxSelectOne } from './content/FhxSelectOne';

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


    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <FhxThemeSelector callback={changeTheme} />
                <AppBar position='relative'>
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
                </Dialog>
            </ThemeProvider>

        </>
    );
}

export default App;