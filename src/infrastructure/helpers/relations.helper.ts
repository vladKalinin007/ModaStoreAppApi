export function createRelations() {
  return {
    productType: true,
    productBrand: true,
    category: true,
    productReviews: true,
    productARelations: {
      select: {
        productB: true,
        productA: true,
      },
    },
    productPictures: {
      include: {
        picture: true,
      },
    },
    productColors: {
      include: {
        color: true,
      },
    },
    productSizes: {
      include: {
        size: true,
      },
    },
  };
}
