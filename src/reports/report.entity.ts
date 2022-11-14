import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Report
{
    @PrimaryGeneratedColumn()
    id : string;
}