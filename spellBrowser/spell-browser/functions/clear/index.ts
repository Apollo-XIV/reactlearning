import { Client, Databases } from "appwrite";

const client = new Client().setEndpoint('http://localhost/v1').setProject('kahoot-clone');
const databases = new Databases(client);

module.exports = async (req: any, res: any) => {
	const docs = await databases.listDocuments('sync','devTest');
	let manifest = new Array<Promise<Models.Documents> | Boolean>()
	docs.documents.forEach((element, index) => {
		manifest[index] = databases.getDocument('sync','devTest',element.$id)
	})



}