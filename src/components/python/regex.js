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
df = pd.concat([df1, df2])

# change columns name
df.columns = ['column_name1','column_name2']

# Access element of dataframe
df.iat[row, column]

# deal with nan / None
df = df[df.column_name.notnull()]
df.column_name = df.column_name.apply(lambda x: x if not pd.isnull(x) else 'Null')

# Apply function to dataframe column
df['name'] = df_sample.apply(lambda x : function_to_apply(x['name']), axis=1)

# apply function to the dataframe
df.applymap(str)

# drop dataframe column
df = df.drop(['column_name1', 'column_name2'], axis=1)

# count occurence of values within dataframe column
df['column_name'].value_counts()
df.column_name.value_counts()

# filtre on dataframe date column
min_date = min(df['datetime'])
max_date = max(df['datetime'])
unique_column_value_between_date = df[(df['datetime']>=min_date) & (df['datetime']<=max_date)]['col_name'].unique()

# Selection on occurences containing text within dataframe column
list_name_containing_test = [name for name in df.column_name.unique() if 'test' in name.lower()]
df = df[~df.column_name.isin(list_name_containing_test)] # ~ -> not 

# Multiply each dataframe rows by a vector
avg_df = pd.DataFrame({
    var_name: dfb.multiply(
    weights['temperature_weights'],
    axis=1, level='column_name').sum(axis=1)
})
# dfb -> (xxx, 32) | weights['temperature_weights'] -> (32,)
`;

const AddElementToDataframe = `
import pandas as pd
from datetime import datetime

df = pd.DataFrame(columns=['name1', 'name2', 'time'])
df = df.append({'name1': 'value1', 'name2':'value2', 'time':datetime.now()}, ignore_index=True)
`;

class PythonRegex extends React.Component {

    render() {
        return (
        <div className='container-page' >
            <Breadcrumbs separator="›" aria-label="breadcrumb" style={{marginBottom:'2rem', fontweight:'600'}}>
                <HomeIcon fontSize='small'/>
                <Typography style={{fontWeight:'500', fontSize:'14px'}}> Python </Typography>
                <Typography style={{fontWeight:'500', fontSize:'14px'}}> Regex </Typography>
            </Breadcrumbs>

            <div>
                <span className="title-code-section">Title  </span>
                <div style={{marginTop:'15px'}}> {CodeHighlight('text')}  </div>
            </div>
           
        </div>
        );
    }
}

export default PythonRegex;
