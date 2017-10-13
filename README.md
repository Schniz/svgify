# SVGify

A small web service to create threshold svgs for pictures.
Why would you use it? maybe you can upload images in your CMS, and you want great UX while loading huge images.

# Demos

| input | output | original size(gz) | svg size(gz) | credits |
| ----- | ------ | ----------------- | ------------ | ------- |
| ![](./docs/beth-solano-picture.jpg) | ![](./docs/beth-solano-picture.svg) | 5.96kb | 1.45kb | [image by @bethsolano from Unsplash](https://unsplash.com/photos/VGkn9ENxLXM) |
| ![](./docs/clem-onojeghuo-picture.jpg) | ![](./docs/clem-onojeghuo-picture.svg) | 7.14kb | 4.24kb | [image by @clemono from Unsplash](https://unsplash.com/photos/WvS0rSIFAJE) |
| ![](./docs/joey-pilgrim-picture.jpg) | ![](./docs/joey-pilgrim-picture.svg) | 6.07kb | 1.17kb | [image by @joeypilgrim from Unsplash](https://unsplash.com/photos/5BHDL8JaxZc) |

The service also shrinks the images, and since SVGs are vector graphics, you can scale it up to the original size yourself. So the difference is _much_ higher.

# Usage:

```bash
curl localhost:3000 -X POST --data-binary "@clem-onojeghuo-picture.jpg"  > clem-onojeghuo-picture.svg
```

# Credits

I just wrote a small service that does whatever [@medatech](https://github.com/medatech) [wrote on his tweet](https://twitter.com/Martin_Adams/status/918481838347292678) did.
