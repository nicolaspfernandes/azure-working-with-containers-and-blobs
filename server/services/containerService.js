'use strict';

const azure = require('azure-storage');

module.exports = {
    
    saveContainer: (service, container) => {

        return new Promise((response, reject) => {

            service.createContainerIfNotExists(container.name, error => {
                if (error) reject(error);
                else {
                    
                    var options = { publicAccessLevel: azure.BlobUtilities.BlobContainerPublicAccessType.BLOB };
                    service.setContainerAcl(container.name, null, options, error => {
                        if (error) reject(error);
                        else resolve();
                    });
                }
            });
        });
    },

    findAllAvailableContainers: service => {
        
        return new Promise((resolve, reject) => {
            service.listContainersSegmented(null, (error, results) => {
                if (error) reject(error);
                else resolve(results.entries);
            });
        });
    }
}