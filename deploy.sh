#!/usr/bin/env sh

# messages
errorMessage="Error: '$@' is/are not a valid parameter(s)."
helpMessage='You need to define the deployement is for the server of "test" or "prod". \n ex: ./deploy.sh test'; 

testUrl='dbah@ri-java11-1-test.univ-lille.fr:.'
prodUrl='dbah@ri-java11-1.univ-lille.fr:.'

warFilePath='./ulillexplore-wrapper/target/ulillexplore-0.0.1-SNAPSHOT.war'

# abort on errors
set -e

runDeployement(){
    npm run $1;

    echo "build js project done"

    rm -rf ./ulillexplore-wrapper/src/main/resources/static/*
    cp -r ./dist/* ./ulillexplore-wrapper/src/main/resources/static/
    cd ulillexplore-wrapper
    ./mvnw clean package
    cd ..
    echo " clean pakage done"
    
    scp $warFilePath $2

    echo "DONE !!!" 
}

if [ $# -eq 1 ]
then 
    if [ $1 = "test" ]
    then
        echo " $1 = test"
        runDeployement $1 $testUrl;
    elif [ $1 = "prod" ]
    then
        echo " $1 = prod"

        runDeployement $1 $prodUrl;
    else 
        echo "Error: '$@' is not a valid parameter\n$helpMessage"
        exit 1;
    fi
else
    if [ $# -gt 0 ]; then
        echo $errorMessage
    fi
    echo $helpMessage
    exit 1;
fi