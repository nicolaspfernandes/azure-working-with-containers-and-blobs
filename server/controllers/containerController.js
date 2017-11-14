'use strict';

const baseUrl = '/api/v1';
module.exports = (server, services, _) => {

    server.get(baseUrl + '/containers', (request, response) => {

        let service = services.connections.getBlobService();
        services.containers.findAllAvailableContainers(service).then(
            containers => response.status(200).send(containers), 
            findAllAvailableContainersError => response.status(500).send(findAllAvailableContainersError)
        );
    });

    server.post(baseUrl + '/containers', (request, response) => {

        let service = services.connections.getBlobService();
        services.containers.saveContainer(request.body).then(() => {
            response.status(200).send('Container saved successfully.');
        }, saveContainerError => response.status(500).send(saveContainerError));
    });
};