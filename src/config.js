import { config } from "dotenv";
config();

export default {
    port: 4000,
    select:"select * from ",
    exec:"EXECUTE ",
    delete:"DELETE FROM notas WHERE iId = ",
    ById:" where iId = @iId",
}