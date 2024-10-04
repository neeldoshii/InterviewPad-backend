import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database";

const InvitesModel = sequelize.define('invite',{
    invite_id : {
        type : DataTypes.UUID,
        defaultValue : DataTypes.UUID,
        primaryKey : true,
        allowNull : false
    },
    interviewer_id : {
        type : DataTypes.UUID,
        allowNull : true,
        references : {
            model : 'user',
            key : user_id
        }
    },
    candidate_email : {
        type : DataTypes.STRING(255),
        allowNull : false,
        defaultValue : null,
    },
    candidate_name : {
        type : DataTypes.STRING(255),
        allowNull : false,
        defaultValue : null,
    },
    candidate_status : {
        type : DataTypes.ENUM('pending', 'shortlisted', 'rejected'),
        allowNull : false,
        defaultValue : 'pending'
    },
    room_id : {
        type : DataTypes.UUID,
        allowNull : false,
        defaultValue : DataTypes.UUID,
    },
    status : {
        type : DataTypes.ENUM('pending', 'completed'),
        allowNull : false,
    },
    created_at : {
        type : DataTypes.DATE,
        allowNull : false,
        defaultValue : DataTypes.NOW
    }
}, {
    tableName : 'invites',
    timestamps : false
})

exports = InvitesModel