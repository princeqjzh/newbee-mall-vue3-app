#!/bin/bash

export container=mall
export image=mall_img
export os_type=`uname`

# Replace IP
if [ -n "$1" ] ;then
    echo "change backend IP to $1"
    if [[ "${os_type}" == "Darwin" ]]; then
        sed -i "" "s/localhost/$1/g" src/main.js
        sed -i "" "s/localhost/$1/g" src/common/js/utils.js
        sed -i "" "s/localhost/$1/g" src/utils/axios.js
        sed -i "" "s/localhost/$1/g" .env
        sed -i "" "s/localhost/$1/g" vue.config.js
    else
        sed -i "s/localhost/$1/g" src/main.js
        sed -i "s/localhost/$1/g" src/common/js/utils.js
        sed -i "s/localhost/$1/g" src/utils/axios.js
        sed -i "s/localhost/$1/g" .env
        sed -i "s/localhost/$1/g" vue.config.js
    fi
fi

# Replace Port
if [ -n "$2" ] ;then
    echo "change backend Port to $2"
    if [[ "${os_type}" == "Darwin" ]]; then
        sed -i "" "s/28019/$2/g" src/main.js
        sed -i "" "s/28019/$2/g" src/common/js/utils.js
        sed -i "" "s/28019/$2/g" src/utils/axios.js
    else
        sed -i "s/28019/$2/g" src/main.js
        sed -i "s/28019/$2/g" src/common/js/utils.js
        sed -i "s/28019/$2/g" src/utils/axios.js
    fi
fi

docker rm -f $container
docker rmi $image

docker build -t $image .
docker run -d --name $container -p 8080:8080 $image