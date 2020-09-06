import { commonResponse } from "../../constant/ResponseForm";
import * as defaultDAl from './DefaultDAL';
export const defaultController = async (req, res) => {
    const students = await defaultDAl.getStudent();
    res.send(commonResponse(students));
};

