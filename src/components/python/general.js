
import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from 'prism-react-renderer/themes/dracula';

const exampleCode = `
print('hello Wolrd')
def func(tr):
    if tr is None: 
        print('ok')
`;


class PythonGeneral extends React.Component {

    render() {
        return (
        <div className='container-page' >
            PythonGeneral
            <Highlight theme={dracula} {...defaultProps} code={exampleCode} language="python">
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
        </div>
        );
    }
}

export default PythonGeneral;
