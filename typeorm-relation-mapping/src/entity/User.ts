import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { OneToOne } from "typeorm"
import { IdCard } from "./IdCard"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    /**
     * 一对一关系,一个用户对应一个身份证
     * 通过 @OneToOne 装饰器的第二个参数可以在没有外键的实体中指定关联查询的字段
     */
    @OneToOne(() => IdCard, (idCard) => idCard.user)
    idCard: IdCard

}
