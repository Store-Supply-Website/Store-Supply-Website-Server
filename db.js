const { MongoClient } = require('mongodb');
const dotenv = require('dotenv').config();
console.log(process.env.DB_URI)
const client = new MongoClient(process.env.DB_URI, { useNewUrlParser: true });

const dbname="store-supply";
const collectionname="users";
module.exports = {
    connectToDB: async function connectToDB() {
        try {
            await client.connect();
            console.log("connected to DB");
        }
        catch (err) {
            console.log(err)
        }
    },


    saveToDB: async function saveToDB(newUser) {
        try {
            const result = await client.db(dbname).collection(collectionname).insertOne(newUser);
            return(result);
        }
        catch (err) { console.log(err) }
    },
    readFromDB: async function readFromDB(filter) {
        try {
            const result = await client.db(dbname).collection(collectionname).findOne(filter);
            return result;
        }
        catch (err) {
            console.log(err);
        }
    },
    updateOne: async function updateOne(filter, operator) {
        try {
            const result = await client.db(dbname).collection(collectionname).updateOne(filter, operator);
            return result;
        }
        catch (err) {
            console.log(err);
        }
    },
    deleteOne: async function deleteOne(filter) {
        try {
            const result = await client.db(dbname).collection(collectionname).deleteOne(filter);
            return result;
        }
        catch (err) {
            console.log(err);
        }
    },
    readAll: async function readAll() {
        try {
            const result = await client.db(dbname).collection(collectionname).find();

            return result;
        }
        catch (err) {
            console.log(err);
        }
    }
}