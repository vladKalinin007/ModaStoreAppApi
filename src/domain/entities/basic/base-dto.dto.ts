import {PrimaryGeneratedColumn} from "typeorm";

export abstract class BaseDto {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}
