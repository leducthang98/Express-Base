import jwt from 'jsonwebtoken';
const JWT_SECRET = 'leducthang98';

// generate json-web-token
export const generateToken = (claims, options) => new Promise((resolve, reject) => {
    jwt.sign(claims, JWT_SECRET, options || { noTimestamp: true }, (err, token) => {
        if (err) {
            reject(err)
        } else {
            resolve(token)
        }
    })
})

// verify token
export const verifyToken = token => new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})