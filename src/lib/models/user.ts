import type { TUser } from 'src/interfaces';
import mongoose, { Model } from 'mongoose';

interface UserModel extends Model<TUser> {
	createUser(a: string, b: string): Promise<TUser>;
	getUserByEmail(a: string): Promise<TUser>;
}

const schema = new mongoose.Schema<TUser>(
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
	mongoose.model<TUser, UserModel>('user', schema);
