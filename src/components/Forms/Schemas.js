import * as Yup from 'yup'
export const registerSchema = Yup.object().shape({
	username: Yup.string()
		.required('Field is required!')
		.min(3, `Name must be more than 3 symbols`)
		.max(18, 'Must be less than 18 symbols'),
	email: Yup.string().email('Email is not valid').required('Required'),
	age: Yup.number()
		.positive('Field must be only positive')
		.min(14, 'Age must be more 14 years')
		.max(99, 'Age must be less than 99 years'),
	password: Yup.string()
		.min(6, 'Password must be more than 6')
		.max(18, 'Password must be less than 18')
		.required('Required'),
	confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password is not equal!'),
	country: Yup.string().oneOf(['usa', 'ukraine'], 'Country is not valid'),
	rules: Yup.bool().oneOf([true], 'Rules must be accepted!'),
})

export const loginSchema = Yup.object().shape({
	email: Yup.string().email('Email is not valid').required('Required'),
	password: Yup.string()
		.min(6, 'Password must be more than 6')
		.max(18, 'Password must be less than 18')
		.required('Required'),
})
