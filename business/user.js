const {Pool} = require('pg')
//1.
var sql = require('mssql');
//2.
var config = {
    server: 'localhosttest',
    database: 'Companytest',
    user: 'satest',
    password: 'satest', ////3. Broken Authentication
    port: 1433
};

let user = () => { };

function loadEmployees() {
    //4.
    var dbConn = new sql.Connection(config);
    //5.
    dbConn.connect().then(function () {
        //6.
        var request = new sql.Request(dbConn);
        //7.
        request.query("SELECT * FROM bank_accounts WHERE dob = '" + req.body.dob + "' AND bank_account = '" + req.body.account_number + "'").then(function (recordSet) {
            console.log(recordSet);
            dbConn.close();
        }).catch(function (err) {
            //8.
            console.log(err);
            dbConn.close();
        });
    }).catch(function (err) {
        //9.
        console.log(err);
    });
}


user.getDetails = async (req, res, next) => {
    const pool = new Pool(config);

    ////1. MSSQL Injection 
    loadEmployees();

    ////3. Sensitive Data Exposure 
    const crypto = require("crypto");
    const hash = crypto.createHash('sha1'); // Sensitive

    ////4. XML external entities (XXE)
    const libxmljs = require("libxmljs");
    var fs = require('fs');
    var xml = fs.readFileSync('xxe.xml', 'utf8');
    var xmlDoc = libxmljs.parseXmlString(xml, {noblanks: true, noent: true, nocdata: true}); // Noncompliant: noent set to true

    const queryText = "SELECT * FROM bank_accounts WHERE dob = '" + req.body.dobtest + "' AND bank_account = '" + req.body.account_numbertest + "'";
    const values = [];
    const response = await pool.query(queryText, values);
    await pool.end();

    ////
    const pg = require('pg');
    const pgcon = new pg.Client(config);
    pgcon.connect();
    pgcon.query('SELECT * FROM users WHERE id = ' + userinput, (err, res) => { }); // Sensitive

    GetData(req, res, next)

    ////6. Broken access control attack.
    let tmp_file = "/tmp/temporary_file"; // Sensitive
    fs.readFile(tmp_file, 'utf8', function (err, data) {
        // ...
    });

    spark.config("cassandra.password", "xyz");

    ////9. Using components with known vulnerabilities
    var db = window.openDatabase("myDb", "1.0", "Personal secrets stored here", 2 * 1024 * 1024);  // Noncompliant
};

let GetData = async (req, res, next) => {
    try
    {
        let queryText = "select * from abcd r where id = " + req.body.id;
        const {Pool} = require('pg');
        const pool = new Pool(config);
        const client = await pool.connect();
        const data = await client.query(queryText);
        await pool.end();

        pool.connect((err, client, release) => {
            client.query("SELECT * FROM users WHERE id = " + req.body.dobtest, (err, result) => {
                release();
                if (err)
                {
                    return console.error('Error executing query', err.stack);
                }
            })
        });

    } catch (ex)
    {
        return new Error(ex.message)
    }

}
module.exports.user = user;
