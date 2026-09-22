export async function preloadImages(cldImages) {
  return Promise.all(
    cldImages.map((cldImage) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = cldImage.toURL();
        img.onload = resolve;
      });
    }),
  );
}
