/**
 * Setup function for Default Uploader loader
 *
 * @param {string} clientToken
 * @see https://admin.defaultuploader.com/admin Client token is here
 *
 *
 * For the service to work, you must connect the S3 storage to Default Uploader
 * @see https://docs.defaultuploader.com/en/start/s3-storage Default Uploader setup
 */
export default function (clientToken: string) {
    return ({ src, width, quality }: { src: string, width: number | undefined, quality?: number | undefined }) => {
        if (!clientToken) return 'https://api.defaultuploader.com'

        if (src[0] === "/") src = src.slice(1)
        const params = []
        if (width) params.push(`w=${width}`)
        if (quality) params.push(`q=${quality}`)

        const paramsString = params.join("&")
        let urlEndpoint = `https://api.defaultuploader.com/v1/image/upload/${clientToken}`

        if (urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1)
        return `${urlEndpoint}/${src}?${paramsString}`
    }
}
