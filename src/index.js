const sql = {
    findUser : (database)=>{
        return `SELECT * FROM ${database.email}`
    }
}


module.exports = sql
