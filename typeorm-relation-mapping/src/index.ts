import { AppDataSource } from "./data-source"
import { IdCard } from "./entity/IdCard"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    const user = await AppDataSource.manager.find(User, {
        relations: {
            idCard: true
        }
    });
    console.log(user);

}).catch(error => console.log(error))