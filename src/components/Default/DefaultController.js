import { commonResponse } from "../../constant/ResponseForm";

export const defaultController = async (req, res) => {
    let data = [
        {
            name: 'default1',
            value: 1
        },
        {
            name: 'default2',
            value: 2
        }
    ]

    res.send(commonResponse(data));
};

