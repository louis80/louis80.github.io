import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';

function CodeHighlight(codesample) {
    return (
    <Highlight theme={dracula} {...defaultProps} code={codesample} language="python">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
            {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
                ))}
            </div>
            ))}
        </pre>
        )}
    </Highlight>
    );
}

const BasicOperation = `
# concatenate 2 dataframes

`;



class Selenium extends React.Component {

    render() {
        return (
        <div className='container-page' >
            <Breadcrumbs separator="›" aria-label="breadcrumb" style={{marginBottom:'2rem', fontweight:'600'}}>
                <HomeIcon fontSize='small'/>
                <Typography style={{fontWeight:'500', fontSize:'14px'}}> Python </Typography>
                <Typography style={{fontWeight:'500', fontSize:'14px'}}> Selenium </Typography>
            </Breadcrumbs>

            <div>
                <span className="title-code-section">Title  </span>
                <div style={{marginTop:'15px'}}> {CodeHighlight('text')}  </div>
            </div>
           
        </div>
        );
    }
}

export default Selenium;