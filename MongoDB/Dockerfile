FROM mongo

VOLUME /Data:/data/db

EXPOSE 27017

ENV MONGO_INITDB_ROOT_USERNAME=mongoadmin
ENV MONGO_INITDB_ROOT_PASSWORD=password

#docker build -t mongo-db . (el punto simboliza el directorio actual)
#docker run --name=mongo -d --network=host mongo-db
#docker exec -it mongo mongosh -u mongoadmin -p password