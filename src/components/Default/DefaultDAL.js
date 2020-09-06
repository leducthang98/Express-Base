import * as dbUtil from '../../util/DatabaseUtil';
export const getStudent = async () => {
    const sql = `SELECT * FROM student`;
    const result = await dbUtil.query(sql);
    return result;
} // sample get data from database