#!/bin/bash

LINUX_PORT=0
LINUX_SERVER=0
if [ $LINUX_PORT -lt 1 ];then
    LINUX_PORT=1337
fi

if [ $LINUX_SERVER -eq 0 ];then
    LINUX_SERVER="localhost"
fi

#
# A template for creating command line scripts taking options, commands
# and arguments.
#
# Exit values:
#  0 on success
#  1 on failure
#



# Name of the script
SCRIPT=$( basename "$0" )

# Current version
VERSION="1.0.0"



#
# Message to display for usage and help.
#
function usage
{
    local txt=(
"Utility $SCRIPT for doing stuff."
"Usage: $SCRIPT [options] <command> [arguments]"
""
"Command:"
"  reverse [some text]          Reverse the text"
"  factors [any number] [any number] ...  Display primes of any given number('s)"
"
"""
"Options:"
"  --help, -h     Print help."
"  --version, -h  Print version."
"  reverse, -r  Reverse text."
"  factors, -f  Factors of a number."
    )
    
    printf "%s\n" "${txt[@]}"
}



#
# Message to display when bad usage.
#
function badUsage
{
    local message="$1"
    local txt=(
"For an overview of the command, execute:"
"$SCRIPT --help"
    )
    
    [[ $message ]] && printf "$message\n"

    printf "%s\n" "${txt[@]}"
}



#
# Message to display for version.
#
function version
{
    local txt=(
"$SCRIPT version $VERSION"
    )

    printf "%s\n" "${txt[@]}"
}



#
# Reverse. Function that display text in reverse.
#

function reverse
{
    local txt=(
""
    )
    echo "$*"|rev
}



#
# Reverse. Function that display text in reverse.
#

function factors
{
    local txt=(
""
    )
    kykla=$#
    kykla=$((kykla+1))

    sweet=1
    for z in "$@";do
        if [ $sweet -gt 1 ] && [ $sweet -lt $kykla ];then
            athj=""
            num=$z
            for (( i=2; i<=$z; i++ ));do
                while [ $((num%$i)) == 0 ];do
                    athj=$athj" $i"
                    num=$((num/$i))
                done
            done
            echo $z":"$athj
        fi
        sweet=$((sweet+1))
    done
    
}

function printAll
{
    curl http://$LINUX_SERVER:$LINUX_PORT/;
    curl http://$LINUX_SERVER:$LINUX_PORT/index.html;
    curl http://$LINUX_SERVER:$LINUX_PORT/status;
    sumAlln "$@";
    filterAll "$@";
    curl -I http://$LINUX_SERVER:$LINUX_PORT/fel
}

function sumAlln
{
    kykla=$#
    kykla=$((kykla+1))
    sweet=1
    passArg="?"
    ands="&"
    for z in "$@";do
        if [ $sweet -gt 1 ] && [ $sweet -lt $kykla ];then
            if [ $sweet -eq $# ];then
                passArg=$passArg$z
            else
                passArg=$passArg$z$ands
            fi
        fi
        sweet=$((sweet+1))
    done
    curl http://$LINUX_SERVER:$LINUX_PORT/"sum"$passArg;
}

function filterAll
{
    kykla=$#
    kykla=$((kykla+1))
    sweet=1
    passArg="?"
    ands="&"
    for z in "$@";do
        if [ $sweet -gt 1 ] && [ $sweet -lt $kykla ];then
            if [ $sweet -eq $# ];then
                passArg=$passArg$z
            else
                passArg=$passArg$z$ands
            fi
        fi
        sweet=$((sweet+1))
    done
    curl http://$LINUX_SERVER:$LINUX_PORT/"filter"$passArg;
}

function selectMap
{
    gameidg=`cat id.txt`
    if [ $2 -eq 1 ];then
        echo "You selected: maze-of-doom.json";
        curl http://$LINUX_SERVER:$LINUX_PORT/$gameidg/map/maze-of-doom.json &> /dev/null
    fi

    if [ $2 -eq 2 ];then
        echo "You selected: small-maze.json";
        curl http://$LINUX_SERVER:$LINUX_PORT/$gameidg/map/small-maze.json &>/dev/null
    fi
}

mazedrift=0

function goTo
{
    gameidgty=`cat id.txt`
    if [ $2 == "south" ];then
        mazedrift=$((mazedrift+1))
        curl http://$LINUX_SERVER:$LINUX_PORT/$gameidgty/maze/1/south?type=csv > room.txt
        roomNrp9i=`tail room.txt | cut -b 1 | tail -c 2`
        descrprty=`tail room.txt | cut -b 1-8 | tail -c 7`
    else
        roomNrp9i=`tail room.txt | cut -b 1 | tail -c 2`
        descrprty=`tail room.txt | cut -b 1-7 | tail -c 6`
        echo "You choose wrong direction! Try to go to the south!"
    fi
    echo "You are in room: $roomNrp9i"
    echo "Description: $descrprty"
    echo "You can go to: south $mazedrift"
}


#
# Process options
#
while (( $# ))
do
    case "$1" in

        "init")
            curl http://$LINUX_SERVER:$LINUX_PORT/?type=csv &> gameid.txt
            tail -c 6 gameid.txt > id.txt
            gameid=`cat id.txt`
            echo "New game is created!"
            echo "Game id: $gameid"
            exit 0
        ;;

        "maps")
            curl http://$LINUX_SERVER:$LINUX_PORT/map?type=csv &>/dev/null
            echo "1. maze-of-doom.json"
            echo "2. small-maze.json"
            exit 0
        ;;

        "select")
            selectMap "$@"
            exit 0
        ;;

        "enter")
            gameidz=`cat id.txt`
            curl http://$LINUX_SERVER:$LINUX_PORT/$gameidz/maze?type=csv > room.txt
            roomNr=`tail room.txt | cut -b 1 | tail -c 2`
            descrp=`tail room.txt | cut -b 1-7 | tail -c 6`
            echo "You are in room: $roomNr"
            echo "Description: $descrp"
            exit 0
        ;;

        "info")
            gameidzr=`cat id.txt`
            curl http://$LINUX_SERVER:$LINUX_PORT/$gameidzr/maze?type=csv
            exit 0
        ;;

        "go")
            goTo "$@"
            exit 0
        ;;

        "all")
            printAll "$@"
            exit 0
        ;;

        "404")
            curl -I http://$LINUX_SERVER:$LINUX_PORT/fel
            exit 0
        ;;
        
        *)
            badUsage "Option/command not recognized."
            exit 1
        ;;
        
    esac
done

badUsage
exit 1
