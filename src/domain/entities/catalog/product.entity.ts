import { ProductType } from './product-type.entity';
import { Category } from './category.entity';
import { ProductBrand } from './product-brand.entity';
import { ProductReview } from './product-review.entity';
import { ProductSize } from './product-size.entity';
import { ProductColor } from './product-color.entity';
import { ProductTag } from './product-tag.entity';
import {Picture} from "../common/picture.entity";
import {Size} from "../common/size.entity";
import {Color} from "../common/color.entity";
import {Tag} from "../common/tag.entity";
import {RelatedProduct} from "./product-related.entity";
import {ProductPicture} from "./product-pictures.entity";
import {BaseEntity} from "../basic/base-entity.entity";
import { Product as PrismaProduct } from '@prisma/client';

export class Product extends BaseEntity {

    name: string;
    description: string;
    shortDescription: string;
    price: number;
    oldPrice: number;
    specialPrice: number;
    discountPercentage: number;
    pictureUrl: string;
    createdOnUtc: Date;
    updatedOnUtc: Date;
    stockQuantity: number;
    displayOrder: number;
    color: string;
    size: string;
    season: string;
    material: string;
    style: string;
    pattern: string;
    occasion: string;
    sleeve: string;
    neckline: string;
    dressLength: string;
    waistline: string;
    silhouette: string;
    decoration: string;
    closureType: string;
    pantClosureType: string;
    pantLength: string;
    pantStyle: string;
    fitType: string;
    published: boolean;
    deleted: boolean;
    isFeatured: boolean;
    isCallForPricing: boolean;
    isOnSale: boolean;
    isNew: boolean;
    isBestSeller: boolean;
    isGiftCard: boolean;
    isDownload: boolean;
    isRecurring: boolean;
    isShipEnabled: boolean;
    isFreeShipping: boolean;
    isOnHomePage: boolean;
    isOnSalePage: boolean;
    allowCustomerReviews: boolean;
    disableBuyButton: boolean;
    disableWishlistButton: boolean;
    disableCompareButton: boolean;
    showOnHomePage: boolean;
    showOnSalePage: boolean;
    productType: ProductType;
    category: Category;
    productBrand: ProductBrand;
    productReviews: ProductReview[];

    get totalRating(): number {
        return this.productReviews?.reduce((acc, pr) => acc + pr.rating, 0) ?? 0;
    }

    relatedProducts: RelatedProduct[];
    productPictures: ProductPicture[];
    pictures: Picture[];
    productSizes: ProductSize[];
    sizes: Size[];
    productColors: ProductColor[];
    colors: Color[];
    productTags: ProductTag[];
    tags: Tag[];
}
// export class Product {
//     id: string;
//     name: string;
//     description?: string;
//     shortDescription?: string;
//     price: number;
//     oldPrice?: number;
//     specialPrice?: number;
//     discountPercentage?: number;
//     pictureUrl?: string;
//     createdOnUtc: Date;
//     updatedOnUtc: Date;
//     stockQuantity?: number;
//     displayOrder?: number;
//     color?: string;
//     size?: string;
//     season?: string;
//     material?: string;
//     style?: string;
//     pattern?: string;
//     occasion?: string;
//     sleeve?: string;
//     neckline?: string;
//     dressLength?: string;
//     waistline?: string;
//     silhouette?: string;
//     decoration?: string;
//     closureType?: string;
//     pantClosureType?: string;
//     pantLength?: string;
//     pantStyle?: string;
//     fitType?: string;
//     published: boolean;
//     deleted: boolean;
//     isFeatured: boolean;
//     isCallForPricing: boolean;
//     isOnSale: boolean;
//     isNew: boolean;
//     isBestSeller: boolean;
//     isGiftCard: boolean;
//     isDownload: boolean;
//     isRecurring: boolean;
//     isShipEnabled: boolean;
//     isFreeShipping: boolean;
//     isOnHomePage: boolean;
//     isOnSalePage: boolean;
//     allowCustomerReviews: boolean;
//     disableBuyButton: boolean;
//     disableWishlistButton: boolean;
//     disableCompareButton: boolean;
//     showOnHomePage: boolean;
//     showOnSalePage: boolean;
//     productType?: ProductType;
//     category?: Category;
//     productBrand?: ProductBrand;
//     productReviews?: ProductReview[];
//
//     constructor(
//         id: string,
//         name: string,
//         price: number,
//         createdOnUtc: Date,
//         updatedOnUtc: Date,
//         published: boolean,
//         deleted: boolean,
//         isFeatured: boolean,
//         isCallForPricing: boolean,
//         isOnSale: boolean,
//         isNew: boolean,
//         isBestSeller: boolean,
//         isGiftCard: boolean,
//         isDownload: boolean,
//         isRecurring: boolean,
//         isShipEnabled: boolean,
//         isFreeShipping: boolean,
//         isOnHomePage: boolean,
//         isOnSalePage: boolean,
//         allowCustomerReviews: boolean,
//         disableBuyButton: boolean,
//         disableWishlistButton: boolean,
//         disableCompareButton: boolean,
//         showOnHomePage: boolean,
//         showOnSalePage: boolean
//     ) {
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.createdOnUtc = createdOnUtc;
//         this.updatedOnUtc = updatedOnUtc;
//         this.published = published;
//         this.deleted = deleted;
//         this.isFeatured = isFeatured;
//         this.isCallForPricing = isCallForPricing;
//         this.isOnSale = isOnSale;
//         this.isNew = isNew;
//         this.isBestSeller = isBestSeller;
//         this.isGiftCard = isGiftCard;
//         this.isDownload = isDownload;
//         this.isRecurring = isRecurring;
//         this.isShipEnabled = isShipEnabled;
//         this.isFreeShipping = isFreeShipping;
//         this.isOnHomePage = isOnHomePage;
//         this.isOnSalePage = isOnSalePage;
//         this.allowCustomerReviews = allowCustomerReviews;
//         this.disableBuyButton = disableBuyButton;
//         this.disableWishlistButton = disableWishlistButton;
//         this.disableCompareButton = disableCompareButton;
//         this.showOnHomePage = showOnHomePage;
//         this.showOnSalePage = showOnSalePage;
//     }
//
//
//     relatedProducts?: RelatedProduct[];
//     productPictures?: ProductPicture[];
//     pictures?: Picture[];
//     productSizes?: ProductSize[];
//     sizes?: Size[];
//     productColors?: ProductColor[];
//     colors?: Color[];
//     productTags?: ProductTag[];
//     tags?: Tag[];
// }
//
// export class Product implements PrismaProduct {
//     CategoryId: string | null;
//     ProductBrandId: string | null;
//     ProductTypeId: string | null;
//     allowCustomerReviews: boolean;
//     closureType: string | null;
//     color: string | null;
//     createdOnUtc: Date;
//     decoration: string | null;
//     deleted: boolean;
//     description: string | null;
//     disableBuyButton: boolean;
//     disableCompareButton: boolean;
//     disableWishlistButton: boolean;
//     discountPercentage: Decimal | null;
//     displayOrder: number | null;
//     dressLength: string | null;
//     fitType: string | null;
//     id: string;
//     isBestSeller: boolean;
//     isCallForPricing: boolean;
//     isDownload: boolean;
//     isFeatured: boolean;
//     isFreeShipping: boolean;
//     isGiftCard: boolean;
//     isNew: boolean;
//     isOnHomePage: boolean;
//     isOnSale: boolean;
//     isOnSalePage: boolean;
//     isRecurring: boolean;
//     isShipEnabled: boolean;
//     material: string | null;
//     name: string;
//     neckline: string | null;
//     occasion: string | null;
//     oldPrice: Decimal | null;
//     pantClosureType: string | null;
//     pantLength: string | null;
//     pantStyle: string | null;
//     pattern: string | null;
//     pictureUrl: string | null;
//     price: Decimal;
//     published: boolean;
//     season: string | null;
//     shortDescription: string | null;
//     showOnHomePage: boolean;
//     showOnSalePage: boolean;
//     silhouette: string | null;
//     size: string | null;
//     sleeve: string | null;
//     specialPrice: Decimal | null;
//     stockQuantity: number | null;
//     style: string | null;
//     updatedOnUtc: Date;
//     waistline: string | null;
//
//
// }
