'use strict';

module.exports = {
    
    findBlobsFromContainer: (service, containerName) => {
        return new Promise((resolve, reject) => {

            service.listBlobsSegmented(containerName, null, (error, blobs, result) => {
                if (error) reject(error);
                else resolve(blobs.entries);
            });
        });
    }
}