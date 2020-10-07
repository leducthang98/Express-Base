import { commonResponse } from "../../constant/ResponseForm";
import * as defaultDAL from './DefaultDAL';
import * as jwtUtil from '../../util/JwtUtils';
import { TOKEN } from "../../constant/Token";
import { ERRORS } from '../../constant/Errors';
import { hash, compare } from '../../util/BcryptUtil';
export const defaultController = async (req, res, next) => {
    let id = req.params.id
    let name = req.query.name
    if (id) {
        const students = await defaultDAL.getStudent(id, name);
        res.send(commonResponse(students));
    } else {
        next(ERRORS.INVALID_INPUT_PARAMS)
    }
};

export const generateToken = async (req, res, next) => {
    let data = {
        username: 'default',
        id: 1998,
        password: 'default'
    }
    const { username, password } = req.body;
    if (username === data.username && password === data.password) {
        const token = await jwtUtil.generateToken(data, { expiresIn: TOKEN.TOKEN_EXPIRED })
        let tokenInfo = {
            token: token,
            expiredIn: TOKEN.TOKEN_EXPIRED
        }
        res.send(commonResponse(tokenInfo))
    } else {
        next(ERRORS.INVALID_USERNAME_OR_PASSWORD_ERROR)
    }
}

export const bcryptGenerator = async (req, res, next) => {
    let data = req.body.text
    if (data) {
        res.send(commonResponse({
            bcrypt: hash(data)
        }))
    } else {
        next(ERRORS.INVALID_INPUT_PARAMS)
    }
}

export const bcryptComparator = async (req, res, next) => {
    let data = req.body;
    let text = data.text;
    let encrypted = data.encrypted;
    if (text && encrypted) {
        compare(text, encrypted)
            .then((payload) => {
                console.log(payload)
                res.send(commonResponse({
                    payload: payload
                }))
            })
            .catch((error) => {
                next('bcrypt error')
            })
    } else {
        next(ERRORS.INVALID_INPUT_PARAMS)
    }

}