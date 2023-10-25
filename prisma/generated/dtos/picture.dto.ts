import { Prisma } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { ProductPicturesDto } from "./";

export class PictureDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    url: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    pictureType: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    pictureTypeId: string;

    @ApiProperty({ required: true, type: () => ProductPicturesDto })
    @IsOptional()
    productPictures: ProductPicturesDto[];
}
