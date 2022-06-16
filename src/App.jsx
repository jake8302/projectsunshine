import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar } from '@mui/material';
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

    const supportedContent = new Set(["selectOne", "selectMultiple", "textEntry", "textPageExpired", "piiPage"]);
    const content = supportedContent.has(data.content.type) ? <FhxSelectOne {...data.content} /> : null;
    const [theme, setTheme] = React.useState(() => { return createTheme() });
    const changeTheme = (theme) => { setTheme(theme) }
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
            </ThemeProvider>

        </>
    );
}

export default App;