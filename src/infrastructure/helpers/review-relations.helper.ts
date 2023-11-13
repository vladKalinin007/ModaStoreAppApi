export function CreateReviewRelations() {
  return {
    product: {
      select: {
        name: true,
        productPictures: {
          take: 1,
          select: {
            picture: true,
          },
        },
      },
    },
    user: {
      select: {
        displayName: true,
      },
    },
  };
}
