import mongos from 'mongoose'
import validator from 'mongoose-unique-validator'

const schema = new mongos.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: [true, 'El correo ya existe'],
        required: [true, 'El correo es necesario'],
        maxlength: [100, 'El correo no puede exceder los 100 caracteres'],
        lowercase: [true, 'el correo debe ser en mayúscula'],
        validate: (value: string) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        },
        message: (props: { value: any; }) => `${props.value} ingrese un email válido`
    },
    uuid: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        minlength: [8, 'La contraseña debe ser al menos de 8'],
        validate: {
            validator: function (value: string) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value);
            },
            message: (props: { value: any; }) => `ingrese una contraseña válida`
        }
    }
},
    {
        timestamps: true,
    })

schema.plugin(validator)

const UserModel = mongos.model('Users', schema)

export default UserModel
