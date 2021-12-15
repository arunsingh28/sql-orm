const colleciton = process.env.COLLECTION || 'collection_name'

const sql = {
    findUser : (database)=>{
        return `SELECT ${database[Object.keys(database)[0]]} FROM ${colleciton}`
    }
}


module.exports = sql
