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
