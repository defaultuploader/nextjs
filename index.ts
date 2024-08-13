/**
 * Setup function for Default Uploader loader
 *
 * @param {string} clientToken
 * @see https://admin.defaultuploader.com/admin Client token is here
 *
 *
 * For the service to work, you must connect the S3 storage to Default Uploader
 * @see https://docs.defaultuploader.com/#/?id=%d0%9a%d0%b0%d0%ba-%d0%bf%d0%be%d0%b4%d0%ba%d0%bb%d1%8e%d1%87%d0%b8%d1%82%d1%8c-%d0%bf%d1%80%d0%be%d0%b2%d0%b0%d0%b9%d0%b4%d0%b5%d1%80%d0%b0-%d0%be%d0%b1%d1%8a%d0%b5%d0%ba%d1%82%d0%bd%d0%be%d0%b3%d0%be-%d1%85%d1%80%d0%b0%d0%bd%d0%b8%d0%bb%d0%b8%d1%89%d0%b0 Default Uploader setup
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
