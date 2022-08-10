import type { IUser } from 'src/interfaces';
import mongoose, { Model } from 'mongoose';

interface UserModel extends Model<IUser> {
	createUser(a: string, b: string): Promise<IUser>;
	getUserByEmail(a: string): Promise<IUser>;
}

const schema = new mongoose.Schema<IUser>(
	{
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true,
		autoIndex: true,
		collection: 'user',
		id: false,
		minimize: false
	}
);

schema.statics.createUser = async function (email: string, password: string) {
	await this.create({ email, password });
};

schema.statics.getUserByEmail = async function (email: string) {
	return await this.findOne({ email }).lean();
};

export const UserModel =
	(mongoose.models.user as unknown as UserModel) ||
	mongoose.model<IUser, UserModel>('user', schema);
