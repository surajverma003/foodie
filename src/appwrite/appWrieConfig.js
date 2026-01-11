import { Account, Client } from "appwrite";

const client = new Client();
client.setEndpoint('https://fra.cloud.appwrite.io/v1').setProject('6814dc2b00156064de56');

const account = new Account(client);

export default account;