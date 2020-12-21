
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

const basicPythonCode = `
# Calcul execution time
from datetime import datetime
start = datetime.now()
... Some code ...
end = datetime.now()-start

# Enumerate
date_range = ['2014', '2015', '2016', '2017', '2018']
for idx, q in enumerate(date_range):
    print(idx, ' : ', q)
# 0 : 2014
# 1 : 2015
# ...

# Concatenate dataframe
df = pd.concat([df1, df2])

`;

const virtualEnvironment = `
# Install virtualvenv
python -m pip install --user virtualenv

# Create a virtual environment
python -m venv env_name

# Activate the environment
.\env_name\Scripts\activate # Windows
source env_name/bin/activate # linux

# Install requirements
pip install -r requirements.txt
pip install --proxy=http://... -r requirements.txt

# Leaving the virtual environment
deactivate
`;

const csvExcelManipulation = `
# Count number of rows in the csv
with open('../data.csv', encoding='utf8', errors='ignore') as csvfile:
    row_count = sum(1 for row in csvfile)
    print(row_count if row_count else 'Empty')

# Import csv part
def get_df_sample(beg, end):
    '''
    (Input) beg :
            end :
    (Output) df_sample :
    '''
    df_base = pd.read_csv('data.csv', nrows= 0) # get the columns name of the csv
    df_sample = pd.read_csv('data.csv', skiprows=beg, nrows=(end-beg))
    df_sample.columns = df_base.columns

    return df_sample

# export as excel
df.to_excel(r'C:/Users/.../df_'+str(j)+'.xlsx', encoding='utf-8')

# Import excel
df = pd.read_excel('file.xlsx', converters = {'colname': str}, nrows=10).fillna('')
`;

const iterateOverFiles = `
from os.path import join, isfile, splitext
from os import listdir

filenames = [join(folder_path, f) for f in listdir(folder_path) if isfile(join(folder_path,f))]
for filename in filenames:
    extension = splitext(filename)[1]
    if extension == '.xlsx':
        ...
`;

const a = `
`;


class PythonGeneral extends React.Component {

    render() {
        return (
        <div className='container-page' >
            <Breadcrumbs separator="›" aria-label="breadcrumb" style={{marginBottom:'2rem', fontweight:'600'}}>
                <HomeIcon fontSize='small'/>
                <Typography style={{fontWeight:'500', fontSize:'14px'}}> Python </Typography>
                <Typography style={{fontWeight:'500', fontSize:'14px'}}> General </Typography>
            </Breadcrumbs>

            <div>
                <span className="" style={{marginBottom:'10px'}}><strong>Basic Python code </strong></span>
                {CodeHighlight(basicPythonCode)}
            </div>
            <div>
                <span className="" style={{marginBottom:'10px'}}><strong>Virtual Environment </strong></span>
                {CodeHighlight(virtualEnvironment)}
            </div>
            <div>
                <span className="" style={{marginBottom:'10px'}}><strong>Manipulation of csv or excel files </strong></span>
                {CodeHighlight(csvExcelManipulation)}
            </div>
            <div>
                <span className="" style={{marginBottom:'10px'}}><strong>Iterate over files whithin a folder </strong></span>
                {CodeHighlight(iterateOverFiles)}
            </div>
        </div>
        );
    }
}

export default PythonGeneral;
