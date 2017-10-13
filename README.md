# SVGify

A small web service to create threshold svgs for pictures

| input | output | credits |
| ----- | ------ | ------- |
| ![](./docs/beth-solano-picture.jpg) | ![](./docs/beth-solano-picture.svg) | [image by @bethsolano from Unsplash](https://unsplash.com/photos/VGkn9ENxLXM) |
| ![](./docs/clem-onojeghuo-picture.jpg) | ![](./docs/clem-onojeghuo-picture.svg) | [image by @clemono from Unsplash](https://unsplash.com/photos/WvS0rSIFAJE) |

# Usage:

```bash
curl localhost:3000 -X POST --data-binary "@clem-onojeghuo-picture.jpg"  > clem-onojeghuo-picture.svg
```

# Credits

I just wrote a small service that does whatever [@medatech](https://github.com/medatech) [wrote on his tweet](https://twitter.com/Martin_Adams/status/918481838347292678) did.
