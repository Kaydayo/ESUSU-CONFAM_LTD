import Joi from "joi";
import { User,login, IGroup} from "../interfaces";



export const validateUser = (user: User) => {
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
        DOB: Joi.date().required(),
        email: Joi.string().email().required(),
        phoneNo: Joi.number().required(),
        password: Joi.string()
            .required()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    return schema.validate(user);
};

export const validateLogin = (person: login) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string()
            .required()
            .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    return schema.validate(person);
};

export const validateGroup = (group: IGroup) => {
    const schema = Joi.object({
        groupName: Joi.string().required(),
        savingsAmount: Joi.string().required(),
        
    })

}
