#!/usr/bin/env bash

if [ $# -eq 1 ]
then
    if [ $@ == "d" ]
    then
        date
    elif [ $@ == "n" ]
    then
        echo {1..20}
    fi
fi
if [ $1 == "a" ] && [ $# -eq 1 ]
then
    echo "Missing ar"
fi
if [ $1 == "a" ] && [ $# -eq 2 ]
then
    echo "$2"
fi

