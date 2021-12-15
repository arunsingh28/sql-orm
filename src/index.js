const colleciton = process.env.COLLECTION || 'collection_name'

const sql = {
    findUser : (query)=>{
        return `SELECT ${query[Object.keys(query)[0]]} FROM ${colleciton}`
    }
}


module.exports = sql
