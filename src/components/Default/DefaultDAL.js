import * as dbUtil from '../../util/DatabaseUtil';
export const getStudent = async (id, name = 'Bơ') => {
    const sql = `SELECT * FROM student WHERE id = ? AND nickname = ?`;
    const result = await dbUtil.query(sql, [id, name]);
    return result;
} // sample get data from database