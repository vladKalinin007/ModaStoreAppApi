import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import {GetProductQuery} from "../models/get-product.query";
import {Product} from "../../../../../../domain/entities/catalog/product.entity";
import {ProductService} from "../../../../../../infrastructure/services/catalog/product.service";
import {ProductDto} from "../../../../../../api/dto/catalog/product.dto";


@QueryHandler(GetProductQuery)
export class GetProductQueryHandler implements IQueryHandler<GetProductQuery> {

    constructor(private readonly _productService: ProductService) {}

    async execute(query: GetProductQuery): Promise<ProductDto[]> {
        const products: Product[] = await this._productService.getAllProducts();
        return products.map(product => ProductDto.from(product));
    }
}
