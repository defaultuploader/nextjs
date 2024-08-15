# NextJS image loader by Default Uploader

## Installation

> You can use any package manager

```bash
npm i @defaultuploader/nextjs
```

A client token is required to work, you can get it at this address [https://admin.defaultuploader.com/admin](https://admin.defaultuploader.com/admin)

Documentation for the Default Uploader service is located at this address [https://docs.defaultuploader.com](https://docs.defaultuploader.com/#/)

### Setup your App

In your NextJS application, add the following rule to the config file
```
// next.config.mjs

const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './src/lib/default-uploader.ts',
    },
};

export default nextConfig;
```

Next, export the loader function to the specified path (you can specify any path)

```
// src/lib/default-uploader.ts
import defaultUploader from '@default-uploader/nextjs'

export default defaultUploader(DEFAULT_UPLOADER_CLIENT_TOKEN)
```

That's all. Now you have a powerful API for file transformation, and you are not tied to any vendor =)
