const {Pool} = require('pg')
let user = () => { };

user.getDetails = async (req, res, next) => {
    const pool = new Pool({});
    //// Added SQL injection code.
    const queryText = "SELECT * FROM bank_accounts WHERE dob = '" + req.body.dob + "' AND bank_account = '" + req.body.account_number + "'";
    const values = [];
    const response = await pool.query(queryText, values);
    await pool.end();
};