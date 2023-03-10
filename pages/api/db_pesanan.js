import Router from 'next/router';
const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
// mengambil data dari collection Transaksi

async function getPesanan(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        let paket = await db
            .collection('paket')
            .find({
            })
            .toArray();
        let menu = await db
            .collection('menu')
            .find({
            })
            .toArray();
        let ruangan = await db
            .collection('ruangan')
            .find({
            })
            .toArray();
        let hasil = {}
        hasil['paket'] = paket
        hasil['menu'] = menu
        hasil['ruangan'] = ruangan
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(hasil)),
            success: true,
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// CRUD handler
export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPesanan(req, res);
        }
        case 'POST': {
            return addFavorit(req, res);
        }
        case 'PUT': {
            return updateFavorit(req, res);
        }
        case 'DELETE': {
            return deleteFavorit(req, res);
        }
    }
}