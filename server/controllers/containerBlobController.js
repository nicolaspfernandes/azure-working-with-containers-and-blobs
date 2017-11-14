'use strict';

const baseUrl = '/api/v1';
module.exports = (server, services, _) => {

    server.get(baseUrl + '/containers/:containerName/blobs', (request, response) => {

        let service = services.connections.getBlobService();
        services.blobs.findBlobsFromContainer(service, request.params.containerName).then(blobs => {
            response.status(200).send(blobs);
        }, findBlobsFromContainerError => response.status(500).send(findBlobsFromContainerError));
    });
};