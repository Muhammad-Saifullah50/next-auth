import { readDatabase } from "@/helpers/dbHelpers";
import { writeDatabase } from "@/helpers/dbHelpers";
import { User } from "@/types";

export const GET = async () => {
    const data = JSON.parse(readDatabase());
    console.log(data, "data")
    const newData: User = {
        id: "78887",
        name: "Obaidullah",
        email: "obaid@gmail.com",
        password: "989899"

    }
    console.log(writeDatabase(newData))

}