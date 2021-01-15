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

const ConnectionToDatabase = `
import yaml
from sqlalchemy import create_engine
import psycopg2

# need improvment
try:
    f = open('config.yml', 'r')
    conf = yaml.safe_load(f)
except:
    conf = yaml.load(os.getenv("PROJECT_CONFIG"))

engine = create_engine('postgresql://'
      + conf["project-database"]["user"] + ':'
      + conf["project-database"]["password"] + '@'
      + conf["project-database"]["hostname"] +':' + '5432/'
      + conf["project-database"]["name"])
`;

const SendData = `
df.to_sql('table_name', con=engine, if_exists='append', index=False,
    dtype={
        'datefld': sqlalchemy.DateTime(),
        'intfld':  sqlalchemy.types.INTEGER(),
        'strfld': sqlalchemy.types.VARCHAR(length=255),
        'floatfld': sqlalchemy.types.Float(precision=3, asdecimal=True),
        'booleanfld': sqlalchemy.types.Boolean
    }
) 
# could use if_exists='replace'
`;

const LoadDataframe = `
import psycopg2

def database_conn():
    return psycopg2.connect(host = conf["project-database"]["hostname"],
                            port = '5432',
                            database = conf["project-database"]["name"],
                            user = conf["project-database"]["user"],
                            password = conf["project-database"]["password"])

def get_data_from_database(req):
    conn = database_conn()
    cursor = conn.cursor()
    cursor.execute(req)
    record = cursor.fetchall()
    names = list(map(lambda x: x[0], cursor.description))
    cursor.close()
    if (conn):
        conn.close()
    df = pd.DataFrame(data= record, columns=names)
    return df

req = "SELECT * FROM schema.table"
df = get_data_from_database(req)

# simplified version
df = pd.read_sql_query('SELECT * FROM table LIMIT 20', engine)
`;


class PythonDatabase extends React.Component {

    render() {
        return (
        <div className='container-page' >
            <Breadcrumbs separator="›" aria-label="breadcrumb" style={{marginBottom:'2rem', fontweight:'600'}}>
                <HomeIcon fontSize='small'/>
                <Typography style={{fontWeight:'500', fontSize:'14px'}}> Python </Typography>
                <Typography style={{fontWeight:'500', fontSize:'14px'}}> Database </Typography>
            </Breadcrumbs>

            <div style={{marginTop:'30px'}}>
                <span className="title-code-section"> Connection to database </span>
                <div style={{marginTop:'15px'}}> {CodeHighlight(ConnectionToDatabase)} </div> 
            </div>
            <div style={{marginTop:'30px'}}>
                <span className="title-code-section"> Export dataframe to database </span>
                <div style={{marginTop:'15px'}}> {CodeHighlight(SendData)} </div> 
            </div>
            <div style={{marginTop:'30px'}}>
                <span className="title-code-section"> Load dataframe from database </span>
                <div style={{marginTop:'15px'}}> {CodeHighlight(LoadDataframe)} </div> 
            </div>

        </div>
        );
    }
}

export default PythonDatabase;