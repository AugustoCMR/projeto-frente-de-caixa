const aws = require('aws-sdk')

const endpoint = new aws.Endpoint(process.env.BUCKET_ENDPOINT)

const s3 = new aws.S3({
    endpoint,
    credentials: {
        accessKeyId: process.env.BUCKET_ID,
        secretAccessKey: process.env.BUCKET_KEY
    }
})

const uploadDeImagem = async (path, buffer, mimetype) => {
    const imagem = await s3.upload({
        Bucket: process.env.BUCKET_NAME,
        Key: path,
        Body: buffer,
        ContentType: mimetype
    }).promise()

    return {
        path: imagem.Key,
        url: `https://${process.env.BUCKET_NAME}.${process.env.BUCKET_ENDPOINT}/${imagem.Key}`
    }
};

const buscarImagem = async (id) => {
    const imagem = await s3.listObjects({
        Bucket: process.env.BUCKET_NAME,
        Prefix: `produtos/${id}`
    }).promise();

    return imagem.Contents;
}

const deleteImagem = async (path) => {
    await s3.deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: path
    }).promise()
}

module.exports = { uploadDeImagem, deleteImagem, buscarImagem }