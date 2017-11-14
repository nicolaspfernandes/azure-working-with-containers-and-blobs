'use strict';

const azure = require('azure-storage');

module.exports = {
    getBlobService: () => {
        return azure.createBlobService('DefaultEndpointsProtocol=https;AccountName=itsnickblobs;AccountKey=9jO7hiCzdQ1CrVg0zWx3o+QBD16uVNz1GsB4h0BvtySb4dUMJvMmXmWeZ6x5wdfLWHJU1oDA8FC6Kq0i6/AHRw==;BlobEndpoint=https://itsnickblobs.blob.core.windows.net/;');
    }
};

