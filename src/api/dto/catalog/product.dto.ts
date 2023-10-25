import {SizeDto} from "../common/size.dto";
import {ColorDto} from "../common/color.dto";
import {ProductReviewDto} from "./product-review.dto";
import {Product} from "../../../domain/entities/catalog/product.entity";



export class ProductDto  {

    id: string;
    name?: string;
    description?: string;
    shortDescription?: string;
    price?: number;
    oldPrice?: number;
    specialPrice?: number;
    discountPercentage?: number;
    pictureUrl?: string;
    createdOnUtc?: Date;
    updatedOnUtc?: Date;
    stockQuantity?: number;
    displayOrder?: number;
    color?: string;
    size?: string;
    season?: string;
    material?: string;
    productType?: string;
    productBrand?: string;
    category?: string;
    productTypeId?: string;
    productBrandId?: string;

    sizes?: SizeDto[];
    colors?: ColorDto[];
    productReviews?: ProductReviewDto[];
    pictures?: string[];
    relatedProducts?: string[];

    constructor(product: Product) {

        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.shortDescription = product.shortDescription;
        this.price = product.price;
        this.oldPrice = product.oldPrice;
        this.specialPrice = product.specialPrice;
        this.discountPercentage = product.discountPercentage;
        this.pictureUrl = product.pictureUrl;
        this.createdOnUtc = product.createdOnUtc;
        this.updatedOnUtc = product.updatedOnUtc;
        this.stockQuantity = product.stockQuantity;
        this.displayOrder = product.displayOrder;
        this.color = product.color;
        this.size = product.size;
        this.season = product.season;
        this.material = product.material;
        this.productTypeId = product.productType?.id;
        this.productBrandId = product.productBrand?.id;
        this.productType = product.productType?.name;
        this.productBrand = product.productBrand?.name;
        this.category = product.category?.name;

        this.pictures = product.productPictures.map(productPicture => {
            return productPicture.picture.url;
        });

        this.colors = product.productColors.map(productColor => {
            return {
                id: productColor.color.id,
                name: productColor.color.name,
                colorCode: productColor.color.colorCode
            };
        });

        this.sizes = product.productSizes.map(productSize => {
            return {
                id: productSize.size.id,
                name: productSize.size.name,
            };
        });

        this.productReviews = product.productReviews.map(productReview => {
            return {
                id: productReview.id,
                rating: productReview.rating,
                comment: productReview.comment,
                createdOnUtc: productReview.createdOnUtc,
                user: productReview.user,
                product: productReview.product
            };
        });

        this.relatedProducts = product.relatedProducts.map(relatedProduct => {
            return relatedProduct.id;
        });
    }

    static from(product): ProductDto {
        return new ProductDto(product);
    }
}
