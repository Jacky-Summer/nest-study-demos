import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({
    name: 'id_card'
})
export class IdCard {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50,
        comment: '身份证号'
    })
    cardName: string


    /**
     * @JoinColumn 是 TypeORM 中用于定义实体关系的装饰器，通常与 @OneToOne、@ManyToOne 或 @ManyToMany 一起使用。它指定了在关系中使用的外键列
     * 
     * cascade: true - 如果用户被删除,那么关联的身份证也将被删除
     * onDelete: 'CASCADE' - 如果用户被删除,那么关联的身份证将被删除
     * onUpdate: 'CASCADE' - 如果用户的 id 更新了,那么关联的身份证也将被更新
     */
    @JoinColumn() // 指定外键
    @OneToOne(() => User, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    user: User
}