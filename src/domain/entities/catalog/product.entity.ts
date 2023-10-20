import { Entity, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
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


@Entity({ name: 'Products'})
export class Product extends BaseEntity {
    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    shortDescription: string;

    @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
    price: number;

    @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
    oldPrice: number;

    @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
    specialPrice: number;

    @Column({ nullable: true, type: 'decimal', precision: 18, scale: 2 })
    discountPercentage: number;

    @Column({ nullable: true })
    pictureUrl: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdOnUtc: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedOnUtc: Date;

    @Column({ nullable: true })
    stockQuantity: number;

    @Column({ nullable: true })
    displayOrder: number;

    @Column({ nullable: true })
    color: string;

    @Column({ nullable: true })
    size: string;

    @Column({ nullable: true })
    season: string;

    @Column({ nullable: true })
    material: string;

    @Column({ nullable: true })
    style: string;

    @Column({ nullable: true })
    pattern: string;

    @Column({ nullable: true })
    occasion: string;

    @Column({ nullable: true })
    sleeve: string;

    @Column({ nullable: true })
    neckline: string;

    @Column({ nullable: true })
    dressLength: string;

    @Column({ nullable: true })
    waistline: string;

    @Column({ nullable: true })
    silhouette: string;

    @Column({ nullable: true })
    decoration: string;

    @Column({ nullable: true })
    closureType: string;

    @Column({ nullable: true })
    pantClosureType: string;

    @Column({ nullable: true })
    pantLength: string;

    @Column({ nullable: true })
    pantStyle: string;

    @Column({ nullable: true })
    fitType: string;

    @Column({ nullable: true })
    published: boolean;

    @Column({ nullable: true })
    deleted: boolean;

    @Column({ nullable: true })
    isFeatured: boolean;

    @Column({ nullable: true })
    isCallForPricing: boolean;

    @Column({ nullable: true })
    isOnSale: boolean;

    @Column({ nullable: true })
    isNew: boolean;

    @Column({ nullable: true })
    isBestSeller: boolean;

    @Column({ nullable: true })
    isGiftCard: boolean;

    @Column({ nullable: true })
    isDownload: boolean;

    @Column({ nullable: true })
    isRecurring: boolean;

    @Column({ nullable: true })
    isShipEnabled: boolean;

    @Column({ nullable: true })
    isFreeShipping: boolean;

    @Column({ nullable: true })
    isOnHomePage: boolean;

    @Column({ nullable: true })
    isOnSalePage: boolean;

    @Column({ nullable: true })
    allowCustomerReviews: boolean;

    @Column({ nullable: true })
    disableBuyButton: boolean;

    @Column({ nullable: true })
    disableWishlistButton: boolean;

    @Column({ nullable: true })
    disableCompareButton: boolean;

    @Column({ nullable: true })
    showOnHomePage: boolean;

    @Column({ nullable: true })
    showOnSalePage: boolean;

    @ManyToOne(() => ProductType, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ProductTypeId' })
    productType: ProductType;

    @ManyToOne(() => Category, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'CategoryId' })
    category: Category;

    @ManyToOne(() => ProductBrand, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ProductBrandId' })
    productBrand: ProductBrand;

    @OneToMany(() => ProductReview, (productReview) => productReview.product)
    productReviews: ProductReview[];

    get totalRating(): number {
        return this.productReviews?.reduce((acc, pr) => acc + pr.rating, 0) ?? 0;
    }

    @OneToMany(() => RelatedProduct, (relatedProducts) => relatedProducts.product)
    relatedProducts: RelatedProduct[];

    @OneToMany(() => ProductPicture, (productPicture) => productPicture.product)
    productPictures: ProductPicture[];

    @ManyToMany(() => Picture)
    @JoinTable()
    pictures: Picture[];

    @OneToMany(() => ProductSize, (productSize) => productSize.product)
    productSizes: ProductSize[];

    @ManyToMany(() => Size)
    @JoinTable()
    sizes: Size[];

    @OneToMany(() => ProductColor, (productColor) => productColor.product)
    productColors: ProductColor[];

    @ManyToMany(() => Color)
    @JoinTable()
    colors: Color[];

    @OneToMany(() => ProductTag, (productTag) => productTag.product)
    productTags: ProductTag[];

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[];
}
