// import {BaseEntity} from "../../entities/common/base-entity.entity";

import {BaseEntity} from "typeorm";

export interface IRepository<T extends BaseEntity> {
    getById(id: string): T;
    getByIdAsync(id: string): Promise<T>;
    getAllAsync(): Promise<T[]>;
    insert(entity: T): T;
    insertAsync(entity: T): Promise<T>;
    update(entity: T): T;
    updateAsync(entity: T): Promise<T>;
    delete(entity: T): void;
    deleteAsync(entity: T): Promise<T>;
}
