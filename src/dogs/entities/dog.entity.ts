import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dog {
    
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    nombre: string
    
    @Column()
    edad:number
    
    @Column()
    raza:string

    @DeleteDateColumn()
    deletedAt:Date
}
