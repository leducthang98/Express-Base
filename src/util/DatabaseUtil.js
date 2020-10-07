import mysql from 'mysql';
import CommonConfig from '../config/CommonConfig';

// create database
const pool = mysql.createPool(CommonConfig.DATABASE_URL);

export const query = async (sql, params) => {
    console.log('----------------------------');
    console.log('sql:', mysql.format(sql, params));
    console.log('----------------------------');
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};
