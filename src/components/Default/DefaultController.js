import { commonResponse } from "../../constant/ResponseForm";
import * as defaultDAl from './DefaultDAL';
import * as jwtUtil from '../../util/JwtUtils';
import { TOKEN } from "../../constant/Token";
import { NotExtended } from "http-errors";
import { ERRORS } from '../../constant/Errors';
export const defaultController = async (req, res) => {
    const students = await defaultDAl.getStudent();
    res.send(commonResponse(students));
};

export const generateToken = async (req, res, next) => {
    let data = {
        username: 'leducthang',
        id: 1998,
        password: '123'
    }
    const { username, password } = req.body;
    if (username === data.username && password === data.password) {
        const token = await jwtUtil.generateToken(data, { expiresIn: TOKEN.TOKEN_EXPIRED })
        let tokenInfo = {
            token: token,
            expiredIn: TOKEN.TOKEN_EXPIRED
        }
        res.send(tokenInfo)
    } else {
        next(ERRORS.INVALID_USERNAME_OR_PASSWORD_ERROR)
    }
}
