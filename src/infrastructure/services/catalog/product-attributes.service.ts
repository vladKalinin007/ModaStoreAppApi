import { Injectable } from '@nestjs/common';
import { AttributesModel } from 'domain/models/catalog/product-attributes.model';
import { ColorModel } from 'domain/models/common/color.model';
import { SizeModel } from 'domain/models/common/size.model';
import { PrismaService } from 'infrastructure/database/prisma.service';

@Injectable()
export class ProductAttributesService {
  constructor(private readonly _prismaService: PrismaService) {}

  async getProductAttributes(name: string): Promise<AttributesModel> {
    const materials = await this.#getProductMaterials(name);
    const patterns = await this.#getProductPatterns(name);
    const seasons = await this.#getProductSeasons(name);
    const styles = await this.#getProductStyles(name);

    return {
      materials,
      patterns,
      seasons,
      styles,
    } as AttributesModel;
  }

  async getProductColors(name: string): Promise<ColorModel[]> {
    const productsWithColors = await this._prismaService.product.findMany({
      where: {
        category: {
          name: {
            equals: name,
            mode: 'insensitive',
          },
        },
      },
      include: {
        productColors: {
          include: {
            color: true,
          },
        },
      },
    });

    const colors = productsWithColors.flatMap((product) =>
      product.productColors.map((pc) => pc.color),
    );

    const uniqueColors = colors.reduce((unique, color) => {
      if (!unique.some((u) => u.name === color.name)) {
        unique.push({
          ...color,
          productColors: [],
        });
      }
      return unique;
    }, [] as ColorModel[]);

    return uniqueColors;
  }

  async getProductSizes(name: string): Promise<SizeModel[]> {
    const productsWithSizes = await this._prismaService.product.findMany({
      where: {
        category: {
          name: {
            equals: name,
            mode: 'insensitive',
          },
        },
      },
      include: {
        productSizes: {
          include: {
            size: true,
          },
        },
      },
    });

    const sizes = productsWithSizes.flatMap((product) =>
      product.productSizes.map((ps) => ps.size),
    );

    const uniqueSizes = sizes.reduce((unique, size) => {
      if (!unique.some((u) => u.name === size.name)) {
        unique.push({
          ...size,
          productSizes: [],
        });
      }
      return unique;
    }, [] as SizeModel[]);

    return uniqueSizes;
  }

  async #getProductMaterials(name: string): Promise<string[]> {
    const productsWithMaterials = await this._prismaService.product.findMany({
      where: {
        category: {
          name: {
            equals: name,
            mode: 'insensitive',
          },
        },
      },
      select: {
        material: true,
      },
    });

    const materials = productsWithMaterials.flatMap(
      (product) => product.material,
    );

    const uniqueMaterials = [...new Set(materials)];

    return uniqueMaterials;
  }

  async #getProductPatterns(name: string): Promise<string[]> {
    const productsWithPatterns = await this._prismaService.product.findMany({
      where: {
        category: {
          name: {
            equals: name,
            mode: 'insensitive',
          },
        },
      },
      select: {
        pattern: true,
      },
    });

    const patterns = productsWithPatterns.map((product) => product.pattern);

    const uniquePatterns = [...new Set(patterns)];

    return uniquePatterns;
  }

  async #getProductSeasons(name: string): Promise<string[]> {
    const productsWithSeasons = await this._prismaService.product.findMany({
      where: {
        category: {
          name: {
            equals: name,
            mode: 'insensitive',
          },
        },
      },
      select: {
        season: true,
      },
    });

    const seasons = productsWithSeasons.map((product) => product.season);

    const uniqueSeasons = [...new Set(seasons)];

    return uniqueSeasons;
  }

  async #getProductStyles(name: string): Promise<string[]> {
    const productsWithStyles = await this._prismaService.product.findMany({
      where: {
        category: {
          name: {
            equals: name,
            mode: 'insensitive',
          },
        },
      },
      select: {
        style: true,
      },
    });

    const styles = productsWithStyles.map((product) => product.style);

    const uniqueStyles = [...new Set(styles)];

    return uniqueStyles;
  }
}
