import responseStatus from "../const.js";
import UserModel from "../model/UserModel.js";

export const createUserAccount = async (req, res) => {
   const { user_name, email_id, password } = req.body; // Uncomment to use input data

   try {
      // Check if email exists in db at email_id
      const emailExist = await UserModel.findOne({
         where: {
            email_id: email_id,
         },
      });

      if (emailExist) {
         console.log(`Email exists ${emailExist}`);

         return res.status(409).json({
            status: 409,
            message: "Email already exists",
         });

      } else {
         console.log("Email does not exist. Proceed to create user.");
         await UserModel.create({
            user_name,
            email_id,
            password: password,
            role: "candidate",
         });
      }

      
      res.status(responseStatus.success).json({
         status: responseStatus.success,
         message: "User created successfully",
      });
   } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(responseStatus.serverError).json({
         error: error.message, // Better to return error message
      });
   }
};


export const loginUserAccount = async (req, res) => {
   const { email_id, password } = req.body
   const user = await UserModel.findAll({
       where: {
           email_id: email_id,
           password: password
       },
       logging : console.log
   })

   
   console.log('Query Result:', user);
   
   
   // User Doesn't exists
   if (user.length === 0) {
       res.status(responseStatus.unverified)
       
       res.json(
           {
               message: `Invalid Credentials. Try Again ...... 😊 `,
               status: 0
           }
       )
   }
   else{
       const userdata = user[0].dataValues

       res.status(responseStatus.success)
       res.json(
           {
               status : 1,
               message : "The user exists. Logging in...... 😊",
               data : userdata
               // data : {
               //     userId : userdata.userId,
               //     firstName : userdata.firstName,
               //     lastName : userdata.lastName,
               //     email_id : userdata.emailId, 
               //     email_verified : userdata.email_verified
               // }
           }
       )
   }
}