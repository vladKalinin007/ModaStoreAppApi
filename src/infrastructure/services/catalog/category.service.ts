import {Injectable} from "@nestjs/common";
import {Category} from "../../../domain/entities/catalog/category.entity";
import {PrismaService} from "../../database/prisma.service";

@Injectable()
export class CategoryService {

    constructor(private readonly _prismaService: PrismaService) {}

    async getCategories(): Promise<Category[]>  {
        return this._prismaService.category.findMany();
    }
}
