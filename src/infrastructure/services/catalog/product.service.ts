import { Injectable } from '@nestjs/common';
import {Product} from "../../../domain/entities/catalog/product.entity";



// @Injectable()
// export class ProductService {
//
//     constructor(@InjectRepository(Product) private readonly _productRepository: Repository<Product>) {}
//
//     async insertProduct(product: Product): Promise<Product> {
//         const newProduct: Product = this._productRepository.create(product);
//         return await this._productRepository.save(newProduct);
//     }
//
//     async getAllProducts(): Promise<Product[]> {
//         return await this._productRepository
//             .createQueryBuilder('product')
//             .leftJoinAndSelect('product.productType', 'productType')
//             .leftJoinAndSelect('product.productBrand', 'productBrand')
//             .leftJoinAndSelect('product.category', 'category')
//             .leftJoinAndSelect('product.productPictures', 'productPictures')
//             .leftJoinAndSelect('productPictures.picture', 'pictures')
//             .leftJoinAndSelect('product.productSizes', 'productSizes')
//             .leftJoinAndSelect('productSizes.size', 'sizes')
//             .leftJoinAndSelect('product.productColors', 'productColors')
//             .leftJoinAndSelect('productColors.color', 'colors')
//             .leftJoinAndSelect('product.relatedProducts', 'relatedProducts')
//             .leftJoinAndSelect('product.productReviews', 'productReviews')
//             .getMany();
//     }
//
//
//     getProductById(id: string): Promise<Product> {
//         return this._productRepository.findOneBy({ id });
//     }
//
//     async updateProduct(id: string, product: Product) {
//         const productToUpdate: Product = await this.getProductById(id);
//
//         if (productToUpdate) {
//             return this._productRepository.save({ ...productToUpdate, ...product });
//         }
//     }
//
//     async deleteProduct(id: string): Promise<Product> {
//         const product: Product = await this.getProductById(id);
//
//         if (product) {
//             return this._productRepository.remove(product);
//         }
//     }
//
// }
